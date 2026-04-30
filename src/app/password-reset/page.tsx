'use client';

import Link from 'next/link';

export default function PasswordResetPage() {
  return (
    <main className="flex-grow flex items-center justify-center px-4 pt-24 pb-12 relative overflow-hidden">
      {/* Asymmetric Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[60%] bg-primary-container opacity-[0.03] rounded-full blur-3xl"></div>
        <div className="absolute top-[40%] -left-[10%] w-[30%] h-[50%] bg-secondary opacity-[0.05] rounded-full blur-3xl"></div>
      </div>
      
      <div className="w-full max-w-md z-10">
        {/* Forgot Password Card */}
        <div className="bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-none transition-transform duration-500 hover:scale-[1.01]">
          <div className="mb-10 text-center md:text-left">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-surface-container-low rounded-xl mb-6">
              <span className="material-symbols-outlined text-primary-fixed-dim text-3xl">lock_reset</span>
            </div>
            <h1 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight text-on-surface mb-3">Forgot password?</h1>
            <p className="text-on-surface-variant leading-relaxed font-body">No worries, we&apos;ll send you reset instructions. Please enter the email associated with your scholarship account.</p>
          </div>
          
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-on-surface ml-1" htmlFor="email">Email Address</label>
              <div className="relative">
                <input 
                  className="w-full px-5 py-4 bg-surface-container-low border-none rounded-xl focus:ring-2 focus:ring-primary-container focus:ring-opacity-40 transition-all duration-300 placeholder:text-outline-variant text-on-surface outline-none" 
                  id="email" 
                  name="email" 
                  placeholder="e.g. scholar@unilag.edu.ng" 
                  required 
                  type="email"
                />
              </div>
            </div>
            <button className="w-full py-4 px-6 bg-gradient-to-b from-[#0052CC] to-[#1d4ed8] text-white font-headline font-bold rounded-xl shadow-lg shadow-primary/20 hover:opacity-90 active:scale-95 transition-all duration-300" type="submit">
              Send Reset Link
            </button>
          </form>
          
          <div className="mt-8 pt-8 border-t border-surface-container-high/50 flex justify-center">
            <Link className="inline-flex items-center gap-2 text-primary-fixed-dim font-semibold hover:gap-3 transition-all duration-300 group" href="/login">
              <span className="material-symbols-outlined text-sm font-bold group-hover:-translate-x-1 transition-transform">arrow_back</span>
              Back to Sign In
            </Link>
          </div>
        </div>
        
        {/* Contextual Impact Visual (Subtle) */}
        <div className="mt-8 flex items-center justify-center gap-4 px-6 py-4 bg-surface-container-low rounded-xl">
          <div className="flex -space-x-2">
            <img 
              className="w-8 h-8 rounded-full border-2 border-surface" 
              alt="Portrait of a young Nigerian female student" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeE_O7H3fPdUWstcb6pIEeSXbS1lgchKtV2SfsuhFZYeJiX1KpTzEO8sj0E652dWU4ZG-sXtlkD0QHqrC3QMrcBEWBirQtYlgUNED7pO9BEL_-UzReXN0fuiwLSo8LzAxZ3P5HiIn9rQLlBA-EmGuK49c10fo1sUko3GC-ZK1Cz4vQR0VJkPS64kegILmLRBZ4di0LrjCweYh7zzDEJ4MTnlGcf6oKSS9Rc8iXioXqN4AN1QAGeGIVKSg0Diia0mN26Wu8JguQJ4kg"
            />
            <img 
              className="w-8 h-8 rounded-full border-2 border-surface" 
              alt="Nigerian male student" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCf3Dp7DRs6iG4hGZZj4HbQbU-c4nsJIm4qkER2-3Ro8mXpSCWSL0Q3muuo-sHDr21occSaxNukkXTsnGSCyBl4Izs6iTUS4xmzn5PnDeL5a8vbBf6aPysYeayZ2LTvpcof6zt1ITLW2J1fkSPqZv23EZh-y93B52dse6CAH4mNF3DMY-D1E-iy2jJus-XisBev4a3VgTJtTcyPT4lsJlqcrbfokaXa4RftYtZvUBofonWsFQq6QhWyswRw5TLDcmfpDNNh4Nsryz2K"
            />
          </div>
          <p className="text-xs text-on-surface-variant font-medium">
            Joined by <span className="text-primary-fixed-dim font-bold">12,000+</span> scholars across Nigeria.
          </p>
        </div>
      </div>
    </main>
  );
}
