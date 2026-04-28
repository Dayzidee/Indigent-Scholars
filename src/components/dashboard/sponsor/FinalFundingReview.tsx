'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { CategorizedProfile } from '@/components/dashboard/student/CategorizedProfile'
import { StudentProfile } from '@/lib/constants/mock-data'

interface FinalFundingReviewProps {
  student: StudentProfile
  compact?: boolean
}

export function FinalFundingReview({ student, compact = false }: FinalFundingReviewProps) {
  return (
    <div className={cn("space-y-12", compact && "space-y-8")}>
      {/* Module 1: Application Overview Summary */}
      <section className={cn("space-y-6", compact && "space-y-4")}>
        <h3 className="text-xl font-headline font-black text-zinc-100 ml-2">Application Overview</h3>
        <div className={cn(
          "grid grid-cols-1 gap-6",
          compact ? "md:grid-cols-2 xl:grid-cols-3 gap-4" : "md:grid-cols-3"
        )}>
           {[
             { label: "Application ID", value: `IS-2024-${student.id}842`, icon: "fingerprint", color: "text-blue-400 bg-blue-950/30" },
             { label: "Funding Type", value: "Indigent Aid Grant", icon: "account_balance_wallet", color: "text-purple-400 bg-purple-950/30" },
             { label: "Priority Level", value: "High (Scholarship)", icon: "priority_high", color: "text-amber-500 bg-amber-950/30" }
           ].map((item, i) => (
             <Card key={i} className={cn(
               "rounded-[32px] border border-zinc-800/50 bg-zinc-900/50 shadow-none flex items-center gap-5",
               compact ? "p-5" : "p-6"
             )}>
               <div className={cn(
                 "rounded-2xl flex items-center justify-center shrink-0 border border-zinc-800/50", 
                 item.color,
                 compact ? "w-10 h-10" : "w-12 h-12"
               )}>
                 <span className={cn("material-symbols-outlined", compact ? "text-xl" : "text-2xl")}>{item.icon}</span>
               </div>
               <div>
                 <p className="text-zinc-500 text-[9px] font-black uppercase tracking-widest mb-1">{item.label}</p>
                 <p className={cn("font-headline font-black text-zinc-100 tracking-tight", compact ? "text-xs" : "text-sm")}>{item.value}</p>
               </div>
             </Card>
           ))}
        </div>
      </section>

      {/* Module 2: Registration Data */}
      <section className={cn("space-y-6", compact && "space-y-4")}>
        <h3 className="text-xl font-headline font-black text-zinc-100 ml-2">Registration Identity</h3>
        <CategorizedProfile compact={compact} />
      </section>

      {/* Module 3: Application Story & Narrative */}
      <section className={cn("space-y-6", compact && "space-y-4")}>
        <h3 className="text-xl font-headline font-black text-zinc-100 ml-2">Scholarship Narrative</h3>
        <Card className={cn(
          "rounded-[40px] border border-[#0052CC]/10 bg-zinc-900/50 shadow-none relative overflow-hidden",
          compact ? "p-8 lg:p-10" : "p-10 lg:p-14"
        )}>
           <div className="relative z-10">
             <div className={cn("flex items-center justify-between", compact ? "mb-6" : "mb-10")}>
                <div className="flex items-center gap-4">
                   <div className={cn(
                     "rounded-2xl bg-[#0052CC]/10 text-[#0052CC] flex items-center justify-center border border-[#0052CC]/20",
                     compact ? "w-10 h-10" : "w-12 h-12"
                   )}>
                      <span className={cn("material-symbols-outlined", compact ? "text-xl" : "text-2xl")}>history_edu</span>
                   </div>
                   <div>
                      <p className="text-zinc-500 text-[9px] font-black uppercase tracking-widest mb-1">Requested Amount</p>
                      <p className={cn("font-headline font-black text-zinc-100 tracking-tight", compact ? "text-xl" : "text-2xl")}>₦{student.totalGoal.toLocaleString()}</p>
                   </div>
                </div>
             </div>
             <div className={cn("bg-zinc-800/30 rounded-[32px] border border-zinc-800/50 backdrop-blur-sm", compact ? "p-6" : "p-8 lg:p-10")}>
                <p className={cn("text-zinc-400 leading-relaxed font-medium", compact ? "text-xs" : "text-sm")}>
                   &quot;{student.story || student.bio}&quot;
                </p>
             </div>
           </div>
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#0052CC]/5 rounded-full -mr-32 -mt-32 blur-3xl" />
        </Card>
      </section>
    </div>
  )
}
