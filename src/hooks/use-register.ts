import { useMutation } from '@tanstack/react-query';
import { registerMember } from '../services/registration';
import { ApiError } from '../lib/api-client';
import type { LeadFormData } from '../components/common/LeadForm';

export function useRegister() {
  return useMutation<{ message: string }, ApiError, LeadFormData>({
    mutationFn: registerMember,
  });
}
