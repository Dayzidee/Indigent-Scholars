'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const scholars = [
  {
    name: 'Chinyere',
    school: 'University of Lagos',
    field: 'STEM',
    fieldColor: 'bg-tertiary-fixed text-on-tertiary-fixed',
    description: 'Aspiring Biomedical Engineer dedicated to solving healthcare infrastructure challenges in rural West Africa.',
    raised: '₦1,250,000',
    goal: '₦3.5M',
    progress: 35.7,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdRWo557z1Qbih3NKBzTE-ODxroBO8lejO8DCyP6jPlSQl4HIhUmc8U4IlGVJ4Eea5RPus68FExWGrAYhelgkEGDGyFnc-IffEGj1o_meiB8AO-Yw5HbZBmo3AloKudmsICS-EopxV7SvIQmpqqp7lHwEJ6npHWXfTicJ0ljSippKTxA0bPJzkaovJNTq1A-BU9sT4I0n0C9a8zpWtTvV8TJDUgg-tdq0S-wan5f3I1s6xo1Gu_wMylQ48KtJnLVT4Awxfsj9tt_JI'
  },
  {
    name: 'Oluwaseun',
    school: 'University of Ibadan',
    field: 'Medicine',
    fieldColor: 'bg-tertiary-fixed text-on-tertiary-fixed', // Note: Using tertiary as per snippet's tactical use
    description: 'Fourth-year medical student with a 4.8 GPA, working towards specializing in pediatric surgery.',
    raised: '₦2,800,000',
    goal: '₦3.0M',
    progress: 93.3,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3TgeUVzga9BWtJLmKlLd2Sdi-dn2EKG0P_T1J5yfiJmQPu0o6spOz-9kLQuAjdPYOeF1CMHbmwV3438v3xutXxWI2nXF9rpwBDWlpXT3sVYnOPH7Eg41GouYVXIhX0mbenNiMUA2f4ZPboQRsrDaMnw-vFcv2Qbeg3I4x-udrJiP5u6O_mVKlib6jfQSaDHYYlqaWWN4RPfAT_i_J03igFzVlhU4lCnRnpR_5Sr7NBDRC5xaTcVsoIA3IE-6oJKKlwmuyDxKnGPwM'
  },
  {
    name: 'Amara',
    school: 'Covenant University',
    field: 'Tech',
    fieldColor: 'bg-tertiary-fixed text-on-tertiary-fixed',
    description: 'Computer Science student building open-source tools for agricultural supply chain optimization.',
    raised: '₦450,000',
    goal: '₦2.2M',
    progress: 20.4,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCj1WpBrA0u7e5bcNV4P0fQ_dHHIe8-OzBDiZqRHgqPDd4RENMS8IKjT5URmFEC_PJqx9SB3t7JFGQ-G3eUdoT00Ky3rt3-m7en8nacoxtEtSSvHPpKZ-UoKmz8qJXLkTvqoRVVmbg_bQ5Wwuhv-6lx9aOV_QAvtXkYU558wf97UtVYoFXz1Ves0CoOMerIRK3a0fo-gb4M-Ma1NC5dN-ibo5We7sjv5-N66zGPEYSun7DtRwCbOFiQgVT9r66Wm7ddHWY4HnNKPpGo'
  }
]

export function SponsorDiscovery() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-12"
    >
      {/* Header Section */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-primary font-black text-xs tracking-[0.2em] uppercase mb-2 block font-label">Student Matchmaker</span>
            <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-on-surface font-headline">Discover Future Leaders</h1>
            <p className="text-on-surface-variant mt-2 max-w-2xl font-body leading-relaxed">
              Browse verified scholars whose academic potential outweighs their financial means. Every contribution builds a bridge to excellence.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-outline-variant/30 text-sm font-bold hover:bg-white hover:border-primary/20 transition-all font-headline">
              <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'wght' 700" }}>filter_list</span>
              Filters
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-on-background text-surface text-sm font-bold hover:opacity-90 active:scale-95 transition-all font-headline">
              <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'wght' 700" }}>sort</span>
              High Need First
            </button>
          </div>
        </div>
      </section>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {scholars.map((scholar, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-surface-container-lowest rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 border border-outline-variant/10"
          >
            <div className="relative h-64 overflow-hidden">
              <Image 
                src={scholar.image}
                alt={scholar.name}
                width={400}
                height={256}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-secondary-container/90 backdrop-blur-md px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg border border-white/20">
                <span className="material-symbols-outlined text-sm text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-on-secondary-container font-label">Verified Scholar</span>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-on-surface leading-tight font-headline">{scholar.name}</h3>
                  <p className="text-sm font-bold text-on-surface-variant font-body">{scholar.school}</p>
                </div>
                <span className={cn("text-[10px] font-black px-3 py-1 rounded-lg border border-current/10 uppercase tracking-widest font-label", scholar.fieldColor)}>
                  {scholar.field}
                </span>
              </div>
              
              <p className="text-sm text-on-surface-variant font-body leading-relaxed line-clamp-2 mb-8 italic">
                {scholar.description}
              </p>
              
              <div className="space-y-4">
                <div className="flex justify-between text-[11px] font-black uppercase tracking-widest font-label">
                  <span className="text-primary">{scholar.raised} Raised</span>
                  <span className="text-on-surface-variant opacity-60">Goal: {scholar.goal}</span>
                </div>
                <div className="h-2.5 w-full bg-surface-container-high rounded-full overflow-hidden p-0.5 border border-outline-variant/5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${scholar.progress}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-primary rounded-full shadow-[0_0_8px_rgba(0,61,155,0.3)]"
                  ></motion.div>
                </div>
              </div>
              
              <div className="mt-10 flex gap-3">
                <button className="flex-1 py-4 bg-primary-container text-on-primary rounded-2xl font-black text-sm shadow-xl shadow-primary/10 hover:brightness-110 active:scale-95 transition-all font-headline text-shadow-sm">
                  Fund Scholar
                </button>
                <button className="px-5 py-4 border border-outline-variant text-on-surface-variant rounded-2xl hover:bg-surface-container-low hover:border-primary/20 transition-all group">
                  <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">visibility</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Impact Summary Card (Asymmetric Element) */}
        <div className="lg:col-span-3 bg-inverse-surface rounded-[2.5rem] p-10 lg:p-14 flex flex-col lg:flex-row items-center gap-12 mt-8 overflow-hidden relative group">
          <div className="absolute right-0 top-0 opacity-5 pointer-events-none transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-6">
            <span className="material-symbols-outlined text-[400px]" style={{ fontVariationSettings: "'wght' 100" }}>auto_awesome</span>
          </div>
          
          <div className="flex-1 z-10 space-y-6">
            <h2 className="text-3xl lg:text-4xl font-black text-surface leading-[1.1] font-headline">
              Your collective contribution could bridge the final gap for 12 scholars this month.
            </h2>
            <p className="text-surface-variant text-lg lg:text-xl opacity-70 font-body max-w-2xl leading-relaxed">
              Join our "Last Mile" initiative and help students who are over 90% funded cross the finish line.
            </p>
            <button className="px-10 py-5 bg-secondary-container text-on-secondary-container rounded-2xl font-black text-lg shadow-2xl shadow-black/20 hover:scale-105 active:scale-95 transition-all font-headline">
              Support "Last Mile" Scholars
            </button>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 w-full lg:w-72 z-10">
            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
              <div className="text-secondary-fixed text-4xl font-black mb-1 font-headline">84%</div>
              <div className="text-surface-variant text-xs font-black uppercase tracking-[0.2em] opacity-60 font-label">Avg. Completion</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
              <div className="text-tertiary-fixed text-4xl font-black mb-1 font-headline">1,240</div>
              <div className="text-surface-variant text-xs font-black uppercase tracking-[0.2em] opacity-60 font-label">Lives Changed</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
