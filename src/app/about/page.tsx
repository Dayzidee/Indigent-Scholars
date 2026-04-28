import Image from 'next/image';
import { FadeUpStagger } from '@/components/ui/FadeUpStagger';
import { SlideIn } from '@/components/ui/SlideIn';
import { Card } from '@/components/ui/card';
import { GoldenAfricaGlobe } from '@/components/ui/GoldenAfricaGlobe';

/**
 * AboutPage - Redesigned with Zinc-950 "Deep Ink" aesthetic.
 * Sophisticated, high-contrast, and premium.
 */
export default function AboutPage() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Absolute Background (The Oracle) */}
      <GoldenAfricaGlobe />

      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image 
            fill
            priority
            className="object-cover" 
            alt="Stately Nigerian university library architecture" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOBu0rpw9PcOj203sMTGMsLO_J98-TllPmp8UmS5r9R_smCYJDNNJUEpIQoTAO2Q00CYzH0m8x4sqe_6t_nxiZWOC0MascGoZGBcIPVmyehRnKIU886fmJ6JMaePC6u9z4mST9yoKBu-Z7dTE1uXpDDBAtPoU8AxWjuR2taO62oebpyiqEO20pPIMsjTvMoAj4kYfCxUCFHD7LLKrm42JrJmt_Wigk-NADZb7ZWJ2aB_Y-bH_fSGiQg7COIvg0mbS5NEJyum6DadPT"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <FadeUpStagger className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0052CC]/10 border border-[#0052CC]/20 text-[#0052CC] text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0052CC] animate-pulse" />
              Our Mission
            </div>
            <h1 className="text-zinc-100 text-6xl md:text-8xl font-headline font-black tracking-tighter mb-8 leading-[0.95]">
              Preparing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052CC] to-blue-400">Nigeria</span> for the future
            </h1>
            <p className="text-zinc-400 text-xl md:text-2xl font-medium mb-12 max-w-2xl leading-relaxed">
              Connecting brilliant indigent scholars with visionaries who believe that access to education is the ultimate catalyst for nation-building.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="bg-[#0052CC] text-white px-10 py-5 rounded-[24px] font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-[#0065ff] transition-all shadow-xl shadow-[#0052CC]/20">
                Partner With Us
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </div>
          </FadeUpStagger>
        </div>
      </section>

      {/* Impact Section - Zinc-950 Integration */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="w-full lg:w-1/2">
              <SlideIn direction="right">
                <h2 className="text-5xl font-headline font-black text-zinc-100 mb-8 tracking-tight leading-tight">Changing Lives Through <br/><span className="text-[#0052CC]">Educational Access</span></h2>
                <p className="text-lg text-zinc-400 leading-relaxed mb-10 font-medium">
                  We bridge the gap between financial constraints and academic brilliance. By leveraging deep verification technology, we ensure every talented Nigerian student has a seat in the lecture hall.
                </p>
                <div className="p-10 border border-zinc-800/20 bg-white/5 backdrop-blur-xl rounded-[32px] md:rounded-[48px] italic text-xl text-zinc-200 font-medium relative group shadow-2xl">
                  <span className="absolute -top-6 left-10 text-8xl text-[#0052CC]/20 font-serif select-none">&ldquo;</span>
                  <p className="relative z-10">&quot;Each grant represents not just funding but opportunity, dignity, and transformation.&quot;</p>
                </div>
              </SlideIn>
            </div>
            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <SlideIn direction="left" delay={0.2}>
                <Card className="bg-white/5 backdrop-blur-xl p-10 rounded-[40px] border border-white/10 shadow-none h-full group hover:border-[#0052CC]/40 transition-all">
                  <div className="text-6xl font-headline font-black text-[#0052CC] mb-4 tracking-tighter">50K</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] font-black text-zinc-400 mb-4">Scholars Goal</div>
                  <p className="text-zinc-400 text-sm font-medium leading-relaxed">Empowering the next generation of Nigerian leaders by 2030 through verified funding.</p>
                </Card>
              </SlideIn>
              <SlideIn direction="left" delay={0.4}>
                <Card className="bg-white/5 backdrop-blur-xl p-10 rounded-[40px] border border-white/10 shadow-none h-full group hover:border-amber-500/40 transition-all text-white">
                  <div className="text-6xl font-headline font-black text-amber-500 mb-4 tracking-tighter">3X</div>
                  <div className="text-[10px] uppercase tracking-[0.3em] font-black text-zinc-400 mb-4">Earnings Growth</div>
                  <p className="text-zinc-400 text-sm font-medium leading-relaxed">Average career earnings growth for our verified graduates compared to peers.</p>
                </Card>
              </SlideIn>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values - Glassy Zinc Cards */}
      <section className="py-32 bg-transparent relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/5 backdrop-blur-2xl p-12 rounded-[48px] border border-white/10 shadow-2xl">
              <div className="w-14 h-14 rounded-2xl bg-[#0052CC]/10 text-[#0052CC] flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>visibility</span>
              </div>
              <h3 className="text-2xl font-headline font-black text-zinc-100 mb-6">Vision</h3>
              <p className="text-zinc-400 leading-relaxed font-medium">To unlock the potential of every aspiring young mind in Nigeria, creating a nation where financial barriers no longer dictate limits.</p>
            </Card>
            
            <Card className="bg-white/5 backdrop-blur-2xl p-12 rounded-[48px] border border-white/10 shadow-2xl">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>rocket_launch</span>
              </div>
              <h3 className="text-2xl font-headline font-black text-zinc-100 mb-6">Mission</h3>
              <p className="text-zinc-400 leading-relaxed font-medium">To expand access to higher education through a digital platform that connects verified talent with high-impact sponsors.</p>
            </Card>
 
            <Card className="bg-white/5 backdrop-blur-2xl p-12 rounded-[48px] border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="grid grid-cols-2 gap-8 mb-10">
                {['favorite', 'bolt', 'auto_awesome', 'trending_up'].map((icon, i) => (
                  <div key={i} className="space-y-2">
                    <span className="material-symbols-outlined text-[#0052CC] text-2xl">{icon}</span>
                  </div>
                ))}
              </div>
              <h3 className="text-2xl font-headline font-black text-zinc-100 mb-2">Our Core Values</h3>
              <p className="text-[10px] text-zinc-400 uppercase tracking-[0.3em] font-black">The pillars of our impact</p>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#0052CC]/5 rounded-full blur-3xl group-hover:bg-[#0052CC]/10 transition-all" />
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Section - High Contrast Gold/Zinc */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <SlideIn direction="up">
            <div className="relative bg-white/5 backdrop-blur-3xl rounded-[64px] p-12 md:p-24 border border-white/10 overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0052CC]/5 transform skew-x-12 translate-x-20"></div>
              <div className="flex flex-col lg:flex-row gap-20 relative z-10 items-center">
                <div className="w-full lg:w-1/3">
                  <div className="relative aspect-[3/4] w-full max-w-sm mx-auto">
                    <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-amber-500/30 z-10"></div>
                    <Image 
                      fill
                      className="object-cover rounded-[32px] grayscale hover:grayscale-0 transition-all duration-700" 
                      alt="Chinedu Okoro, Founder" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQLexQOLcoeTn9-mfJAKYFLFAgbv4i5BBxOVeYZLK8tclHtpkErs26YeOf2m3x9-zmh6taRmkaZzetfamHeaEWYMYQUqud-5VdwpPRbj8Kx2klFPWllwhaqUxm0Tnho8EmJUUCgp7Xhmp96_nlm-lBtZC5lIWqFN7NAHL5D9w-YzEZFagiuD5MkTn6aaFgH6nSftj4WX2HNtwP6ey4pbM864Cw3-rv2dLclCLCJKKeKFeadkVsQUzTCy6AacJxnDy17AVC-0hHY711"
                    />
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-[#0052CC]/30 z-10"></div>
                  </div>
                </div>
                <div className="w-full lg:w-2/3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[9px] font-black uppercase tracking-[0.2em] mb-8">
                    Founder&apos;s Note
                  </div>
                  <h2 className="text-5xl font-headline font-black text-zinc-100 mb-10 leading-[0.9] tracking-tighter italic">Why we built <br/><span className="text-[#0052CC]">Indigent Scholars.</span></h2>
                  <div className="space-y-8 text-xl text-zinc-400 font-medium leading-relaxed">
                    <p>&quot;Nigeria&apos;s greatest resource isn&apos;t under our feet; it&apos;s between the ears of our youth. Growing up, I saw too many brilliant minds forced to trade textbooks for street vending.&quot;</p>
                    <p>&quot;Indigent Scholars was born from a simple belief: poverty should never be a death sentence for dreams. We&apos;ve built a bridge that provides more than just cash—it provides a community.&quot;</p>
                    <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
                       <div className="w-12 h-12 rounded-full bg-zinc-800" />
                       <div>
                         <p className="font-headline font-black text-white text-lg">Chinedu Okoro</p>
                         <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest">Executive Chairman</p>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Team - Minimal & Professional */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8 text-center mb-24">
          <h2 className="text-5xl font-headline font-black text-zinc-100 mb-6 tracking-tight">Leadership & Transparency</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto font-medium text-lg">Meet the architects dedicated to scaling educational equity across all 36 states.</p>
        </div>
        <FadeUpStagger className="max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { name: "Amina Bello", role: "Chief Operations Officer", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmWiQo5uWKiKipkzwht2-L0umKiUNv7_qF8lCyYX6S_PVt51lGTxen_Q83qDuSFDwpZ3B6GhIMah87vlhznufRXRyYuayxmJTL55DmcC44JLvXZ7DC0fz_qP90Giohx-E2LJyqALSOJPY1BoCKH3cTe_CU1WvPuvu0dFyvVCAxhL12yxfu4eTdqJpzZrP6G8ERBRDbU2hnaLrcp0PE94iAIJMc0L-95Me62iz9SS4TPkB7ylJYm3wbzFGvt2USREHhcp0In6wG4xqb" },
            { name: "Tunde Adeyemi", role: "Head of Technology", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBC-AfwltfwKv3ekyBZnATAIKIRIMugAOLwmBn1Ad-t33LBXoYRoKFEszaJ0s5-F3fxV9_wj-ZaqIqDQe2RhoQk3nU-mkszEWFepdy-m4KjXh1jZmV75NcK1ZSTKTgc5Nv1NYkQSYCsr3ygi1RrOCWlBkzZIECklUBQag5EyTpF50s7QDeuJ-BRZMvRq_fVUsuDIOlpOJjVEzJ-0UaO6nq9ZNfGqXqvTRtqkQjfmB3p5cx35GE1f5vRFjv6W6Z_TIm2VrcCcjUe0ePL" },
            { name: "Dr. Samuel Ibrahim", role: "Academic Liaison", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhq7-6boztXxoF7KJPAPwqaxcnL92Dhwr3yO6GLXnv_ZQbXLMEB3vjmG0LxYh-AZwXeakRrBPsGJPwmrLxs_SCkBugh1PZo3CLQBJfH8c6sEFyl4vXXjJqbn1mIcBtBsKTeqqkemMHgtUqFLYZmJocQUwkavyJUx238Iqb7OG-9buf7GTvpN-Dr9LngJ9Hk3xhtzqPbuY0ndjWg8c4CfhksWgPHenyIJKeUxLgJKO9ATyfCA9nWAXToCeo4y9khBeI4QPtIGxzw6L7" },
            { name: "Grace Okon", role: "Head of Impact", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0bkmU_97bPKZYriw8aZ9paB3ybzUs_UwF_dRe5J24L4AvZA8kQRJ2Rd20s6Zfi9ClI9pGU5U_bUxgdlv5qFhcDDUY6nsQsNbm1CF6O7I4GySgJrYWtTZvZduIMZwI-v6eoq7SUNhh4i7fOoe8O7L3a1p8AGRCu4RQB2TMwy5_Rxn1gLCtZAI6XAmX-bbFWBl0oBCd-dmKwvRwlRU_vpcixyPonPVVnjir1BZqKq4rLUJV85S3TSy0T3k4uxyp4iQrKfTTQI97IY8s" }
          ].map((member, i) => (
            <div key={i} className="group">
              <div className="relative mb-8 overflow-hidden rounded-[32px] aspect-[4/5] sm:aspect-square bg-zinc-900 border border-zinc-800/50">
                <Image fill className="object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" alt={member.name} src={member.img}/>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-xl font-headline font-black text-zinc-100 mb-1 group-hover:text-[#0052CC] transition-colors">{member.name}</h4>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0052CC]">{member.role}</p>
            </div>
          ))}
        </FadeUpStagger>
      </section>

      {/* CTA Section - Sophisticated Inlay */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto relative rounded-[64px] bg-[#0052CC] p-20 text-center overflow-hidden group">
          <SlideIn direction="up">
            <h2 className="text-5xl md:text-7xl font-headline font-black text-white mb-8 tracking-tighter leading-none">Ready to sponsor<br/> a future?</h2>
            <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto font-medium">Join hundreds of visionaries making a difference in the lives of Nigeria&apos;s most brilliant indigent scholars.</p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <button className="bg-white text-[#0052CC] px-12 py-5 rounded-[24px] font-black uppercase text-sm tracking-widest hover:scale-105 transition-all shadow-2xl shadow-blue-900/40">Become a Partner</button>
              <button className="border-2 border-white/30 text-white px-12 py-5 rounded-[24px] font-black uppercase text-sm tracking-widest hover:bg-white/10 transition-all">View Scholars</button>
            </div>
          </SlideIn>
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-white/10 transition-all duration-1000" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/20 rounded-full -ml-32 -mb-32 blur-3xl" />
        </div>
      </section>
      </main>
    </div>
  );
}
