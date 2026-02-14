# API Implementation Guide

This project uses **TanStack React Query** + a centralized **API client** (`src/lib/api-client.ts`) for all backend communication.

## Architecture Overview

```
src/
├── lib/
│   └── api-client.ts          # Shared fetch wrapper (don't edit unless adding auth headers etc.)
├── services/
│   └── registration.ts        # One file per domain/resource
│   └── news.ts                # (example)
├── hooks/
│   └── use-register.ts        # One hook per operation
│   └── use-news.ts            # (example)
```

## Step-by-step: Adding a New API Endpoint

### 1. Create the service file

Create a file in `src/services/` for your resource.

**GET example** — `src/services/news.ts`:

```ts
import { apiClient } from '../lib/api-client';

// 1. Define response types
type NewsArticle = {
  id: number;
  title: string;
  slug: string;
  content: string;
  published_at: string;
};

type NewsListResponse = {
  data: NewsArticle[];
};

// 2. Export fetch functions
export function getNewsList(): Promise<NewsListResponse> {
  return apiClient.get<NewsListResponse>('/news');
}

export function getNewsBySlug(slug: string): Promise<NewsArticle> {
  return apiClient.get<NewsArticle>(`/news/${slug}`);
}
```

**POST example** — `src/services/contact.ts`:

```ts
import { apiClient } from '../lib/api-client';

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

type ContactResponse = {
  message: string;
};

export function sendContactForm(payload: ContactPayload): Promise<ContactResponse> {
  return apiClient.post<ContactResponse>('/contact', payload);
}
```

### 2. Create the hook

Create a file in `src/hooks/` for your hook.

**For GET requests** — use `useQuery`:

```ts
// src/hooks/use-news.ts
import { useQuery } from '@tanstack/react-query';
import { getNewsList, getNewsBySlug } from '../services/news';
import type { ApiError } from '../lib/api-client';

export function useNewsList() {
  return useQuery<NewsListResponse, ApiError>({
    queryKey: ['news'],
    queryFn: getNewsList,
  });
}

export function useNewsBySlug(slug: string) {
  return useQuery<NewsArticle, ApiError>({
    queryKey: ['news', slug],
    queryFn: () => getNewsBySlug(slug),
    enabled: !!slug, // only fetch when slug is available
  });
}
```

**For POST/PUT/DELETE requests** — use `useMutation`:

```ts
// src/hooks/use-contact.ts
import { useMutation } from '@tanstack/react-query';
import { sendContactForm } from '../services/contact';
import type { ApiError } from '../lib/api-client';

export function useContact() {
  return useMutation<{ message: string }, ApiError, ContactPayload>({
    mutationFn: sendContactForm,
  });
}
```

### 3. Use the hook in your component

**Reading data (GET)**:

```tsx
import { useNewsList } from '../../hooks/use-news';

export default function NewsPage() {
  const { data, isLoading, error } = useNewsList();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.data.map((article) => (
        <li key={article.id}>{article.title}</li>
      ))}
    </ul>
  );
}
```

**Submitting data (POST)**:

```tsx
import { useContact } from '../../hooks/use-contact';

export default function ContactForm() {
  const { mutate, isPending, isSuccess, error } = useContact();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutate({ name: 'John', email: 'john@example.com', message: 'Hello' });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields */}
      {error && <p>{error.message}</p>}
      {isSuccess && <p>Sent successfully!</p>}
      <button disabled={isPending}>
        {isPending ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
}
```

## Error Handling

The `ApiError` class (from `src/lib/api-client.ts`) provides:

| Property | Type | Description |
|----------|------|-------------|
| `message` | `string` | Error message from the server |
| `status` | `number` | HTTP status code (422, 429, 503, etc.) |
| `errors` | `Record<string, string[]> \| undefined` | Field-level validation errors (422 only) |

**Handling validation errors (422)**:

```tsx
const { error } = useSomeMutation();

// Field-level errors
{error?.errors?.email && <span>{error.errors.email[0]}</span>}

// General error (429, 503, etc.)
{error && !error.errors && <p>{error.message}</p>}
```

## Environment Variables

The API base URL is configured via Vite env vars. Important: values are injected at **build time** (they are baked into the compiled JS). Updating `.env` on the server after deploying static files will not change the API URL.

Configure it via `.env` (local/dev):

```
VITE_API_BASE_URL=http://localhost:8000/api/v1
```

For staging builds (when running `vite build --mode staging`), create `.env.staging`:

```
VITE_API_BASE_URL=https://hub.amuhi.id/api/v1
```

For production, create `.env.production`:

```
VITE_API_BASE_URL=https://api.yourdomain.com/api/v1
```

## Quick Reference

| I want to... | Use |
|--------------|-----|
| Fetch data (GET) | `useQuery` + `apiClient.get` |
| Submit data (POST) | `useMutation` + `apiClient.post` |
| Show loading state | `isLoading` (query) / `isPending` (mutation) |
| Show error | `error.message` or `error.errors` |
| Show success | `isSuccess` |
| Reset mutation state | `reset()` from `useMutation` |
| Refetch after mutation | Add `onSuccess` callback with `queryClient.invalidateQueries` |

## Existing Implementations

- **Registration**: `src/services/registration.ts` → `src/hooks/use-register.ts` → used in `src/pages/DetailProgram/Registration/index.tsx`
