import { createClient, type SupabaseClient } from '@supabase/supabase-js';

let browserClient: SupabaseClient | null = null;

function getSupabasePublicConfig() {
  return {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL?.trim(),
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim(),
  };
}

export function hasSupabaseBrowserConfig() {
  const { url, anonKey } = getSupabasePublicConfig();
  return Boolean(url && anonKey);
}

export function getSupabaseBrowserClient() {
  if (browserClient) {
    return browserClient;
  }

  const { url, anonKey } = getSupabasePublicConfig();

  if (!url || !anonKey) {
    throw new Error('missing_supabase_public_env');
  }

  browserClient = createClient(url, anonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });

  return browserClient;
}
