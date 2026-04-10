'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

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
      className="w-full max-w-7xl mx-auto space-y-8 md:space-y-12 pb-20"
    >
      {/* Header Section */}
      <section className="space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[#0052CC] font-bold text-[10px] tracking-[0.2em] uppercase mb-1 block font-label">Student Matchmaker</span>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 font-headline leading-tight">Discover Future Leaders</h1>
            <p className="text-zinc-500 mt-2 max-w-2xl font-body text-xs md:text-sm leading-relaxed">
              Browse verified scholars whose academic potential outweighs their financial means. Every contribution builds a bridge to excellence.
            </p>
          </div>
          <div className="flex gap-2 w-full md:w-auto mt-4 md:mt-0">
            <Button variant="outline" iconLeft="filter_list" className="flex-1 md:flex-none">
              Filters
            </Button>
            <Button variant="secondary" iconLeft="sort" className="flex-1 md:flex-none">
              High Need First
            </Button>
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
            className="bg-white rounded-[40px] overflow-hidden group hover:shadow-2xl hover:shadow-blue-600/5 transition-all duration-500 border border-zinc-100 flex flex-col"
          >
            <div className="relative h-64 overflow-hidden">
              <Image 
                src={scholar.image}
                alt={scholar.name}
                width={400}
                height={256}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm border border-white/20">
                <span className="material-symbols-outlined text-sm text-[#0052CC]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                <span className="text-[9px] font-black uppercase tracking-widest text-zinc-900 font-label">Verified</span>
              </div>
            </div>
            
            <div className="p-6 md:p-8 lg:p-10 flex flex-1 flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-zinc-900 leading-tight font-headline tracking-tight">{scholar.name}</h3>
                    <p className="text-xs font-bold text-zinc-400 font-label uppercase tracking-widest leading-none">{scholar.school}</p>
                  </div>
                  <span className="text-[9px] font-black px-3 py-1 rounded-lg border border-zinc-100 bg-zinc-50 text-zinc-500 uppercase tracking-widest font-label">
                    {scholar.field}
                  </span>
                </div>
                
                <p className="text-sm text-zinc-500 font-body leading-relaxed mb-8 italic">
                  "{scholar.description}"
                </p>
              </div>
              
              <div className="space-y-5">
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest font-label">
                    <span className="text-[#0052CC]">{scholar.raised} Raised</span>
                    <span className="text-zinc-400">Goal: {scholar.goal}</span>
                  </div>
                  <div className="h-3 w-full bg-zinc-100 rounded-full overflow-hidden p-1 border border-zinc-200">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${scholar.progress}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-[#0052CC] rounded-full shadow-sm"
                    ></motion.div>
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button className="flex-1">
                    Fund Scholar
                  </Button>
                  <Button variant="outline" className="px-5">
                    <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">visibility</span>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Impact Summary Card */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-zinc-900 rounded-[32px] md:rounded-[48px] p-6 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-10 md:gap-14 mt-8 overflow-hidden relative group shadow-2xl">
          <div className="absolute right-0 top-0 opacity-10 pointer-events-none transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-6">
            <span className="material-symbols-outlined text-[150px] md:text-[400px] text-white" style={{ fontVariationSettings: "'wght' 100" }}>auto_awesome</span>
          </div>
          
          <div className="flex-1 z-10 space-y-6 md:space-y-8 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight font-headline tracking-tight md:tracking-tighter">
              Bridge the final gap for 12 scholars this month.
            </h2>
            <p className="text-white/60 text-sm md:text-base lg:text-xl font-body max-w-2xl leading-relaxed">
              Join our "Last Mile" initiative and help students who are over 90% funded cross the finish line.
            </p>
            <Button variant="primary" size="lg" className="w-full lg:w-auto">
              Support "Last Mile" Scholars
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6 w-full lg:w-80 z-10">
            <div className="bg-white/5 backdrop-blur-xl p-6 md:p-8 rounded-[24px] md:rounded-[32px] border border-white/10 shadow-2xl">
              <div className="text-[#0052CC] text-3xl sm:text-4xl md:text-5xl font-black mb-1 font-headline tracking-tighter">84%</div>
              <div className="text-white/40 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] font-label">Avg. Completion</div>
            </div>
            <div className="bg-white/5 backdrop-blur-xl p-6 md:p-8 rounded-[24px] md:rounded-[32px] border border-white/10 shadow-2xl">
              <div className="text-emerald-500 text-3xl sm:text-4xl md:text-5xl font-black mb-1 font-headline tracking-tighter">1,240</div>
              <div className="text-white/40 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] font-label">Lives Changed</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
