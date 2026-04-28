'use client';

import { FadeUpStagger } from '@/components/ui/FadeUpStagger';
import { SlideIn } from '@/components/ui/SlideIn';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

/**
 * SponsorsPage - Redesigned with Zinc-950 "Deep Ink" aesthetic.
 * Sophisticated, high-contrast, designed to inspire trust and prestige.
 */
export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 pt-24 overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-8 py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <SlideIn direction="right" className="z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0052CC]/10 border border-[#0052CC]/20 text-[#0052CC] text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0052CC] animate-pulse" />
            Empowerment through Education
          </div>
          <h1 className="text-zinc-100 text-6xl md:text-8xl font-headline font-black tracking-tighter mb-8 leading-[0.95]">
            Be the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] to-blue-400">Catalyst</span> for Success.
          </h1>
          <p className="text-zinc-400 text-xl font-medium leading-relaxed mb-12 max-w-lg">
            Join a network of visionary sponsors funding the next generation of Nigerian architects, engineers, and doctors.
          </p>
          <div className="flex flex-wrap gap-6">
            <Button variant="primary" size="lg" className="px-10 rounded-[24px] shadow-2xl shadow-blue-500/20">
              Partner With Us
            </Button>
            <Button variant="ghost" size="lg" className="text-zinc-300" iconRight="play_circle">
              See the Impact
            </Button>
          </div>
        </SlideIn>

        <SlideIn direction="left" delay={0.2} className="relative">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#0052CC]/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 rounded-[48px] overflow-hidden border border-zinc-800 shadow-none transform md:rotate-2 hover:rotate-0 transition-all duration-700 bg-zinc-900 p-3">
             <div className="rounded-[40px] overflow-hidden aspect-[4/5] relative">
               <Image 
                 fill
                 className="object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
                 alt="Nigerian university student" 
                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMRx4AEEJxxC3Bs8d9EzezXmpKTOqGkfCXYRFHZhqKaBrkPrDaa66w1VQqF6dbbAFVVpvaOudpzzozyM9qdR6CPDVFI7wkFdrINwB6sSmuhnhUpSoXtYxEhKFO82fyw_yTvyfX1EtTeI4o2evxdrrOs_dD7p4EYNAk6FwC-2rnVT8a7zK5FMRpNxkY9kCzaW2PMu2zLcPDZbN6xzD7QUh7tb7UOfknf1eqg2YWC0uGE65-VbQDyK_22totSyVfHweXkkJHcijS96LC"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
             </div>
          </div>
          
          {/* Prestige Floating Card */}
          <div className="absolute -bottom-10 -left-10 bg-zinc-900/90 backdrop-blur-xl p-8 rounded-[32px] border border-zinc-800 z-20 max-w-xs shadow-none group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
              </div>
              <span className="font-headline font-black text-white tracking-tight">Prestige Circle</span>
            </div>
            <p className="text-sm text-zinc-400 font-medium leading-relaxed">&quot;Supporting five scholars was the proudest investment of my career.&quot;</p>
            <div className="absolute -right-2 top-0 w-8 h-8 bg-amber-500/10 rounded-full blur-xl" />
          </div>
        </SlideIn>
      </section>

      {/* Stats Section - Deep Ink Layout */}
      <section className="py-32 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-8">
          <FadeUpStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Students Target", value: "50,000+", icon: "groups", color: "text-[#0052CC] bg-[#0052CC]/10" },
              { label: "Income Increase", value: "3x Avg", icon: "trending_up", color: "text-emerald-500 bg-emerald-500/10" },
              { label: "Funding Model", value: "100% Direct", icon: "account_balance_wallet", color: "text-amber-500 bg-amber-500/10" }
            ].map((stat, i) => (
              <Card key={i} className="bg-zinc-950 p-12 rounded-[48px] border border-zinc-800/50 shadow-none hover:border-zinc-700 transition-all flex flex-col items-center text-center">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${stat.color}`}>
                  <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>{stat.icon}</span>
                </div>
                <div className="text-5xl font-headline font-black text-zinc-100 mb-2 tracking-tighter">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[0.3em] font-black text-zinc-400">{stat.label}</div>
              </Card>
            ))}
          </FadeUpStagger>
        </div>
      </section>

      {/* How It Works - Process Refinement */}
      <section className="py-32 max-w-7xl mx-auto px-8">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-headline font-black text-zinc-100 mb-6 tracking-tight">Direct Impact Pathway</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto font-medium text-lg">A transparent, verified connection designed for clarity and absolute trust.</p>
        </div>
        <FadeUpStagger className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {[
            { step: 1, title: "Explore", desc: "Browse verified student stories and aspirations.", icon: "manage_search" },
            { step: 2, title: "Select", desc: "Partner with a student who aligns with your values.", icon: "person_search" },
            { step: 3, title: "Fund", desc: "100% of your grant goes directly to university fees.", icon: "account_balance" },
            { step: 4, title: "Track", desc: "Receive semester-by-semester academic reports.", icon: "analytics" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-[32px] bg-zinc-900 border border-zinc-800 text-[#0052CC] flex items-center justify-center mb-10 group-hover:bg-[#0052CC] group-hover:text-white group-hover:-translate-y-2 transition-all duration-500 relative">
                <span className="material-symbols-outlined text-4xl">{item.icon}</span>
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-zinc-950 border border-zinc-800 text-[10px] font-black flex items-center justify-center text-zinc-400">{item.step}</span>
              </div>
              <h3 className="font-headline font-black text-xl mb-4 text-zinc-100">{item.title}</h3>
              <p className="text-zinc-400 text-sm font-medium leading-relaxed max-w-[200px]">{item.desc}</p>
            </div>
          ))}
        </FadeUpStagger>
      </section>

      {/* Transparency & Protocol */}
      <section className="bg-zinc-900/50 py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0052CC]/5 blur-3xl rounded-full translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-24 relative z-10">
          <div className="lg:w-3/5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[9px] font-black uppercase tracking-[0.2em] mb-8">
              Protocol V1.2
            </div>
            <h2 className="text-5xl font-headline font-black text-zinc-100 mb-8 tracking-tighter leading-none">Radical <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">Transparency</span> <br/>as standard.</h2>
            <p className="text-zinc-400 text-xl font-medium leading-relaxed mb-12">
              Our verification protocol is rigorous, ensuring every naira reaches a deserving, high-achieving student in genuine need.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "Identity", desc: "Government-issued identity checks.", icon: "id_card" },
                { title: "Academics", desc: "Vetted registrar-signed transcripts.", icon: "school" },
                { title: "Audit", desc: "Direct university system confirmation.", icon: "account_balance" },
                { title: "Needs-Based", desc: "Algorithmic socio-economic vetting.", icon: "analytics" }
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#0052CC] font-bold">check_circle</span>
                  <div>
                    <h4 className="font-headline font-black text-zinc-200 mb-1">{c.title}</h4>
                    <p className="text-sm text-zinc-400 font-medium">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-2/5">
            <Card className="bg-zinc-950 p-12 rounded-[48px] border border-zinc-800/10 shadow-none relative group overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-amber-500 text-2xl font-headline font-black mb-6 tracking-tight">The Prestige Circle</h4>
                <p className="text-zinc-400 font-medium leading-relaxed mb-10">
                  For partners supporting multiple scholars, we offer the Prestige Circle. Access impact summits and private briefings with the executive board.
                </p>
                <Button variant="outline" className="w-full rounded-[20px] py-6 border-amber-500/30 text-amber-500 hover:bg-amber-500/10">
                  Inquire about the Circle
                </Button>
              </div>
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-all duration-700" />
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Zinc Inlay */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto relative rounded-[64px] bg-zinc-900 border border-zinc-800 p-24 text-center overflow-hidden group">
          <SlideIn direction="up">
            <h2 className="text-6xl font-headline font-black text-zinc-100 mb-8 tracking-tighter leading-none">Invest in <br/><span className="text-[#0052CC]">Potential.</span></h2>
            <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto font-medium">Select your scholar today and begin the journey of transforming a life through excellence.</p>
            <div className="flex flex-wrap justify-center gap-8 relative z-10">
              <Button variant="primary" size="lg" className="px-12 rounded-[24px]">Browse Scholar Profiles</Button>
              <Button variant="secondary" size="lg" className="px-12 rounded-[24px] bg-zinc-800 text-white hover:bg-zinc-700">Contact Partnership Team</Button>
            </div>
          </SlideIn>
          <div className="absolute top-0 left-0 w-full h-full bg-[#0052CC]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        </div>
      </section>
    </main>
  );
}
