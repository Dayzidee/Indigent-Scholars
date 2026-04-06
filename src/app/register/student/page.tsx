'use client';

import Link from 'next/link';
import { signUpAction } from '@/lib/actions/auth';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function StudentRegisterContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  return (
    <main className="pt-32 pb-20 px-6 min-h-screen bg-white relative z-[2]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Benefit List */}
        <div className="lg:col-span-5 space-y-12 text-on-surface">
          <div className="space-y-4">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase">Institutional Excellence</span>
            <h1 className="text-5xl font-headline font-extrabold text-primary leading-tight tracking-tighter">
              Empowering the <br/><span className="text-on-surface">Nigerian Scholar.</span>
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
              Join a prestigious network dedicated to bridging the gap between talent and opportunity.
            </p>
          </div>
          
          <div className="grid gap-6">
            <div className="group flex gap-5 items-start p-4 rounded-xl transition-all duration-300 hover:bg-surface-container-low">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
              </div>
              <div>
                <h3 className="font-headline font-bold text-lg text-primary">Global Scholarships</h3>
                <p className="text-sm text-on-surface-variant">Access curated financial aid and merit-based grants.</p>
              </div>
            </div>
            <div className="group flex gap-5 items-start p-4 rounded-xl transition-all duration-300 hover:bg-surface-container-low">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/5 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
              </div>
              <div>
                <h3 className="font-headline font-bold text-lg text-secondary">Direct Mentorship</h3>
                <p className="text-sm text-on-surface-variant">Connect with academic leaders and industry professionals.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side: Registration Form */}
        <div className="lg:col-span-7 bg-white rounded-xl p-8 lg:p-12 shadow-2xl shadow-primary/5 border border-outline-variant/10">
          <div className="mb-10">
            <h2 className="text-2xl font-headline font-extrabold text-on-surface tracking-tight">Student Registration</h2>
            <p className="text-on-surface-variant text-sm mt-2">Please provide your official academic details to begin.</p>
          </div>
          
          {error && (
            <div className="mb-6 p-4 bg-error-container text-on-error-container rounded-lg text-sm font-medium border border-error/20 flex items-center gap-3">
              <span className="material-symbols-outlined text-lg">error</span>
              {error}
            </div>
          )}

          <form action={signUpAction} className="space-y-6">
            <input type="hidden" name="role" value="student" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">Full Name</label>
                <input 
                  name="full_name"
                  required
                  className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary/40 focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline-variant/60" 
                  placeholder="e.g. Chinedu Okafor" 
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">Email Address</label>
                <input 
                  name="email"
                  required
                  className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary/40 focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline-variant/60" 
                  placeholder="c.okafor@university.edu" 
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
                className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary/40 focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline-variant/60" 
                placeholder="Min. 8 characters" 
                type="password"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">University Name</label>
              <div className="relative">
                <input 
                  name="university"
                  required
                  className="w-full bg-surface-container-low border-none rounded-lg pl-12 pr-4 py-3 focus:ring-2 focus:ring-secondary/40 focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline-variant/60" 
                  placeholder="Search University..." 
                  type="text"
                />
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant">account_balance</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">Year of Study</label>
                <select name="year" className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary/40 focus:bg-surface-container-lowest transition-all text-on-surface appearance-none">
                  <option>First Year (100 Level)</option>
                  <option>Second Year (200 Level)</option>
                  <option>Third Year (300 Level)</option>
                  <option>Fourth Year (400 Level)</option>
                  <option>Fifth Year (500 Level)</option>
                  <option>Post-Graduate</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">Identification Type</label>
                <select name="id_type" className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary/40 focus:bg-surface-container-lowest transition-all text-on-surface appearance-none">
                  <option>Student ID Card</option>
                  <option>Admission Letter</option>
                  <option>JAMB Result Slip</option>
                  <option>National ID (NIN)</option>
                </select>
              </div>
            </div>
            
            <div className="pt-4">
              <div className="flex items-start gap-3 mb-8">
                <input required className="mt-1 rounded text-primary focus:ring-primary border-outline-variant" type="checkbox"/>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  I verify that the information provided is accurate and I agree to the <Link className="text-primary font-bold hover:underline" href="#">Terms of Service</Link>.
                </p>
              </div>
              <button type="submit" className="w-full py-4 bg-[#0052CC] text-white font-headline font-extrabold text-lg rounded-xl shadow-xl shadow-primary/10 hover:bg-[#003D9B] hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300 active:scale-[0.98]">
                Create Student Account
              </button>
            </div>
            
            <p className="text-center text-sm text-on-surface-variant mt-6">
              Already have an account? <Link className="text-primary font-bold hover:underline" href="/login">Log in here</Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}

export default function StudentRegistrationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white animate-pulse" />}>
      <StudentRegisterContent />
    </Suspense>
  );
}
