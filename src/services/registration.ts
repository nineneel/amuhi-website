import { apiClient } from '../lib/api-client';
import type { LeadFormData } from '../components/common/LeadForm';

type RegisterPayload = {
  member_type: 'ppui_pihk' | 'pt' | 'personal';
  name: string;
  phone: string;
  email: string;
  company_name?: string | null;
  terms: boolean;
};

type RegisterResponse = {
  message: string;
};

const MEMBER_TYPE_MAP: Record<LeadFormData['category'], RegisterPayload['member_type']> = {
  ppiu_pihk: 'ppui_pihk',
  pt: 'pt',
  personal: 'personal',
};

function toRegisterPayload(data: LeadFormData): RegisterPayload {
  return {
    member_type: MEMBER_TYPE_MAP[data.category],
    name: data.fullName,
    phone: data.whatsappNumber,
    email: data.email,
    company_name: data.companyName || null,
    terms: true,
  };
}

export function registerMember(data: LeadFormData): Promise<RegisterResponse> {
  return apiClient.post<RegisterResponse>('/register', toRegisterPayload(data));
}
