'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

export function SponsorOverview() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-7xl mx-auto space-y-6 md:space-y-12 pb-10"
    >
      {/* Header Content */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-headline tracking-tight text-zinc-900 leading-tight">Impact Overview</h2>
          <p className="text-zinc-500 max-w-xl font-body leading-relaxed text-xs md:text-sm">
            Tracking your architectural legacy in Nigerian education. Your contributions have enabled 42 scholars this semester.
          </p>
        </div>
        <div className="flex gap-2 w-full md:w-auto mt-4 md:mt-0">
          <Button variant="outline" className="flex-1 md:flex-none">
            Export Report
          </Button>
          <Button iconLeft="add" className="flex-1 md:flex-none">
            New Grant
          </Button>
        </div>
      </section>

      {/* Hero Impact Stats */}
      <section className="grid grid-cols-12 gap-6">
        {/* Primary Stats Card */}
        <div className="col-span-12 lg:col-span-8 bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-10 flex flex-col justify-between relative shadow-sm border border-zinc-100">
          <div className="relative z-10 flex flex-col md:flex-row justify-between gap-8 md:gap-12">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 font-label">Total Amount Funded</label>
              <div className="flex flex-wrap items-center gap-3 md:gap-4">
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline text-[#0052CC] leading-none">₦24,850,000</span>
                <div className="flex items-center gap-1 bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full border border-emerald-100">
                  <span className="material-symbols-outlined text-xs font-bold">trending_up</span>
                  <span className="text-[10px] font-bold">12%</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-2 md:border-l md:pl-10 lg:pl-12 border-zinc-100">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 font-label">Total Students Supported</label>
              <div className="flex items-baseline gap-3 md:gap-4 relative">
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold font-headline text-zinc-900 leading-none">142</span>
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-[#A18249] bg-[#A18249]/10 px-2.5 py-1.5 rounded-full border border-[#A18249]/20">
                  Prestige Elite
                </span>
              </div>
            </div>
          </div>

          {/* Improved Funding History Chart */}
          <div className="mt-20 relative h-48 w-full">
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 px-2 h-full">
              {[25, 35, 30, 50, 45, 60, 100].map((height, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "w-full rounded-t-xl transition-all duration-700 ease-out relative group/bar cursor-pointer",
                    i === 6 ? "bg-[#0052CC] shadow-[0_4px_12px_rgba(0,82,204,0.2)]" : "bg-[#F2F2F2] hover:bg-zinc-200"
                  )}
                  style={{ height: `${height}%` }}
                >
                  {i === 6 && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] font-black px-3 py-2 rounded-xl whitespace-nowrap shadow-xl">
                      Peak: Aug 2024
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="absolute bottom-[-32px] w-full flex justify-between text-[11px] font-black text-zinc-400 uppercase tracking-widest px-2 font-label">
              <span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span>
            </div>
          </div>
        </div>

        {/* Improved Milestone Card (Exact Color Match) */}
        <div className="col-span-12 lg:col-span-4 bg-[#D4AF37] text-white rounded-[24px] md:rounded-[32px] p-8 md:p-10 relative overflow-hidden flex flex-col justify-between group shadow-xl shadow-[#D4AF37]/20 border border-white/10">
          <div className="absolute bottom-[-10%] right-[-10%] opacity-10">
            <span className="material-symbols-outlined text-[140px] md:text-[200px] font-black">rewarded_ads</span>
          </div>
          
          <div className="relative z-10">
            <div className="bg-white/20 backdrop-blur-md w-12 h-12 md:w-16 md:h-16 rounded-[18px] md:rounded-[24px] flex items-center justify-center mb-6 md:mb-10 shadow-inner border border-white/30">
              <span className="material-symbols-outlined text-2xl md:text-3xl text-white" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-headline leading-[1.1] mb-3 md:mb-4 tracking-tight">Architect of Future Leaders</h3>
            <p className="text-xs md:text-sm font-medium text-white/80 max-w-[220px] leading-relaxed">
              You are in the top 5% of global sponsors this year. Next milestone: 150 students.
            </p>
          </div>

          <div className="relative z-10 space-y-5">
            <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] font-label text-white/90">
              <span>Progress to Milestone</span>
              <span>94%</span>
            </div>
            <div className="h-4 w-full bg-black/10 rounded-full overflow-hidden p-1 border border-white/20">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '94%' }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.6)]"
              ></motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlights and Funding Section - Responsive Gap */}
      <section className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-10 pt-4">
        <div className="col-span-12 lg:col-span-7 space-y-8">
          <div className="flex items-center gap-3">
             <span className="material-symbols-outlined text-[#0052CC] font-bold">import_contacts</span>
             <h3 className="text-xl font-black font-headline tracking-tight text-zinc-900">Scholar Spotlights</h3>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {[
              { 
                name: 'Chinonso Okafor', 
                type: 'Engineering Scholar', 
                tColor: 'text-zinc-600 bg-zinc-100',
                time: '2 days ago',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDLg0vDIncm33LONea9Ngf0BgygU1R0PlhgXBk2zJ7DwoHbujAl7rQsb6gZT6zT7HFCzMvxLSELvQ6DWXhlbAJCx9qdNDk0_GnOGR9U9LlRp05xqR-Egw3nx8v7Eo00X6bebWdF9Vw6qdtr5LQ7sJMbvCumSNVQVYdTFfl9J_nQNAnQs-BBhU-oMjTjKXjf6WE4HxKw4VS4fVJSr42IKMF08qUnTmH0YZ17BVKwHoc-3qw8zuiKlC2zU0pJqG3fBJy16j_U4keFBaU',
                quote: 'This funding didn\'t just pay my fees; it validated my dream of becoming a structural engineer. I am now leading my class...'
              },
              { 
                name: 'Amina Yusuf', 
                type: 'Medical Scholar', 
                tColor: 'text-zinc-600 bg-zinc-100',
                time: '1 week ago',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGCXVJ8WjVLaEWs0yGQ_KsKDh1sqW8x2gjXPHysSGu7Kq68OFB1lD2G79Mbo8ziClNoYBd3Ubro-HwQ3lGGcxN9-SOTaxU3JuW_6u1vBcA4WklCDxOlqDz_ldJhyirfZjANRlX8XrBMl9OUhmqpmpg8VhFb9OAalCugw91a21ejf062jkNZ7iHlJv4J7UtB9DWDgzU6_0Dnon2rgSiHlCp-8gA7uARNDjQRBdkWEr99A08DAX09rcQfqjgXTE0rbmRD2GWNFFjPLKm',
                quote: 'Completing my clinical rotations was a distant hope until Indigent-Sc matched me with this sponsorship. Thank you for the trust.'
              }
            ].map((scholar, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 4 }}
                className="bg-white p-3 sm:p-6 rounded-[24px] flex flex-col sm:flex-row gap-3 sm:gap-8 hover:shadow-lg transition-all border border-zinc-100 group cursor-pointer overflow-hidden"
              >
                <div className="w-full sm:w-28 h-40 sm:h-28 flex-shrink-0 rounded-2xl overflow-hidden border border-zinc-100 grayscale hover:grayscale-0 transition-all duration-700 shrink-0">
                  <Image 
                    src={scholar.img}
                    alt={scholar.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all duration-500"
                  />
                </div>
                <div className="flex-1 space-y-2 py-1">
                  <div className="flex justify-between items-start">
                    <span className={cn("text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest font-label", scholar.tColor)}>
                      {scholar.type}
                    </span>
                    <span className="text-[10px] font-bold text-zinc-400 font-label">{scholar.time}</span>
                  </div>
                  <h4 className="font-extrabold font-headline text-base sm:text-lg text-zinc-900 group-hover:text-[#0052CC] transition-colors">{scholar.name}</h4>
                  <p className="text-[11px] text-zinc-500 font-body leading-relaxed italic">"{scholar.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Funding - Ultra-Robust Alignment */}
        <div className="col-span-12 lg:col-span-5 bg-zinc-50/50 rounded-[32px] md:rounded-[40px] px-3 py-6 sm:p-8 lg:p-10 border border-zinc-100 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6 md:mb-10">
            <h3 className="text-xl font-black font-headline tracking-tight">Recent Funding</h3>
            <Button variant="ghost" size="sm" className="text-[10px] tracking-widest px-2">View Ledger</Button>
          </div>
          <div className="space-y-4 flex-1">
            {[
              { org: 'Unilag Science Dept', type: 'Tuition Bulk Payment', amount: '₦4,200,000', icon: 'account_balance', color: 'text-[#0052CC] bg-white border-zinc-100' },
              { org: 'Book Grant Q3', type: 'Material Stipends', amount: '₦850,000', icon: 'auto_stories', color: 'text-[#A18249] bg-white border-zinc-100' },
              { org: 'ABU Zaria Medical', type: 'Semester Fees', amount: '₦2,100,000', icon: 'health_and_safety', color: 'text-[#0052CC] bg-white border-zinc-100' }
            ].map((tx, idx) => (
              <div key={idx} className="bg-white p-3 sm:p-5 rounded-[24px] grid grid-cols-[auto_1fr_auto] items-center gap-3 sm:gap-4 shadow-sm border border-zinc-100 hover:border-[#0052CC]/20 hover:shadow-md transition-all group cursor-pointer min-w-0">
                <div className={cn("w-10 h-10 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 shadow-sm border shrink-0", tx.color)}>
                  <span className="material-symbols-outlined text-lg sm:text-2xl" style={{ fontVariationSettings: "'wght' 300" }}>{tx.icon}</span>
                </div>
                <div className="min-w-0 flex flex-col justify-center">
                  <p className="font-black text-zinc-900 font-headline text-sm sm:text-base leading-tight mb-0.5 truncate">{tx.org}</p>
                  <p className="text-[9px] sm:text-[10px] text-zinc-400 font-black uppercase tracking-wider font-label truncate">{tx.type}</p>
                </div>
                <div className="text-right shrink-0 flex flex-col justify-center">
                  <p className="font-black text-zinc-900 font-headline text-[13px] sm:text-sm leading-none mb-1">~{tx.amount}</p>
                  <p className="text-[9px] text-emerald-600 font-black uppercase tracking-wider font-label">Settled</p>
                </div>
              </div>
            ))}
            <button className="w-full py-6 text-[10px] font-black text-zinc-400 hover:text-[#0052CC] transition-all border-t border-zinc-100 mt-6 uppercase tracking-[0.2em] font-label">
              Load More Transactions
            </button>
          </div>
        </div>
      </section>

      {/* Simplified FAB */}
      <motion.button 
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-4 md:bottom-28 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-[#0052CC] rounded-full shadow-[0_20px_50px_rgba(0,82,204,0.4)] flex items-center justify-center text-white z-50 transition-all font-bold"
      >
        <span className="material-symbols-outlined text-3xl">add</span>
      </motion.button>
    </motion.div>
  )
}
