'use client';

import Link from 'next/link';

export default function ChooseYourPathPage() {
  return (
    <main className="flex-grow flex items-center justify-center pt-24 pb-12 px-6">
      <div className="max-w-5xl w-full">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight text-primary">
            Your Journey Begins Here
          </h1>
          <p className="text-on-surface-variant max-w-lg mx-auto text-lg">
            Select your pathway to join Nigeria&apos;s most prestigious academic support ecosystem.
          </p>
        </div>

        {/* Branching Path Cards (Bento-style Asymmetry) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Student Card */}
          <Link href="/register/student" className="group relative bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 border-2 border-transparent hover:border-secondary cursor-pointer flex flex-col justify-between overflow-hidden">
            {/* Subtle background texture */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary-container opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity"></div>
            <div>
              <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary-container text-on-primary-container">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
              </div>
              <h2 className="text-3xl font-headline font-bold text-on-surface mb-4">I am a Student</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                Access merit-based scholarships, mentorship from industry leaders, and a community of scholars dedicated to excellence.
              </p>
              <ul className="space-y-3 mb-10">
                <li className="flex items-center gap-3 text-sm font-medium text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  Fully Funded Tuition Support
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  One-on-One Career Mentorship
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  National Peer Network
                </li>
              </ul>
            </div>
            <button className="w-full py-4 px-6 bg-[#0052CC] text-white font-headline font-extrabold rounded-xl hover:bg-[#003D9B] hover:shadow-xl hover:shadow-primary/20 transition-all transform active:scale-95 duration-300 flex items-center justify-center gap-2 group-hover:-translate-y-1">
              Select &amp; Continue
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </Link>

          {/* Sponsor Card */}
          <Link href="/register/sponsor" className="group relative bg-surface-container-high p-8 md:p-12 rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 border-2 border-outline-variant hover:border-secondary cursor-pointer flex flex-col justify-between overflow-hidden">
            {/* Sophisticated gold glow */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-secondary opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity"></div>
            <div>
              <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-lg bg-secondary text-on-secondary">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
              </div>
              <h2 className="text-3xl font-headline font-bold text-on-surface mb-4">I am a Sponsor</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                Empower the next generation of Nigerian talent through transparent, high-impact sponsorship and strategic investment.
              </p>
              <ul className="space-y-3 mb-10">
                <li className="flex items-center gap-3 text-sm font-medium text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  Verified Scholar Matching
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-surface">
                  <span className="material-symbols-outlined text-secondary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  Transparent Impact Reporting
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-surface">
                  <span className="material-symbols-outlined text-secondary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  Tax Deductible Contributions
                </li>
              </ul>
            </div>
            <button className="w-full py-4 px-6 bg-zinc-900 text-secondary font-headline font-extrabold rounded-xl hover:bg-secondary-container hover:text-secondary hover:shadow-xl transition-all transform active:scale-95 duration-300 flex items-center justify-center gap-2 group-hover:-translate-y-1">
              Select &amp; Continue
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </Link>
        </div>

        {/* Footer Text Hint */}
        <p className="mt-12 text-center text-on-surface-variant font-label text-sm">
          Already have an account? <Link href="/login" className="text-primary font-bold hover:underline">Log in here</Link>
        </p>
      </div>
    </main>
  );
}
