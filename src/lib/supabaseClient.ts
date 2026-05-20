import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const hasSupabaseEnv = Boolean(supabaseUrl && supabaseAnonKey)

if (!supabaseUrl || !supabaseAnonKey) {
  // Helpful warning when env vars are not present locally or in the environment
  // This should be visible in the browser console during development
  // Ensure you add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local
  // Example values are documented in the project README or Supabase dashboard.
  // Avoid returning null so the UI can attempt to send and surface server errors.
  // createClient with empty strings will still create a client instance, but
  // requests will fail which gives useful error messages in the console.
  // This prevents hiding the form behind a silent null check.
  // eslint-disable-next-line no-console
  console.warn('Supabase env vars are missing: NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
