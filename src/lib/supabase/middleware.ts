import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // IMPORTANT: Avoid writing any logic between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  const isAuthRoute = request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/register')
  const isDashboardRoute = 
    request.nextUrl.pathname === '/dashboard' ||
    request.nextUrl.pathname.startsWith('/dashboard/') || 
    request.nextUrl.pathname.startsWith('/admin')

  // Performance Optimization 1: Skip middleware logic for completely public routes
  // (Home page and About page don't need session handling at all)
  const isPublicPage = request.nextUrl.pathname === '/' || request.nextUrl.pathname === '/about'
  if (isPublicPage) {
    return supabaseResponse
  }

  // Performance Optimization 2: Only check Auth if we are on a protected route 
  // OR if the user seems to have an active session (has cookies).
  // This prevents anonymous load tests from hitting the Auth server on /login and /register.
  const hasAuthCookies = request.cookies.getAll().some(c => c.name.includes('sb-'))
  
  // Performance Optimization 2: Redirect early if on protected route but no cookies
  if (isDashboardRoute && !hasAuthCookies) {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  // Performance Optimization 3: Skip auth check for other routes if no cookies
  if (!isDashboardRoute && !hasAuthCookies) {
    return supabaseResponse
  }

  const {
    data: { user },
  } = await supabase.auth.getUser()

  // 1. Not logged in and trying to access a protected route
  if (!user && isDashboardRoute) {
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  // 2. Logged in and trying to access an auth route
  if (user && isAuthRoute) {
    const url = request.nextUrl.clone()
    url.pathname = '/dashboard'
    return NextResponse.redirect(url)
  }

  // 3. Role-Based Access Control (RBAC)
  if (user && isDashboardRoute) {
    // We only fetch the profile if the user is attempting to access a dashboard route
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    const role = profile?.role
    const path = request.nextUrl.pathname

    // Student trying to access sponsor/admin routes
    if (role === 'student' && (path.startsWith('/dashboard/sponsor') || path.startsWith('/admin'))) {
      const url = request.nextUrl.clone()
      url.pathname = '/dashboard/student'
      return NextResponse.redirect(url)
    }

    // Sponsor trying to access student/admin routes
    if (role === 'sponsor' && (path.startsWith('/dashboard/student') || path.startsWith('/admin'))) {
      const url = request.nextUrl.clone()
      url.pathname = '/dashboard/sponsor'
      return NextResponse.redirect(url)
    }

    // Admin redirection (prevent loops if needed)
    if (role === 'admin' && path === '/dashboard') {
      const url = request.nextUrl.clone()
      url.pathname = '/admin'
      return NextResponse.redirect(url)
    }
  }

  return supabaseResponse

}
