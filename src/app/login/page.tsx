'use client';

import Link from 'next/link';
import { signInAction } from '@/lib/actions/auth';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function LoginContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');
  const message = searchParams.get('message');

  return (
    <main className="flex-grow flex items-center justify-center px-6 py-24 relative overflow-hidden bg-white z-[2]">
      {/* Subtle Background Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary-fixed-dim/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-secondary-container/10 rounded-full blur-[100px]"></div>
      
      {/* Login Card */}
      <div className="w-full max-w-md bg-surface-container-lowest rounded-xl shadow-none p-8 md:p-12 relative z-10">
        {/* Logo/Header Area */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-container/10 rounded-xl mb-6">
            <span className="material-symbols-outlined text-primary text-3xl">account_balance</span>
          </div>
          <h1 className="text-3xl font-extrabold font-headline tracking-tight text-on-surface mb-2">Welcome Back</h1>
          <p className="text-sm text-on-surface-variant">Continue your journey of scholarly excellence.</p>
        </div>
        
        {/* Alerts */}
        {error && (
          <div className="mb-6 p-4 bg-error-container text-on-error-container rounded-lg text-sm font-medium border border-error/20 flex items-center gap-3">
            <span className="material-symbols-outlined text-lg">error</span>
            {error}
          </div>
        )}
        {message && (
          <div className="mb-6 p-4 bg-secondary-container text-on-secondary-container rounded-lg text-sm font-medium border border-secondary/20 flex items-center gap-3">
            <span className="material-symbols-outlined text-lg">info</span>
            {message}
          </div>
        )}

        {/* Form */}
        <form action={signInAction} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold font-headline text-on-surface mb-2" htmlFor="email">Email Address</label>
            <input 
              className="w-full px-4 py-3 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary-container/40 focus:bg-surface-container-lowest transition-all duration-300 outline-none text-on-surface placeholder:text-outline-variant" 
              id="email" 
              name="email" 
              placeholder="name@university.edu" 
              type="email"
              required
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-semibold font-headline text-on-surface" htmlFor="password">Password</label>
              <Link className="text-xs font-bold text-primary hover:underline transition-all" href="/password-reset">Forgot password?</Link>
            </div>
            <div className="relative">
              <input 
                className="w-full px-4 py-3 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary-container/40 focus:bg-surface-container-lowest transition-all duration-300 outline-none text-on-surface placeholder:text-outline-variant" 
                id="password" 
                name="password" 
                placeholder="••••••••" 
                type="password"
                required
              />
            </div>
          </div>
          <button className="w-full py-4 bg-gradient-to-b from-[#0052CC] to-[#003D9B] text-white font-bold rounded-lg shadow-lg shadow-primary/20 hover:scale-[0.98] transition-transform active:scale-95" type="submit">
            Log In
          </button>
        </form>
        
        {/* Separator */}
        <div className="my-10 flex items-center gap-4">
          <div className="flex-grow h-[1px] bg-outline-variant opacity-20"></div>
          <span className="text-xs font-bold text-outline uppercase tracking-widest">or</span>
          <div className="flex-grow h-[1px] bg-outline-variant opacity-20"></div>
        </div>
        
        {/* Sign Up Options */}
        <div className="grid grid-cols-2 gap-4">
          <Link href="/register/student" className="flex flex-col items-center justify-center p-4 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors group">
            <span className="material-symbols-outlined text-primary mb-2">school</span>
            <span className="text-xs font-bold font-headline text-on-surface">Join as Student</span>
          </Link>
          <Link href="/register/sponsor" className="flex flex-col items-center justify-center p-4 rounded-lg bg-surface-container-low hover:bg-surface-container-high transition-colors group">
            <span className="material-symbols-outlined text-secondary mb-2">volunteer_activism</span>
            <span className="text-xs font-bold font-headline text-on-surface">Join as Sponsor</span>
          </Link>
        </div>
      </div>
      
      {/* Decorative Image/Card */}
      <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-80">
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-xl transform rotate-3 border border-outline-variant/10">
          <img 
            className="w-full h-48 object-cover rounded-lg mb-4" 
            alt="Portrait of a young smiling Nigerian university student" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7M8nZNvWU6XT3bztPiunpC_qTk-iZoEd3dltz2qfXCtUjJFV8XcA_qLYUq2K3-9Tqq0LNKM7fMpIQ54ZVPM9lgGYh9jlsMl5zDAC7MIICXHw6zKEfpXSbqgD8Yb3DU7oNZP65s5wR0DnsHKmSNJGKCLO4uqTxLvzGdU30eSFZNc9uYpl0qGTPQp7TDf0ReYPP132WSco-vW7sqdXxj-5Ig6w_Z1K44O26mFZ_OmWchAzw51IVIcTMl01rxUXI0bEG85rya4zw8kPC"
          />
          <p className="font-headline font-bold text-primary italic text-sm">&quot;This platform changed my trajectory from uncertainty to academic excellence.&quot;</p>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center">
              <span className="material-symbols-outlined text-sm text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
            </div>
            <div>
              <p className="text-xs font-bold">Chidi O.</p>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Engineering Scholar</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <main className="flex-grow flex items-center justify-center bg-white px-6 py-24 animate-pulse">
        <div className="w-full max-w-md bg-surface-container-low h-[500px] rounded-xl"></div>
      </main>
    }>
      <LoginContent />
    </Suspense>
  );
}
