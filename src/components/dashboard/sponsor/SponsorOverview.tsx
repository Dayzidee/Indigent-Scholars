'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { useRecentlyViewed } from '@/hooks/useRecentlyViewed'
import { STUDENTS_DATA } from '@/lib/constants/mock-data'
import Link from 'next/link'

export function SponsorOverview() {
  const { recentIds } = useRecentlyViewed()
  
  const recentStudents = recentIds
    .map(id => STUDENTS_DATA.find(s => s.id === id))
    .filter((s): s is typeof STUDENTS_DATA[0] => !!s)
    .slice(0, 4)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-7xl mx-auto space-y-6 md:space-y-12 pt-10 md:pt-16 pb-10"
    >

      {/* Header Content */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-headline tracking-tight text-zinc-100 leading-tight">Impact Overview</h2>
          <p className="text-zinc-400 max-w-xl font-body leading-relaxed text-xs md:text-sm">
            Tracking your architectural legacy in Nigerian education. Your contributions have enabled 42 scholars this semester.
          </p>
        </div>
        <div className="flex gap-2 w-full md:w-auto mt-4 md:mt-0">
          <Button variant="outline" className="flex-1 md:flex-none font-black tracking-tight">
            Export Report
          </Button>
          <Link href="/dashboard/sponsor/fund">
            <Button 
                iconLeft="search" 
                className="flex-1 md:flex-none font-black tracking-tight"
            >
                Discover Scholars
            </Button>
          </Link>
        </div>
      </section>

      {/* Recently Viewed Shortcuts */}
      {recentStudents.length > 0 && (
         <section className="space-y-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                   <span className="material-symbols-outlined text-zinc-400">history</span>
                   <h3 className="text-xl font-black font-headline tracking-tight text-zinc-100">Recently Viewed Scholars</h3>
                </div>
                <Link href="/dashboard/sponsor/fund" className="text-[10px] font-black uppercase tracking-widest text-[#0052CC] hover:underline">See All</Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {recentStudents.map((student) => (
                  <Link key={student.id} href={`/students/${student.id}`}>
                    <motion.div 
                      whileHover={{ y: -4 }}
                      className="bg-zinc-900 p-4 sm:p-6 rounded-3xl border border-zinc-800 hover:border-[#0052CC]/50 transition-all flex items-center gap-4 group"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-zinc-800 overflow-hidden shrink-0 border border-zinc-800">
                           <Image src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&auto=format&fit=crop&q=60" width={100} height={100} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={student.name || 'Student'} />
                        </div>
                        <div className="min-w-0">
                           <p className="font-headline font-black text-zinc-100 truncate leading-tight group-hover:text-[#0052CC] transition-colors">{student.name}</p>
                           <p className="text-[9px] font-medium text-zinc-400 truncate">{student.university} • {student.gpa}</p>
                        </div>
                    </motion.div>
                  </Link>
                ))}
            </div>
         </section>
      )}

      {/* Hero Impact Stats - Independent Layout */}
      <section className="space-y-6">
        {/* Row 1: Independent Analytics & Chart */}
        <div className="bg-zinc-900 rounded-3xl lg:rounded-[40px] p-6 sm:p-10 flex flex-col justify-between relative border border-zinc-800 shadow-2xl shadow-black/20 overflow-hidden group w-full">
          {/* Subtle Background Pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0052CC]/5 rounded-full blur-[120px] -mr-48 -mt-48 transition-all duration-1000 group-hover:bg-[#0052CC]/10" />
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between gap-8 md:gap-16 mb-12">
            <div className="space-y-2 flex-1">
              <label className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400 font-label">Lifetime Funding Impact</label>
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline text-[#0052CC] leading-none tracking-tighter">₦72,400,000</span>
                <div className="flex items-center gap-1.5 bg-emerald-950/30 text-emerald-500 px-4 py-2 rounded-full border border-emerald-900/20">
                  <span className="material-symbols-outlined text-[10px] font-black">trending_up</span>
                  <span className="text-[10px] font-black uppercase tracking-widest">Growth +12.5%</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-2 md:border-l md:pl-16 border-zinc-800/50 flex-1">
              <label className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400 font-label">Active Scholars Supported</label>
              <div className="flex items-baseline gap-4 relative">
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline text-zinc-100 leading-none tracking-tighter">142</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D4AF37] bg-[#D4AF37]/5 px-4 py-2 rounded-full border border-[#D4AF37]/20">
                  Prestige Elite
                </span>
              </div>
            </div>
          </div>

          {/* Expanded Funding History Chart */}
          <div className="mt-8 relative h-56 w-full">
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 px-4 h-full">
              {[20, 45, 35, 60, 55, 75, 100, 85, 95, 80, 110, 130].map((height, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "w-full rounded-t-xl transition-all duration-1000 ease-[cubic-bezier(0.2,1,0.3,1)] relative group/bar cursor-pointer",
                    i === 11 ? "bg-[#0052CC] shadow-[0_0_40px_rgba(0,82,204,0.4)]" : "bg-zinc-800/60 hover:bg-zinc-700"
                  )}
                  style={{ height: `${(height / 130) * 100}%`, transitionDelay: `${i * 50}ms` }}
                >
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-all duration-300 bg-zinc-800 text-white text-[10px] font-black px-3 py-1.5 rounded-xl border border-zinc-700 pointer-events-none translate-y-2 group-hover/bar:translate-y-0 shadow-xl z-20">
                    ₦{(height * 1.5).toFixed(1)}M
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-[-40px] w-full flex justify-between text-[11px] font-black text-zinc-400 uppercase tracking-[0.3em] px-4 font-label">
              <span>Oct</span><span>Nov</span><span>Dec</span><span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span>
            </div>
          </div>
        </div>

        {/* Row 2: Milestone & CEO Ads */}
        <div className="grid grid-cols-12 gap-6">
          {/* Milestone Card */}
          <div className="col-span-12 md:col-span-4 bg-[#D4AF37] text-white rounded-3xl lg:rounded-[40px] p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between group border border-white/10 shadow-2xl shadow-[#D4AF37]/10 min-h-[360px]">
            <div className="absolute bottom-[-5%] right-[-5%] opacity-15 rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110">
              <span className="material-symbols-outlined text-[160px] md:text-[200px] font-black">rewarded_ads</span>
            </div>
            
            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-white/20">
                <span className="material-symbols-outlined text-2xl text-white" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black font-headline leading-[1.1] mb-4 tracking-tight">Architect of Future Leaders</h3>
              <p className="text-xs md:text-sm font-bold text-white/80 max-w-[240px] leading-relaxed uppercase tracking-wider">
                Top 5% global sponsors. Next milestone: 150 scholars.
              </p>
            </div>


          </div>

          {/* Promotional / Ads Banner */}
          <div className="col-span-12 md:col-span-8 bg-zinc-900 rounded-3xl lg:rounded-[40px] relative overflow-hidden border border-zinc-800 shadow-2xl group min-h-[360px] flex flex-col">
            {/* Background Image / Pattern */}
            <div className="absolute inset-0 opacity-20 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105">
               <Image 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" 
                alt="Ad Background" 
                fill 
                className="object-cover"
               />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40 z-10 md:bg-gradient-to-r" />
            
            <div className="relative z-20 h-full p-6 sm:p-12 flex flex-col justify-between">
               {/* CEO Badge - Made responsive, no longer absolute overlapping text on mobile */}
               <div className="flex justify-end mb-6 md:absolute md:top-8 md:right-8 md:mb-0">
                 <div className="flex items-center gap-3 bg-zinc-900/80 backdrop-blur-md p-3 rounded-2xl border border-zinc-800 shadow-lg">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800 overflow-hidden shrink-0 border border-zinc-700">
                       <Image 
                         src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop" 
                         alt="CEO" 
                         width={100} 
                         height={100} 
                         className="w-full h-full object-cover"
                       />
                    </div>
                    <div className="pr-2 text-left">
                       <p className="text-[10px] font-black text-zinc-100 leading-tight">CEO Message</p>
                       <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">Official Notice</p>
                    </div>
                 </div>
               </div>

               <div className="space-y-4 max-w-lg mt-auto md:mt-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="bg-[#0052CC] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">Sponsor Spotlight</span>
                    <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Exclusive Invitation</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black font-headline text-zinc-100 leading-[1.1] tracking-tighter">
                    Indigent Excellence <br className="hidden md:block" />
                    <span className="text-[#0052CC]">Summit 2024</span>
                  </h3>
                  <p className="text-sm md:text-base text-zinc-400 font-medium leading-relaxed">
                    Join 500+ global architects of education for an exclusive evening of impact reporting and strategic endowment planning.
                  </p>
               </div>

               <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full mt-8 md:mt-10">
                  <Button className="w-full sm:w-auto font-black text-xs uppercase tracking-widest px-8 py-6 rounded-2xl bg-[#0052CC] hover:bg-[#0040A3] shadow-xl shadow-[#0052CC]/20 group/btn">
                    Register Interest
                    <span className="material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </Button>
                  <Button variant="outline" className="w-full sm:w-auto font-black text-xs uppercase tracking-widest px-8 py-6 rounded-2xl border-zinc-800 hover:bg-zinc-800 text-zinc-300">
                    Download Agenda
                  </Button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unified Scholar Funding Section */}
      <section className="space-y-8 pt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
             <span className="material-symbols-outlined text-[#0052CC] font-bold">payments</span>
             <h3 className="text-xl md:text-2xl font-black font-headline tracking-tight text-zinc-100">Scholar Funding</h3>
          </div>
          <Button variant="ghost" size="sm" className="text-[10px] tracking-widest px-2">View Ledger</Button>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          {[
            { 
              name: 'Chinonso Okafor', 
              type: 'Engineering Scholar', 
              amount: '₦4,200,000',
              purpose: 'Tuition Bulk Payment & Structural Kits',
              time: '2 days ago',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDLg0vDIncm33LONea9Ngf0BgygU1R0PlhgXBk2zJ7DwoHbujAl7rQsb6gZT6zT7HFCzMvxLSELvQ6DWXhlbAJCx9qdNDk0_GnOGR9U9LlRp05xqR-Egw3nx8v7Eo00X6bebWdF9Vw6qdtr5LQ7sJMbvCumSNVQVYdTFfl9J_nQNAnQs-BBhU-oMjTjKXjf6WE4HxKw4VS4fVJSr42IKMF08qUnTmH0YZ17BVKwHoc-3qw8zuiKlC2zU0pJqG3fBJy16j_U4keFBaU',
              quote: 'This funding didn\'t just pay my fees; it validated my dream of becoming a structural engineer. I am now leading my class...'
            },
            { 
              name: 'Amina Yusuf', 
              type: 'Medical Scholar', 
              amount: '₦2,100,000',
              purpose: 'Semester Fees & Clinical Rotation Materials',
              time: '1 week ago',
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGCXVJ8WjVLaEWs0yGQ_KsKDh1sqW8x2gjXPHysSGu7Kq68OFB1lD2G79Mbo8ziClNoYBd3Ubro-HwQ3lGGcxN9-SOTaxU3JuW_6u1vBcA4WklCDxOlqDz_ldJhyirfZjANRlX8XrBMl9OUhmqpmpg8VhFb9OAalCugw91a21ejf062jkNZ7iHlJv4J7UtB9DWDgzU6_0Dnon2rgSiHlCp-8gA7uARNDjQRBdkWEr99A08DAX09rcQfqjgXTE0rbmRD2GWNFFjPLKm',
              quote: 'Completing my clinical rotations was a distant hope until Indigent-Sc matched me with this sponsorship. Thank you for the trust.'
            }
          ].map((scholar, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-zinc-900 p-4 sm:p-8 rounded-[40px] flex flex-col lg:flex-row gap-6 lg:gap-10 transition-all border border-zinc-800 hover:border-[#0052CC]/30 group cursor-pointer overflow-hidden relative shadow-2xl shadow-black/40"
            >
              {/* Image Zone */}
              <div className="w-full lg:w-48 h-64 lg:h-48 flex-shrink-0 rounded-[32px] overflow-hidden border border-zinc-800 grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image 
                  src={scholar.img}
                  alt={scholar.name}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all duration-700"
                />
              </div>

              {/* Content Zone */}
              <div className="flex-1 flex flex-col md:flex-row justify-between gap-8 py-2">
                <div className="space-y-4 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest bg-zinc-800 text-zinc-400 border border-zinc-700/50">
                      {scholar.type}
                    </span>
                    <span className="text-[10px] font-bold text-zinc-500 font-label">{scholar.time}</span>
                  </div>
                  
                  <div>
                    <h4 className="font-black font-headline text-2xl sm:text-3xl text-zinc-100 group-hover:text-[#0052CC] transition-colors tracking-tight mb-2">
                      {scholar.name}
                    </h4>
                    <div className="flex items-center gap-3 text-zinc-400">
                      <span className="material-symbols-outlined text-sm text-[#0052CC]">check_circle</span>
                      <p className="text-xs md:text-sm font-medium leading-relaxed italic text-zinc-400 max-w-2xl">
                        &ldquo;{scholar.quote}&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-800/50">
                    <p className="text-[9px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-2">Impact Breakdown</p>
                    <div className="flex items-center gap-2 text-zinc-300 font-black text-[11px] uppercase tracking-wider">
                      <span className="material-symbols-outlined text-base">receipt_long</span>
                      {scholar.purpose}
                    </div>
                  </div>
                </div>

                {/* Financial Zone */}
            <div className="md:text-right flex flex-col justify-between items-start md:items-end gap-6 md:min-w-[200px] bg-zinc-950/50 p-6 rounded-[32px] border border-zinc-800/50 self-start md:self-stretch lg:self-center">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Sponsored Amount</p>
                    <p className="font-black font-headline text-2xl lg:text-3xl text-[#0052CC] tracking-tighter">{scholar.amount}</p>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/20 border border-emerald-900/30 text-emerald-500">
                      <span className="material-symbols-outlined text-sm font-black">verified</span>
                      <span className="text-[10px] font-black uppercase tracking-widest">Settled</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[8px] font-black text-[#0052CC] uppercase tracking-widest bg-[#0052CC]/5 px-3 py-1 rounded-lg border border-[#0052CC]/20">
                      <span className="material-symbols-outlined text-[10px]">person_check</span>
                      Sole Benefactor
                    </div>
                  </div>
                </div>

              </div>

              {/* Decorative Blur */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#0052CC]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}

          <button className="w-full py-8 text-[10px] font-black text-zinc-500 hover:text-[#0052CC] transition-all border-y border-zinc-800/50 mt-4 uppercase tracking-[0.3em] font-label hover:bg-zinc-900/50 rounded-2xl">
            Explore All Funding Activity
          </button>
        </div>
      </section>

      <Link href="/dashboard/sponsor/fund">
        <motion.button 
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-24 right-4 md:bottom-28 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-[#0052CC] rounded-full flex items-center justify-center text-white z-50 transition-all font-bold"
        >
            <span className="material-symbols-outlined text-3xl">search</span>
        </motion.button>
      </Link>
    </motion.div>
  )
}
