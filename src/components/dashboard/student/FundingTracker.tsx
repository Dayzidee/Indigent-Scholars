'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface FundingTrackerProps {
  receivedAmount: number
  totalAmount: number
  phase: string
  nextMilestone: number
  sponsors?: { name: string; amount: number; logo?: string }[]
  className?: string
  compact?: boolean
}

export function FundingTracker({
  receivedAmount = 350000,
  totalAmount = 1250000,
  phase = "Phase 1: Registration Entry",
  nextMilestone = 500000,
  sponsors = [],
  className,
  compact = false
}: FundingTrackerProps) {
  const percentage = (receivedAmount / totalAmount) * 100

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("w-full", compact ? "space-y-4" : "space-y-8", className)}
    >
      <Card className={cn(
        "bg-gradient-to-br from-[#0052CC] to-[#0747A6] rounded-[40px] border-none text-white relative overflow-hidden shadow-2xl shadow-blue-900/20",
        compact ? "p-8 md:p-10" : "p-10 lg:p-14"
      )}>
         <div className="relative z-10">
            <div className={cn(
              "flex flex-col justify-between items-start md:items-end gap-6",
              compact ? "mb-8" : "mb-12",
              !compact && "md:flex-row"
            )}>
               <div>
                 <div className="flex items-center gap-3 mb-4">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                     <span className="material-symbols-outlined text-xl">payments</span>
                   </div>
                   <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em]">Funding Tracker</p>
                 </div>
                 <h3 className={cn("font-headline font-black tracking-tight leading-none", compact ? "text-2xl md:text-3xl" : "text-4xl")}>Indigent Aid Funding</h3>
               </div>
               <div className={compact ? "text-left md:text-right" : "text-right"}>
                 <p className="text-white/50 text-[10px] font-black uppercase tracking-widest mb-1">Total Received</p>
                 <p className={cn("font-headline font-black leading-none tracking-tighter", compact ? "text-3xl" : "text-4xl")}>
                   ₦{receivedAmount.toLocaleString()} 
                   <span className={cn("text-white/40 tracking-normal font-medium ml-2", compact ? "text-sm" : "text-lg")}>/ ₦{totalAmount.toLocaleString()}</span>
                 </p>
               </div>
            </div>

            <div className={compact ? "space-y-4" : "space-y-6"}>
               <div className={cn("w-full bg-white/10 rounded-full overflow-hidden p-1", compact ? "h-3" : "h-4")}>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-zinc-900 rounded-full relative shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                  >
                     <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-[#0052CC]/40 animate-pulse" />
                  </motion.div>
               </div>
               <div className="flex justify-between items-center text-[10px] font-black text-white/40 uppercase tracking-[0.3em]">
                  <span>{phase}</span>
                  <span>Next Milestone: ₦{nextMilestone.toLocaleString()}</span>
               </div>
            </div>
         </div>
         {/* Abstract background effects */}
         <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-400 rounded-full blur-3xl opacity-20" />
         <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-900 rounded-full blur-3xl opacity-40" />
      </Card>

      {/* Sponsors Section */}
      <div className={cn("space-y-6", compact ? "pt-2" : "pt-4")}>
         <div className="flex items-center gap-4">
            <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">Active Benefactors</h4>
            <div className="h-[1px] flex-grow bg-zinc-800" />
         </div>

         <div className={cn(
           "grid gap-6",
           compact ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
         )}>
            {sponsors.length > 0 ? sponsors.map((spo, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "bg-zinc-950 rounded-[32px] shadow-2xl shadow-black/80 flex items-center gap-5 border border-zinc-800 hover:border-[#0052CC]/40 transition-all duration-300 group",
                  compact ? "p-4" : "p-6"
                )}
              >
                  <div className={cn(
                    "rounded-2xl bg-blue-950/30 text-[#0052CC] flex items-center justify-center font-headline font-black group-hover:bg-[#0052CC] group-hover:text-white transition-colors shrink-0",
                    compact ? "w-10 h-10 text-lg" : "w-12 h-12 text-xl"
                  )}>
                    {spo.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={cn("font-headline font-black text-zinc-100 truncate leading-tight", compact ? "text-sm" : "text-base")}>{spo.name}</p>
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">
                      Contributed <span className="text-[#0052CC]">₦{spo.amount.toLocaleString()}</span>
                    </p>
                  </div>
              </motion.div>
            )) : (
              <div className={cn(
                "col-span-full text-center bg-zinc-800 rounded-[40px] border-2 border-dashed border-zinc-700",
                compact ? "py-8" : "py-12"
              )}>
                  <span className={cn("material-symbols-outlined text-zinc-300 mb-4", compact ? "text-3xl" : "text-4xl")}>diversity_1</span>
                  <p className={cn("text-zinc-400 font-medium", compact ? "text-xs" : "text-sm")}>The journey begins. Be the first to spark a change.</p>
              </div>
            )}
         </div>
      </div>
    </motion.div>
  )
}
