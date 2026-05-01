'use server';

import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

/**
 * Handles user sign in
 */
export async function signInAction(formData: FormData) {
  const email = (formData.get('email') as string)?.trim();
  const password = formData.get('password') as string;

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    return redirect(`/login?error=${encodeURIComponent(error.message)}`);
  }

  return redirect('/dashboard');
}

/**
 * Handles user sign up with role assignment
 */
export async function signUpAction(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const fullName = formData.get('full_name') as string;
  const role = formData.get('role') as string; // 'student' or 'sponsor'
  const supabase = await createClient();

  if (!role || !['student', 'sponsor'].includes(role)) {
    return redirect(`/register?error=Invalid selection. Please choose a role.`);
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        role: role,
      },
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  });

  if (error) {
    const errorPath = role === 'student' ? '/register/student' : '/register/sponsor';
    return redirect(`${errorPath}?error=${encodeURIComponent(error.message)}`);
  }

  return redirect('/login?message=Account created! Please check your email to verify and log in.');
}

/**
 * Handles sign out
 */
export async function signOutAction() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect('/');
}
