'use client';

import Link from 'next/link';

export default function SponsorRegistrationPage() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Sidebar / Trust Section */}
        <div className="lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-32">
          <div className="space-y-4">
            <span className="inline-block px-4 py-1 bg-secondary-container text-secondary text-sm font-bold rounded-full uppercase tracking-widest">Sponsorship Portal</span>
            <h1 className="text-5xl font-extrabold font-headline leading-tight tracking-tighter text-primary">
              Shape the Future of <br/>Nigerian Scholars.
            </h1>
            <p className="text-lg text-on-surface-variant max-w-md">
              Join an elite network of patrons providing more than just funding—you&apos;re providing a bridge to global leadership.
            </p>
          </div>
          
          {/* Impact Metric Bento */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-6 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                <span className="font-bold text-2xl">4.8k+</span>
              </div>
              <p className="text-sm font-medium text-on-surface-variant">Scholars Funded</p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl space-y-2">
              <div className="flex items-center gap-2 text-tertiary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="font-bold text-2xl">100%</span>
              </div>
              <p className="text-sm font-medium text-on-surface-variant">Transparency Rate</p>
            </div>
          </div>
          
          {/* Testimonial Card */}
          <div className="relative bg-inverse-surface text-inverse-on-surface p-8 rounded-xl overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
              <span className="material-symbols-outlined text-9xl">format_quote</span>
            </div>
            <div className="relative z-10 space-y-6">
              <p className="text-xl italic font-light leading-relaxed">
                &quot;Partnering with Indigent-Sc has allowed our organization to directly impact the next generation of Nigerian tech leaders with absolute confidence in fund management.&quot;
              </p>
              <div className="flex items-center gap-4">
                <img 
                  className="w-12 h-12 rounded-full object-cover grayscale brightness-125" 
                  alt="portrait of a confident female executive" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN3XGLmOc9zk1FfPX7ZtiTfcyoBNshrg196qXfs7iWOeJjU4rvHCaha3YHzScLIFcLtB0Nca4BBY-gtxTJItJdX9DFGOjbIg8UFdzYoq-e_gTUMpEYsqa1Clszkp_lIDPeumTtZc6lh7SllGgRpUyXXMfcYeoZ3ujQDFT3Z5FVVajE1V0HwlGf6DgLgaTaLyCIDlUcbrIN6lkOvhsGWrf73srfEsUIvNEfEqvLy0SEOWHcOq2p4AKBcdJfr2jCdUL67j6EL_gLhz80"
                />
                <div>
                  <p className="font-bold font-headline">Dr. Amaka Okafor</p>
                  <p className="text-sm opacity-70">Director, Zenith Foundation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Registration Form Canvas */}
        <div className="lg:col-span-7">
          <div className="bg-surface-container-lowest p-10 md:p-14 rounded-xl shadow-sm border border-outline-variant/20">
            <h2 className="text-3xl font-bold font-headline mb-8 text-on-surface">Begin Your Journey</h2>
            <form className="space-y-8">
              {/* Full Name / Org Name */}
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">person</span>
                  Full Name / Organization Name
                </label>
                <input 
                  className="w-full bg-surface-container-low border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-[#D4AF37] focus:bg-surface-container-lowest transition-all font-medium text-on-surface placeholder:text-outline-variant/60" 
                  placeholder="e.g., Global Tech Partners" 
                  type="text"
                />
              </div>
              
              {/* Email Address */}
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">mail</span>
                  Corporate / Primary Email
                </label>
                <input 
                  className="w-full bg-surface-container-low border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-[#D4AF37] focus:bg-surface-container-lowest transition-all font-medium text-on-surface placeholder:text-outline-variant/60" 
                  placeholder="contact@impact.org" 
                  type="email"
                />
              </div>
              
              {/* Sponsor Type & Impact Area */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">category</span>
                    Sponsor Type
                  </label>
                  <select className="w-full bg-surface-container-low border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-[#D4AF37] focus:bg-surface-container-lowest transition-all font-medium text-on-surface appearance-none cursor-pointer">
                    <option>Individual</option>
                    <option>Organization</option>
                    <option>Governmental Body</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">target</span>
                    Impact Area
                  </label>
                  <select className="w-full bg-surface-container-low border-none rounded-xl py-4 px-6 focus:ring-2 focus:ring-[#D4AF37] focus:bg-surface-container-lowest transition-all font-medium text-on-surface appearance-none cursor-pointer">
                    <option>STEM &amp; Innovation</option>
                    <option>Medical Sciences</option>
                    <option>Social Leadership</option>
                    <option>Creative Arts</option>
                  </select>
                </div>
              </div>
              
              {/* Checkbox Agreement */}
              <div className="flex items-start gap-4 pt-4">
                <div className="mt-1">
                  <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary" type="checkbox"/>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  I agree to the <Link className="text-primary font-bold underline decoration-primary/20 hover:decoration-primary" href="#">Partnership Agreement</Link> and acknowledge that my contribution will be governed by Indigent-Sc&apos;s impact transparency protocols.
                </p>
              </div>
              
              {/* CTA Section */}
              <div className="pt-6">
                <button type="button" className="w-full py-5 rounded-xl bg-gradient-to-b from-[#0052CC] to-[#003D9B] text-white font-headline font-extrabold text-lg flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-[0.98]">
                  Start Your Impact
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <p className="text-center mt-6 text-sm text-on-surface-variant">
                  Need custom sponsorship tiers? <Link className="text-secondary font-bold hover:underline" href="#">Download Prospectus</Link>
                </p>
                <p className="text-center text-sm text-on-surface-variant mt-2">
                  Already have an account? <Link className="text-primary font-bold hover:underline" href="/login">Log in here</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
