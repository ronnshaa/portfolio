import { cookies } from 'next/headers';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

export function getServerSupabaseClient() {
  if (!supabaseUrl || !supabaseServiceRoleKey) {
    throw new Error('Supabase server client requires NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY');
  }

  const cookieStore = cookies();
  const authToken = cookieStore.get('sb:token')?.value;

  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    global: {
      headers: authToken ? { Authorization: `Bearer ${authToken}` } : undefined
    }
  });
}
