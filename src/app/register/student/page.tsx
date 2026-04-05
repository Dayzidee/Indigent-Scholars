'use client';

import Link from 'next/link';

export default function StudentRegistrationPage() {
  return (
    <main className="pt-32 pb-20 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Benefit List (Why Join?) */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-4">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase">Institutional Excellence</span>
            <h1 className="text-5xl font-headline font-extrabold text-primary leading-tight tracking-tighter">
              Empowering the <br/><span className="text-on-surface">Nigerian Scholar.</span>
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
              Join a prestigious network dedicated to bridging the gap between talent and opportunity. Your academic journey starts here.
            </p>
          </div>
          
          <div className="grid gap-6">
            {/* Benefit 1 */}
            <div className="group flex gap-5 items-start p-4 rounded-xl transition-all duration-300 hover:bg-surface-container-low">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
              </div>
              <div>
                <h3 className="font-headline font-bold text-lg text-primary">Global Scholarships</h3>
                <p className="text-sm text-on-surface-variant">Access curated financial aid and merit-based grants specifically for Nigerian students.</p>
              </div>
            </div>
            
            {/* Benefit 2 */}
            <div className="group flex gap-5 items-start p-4 rounded-xl transition-all duration-300 hover:bg-surface-container-low">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary/5 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
              </div>
              <div>
                <h3 className="font-headline font-bold text-lg text-secondary">Direct Mentorship</h3>
                <p className="text-sm text-on-surface-variant">Connect with academic leaders and industry professionals who understand your path.</p>
              </div>
            </div>
            
            {/* Benefit 3 */}
            <div className="group flex gap-5 items-start p-4 rounded-xl transition-all duration-300 hover:bg-surface-container-low">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-tertiary/5 flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_graph</span>
              </div>
              <div>
                <h3 className="font-headline font-bold text-lg text-tertiary">Impact Tracking</h3>
                <p className="text-sm text-on-surface-variant">Monitor your scholarly growth and institutional impact through our unified portal.</p>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-outline-variant/20">
            <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-xl">
              <img 
                alt="Student Community" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy10ZOkiKPKfowpkGYErkwtyK1H8LpXtvkmHxnG3Vw4cTptKAHtAx02isrne0_T6VLLgfP1V5-PWWOLSR8jY9XZXtkFTXAQSz_TAvhbV9-mp9NQkHRVKYIWtoJmD38GuFD9xz2Y0TXidQUwf2OuE6QHyfmX-aR9TZPxo4eON6yVlXf2tp-LFGMoeeFm4sxKmTxv4r0G7_oa8eR6sX3DseEq-GdgjILVrv68ZhCfrFneZqiFTKej1sdU6pLlBsVyjrmT-Oak35N9qFo"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-6">
                <p className="text-white text-sm font-medium italic">&quot;The support I received changed the trajectory of my medical studies.&quot; — Amina J.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side: Registration Form */}
        <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-8 lg:p-12 shadow-2xl shadow-primary/5 border border-outline-variant/10">
          <div className="mb-10">
            <h2 className="text-2xl font-headline font-extrabold text-on-surface tracking-tight">Student Registration</h2>
            <p className="text-on-surface-variant text-sm mt-2">Please provide your official academic details to begin.</p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">Full Name</label>
                <input 
                  className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary/40 focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline-variant/60" 
                  placeholder="e.g. Chinedu Okafor" 
                  type="text"
                />
              </div>
              {/* Email */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">Email Address</label>
                <input 
                  className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary/40 focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline-variant/60" 
                  placeholder="c.okafor@university.edu" 
                  type="email"
                />
              </div>
            </div>
            
            {/* University Name */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">University Name</label>
              <div className="relative">
                <input 
                  className="w-full bg-surface-container-low border-none rounded-lg pl-12 pr-4 py-3 focus:ring-2 focus:ring-secondary/40 focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline-variant/60" 
                  placeholder="Search University..." 
                  type="text"
                />
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline-variant">account_balance</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Year of Study */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">Year of Study</label>
                <select className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary/40 focus:bg-surface-container-lowest transition-all text-on-surface appearance-none">
                  <option>First Year (100 Level)</option>
                  <option>Second Year (200 Level)</option>
                  <option>Third Year (300 Level)</option>
                  <option>Fourth Year (400 Level)</option>
                  <option>Fifth Year (500 Level)</option>
                  <option>Post-Graduate</option>
                </select>
              </div>
              {/* Identification Type */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider">Identification Type</label>
                <select className="w-full bg-surface-container-low border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-secondary/40 focus:bg-surface-container-lowest transition-all text-on-surface appearance-none">
                  <option>Student ID Card</option>
                  <option>Admission Letter</option>
                  <option>JAMB Result Slip</option>
                  <option>National ID (NIN)</option>
                </select>
              </div>
            </div>
            
            <div className="pt-4">
              <div className="flex items-start gap-3 mb-8">
                <input className="mt-1 rounded text-primary focus:ring-primary border-outline-variant" type="checkbox"/>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  I verify that the information provided is accurate and I agree to the <Link className="text-primary font-bold hover:underline" href="#">Terms of Service</Link> and <Link className="text-primary font-bold hover:underline" href="#">Academic Integrity Policy</Link>.
                </p>
              </div>
              <button type="button" className="w-full py-4 bg-gradient-to-b from-[#0052CC] to-[#003D9B] text-white font-headline font-extrabold text-lg rounded-xl shadow-xl shadow-primary/20 hover:scale-[0.98] transition-all duration-300">
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
