'use client';

import { FadeUpStagger } from '@/components/ui/FadeUpStagger';
import { SlideIn } from '@/components/ui/SlideIn';

export default function SponsorsPage() {
  return (
    <main className="pt-24 bg-zinc-900 relative z-[2]">
      {/* Hero Section */}
      <section className="relative px-8 py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <SlideIn direction="right" className="z-10">
          <span className="text-secondary-fixed-dim font-bold tracking-widest text-sm uppercase mb-4 block">Empowerment through Education</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-primary leading-[1.1] tracking-tight mb-6">
            Be the Catalyst for a Nigerian Scholar’s Success.
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-lg">
            Join a network of visionary sponsors funding the next generation of architects, engineers, and doctors. Your contribution is more than a donation; it&apos;s an investment in a future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary-container text-on-primary px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all">
              Partner Now
            </button>
            <button className="flex items-center justify-center gap-2 text-primary font-bold px-8 py-4">
              <span className="material-symbols-outlined">play_circle</span>
              See the Impact
            </button>
          </div>
        </SlideIn>

        <SlideIn direction="left" delay={0.2} className="relative">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary-fixed/30 rounded-full blur-3xl"></div>
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
            <img 
              className="w-full h-[600px] object-cover" 
              alt="A focused Nigerian university student smiling while studying in a modern university library with bookshelves and soft natural lighting" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMRx4AEEJxxC3Bs8d9EzezXmpKTOqGkfCXYRFHZhqKaBrkPrDaa66w1VQqF6dbbAFVVpvaOudpzzozyM9qdR6CPDVFI7wkFdrINwB6sSmuhnhUpSoXtYxEhKFO82fyw_yTvyfX1EtTeI4o2evxdrrOs_dD7p4EYNAk6FwC-2rnVT8a7zK5FMRpNxkY9kCzaW2PMu2zLcPDZbN6xzD7QUh7tb7UOfknf1eqg2YWC0uGE65-VbQDyK_22totSyVfHweXkkJHcijS96LC"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
          </div>
          {/* Float Card */}
          <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-xl shadow-xl z-20 max-w-xs border border-outline-variant/20">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary">verified</span>
              </div>
              <span className="font-bold text-primary">Prestige Circle Member</span>
            </div>
            <p className="text-sm text-on-surface-variant">&quot;Seeing Chinedu graduate as a Civil Engineer was the proudest moment of my year.&quot;</p>
          </div>
        </SlideIn>
      </section>

      {/* Impact at a Glance */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-8">
          <FadeUpStagger className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-surface-container-lowest p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-b-4 border-secondary">
              <span className="material-symbols-outlined text-secondary text-5xl mb-6" style={{fontVariationSettings: "'FILL' 1"}}>groups</span>
              <div className="text-4xl font-extrabold text-primary mb-2">50,000+</div>
              <div className="text-on-surface-variant font-medium tracking-wide">Students Target</div>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-b-4 border-secondary">
              <span className="material-symbols-outlined text-secondary text-5xl mb-6" style={{fontVariationSettings: "'FILL' 1"}}>trending_up</span>
              <div className="text-4xl font-extrabold text-primary mb-2">3x</div>
              <div className="text-on-surface-variant font-medium tracking-wide">Average Income Increase</div>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow border-b-4 border-secondary">
              <span className="material-symbols-outlined text-secondary text-5xl mb-6" style={{fontVariationSettings: "'FILL' 1"}}>account_balance_wallet</span>
              <div className="text-4xl font-extrabold text-primary mb-2">100%</div>
              <div className="text-on-surface-variant font-medium tracking-wide">Direct Funding Model</div>
            </div>
          </FadeUpStagger>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-primary mb-4">How It Works for Sponsors</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">A transparent, direct-impact pathway designed for clarity and connection.</p>
        </div>
        <FadeUpStagger className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-outline-variant/30 -z-10"></div>
          
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-primary-container text-on-primary flex items-center justify-center mb-6 shadow-xl shadow-primary/20 ring-8 ring-surface">
              <span className="material-symbols-outlined text-3xl">manage_search</span>
            </div>
            <h3 className="font-bold text-xl mb-3 text-primary">1. Explore Profiles</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Browse verified student stories and aspirations.</p>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-primary-container text-on-primary flex items-center justify-center mb-6 shadow-xl shadow-primary/20 ring-8 ring-surface">
              <span className="material-symbols-outlined text-3xl">person_search</span>
            </div>
            <h3 className="font-bold text-xl mb-3 text-primary">2. Choose a Scholar</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Select a student whose dreams align with your values.</p>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-primary-container text-on-primary flex items-center justify-center mb-6 shadow-xl shadow-primary/20 ring-8 ring-surface">
              <span className="material-symbols-outlined text-3xl">account_balance</span>
            </div>
            <h3 className="font-bold text-xl mb-3 text-primary">3. Direct Funding</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">100% of your sponsorship goes to university tuition.</p>
          </div>
          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-primary-container text-on-primary flex items-center justify-center mb-6 shadow-xl shadow-primary/20 ring-8 ring-surface">
              <span className="material-symbols-outlined text-3xl">analytics</span>
            </div>
            <h3 className="font-bold text-xl mb-3 text-primary">4. Track Progress</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">Receive semester-by-semester academic reports and updates.</p>
          </div>
        </FadeUpStagger>
      </section>

      {/* Transparency Section */}
      <section className="bg-inverse-surface text-white py-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg height="100%" preserveAspectRatio="none" viewBox="0 0 100 100" width="100%">
            <path d="M0 100 L100 0 L100 100 Z" fill="white"></path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="lg:w-3/5">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-zinc-800/20">
              <span className="material-symbols-outlined text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>verified_user</span>
              <span className="font-bold tracking-tight">Official Verification Protocol</span>
            </div>
            <h2 className="text-4xl font-bold mb-8">Radical Transparency as Standard</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              We understand that trust is the foundation of philanthropy. Our verification protocol is rigorous, ensuring that every naira of your investment reaches a deserving, high-achieving student in genuine financial need.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                <div>
                  <h4 className="font-bold mb-1">ID Verification</h4>
                  <p className="text-sm text-zinc-500">Government-issued identity checks for all students.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                <div>
                  <h4 className="font-bold mb-1">Academic Records</h4>
                  <p className="text-sm text-zinc-500">Official transcripts vetted by our registrar partners.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                <div>
                  <h4 className="font-bold mb-1">Institutional Audit</h4>
                  <p className="text-sm text-zinc-500">Direct confirmation with Nigerian university systems.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                <div>
                  <h4 className="font-bold mb-1">Needs-Based Scoring</h4>
                  <p className="text-sm text-zinc-500">Algorithmic vetting of socio-economic status.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/5">
            <div className="bg-white/5 p-8 rounded-3xl border border-zinc-800/10 backdrop-blur-sm shadow-xl">
              <h4 className="text-secondary text-xl font-bold mb-4">The Prestige Circle</h4>
              <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                For contributors supporting five or more scholars simultaneously, we offer the Prestige Circle. Members gain access to annual impact summits, direct naming rights for scholarship cohorts, and quarterly private briefings with the executive board.
              </p>
              <button className="w-full py-3 rounded-xl border border-secondary text-secondary font-bold hover:bg-secondary hover:text-on-secondary transition-all">
                Inquire about the Circle
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-8 max-w-5xl mx-auto text-center">
        <SlideIn direction="up">
          <h2 className="text-5xl font-extrabold text-primary mb-6">Ready to sponsor a future?</h2>
          <p className="text-xl text-on-surface-variant mb-12">Select your scholar today and begin the journey of transforming a life through educational excellence.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="bg-secondary-container text-on-secondary-container px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all w-full sm:w-auto">
              Browse Students
            </button>
            <button className="border-2 border-secondary text-secondary px-10 py-5 rounded-xl font-bold text-lg hover:bg-secondary/5 transition-all w-full sm:w-auto">
              Partner Now
            </button>
          </div>
        </SlideIn>
      </section>
    </main>
  );
}
