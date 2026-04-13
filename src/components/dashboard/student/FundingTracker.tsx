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
}

export function FundingTracker({
  receivedAmount = 350000,
  totalAmount = 1250000,
  phase = "Phase 1: Registration Entry",
  nextMilestone = 500000,
  sponsors = [],
  className
}: FundingTrackerProps) {
  const percentage = (receivedAmount / totalAmount) * 100

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("w-full space-y-8", className)}
    >
      <Card className="bg-gradient-to-br from-[#0052CC] to-[#0747A6] rounded-[40px] border-none p-10 lg:p-14 text-white relative overflow-hidden shadow-2xl shadow-blue-900/20">
         <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
               <div>
                 <div className="flex items-center gap-3 mb-4">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                     <span className="material-symbols-outlined text-xl">payments</span>
                   </div>
                   <p className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em]">Funding Tracker</p>
                 </div>
                 <h3 className="text-4xl font-headline font-black tracking-tight leading-none">Indigent Aid Funding</h3>
               </div>
               <div className="text-right">
                 <p className="text-white/50 text-[10px] font-black uppercase tracking-widest mb-1">Total Received</p>
                 <p className="text-4xl font-headline font-black leading-none tracking-tighter">
                   ₦{receivedAmount.toLocaleString()} 
                   <span className="text-lg text-white/40 tracking-normal font-medium ml-2">/ ₦{totalAmount.toLocaleString()}</span>
                 </p>
               </div>
            </div>

            <div className="space-y-6">
               <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden p-1">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-zinc-900 rounded-full relative shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  >
                     <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-white/50 animate-pulse" />
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
      <div className="space-y-6 pt-4">
         <div className="flex items-center gap-4">
            <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">Active Benefactors</h4>
            <div className="h-[1px] flex-grow bg-zinc-800" />
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsors.length > 0 ? sponsors.map((spo, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-900 p-6 rounded-[32px] shadow-lg shadow-zinc-200/50 flex items-center gap-5 border border-zinc-800 hover:border-blue-200 transition-all group"
              >
                  <div className="w-12 h-12 rounded-2xl bg-blue-950/30 text-[#0052CC] flex items-center justify-center font-headline font-black text-xl group-hover:bg-[#0052CC] group-hover:text-white transition-colors">
                    {spo.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-headline font-black text-zinc-100 truncate leading-tight">{spo.name}</p>
                    <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">
                      Contributed <span className="text-[#0052CC]">₦{spo.amount.toLocaleString()}</span>
                    </p>
                  </div>
              </motion.div>
            )) : (
              <div className="col-span-full py-12 text-center bg-zinc-800 rounded-[40px] border-2 border-dashed border-zinc-700">
                  <span className="material-symbols-outlined text-zinc-300 text-4xl mb-4">diversity_1</span>
                  <p className="text-zinc-400 font-medium">The journey begins. Be the first to spark a change.</p>
              </div>
            )}
         </div>
      </div>
    </motion.div>
  )
}
