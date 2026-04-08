'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export function SponsorOverview() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-7xl mx-auto space-y-12"
    >
      {/* Header Content */}
      <section className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10">
        <div className="space-y-2">
          <h2 className="text-3xl lg:text-4xl font-black font-headline tracking-tight text-on-background">Impact Overview</h2>
          <p className="text-neutral-500 max-w-xl font-body leading-relaxed">
            Tracking your architectural legacy in Nigerian education. Your contributions have enabled 42 scholars this semester.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-2.5 rounded-xl text-sm font-bold bg-surface-container-lowest text-primary border border-outline-variant/20 hover:bg-surface-container-low hover:border-primary/20 transition-all font-headline">
            Export Report
          </button>
          <button className="px-6 py-2.5 rounded-xl text-sm font-bold asymmetric-gradient text-white shadow-lg shadow-primary/20 active:scale-95 hover:opacity-90 transition-all font-headline text-shadow-sm">
            New Grant
          </button>
        </div>
      </section>

      {/* Massive Hero Impact Widget (Bento Grid Style) */}
      <section className="grid grid-cols-12 gap-6">
        {/* Primary Stats Card */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-2xl p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden group border border-outline-variant/10 shadow-sm">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-primary/5 rounded-full blur-[80px] transition-transform group-hover:scale-110"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between gap-12">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 font-label">Total Amount Funded</label>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl lg:text-5xl font-black font-headline text-primary">₦24,850,000</span>
                <span className="text-tertiary font-black text-xs flex items-center bg-tertiary/10 px-2.5 py-1 rounded-full border border-tertiary/10">
                  <span className="material-symbols-outlined text-[14px] mr-1" style={{ fontVariationSettings: "'wght' 700" }}>trending_up</span> 
                  12%
                </span>
              </div>
            </div>
            
            <div className="space-y-2 md:border-l md:pl-12 border-outline-variant/30">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-400 font-label">Total Students Supported</label>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl lg:text-5xl font-black font-headline text-on-background">142</span>
                <span className="text-secondary font-black text-[10px] uppercase tracking-wider bg-secondary-fixed/40 px-3 py-1 rounded-full border border-secondary/10">
                  Prestige Elite
                </span>
              </div>
            </div>
          </div>

          {/* Funding History Chart Placeholder */}
          <div className="mt-16 sm:mt-24 relative h-48 w-full group/chart">
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 px-2 h-full">
              {[30, 45, 40, 65, 55, 85, 100].map((height, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "w-full rounded-t-lg transition-all duration-700 delay-[calc(i*100ms)] ease-out relative group/bar cursor-pointer",
                    i === 6 ? "bg-primary" : i === 5 ? "bg-primary/20 border-t-2 border-primary" : "bg-surface-container-low hover:bg-surface-container-highest"
                  )}
                  style={{ height: `${height}%` }}
                >
                  {i === 6 && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-inverse-surface text-white text-[10px] font-black px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover/chart:opacity-100 transition-opacity shadow-xl">
                      Peak: Aug 2024
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="absolute bottom-[-28px] w-full flex justify-between text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] px-2 font-label">
              <span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span>
            </div>
          </div>
        </div>

        {/* Impact Milestone Card */}
        <div className="col-span-12 lg:col-span-4 bg-[#D4AF37] text-[#241a00] rounded-2xl p-8 relative overflow-hidden gold-glow flex flex-col justify-between border border-black/5">
          <div className="absolute -bottom-12 -right-12 opacity-10 rotate-12 transition-transform duration-700 group-hover:rotate-0">
            <span className="material-symbols-outlined text-[180px]" style={{ fontVariationSettings: "'wght' 900" }}>military_tech</span>
          </div>
          
          <div className="relative z-10">
            <div className="bg-white/30 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-white/20">
              <span className="material-symbols-outlined text-3xl text-yellow-950" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-black font-headline leading-[1.1] mb-3">Architect of <br/>Future Leaders</h3>
            <p className="text-sm font-medium opacity-70 mb-8 max-w-[200px] leading-relaxed">
              You are in the top 5% of global sponsors this year. Next milestone: 150 students.
            </p>
          </div>

          <div className="relative z-10 space-y-4">
            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest font-label">
              <span>Progress to Milestone</span>
              <span>94%</span>
            </div>
            <div className="h-2.5 w-full bg-black/10 rounded-full overflow-hidden p-0.5 border border-white/10">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '94%' }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              ></motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Section: Recent Impact Stories */}
      <section className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-7 space-y-8">
          <h3 className="text-xl font-black font-headline flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'wght' 700" }}>auto_stories</span>
            </span>
            Scholar Spotlights
          </h3>
          
          <div className="space-y-4">
            {[
              { 
                name: 'Chinonso Okafor', 
                type: 'Engineering Scholar', 
                tColor: 'text-tertiary bg-tertiary/10',
                time: '2 days ago',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDLg0vDIncm33LONea9Ngf0BgygU1R0PlhgXBk2zJ7DwoHbujAl7rQsb6gZT6zT7HFCzMvxLSELvQ6DWXhlbAJCx9qdNDk0_GnOGR9U9LlRp05xqR-Egw3nx8v7Eo00X6bebWdF9Vw6qdtr5LQ7sJMbvCumSNVQVYdTFfl9J_nQNAnQs-BBhU-oMjTjKXjf6WE4HxKw4VS4fVJSr42IKMF08qUnTmH0YZ17BVKwHoc-3qw8zuiKlC2zU0pJqG3fBJy16j_U4keFBaU',
                quote: 'This funding didn\'t just pay my fees; it validated my dream of becoming a structural engineer. I am now leading my class...'
              },
              { 
                name: 'Amina Yusuf', 
                type: 'Medical Scholar', 
                tColor: 'text-primary bg-primary/10',
                time: '1 week ago',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGCXVJ8WjVLaEWs0yGQ_KsKDh1sqW8x2gjXPHysSGu7Kq68OFB1lD2G79Mbo8ziClNoYBd3Ubro-HwQ3lGGcxN9-SOTaxU3JuW_6u1vBcA4WklCDxOlqDz_ldJhyirfZjANRlX8XrBMl9OUhmqpmpg8VhFb9OAalCugw91a21ejf062jkNZ7iHlJv4J7UtB9DWDgzU6_0Dnon2rgSiHlCp-8gA7uARNDjQRBdkWEr99A08DAX09rcQfqjgXTE0rbmRD2GWNFFjPLKm',
                quote: 'Completing my clinical rotations was a distant hope until Indigent-Sc matched me with this sponsorship. Thank you for the trust.'
              }
            ].map((scholar, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -4 }}
                className="bg-surface-container-lowest p-6 rounded-2xl flex flex-col sm:flex-row gap-6 hover:shadow-xl hover:shadow-primary/5 transition-all border border-outline-variant/10 group cursor-pointer"
              >
                <div className="w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border-2 border-surface-container-highest shadow-inner">
                  <Image 
                    src={scholar.img}
                    alt={scholar.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                  />
                </div>
                <div className="flex-1 space-y-3">
                  <div className="flex justify-between items-start">
                    <span className={cn("text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest font-label border border-current/10", scholar.tColor)}>
                      {scholar.type}
                    </span>
                    <span className="text-xs font-bold text-neutral-400 font-label">{scholar.time}</span>
                  </div>
                  <h4 className="font-black font-headline text-xl group-hover:text-primary transition-colors">{scholar.name}</h4>
                  <p className="text-sm text-neutral-500 font-body leading-relaxed line-clamp-2 italic">"{scholar.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ledger Preview */}
        <div className="col-span-12 lg:col-span-5 bg-surface-container-low/50 backdrop-blur-sm rounded-3xl p-8 border border-outline-variant/5">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-black font-headline">Recent Funding</h3>
            <button className="text-sm font-black text-primary hover:underline font-label uppercase tracking-widest">View Ledger</button>
          </div>
          <div className="space-y-4">
            {[
              { org: 'Unilag Science Dept', type: 'Tuition Bulk Payment', amount: '₦4,200,000', icon: 'account_balance', color: 'text-primary bg-primary/10' },
              { org: 'Book Grant Q3', type: 'Material Stipends', amount: '₦850,000', icon: 'school', color: 'text-secondary bg-secondary/10' },
              { org: 'ABU Zaria Medical', type: 'Semester Fees', amount: '₦2,100,000', icon: 'account_balance', color: 'text-primary bg-primary/10' }
            ].map((tx, idx) => (
              <div key={idx} className="bg-surface-container-lowest p-5 rounded-2xl flex items-center justify-between shadow-sm border border-outline-variant/10 hover:border-primary/20 transition-all group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110", tx.color)}>
                    <span className="material-symbols-outlined text-2xl">{tx.icon}</span>
                  </div>
                  <div>
                    <p className="font-black text-on-surface font-headline leading-none mb-1">{tx.org}</p>
                    <p className="text-[10px] text-neutral-400 font-black uppercase tracking-widest font-label">{tx.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-black text-on-surface font-headline leading-none mb-1 font-headline">{tx.amount}</p>
                  <p className="text-[10px] text-tertiary font-black uppercase tracking-widest font-label">Settled</p>
                </div>
              </div>
            ))}
            <button className="w-full py-5 text-xs font-black text-neutral-400 hover:text-primary transition-all border-t border-outline-variant/10 mt-4 uppercase tracking-[0.2em] font-label">
              Load More Transactions
            </button>
          </div>
        </div>
      </section>

      {/* Global FAB */}
      <button className="fixed bottom-8 right-8 w-16 h-16 asymmetric-gradient rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all group z-50">
        <span className="material-symbols-outlined text-3xl group-hover:rotate-90 transition-transform">add</span>
      </button>
    </motion.div>
  )
}
