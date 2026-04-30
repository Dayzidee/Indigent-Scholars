'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/Button'

import { VerifiedHero } from './VerifiedHero'
import { STUDENTS_DATA } from '@/lib/constants/mock-data'
import { cn } from '@/lib/utils'

export function VerifiedView() {
  const student = STUDENTS_DATA[0]

  const documentStatus = [
    { label: "National ID (NIN)", status: "verified", icon: "verified_user" },
    { label: "Academic Transcript", status: "verified", icon: "verified_user" },
    { label: "WAEC Result", status: "verified", icon: "verified_user" },
    { label: "Admission Letter", status: "verified", icon: "verified_user" }
  ]

  const adverts = [
    { title: "Shell Niger Delta Scholarship", deadline: "May 15, 2024", tag: "Premium" },
    { title: "Indigent Scholars Aid Fund", deadline: "Ongoing", tag: "Internal" },
    { title: "NNPC/Chevron Merit Award", deadline: "June 02, 2024", tag: "External" }
  ]


  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-12 pb-32">
      
      {/* 0. HERO SECTION */}
      <VerifiedHero student={STUDENTS_DATA[0]} />

      {/* 1. PRIMARY CONTAINERS (SUMMARY TIER) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Uploads Container: Status & View */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="h-full bg-zinc-900 rounded-[40px] border border-zinc-800 p-10 flex flex-col text-white relative overflow-hidden">
            <div className="flex items-center justify-between mb-8">
               <h3 className="text-lg font-headline font-black tracking-tight">Verified Document Vault</h3>
               <span className="material-symbols-outlined text-emerald-400">verified</span>
            </div>
            
            <div className="flex-1 space-y-3">
              {documentStatus.map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-zinc-800/5 hover:border-zinc-700 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-base text-emerald-400">check_circle</span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-zinc-300">{doc.label}</span>
                  </div>
                  <span className="material-symbols-outlined text-zinc-400 text-sm hover:text-white cursor-pointer exit_to_app">visibility</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800/5">
                <p className="text-[9px] font-black uppercase tracking-widest text-emerald-400 mb-2 italic">Verification Integrity: 100%</p>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                   <div className="h-full bg-emerald-400 w-full" />
                </div>
            </div>
          </Card>
        </motion.div>

        {/* Adverts / Promotions: Institutional News */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="h-full bg-zinc-800 rounded-[40px] border border-zinc-700 p-10 flex flex-col relative overflow-hidden">
            <div className="flex items-center justify-between mb-8">
               <h3 className="text-lg font-headline font-black tracking-tight text-zinc-100">Institutional Ads</h3>
               <span className="material-symbols-outlined text-zinc-300">campaign</span>
            </div>

            <div className="space-y-4 flex-1">
               {adverts.slice(0, 3).map((ad, i) => (
                 <div key={i} className="p-5 rounded-[24px] bg-zinc-900 border border-zinc-800 hover:border-[#0052CC]/40 transition-all cursor-pointer group">
                    <p className="text-[#0052CC] text-[8px] font-black uppercase tracking-widest mb-1">{ad.tag}</p>
                    <h4 className="text-xs font-headline font-black text-zinc-200 leading-tight mb-3 group-hover:text-[#0052CC] transition-colors">{ad.title}</h4>
                    <div className="flex items-center gap-2 text-zinc-400 group-hover:text-zinc-400 transition-colors">
                       <span className="material-symbols-outlined text-[12px]">calendar_today</span>
                       <span className="text-[8px] font-bold uppercase tracking-widest">{ad.deadline}</span>
                    </div>
                 </div>
               ))}
            </div>

            <div className="mt-6 pt-4">
               <button className="text-[9px] font-black uppercase tracking-[0.2em] text-[#0052CC] hover:underline transition-all font-bold">View All Opportunities &rarr;</button>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* 2. FUNDING DASHBOARD */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="bg-zinc-900 rounded-[40px] border border-zinc-800 p-10 flex flex-col relative overflow-hidden">
            <div className="flex items-center justify-between mb-8">
               <h3 className="text-lg font-headline font-black tracking-tight text-zinc-100">Funding Dashboard</h3>
               <span className="material-symbols-outlined text-zinc-400">account_balance_wallet</span>
            </div>

            {student.raisedAmount === 0 ? (
                <div className="bg-zinc-800/50 p-6 sm:p-8 rounded-[24px] border border-zinc-800 flex items-center justify-between gap-4">
                    <div>
                        <h4 className="text-sm font-headline font-black text-zinc-200 mb-2">Awaiting Benefactor</h4>
                        <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                            No benefactor has made a sponsorship payment for your request of <strong className="text-zinc-200">₦{student.totalGoal.toLocaleString()}</strong> yet. Thank you for your patience.
                        </p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-zinc-400 text-2xl">hourglass_empty</span>
                    </div>
                </div>
            ) : (
                <div className="bg-emerald-950/20 p-6 sm:p-8 rounded-[24px] border border-emerald-900/30 flex items-center justify-between gap-4">
                    <div>
                        <h4 className="text-sm font-headline font-black text-emerald-400 mb-2">Fully Sponsored</h4>
                        <p className="text-xs text-zinc-300 font-medium leading-relaxed">
                            {student.name} has been fully sponsored with ₦{student.raisedAmount.toLocaleString()}!
                        </p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-emerald-900/40 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-emerald-400 text-2xl">check_circle</span>
                    </div>
                </div>
            )}
        </Card>
      </motion.div>

    </div>
  )
}
