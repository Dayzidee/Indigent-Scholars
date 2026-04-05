'use client';

import { FadeUpStagger } from '@/components/ui/FadeUpStagger';
import { SlideIn } from '@/components/ui/SlideIn';

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[870px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            alt="Stately Nigerian university library architecture with grand columns and modern glass features in soft afternoon light" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOBu0rpw9PcOj203sMTGMsLO_J98-TllPmp8UmS5r9R_smCYJDNNJUEpIQoTAO2Q00CYzH0m8x4sqe_6t_nxiZWOC0MascGoZGBcIPVmyehRnKIU886fmJ6JMaePC6u9z4mST9yoKBu-Z7dTE1uXpDDBAtPoU8AxWjuR2taO62oebpyiqEO20pPIMsjTvMoAj4kYfCxUCFHD7LLKrm42JrJmt_Wigk-NADZb7ZWJ2aB_Y-bH_fSGiQg7COIvg0mbS5NEJyum6DadPT"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <FadeUpStagger className="max-w-3xl">
            <h1 className="text-white text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              Preparing Nigeria for the future
            </h1>
            <p className="text-primary-fixed-dim text-xl md:text-2xl font-light mb-10 leading-relaxed">
              Connecting the most promising indigent scholars with visionaries who believe that access to education is the ultimate catalyst for nation-building.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#D4AF37] text-black px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:brightness-110 transition-all">
                Partner With Us
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </FadeUpStagger>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <SlideIn direction="right">
                <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 tracking-tight">Changing Lives Through Access to Education</h2>
                <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                  We are on a mission to bridge the gap between financial constraints and academic brilliance. By leveraging technology, we ensure that every talented Nigerian student has a seat in the lecture hall.
                </p>
                <div className="p-8 border-l-4 border-[#D4AF37] bg-surface-container-low rounded-r-xl italic text-xl text-on-surface font-medium">
                  &quot;Each grant represents not just funding but opportunity, dignity, and transformation.&quot;
                </div>
              </SlideIn>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <SlideIn direction="left" delay={0.2}>
                <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border-b-4 border-primary h-full">
                  <div className="text-5xl font-black text-primary mb-2">50,000</div>
                  <div className="text-sm uppercase tracking-widest font-bold text-on-surface-variant">Scholars Goal</div>
                  <p className="mt-4 text-on-surface-variant text-sm">Empowering the next generation of Nigerian leaders by 2030.</p>
                </div>
              </SlideIn>
              <SlideIn direction="left" delay={0.4}>
                <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border-b-4 border-[#D4AF37] h-full">
                  <div className="text-5xl font-black text-[#D4AF37] mb-2">3X</div>
                  <div className="text-sm uppercase tracking-widest font-bold text-on-surface-variant">Income Increase</div>
                  <p className="mt-4 text-on-surface-variant text-sm">Average career earnings growth for our verified graduates.</p>
                </div>
              </SlideIn>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <FadeUpStagger className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] focus-within:ring-2 ring-primary">
              <span className="material-symbols-outlined text-4xl text-primary mb-6" style={{fontVariationSettings: "'FILL' 1"}}>visibility</span>
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-on-surface-variant leading-relaxed">To unlock the potential of every aspiring young mind in Nigeria, creating a nation where financial barriers no longer dictate the limits of human achievement.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] focus-within:ring-2 ring-primary">
              <span className="material-symbols-outlined text-4xl text-primary mb-6" style={{fontVariationSettings: "'FILL' 1"}}>rocket_launch</span>
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <p className="text-on-surface-variant leading-relaxed">To expand access to higher education through a comprehensive digital platform that connects verified talent with sponsors through transparent, high-impact grants.</p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] focus-within:ring-2 ring-primary">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <span className="material-symbols-outlined text-primary text-2xl">favorite</span>
                  <div className="font-bold">Passion</div>
                </div>
                <div className="space-y-2">
                  <span className="material-symbols-outlined text-primary text-2xl">bolt</span>
                  <div className="font-bold">Empowerment</div>
                </div>
                <div className="space-y-2">
                  <span className="material-symbols-outlined text-primary text-2xl">auto_awesome</span>
                  <div className="font-bold">Simplicity</div>
                </div>
                <div className="space-y-2">
                  <span className="material-symbols-outlined text-primary text-2xl">trending_up</span>
                  <div className="font-bold">Results</div>
                </div>
              </div>
              <h3 className="text-2xl font-bold mt-8 mb-4">Our Core Values</h3>
              <p className="text-xs text-stone-400 uppercase tracking-widest font-black">The pillars of our impact</p>
            </div>
          </FadeUpStagger>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <SlideIn direction="up">
            <div className="relative bg-inverse-surface rounded-3xl p-12 md:p-20 overflow-hidden">
              <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 transform skew-x-12 translate-x-20"></div>
              <div className="flex flex-col md:flex-row gap-16 relative z-10">
                <div className="w-full md:w-1/3">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#D4AF37]"></div>
                    <img 
                      className="w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl" 
                      alt="Distinguished Nigerian philanthropist in a professional navy suit, warm expression, minimalist studio background with soft cinematic lighting" 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQLexQOLcoeTn9-mfJAKYFLFAgbv4i5BBxOVeYZLK8tclHtpkErs26YeOf2m3x9-zmh6taRmkaZzetfamHeaEWYMYQUqud-5VdwpPRbj8Kx2klFPWllwhaqUxm0Tnho8EmJUUCgp7Xhmp96_nlm-lBtZC5lIWqFN7NAHL5D9w-YzEZFagiuD5MkTn6aaFgH6nSftj4WX2HNtwP6ey4pbM864Cw3-rv2dLclCLCJKKeKFeadkVsQUzTCy6AacJxnDy17AVC-0hHY711"
                    />
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-primary"></div>
                  </div>
                </div>
                <div className="w-full md:w-2/3 text-white">
                  <h4 className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm mb-4">A Message from the Founder</h4>
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Why we built Indigent-Sc</h2>
                  <div className="space-y-6 text-lg text-stone-300 leading-relaxed">
                    <p>&quot;Nigeria&apos;s greatest resource isn&apos;t under our feet; it&apos;s between the ears of our youth. Growing up, I saw too many brilliant minds forced to trade their textbooks for street vending because they couldn&apos;t afford school fees.&quot;</p>
                    <p>&quot;Indigent-Sc was born from a simple belief: poverty should never be a death sentence for dreams. We&apos;ve built a bridge that doesn&apos;t just provide cash—it provides a community of believers for every scholar.&quot;</p>
                    <p className="font-bold text-white pt-4">— Chinedu Okoro, Founder & Executive Chairman</p>
                  </div>
                </div>
              </div>
            </div>
          </SlideIn>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8 text-center mb-16">
          <h2 className="text-4xl font-extrabold text-primary mb-4">Leadership & Transparency</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Meet the architects behind the platform, dedicated to scaling educational equity across all 36 states.</p>
        </div>
        <FadeUpStagger className="max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <div className="group cursor-pointer">
            <div className="relative mb-6 overflow-hidden rounded-xl">
              <img className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110" alt="Professional Nigerian woman executive, corporate headshot, confident smile, clean grey background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmWiQo5uWKiKipkzwht2-L0umKiUNv7_qF8lCyYX6S_PVt51lGTxen_Q83qDuSFDwpZ3B6GhIMah87vlhznufRXRyYuayxmJTL55DmcC44JLvXZ7DC0fz_qP90Giohx-E2LJyqALSOJPY1BoCKH3cTe_CU1WvPuvu0dFyvVCAxhL12yxfu4eTdqJpzZrP6G8ERBRDbU2hnaLrcp0PE94iAIJMc0L-95Me62iz9SS4TPkB7ylJYm3wbzFGvt2USREHhcp0In6wG4xqb"/>
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h4 className="text-xl font-bold text-on-surface">Amina Bello</h4>
            <p className="text-primary font-medium text-sm">Chief Operations Officer</p>
          </div>
          {/* Team Member 2 */}
          <div className="group cursor-pointer">
            <div className="relative mb-6 overflow-hidden rounded-xl">
              <img className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110" alt="Young male tech executive, glasses, tech-modern headshot, soft industrial office background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC-AfwltfwKv3ekyBZnATAIKIRIMugAOLwmBn1Ad-t33LBXoYRoKFEszaJ0s5-F3fxV9_wj-ZaqIqDQe2RhoQk3nU-mkszEWFepdy-m4KjXh1jZmV75NcK1ZSTKTgc5Nv1NYkQSYCsr3ygi1RrOCWlBkzZIECklUBQag5EyTpF50s7QDeuJ-BRZMvRq_fVUsuDIOlpOJjVEzJ-0UaO6nq9ZNfGqXqvTRtqkQjfmB3p5cx35GE1f5vRFjv6W6Z_TIm2VrcCcjUe0ePL"/>
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h4 className="text-xl font-bold text-on-surface">Tunde Adeyemi</h4>
            <p className="text-primary font-medium text-sm">Head of Technology</p>
          </div>
          {/* Team Member 3 */}
          <div className="group cursor-pointer">
            <div className="relative mb-6 overflow-hidden rounded-xl">
              <img className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110" alt="Senior male executive, professional attire, institutional background, warm lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhq7-6boztXxoF7KJPAPwqaxcnL92Dhwr3yO6GLXnv_ZQbXLMEB3vjmG0LxYh-AZwXeakRrBPsGJPwmrLxs_SCkBugh1PZo3CLQBJfH8c6sEFyl4vXXjJqbn1mIcBtBsKTeqqkemMHgtUqFLYZmJocQUwkavyJUx238Iqb7OG-9buf7GTvpN-Dr9LngJ9Hk3xhtzqPbuY0ndjWg8c4CfhksWgPHenyIJKeUxLgJKO9ATyfCA9nWAXToCeo4y9khBeI4QPtIGxzw6L7"/>
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h4 className="text-xl font-bold text-on-surface">Dr. Samuel Ibrahim</h4>
            <p className="text-primary font-medium text-sm">Academic Liaison Director</p>
          </div>
          {/* Team Member 4 */}
          <div className="group cursor-pointer">
            <div className="relative mb-6 overflow-hidden rounded-xl">
              <img className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110" alt="Nigerian woman marketing executive, bright smile, modern professional headshot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0bkmU_97bPKZYriw8aZ9paB3ybzUs_UwF_dRe5J24L4AvZA8kQRJ2Rd20s6Zfi9ClI9pGU5U_bUxgdlv5qFhcDDUY6nsQsNbm1CF6O7I4GySgJrYWtTZvZduIMZwI-v6eoq7SUNhh4i7fOoe8O7L3a1p8AGRCu4RQB2TMwy5_Rxn1gLCtZAI6XAmX-bbFWBl0oBCd-dmKwvRwlRU_vpcixyPonPVVnjir1BZqKq4rLUJV85S3TSy0T3k4uxyp4iQrKfTTQI97IY8s"/>
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <h4 className="text-xl font-bold text-on-surface">Grace Okon</h4>
            <p className="text-primary font-medium text-sm">Head of Impact & PR</p>
          </div>
        </FadeUpStagger>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center">
        <SlideIn direction="up" className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Ready to sponsor a future?</h2>
          <p className="text-primary-fixed-dim text-xl mb-12">Join hundreds of sponsors already making a difference in the lives of brilliant Nigerian scholars.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-stone-100 transition-all">Become a Sponsor</button>
            <button className="border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">View Student Profiles</button>
          </div>
        </SlideIn>
      </section>
    </main>
  );
}

