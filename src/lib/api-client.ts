function normalizeBaseUrl(value: string): string {
  // Ensure no trailing slash so `${base}${path}` works as expected.
  return value.trim().replace(/\/+$/, '');
}

function resolveApiBaseUrl(): string | null {
  const fromEnv = import.meta.env.VITE_API_BASE_URL;
  if (typeof fromEnv === 'string' && fromEnv.trim()) {
    return normalizeBaseUrl(fromEnv);
  }

  // Safety net: if staging/prod was built without env injection, default to HUB API.
  // This prevents requests like `/undefined/register` on static hosting.
  if (typeof window !== 'undefined') {
    const host = window.location.hostname;
    const isAmuhiDomain = host === 'amuhi.id' || host.endsWith('.amuhi.id');
    if (isAmuhiDomain) return 'https://hub.amuhi.id/api/v1';
  }

  // Local fallback for dev if someone forgets `.env`.
  if (import.meta.env.DEV) return 'http://localhost:8000/api/v1';

  return null;
}

const BASE_URL = resolveApiBaseUrl();

export function resolveBackendOrigin(): string | null {
  if (!BASE_URL) return null;

  // If the API base URL is absolute, reuse its origin for browser navigations like `/login`.
  // If it's relative (e.g. `/api/v1`), fall back to the current page origin.
  try {
    return new URL(BASE_URL).origin;
  } catch {
    if (typeof window !== 'undefined') return window.location.origin;
    return null;
  }
}

export class ApiError extends Error {
  status: number;
  errors?: Record<string, string[]>;

  constructor(status: number, message: string, errors?: Record<string, string[]>) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.errors = errors;
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new ApiError(response.status, data.message ?? 'Something went wrong', data.errors);
  }

  return data as T;
}

export const apiClient = {
  async get<T>(path: string): Promise<T> {
    if (!BASE_URL) {
      throw new ApiError(
        0,
        'Missing API base URL. Set VITE_API_BASE_URL at build time (Vite env vars are baked into the build).'
      );
    }

    const response = await fetch(`${BASE_URL}${path}`, {
      headers: { 'Content-Type': 'application/json' },
    });
    return handleResponse<T>(response);
  },

  async post<T>(path: string, body: unknown): Promise<T> {
    if (!BASE_URL) {
      throw new ApiError(
        0,
        'Missing API base URL. Set VITE_API_BASE_URL at build time (Vite env vars are baked into the build).'
      );
    }

    const response = await fetch(`${BASE_URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    return handleResponse<T>(response);
  },
};
