import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()

  const url =
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    'https://fdxmssjbjqvxggdyuhdp.supabase.co'
  const anonKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkeG1zc2pianF2eGdnZHl1aGRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg3MzE1MjYsImV4cCI6MjA3NDMwNzUyNn0.F_14PKT6qQHiC1FUmUsGFgjYTvxLFw1QEjbBpNk2nuU'

  return createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          )
        } catch {
          // Called from a Server Component without cookie write access; ignore
        }
      },
    },
  })
}
