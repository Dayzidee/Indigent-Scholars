import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies()

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error('MISSING SUPABASE CREDENTIALS in process.env')
  } else {
    console.log('CLIENT CREATION ATTEMPT:', supabaseUrl)
  }

  return createServerClient(
    supabaseUrl!,
    supabaseKey!,
    {
      global: {
        fetch: async (url, options) => {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s timeout
          
          try {
            console.log(`[Supabase Fetch] Attempting: ${url}`);
            const start = Date.now();
            const response = await fetch(url, {
              ...options,
              signal: controller.signal,
            });
            console.log(`[Supabase Fetch] Success: ${url} (${Date.now() - start}ms)`);
            return response;
          } catch (error: any) {
            console.error(`[Supabase Fetch] FAILED: ${url}`, error.message);
            throw error;
          } finally {
            clearTimeout(timeoutId);
          }
        },
      },
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch (error) {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: '', ...options })
          } catch (error) {
            // The `delete` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
}
