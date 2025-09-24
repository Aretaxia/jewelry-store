import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  // In dev, ensure values exist even if env hot-reload lags
  const url =
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    'https://fdxmssjbjqvxggdyuhdp.supabase.co'
  const anonKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkeG1zc2pianF2eGdnZHl1aGRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3MzE1MjYsImV4cCI6MjA3NDMwNzUyNn0.F_14PKT6qQHiC1FUmUsGFgjYTvxLFw1QEjbBpNk2nuU'

  if (!url || !anonKey) {
    if (typeof window !== 'undefined') {
      console.error('@supabase/ssr: Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY')
    }
  }

  return createBrowserClient(url, anonKey)
}
