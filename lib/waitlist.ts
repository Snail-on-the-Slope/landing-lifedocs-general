import { getSupabaseBrowserClient } from '@/lib/supabase';
import type { WaitlistFunctionResponse, WaitlistSubmitPayload } from '@/lib/types';

const WAITLIST_FUNCTION_NAME = 'waitlist-signup';

export async function submitWaitlistSignup(payload: WaitlistSubmitPayload) {
  const supabase = getSupabaseBrowserClient();
  const { data, error } = await supabase.functions.invoke(WAITLIST_FUNCTION_NAME, {
    body: payload,
  });

  if (error) {
    throw new Error(error.message || 'waitlist_submit_failed');
  }

  const response = data as WaitlistFunctionResponse | null;

  if (!response?.ok) {
    throw new Error(response?.message || response?.error || 'waitlist_submit_failed');
  }

  return response;
}
