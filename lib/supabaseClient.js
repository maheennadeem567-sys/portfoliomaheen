import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

if (!isSupabaseConfigured) {
  console.warn('VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY is not set. Supabase client is not configured.')
}

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : {
      from: () => ({
        insert: async () => ({ error: { message: 'Supabase is not configured.' } }),
      }),
    }

export default supabase
