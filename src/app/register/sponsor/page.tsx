'use client';

import Link from 'next/link';
import { signUpAction } from '@/lib/actions/auth';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { DocumentUpload } from '@/components/ui/DocumentUpload';
import { AuthSubmitButton } from '@/components/auth/AuthSubmitButton';

function SponsorRegisterContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  return (
    <main className="pt-32 pb-20 px-6 min-h-screen bg-zinc-900 relative z-[2]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Testimonial/Info */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-4">
            <span className="text-primary font-bold tracking-widest text-xs uppercase">Impact & Philanthropy</span>
            <h1 className="text-5xl font-headline font-extrabold text-secondary leading-tight tracking-tighter">
              Invest in <br/><span className="text-on-surface">Human Capital.</span>
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
              Your contribution goes directly toward tuition, research materials, and institutional fees for Nigeria's brightest minds.
            </p>
          </div>

          <div className="bg-[#002B6B] p-8 rounded-2xl shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-secondary/20 transition-colors"></div>
            <span className="material-symbols-outlined text-secondary text-4xl mb-6 block">format_quote</span>
            <p className="text-white/90 text-lg font-medium leading-relaxed relative z-10 italic">
              &quot;Sponsoring a scholar isn't just charity; it's a strategic investment in the future leaders who will build our nation's industries.&quot;
            </p>
            <div className="mt-8 flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary">verified_user</span>
              </div>
              <div>
                <p className="text-white font-bold">Dr. Adewale K.</p>
                <p className="text-secondary/80 text-xs uppercase tracking-tighter font-bold">Founding Patron</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Registration Form */}
        <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-8 lg:p-12 shadow-2xl shadow-secondary/5 border border-outline-variant/10">
          <div className="mb-10">
            <h2 className="text-2xl font-headline font-extrabold text-on-surface tracking-tight">Sponsor Registration</h2>
            <p className="text-on-surface-variant text-sm mt-2">Join our network of verified educational philanthropists.</p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-error-container text-on-error-container rounded-lg text-sm font-medium border border-error/20 flex items-center gap-3">
              <span className="material-symbols-outlined text-lg">error</span>
              {error}
            </div>
          )}
          
          <form action={signUpAction} className="space-y-6">
            <input type="hidden" name="role" value="sponsor" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">Full Name / Contact Person</label>
                <input 
                  name="full_name"
                  required
                  className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline-variant/60" 
                  placeholder="e.g. Segun Arinze" 
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">Email Address</label>
                <input 
                  name="email"
                  required
                  className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline-variant/60" 
                  placeholder="s.arinze@foundation.org" 
                  type="email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">Create Password</label>
              <input 
                name="password"
                required
                minLength={8}
                className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline-variant/60" 
                placeholder="Min. 8 characters" 
                type="password"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">Organization Name (Optional)</label>
              <div className="relative">
                <input 
                  name="org_name"
                  className="w-full bg-surface-container-low border-none rounded-lg pl-12 pr-4 py-3 focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline-variant/60" 
                  placeholder="Legal entity or foundation name" 
                  type="text"
                />
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant">corporate_fare</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">Sponsorship Type</label>
              <select name="type" className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all text-on-surface appearance-none">
                <option>Individual Philanthropist</option>
                <option>Corporate Social Responsibility (CSR)</option>
                <option>Non-Profit Foundation</option>
                <option>Alumni Association</option>
              </select>
            </div>

            <div className="pt-6 border-t border-outline-variant/10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-secondary text-on-secondary flex items-center justify-center text-[10px] font-black">AI</span>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-secondary font-label">Identity Verification</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DocumentUpload label="National Identity (NIN)" icon="badge" className="bg-zinc-900" />
                <DocumentUpload label="Voter's Card" icon="how_to_reg" className="bg-zinc-900" />
              </div>
            </div>
            
            <div className="pt-4">
              <div className="flex items-start gap-3 mb-8">
                <input required className="mt-1 rounded text-secondary focus:ring-secondary border-outline-variant" type="checkbox"/>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  I agree to the <Link className="text-secondary font-bold hover:underline" href="#">Sponsorship Charter</Link> and verify that all funds are provided in compliance with anti-money laundering regulations.
                </p>
              </div>
              <AuthSubmitButton 
                label="Register as Sponsor"
                loadingLabel="Registering..."
                className="bg-secondary text-on-secondary font-headline font-extrabold text-lg rounded-xl shadow-xl shadow-secondary/10 hover:opacity-90 hover:shadow-2xl hover:shadow-secondary/20 hover:-translate-y-1 transition-all duration-300 active:scale-[0.98]"
              />
            </div>
            
            <p className="text-center text-sm text-on-surface-variant mt-6">
              Already a partner? <Link className="text-secondary font-bold hover:underline" href="/login">Log in here</Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}

export default function SponsorRegistrationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-zinc-900 animate-pulse" />}>
      <SponsorRegisterContent />
    </Suspense>
  );
}
