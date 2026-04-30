'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { FundingTracker } from './FundingTracker'
import { STUDENTS_DATA } from '@/lib/constants/mock-data'

export function SubmittedView() {
  const scholarProfile = {
    name: "Adebayo Chioma",
    email: "a.chioma@unilag.edu.ng",
    origin: "Anambra State / Ihiala LGA",
    level: "Undergraduate (300 Level)",
    university: "University of Lagos",
    field: "Engineering (Chemical)",
    matric: "UNILAG/2021/ENG/402"
  }

  const documentStatus = [
    { label: "National ID (NIN)", status: "verified", icon: "verified_user" },
    { label: "Academic Transcript", status: "pending", icon: "pending_actions" },
    { label: "WAEC Result", status: "verified", icon: "verified_user" },
    { label: "Admission Letter", status: "verified", icon: "verified_user" }
  ]

  const adverts = [
    { title: "Shell Niger Delta Scholarship", deadline: "May 15, 2024", tag: "Premium" },
    { title: "Indigent Scholars Aid Fund", deadline: "Ongoing", tag: "Internal" },
    { title: "NNPC/Chevron Merit Award", deadline: "June 02, 2024", tag: "External" }
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-8 pb-32">
      
      {/* Dynamic Status Header */}
      <div className="bg-amber-950/20 border border-amber-950/40 rounded-[32px] p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm shadow-zinc-950/10">
        <div className="flex items-center gap-5">
           <div className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center text-amber-600 shadow-sm shrink-0">
             <span className="material-symbols-outlined text-2xl animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>hourglass_top</span>
           </div>
           <div>
             <h3 className="font-headline font-black text-amber-600 leading-none mb-1">Application Under Review</h3>
             <p className="text-amber-800/40 text-xs font-bold uppercase tracking-wider">Estimated completion: 3-5 business days</p>
           </div>
        </div>
        <button className="text-amber-600 font-black text-[10px] uppercase tracking-[0.2em] border-2 border-amber-950/50 px-6 py-2.5 rounded-xl hover:bg-amber-950/20 transition-colors">
          View Receipt
        </button>
      </div>

      {/* 1. PRIMARY CONTAINERS (SUMMARY TIER) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        
        {/* CONTAINER 1: SCHOLAR IDENTITY SUMMARY */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="group"
        >
          <Card className="h-full bg-zinc-900 rounded-[40px] border-none shadow-2xl shadow-zinc-950/40 p-10 relative overflow-hidden flex flex-col">
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-10">
                <div className="w-14 h-14 rounded-2xl bg-zinc-800 text-zinc-100 flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-2xl font-bold">person</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-amber-950/30 text-amber-600 text-[8px] font-black uppercase tracking-widest border border-amber-950/40 italic">Under Review</div>
              </div>

              <div className="space-y-4 mb-auto">
                <div>
                  <h3 className="text-xl font-headline font-black text-zinc-100 tracking-tight leading-none mb-1">{scholarProfile.name}</h3>
                  <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest">{scholarProfile.matric}</p>
                </div>
                <div className="pt-4 border-t border-zinc-800 space-y-3">
                   <div className="flex items-center justify-between">
                     <span className="text-zinc-400 text-[9px] font-bold uppercase tracking-widest">Institution</span>
                     <span className="text-xs font-black text-zinc-200">UNILAG</span>
                   </div>
                   <div className="flex items-center justify-between">
                     <span className="text-zinc-400 text-[9px] font-bold uppercase tracking-widest">Level</span>
                     <span className="text-xs font-black text-zinc-200">300 Level</span>
                   </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800">
                <Button variant="ghost" size="sm" className="w-full justify-start px-0 text-zinc-400" iconRight="lock">Profile Locked</Button>
              </div>
            </div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-zinc-800/50 rounded-full blur-3xl opacity-50" />
          </Card>
        </motion.div>

        {/* CONTAINER 2: DOCUMENT VERIFICATION HEALTH */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="h-full bg-[#0052CC] rounded-[40px] border-none shadow-2xl shadow-blue-900/10 p-10 flex flex-col text-white relative overflow-hidden">
            <h3 className="text-lg font-headline font-black tracking-tight mb-8">Document Vault</h3>
            
            <div className="flex-1 space-y-3">
              {documentStatus.slice(0, 3).map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-zinc-800/5">
                  <div className="flex items-center gap-3">
                    <span className={cn(
                      "material-symbols-outlined text-base",
                      doc.status === 'verified' ? "text-emerald-400" : "text-amber-400"
                    )}>{doc.status === 'verified' ? "check_circle" : "hourglass_top"}</span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/70">{doc.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800/5">
                <p className="text-[9px] font-black uppercase tracking-widest text-[#99C2FF] mb-2 italic">Analysis: 85% Complete</p>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                   <div className="h-full bg-emerald-400 w-[85%]" />
                </div>
            </div>
          </Card>
        </motion.div>

        {/* CONTAINER 3: INSTITUTIONAL ADVERTS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="h-full bg-zinc-800 rounded-[40px] border-none p-10 flex flex-col relative overflow-hidden">
            <div className="flex items-center justify-between mb-8">
               <h3 className="text-lg font-headline font-black tracking-tight text-zinc-100">Institutional Ads</h3>
               <span className="material-symbols-outlined text-zinc-300">campaign</span>
            </div>

            <div className="space-y-4 flex-1">
               {adverts.slice(0, 2).map((ad, i) => (
                 <div key={i} className="p-5 rounded-[24px] bg-zinc-900 border border-zinc-800 hover:shadow-lg transition-all cursor-pointer group">
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
               <button className="text-[9px] font-black uppercase tracking-[0.2em] text-[#0052CC] hover:underline transition-all">All Grants &rarr;</button>
            </div>
          </Card>
        </motion.div>

      </div>

      {/* PREMIUM FUNDING TRACKER (REPLACED OPPORTUNITIES) */}
      <FundingTracker 
        receivedAmount={STUDENTS_DATA[0].raisedAmount}
        totalAmount={STUDENTS_DATA[0].totalGoal}
        phase="Phase 2: Verifying Documents"
        nextMilestone={500000}
        sponsors={STUDENTS_DATA[0].sponsors}
      />

    </div>
  )
}
