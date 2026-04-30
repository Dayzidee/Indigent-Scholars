'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { STUDENTS_DATA } from '@/lib/constants/mock-data'

export function IncompleteView() {
  const completionPercentage = 45

  const pendingRequirements = [
    { label: "Voter's Card Image", status: "pending", icon: "how_to_reg" },
    { label: "Institutional ID", status: "pending", icon: "badge" },
    { label: "Educational Transcript", status: "uploaded", icon: "check_circle" }
  ]

  const quickAdverts = [
    { title: "NELFUND Loan Application", portal: "Internal", color: "bg-blue-600" },
    { title: "Indigent Aid Phase 2", portal: "Limited", color: "bg-emerald-600" }
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-12 pb-32">
      
      {/* 1. PRIMARY CONTAINERS (SUMMARY TIER) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        
        {/* Registration Progress Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="group"
        >
          <Card className="h-full bg-zinc-900 rounded-[40px] border-none shadow-2xl shadow-zinc-950/40 p-10 relative overflow-hidden flex flex-col">
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-10">
                <div className="w-14 h-14 rounded-2xl bg-amber-950/30 text-amber-600 flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-2xl font-bold">pending_actions</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-amber-950/30 text-amber-600 text-[8px] font-black uppercase tracking-widest border border-amber-950/50 animate-pulse">Incomplete</div>
              </div>

              <div className="space-y-4 mb-auto">
                <div className="flex justify-between items-end mb-2">
                   <h3 className="text-xl font-headline font-black text-zinc-100 leading-none">Registration</h3>
                   <span className="text-2xl font-headline font-black text-zinc-100">{completionPercentage}%</span>
                </div>
                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                   <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${completionPercentage}%` }}
                    className="h-full bg-amber-500"
                   />
                </div>
                <p className="text-zinc-400 text-[10px] font-medium leading-relaxed pt-2">Complete your profile to unlock verified scholarship opportunities.</p>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800">
                <Button 
                  onClick={() => window.location.href = '/dashboard/student/registration'}
                  variant="primary" 
                  size="sm" 
                  className="w-full shadow-lg shadow-blue-500/10" 
                  iconRight="arrow_forward"
                >
                  Continue Setup
                </Button>
              </div>
            </div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-zinc-800/50 rounded-full blur-3xl opacity-50" />
          </Card>
        </motion.div>

        {/* Document Status Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="h-full bg-zinc-900 rounded-[40px] border-none shadow-2xl shadow-zinc-900/10 p-10 flex flex-col text-white relative overflow-hidden">
            <h3 className="text-lg font-headline font-black tracking-tight mb-8">Pending Docs</h3>
            
            <div className="flex-1 space-y-3">
              {pendingRequirements.map((req, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-zinc-800/5">
                  <div className="flex items-center gap-3">
                    <span className={cn(
                      "material-symbols-outlined text-base",
                      req.status === 'uploaded' ? "text-emerald-400" : "text-amber-400"
                    )}>{req.status === 'uploaded' ? "check_circle" : "radio_button_unchecked"}</span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/70">{req.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800/5">
                <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400 mb-2">Vault Utilization</p>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                   <div className="h-full bg-emerald-400 w-[33%]" />
                </div>
            </div>
          </Card>
        </motion.div>

        {/* Opportunities Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="h-full bg-zinc-800 rounded-[40px] border-none p-10 flex flex-col relative overflow-hidden">
            <div className="flex items-center justify-between mb-8">
               <h3 className="text-lg font-headline font-black tracking-tight text-zinc-100">Opportunities</h3>
               <span className="material-symbols-outlined text-zinc-300">campaign</span>
            </div>

            <div className="space-y-4 flex-1">
               {quickAdverts.map((ad, i) => (
                 <div key={i} className="p-5 rounded-[24px] bg-zinc-900 border border-zinc-800 hover:shadow-lg transition-all cursor-pointer group">
                    <p className={cn("text-[8px] font-black uppercase tracking-widest mb-1", ad.portal === 'Internal' ? "text-blue-400" : "text-emerald-600")}>{ad.portal}</p>
                    <h4 className="text-xs font-headline font-black text-zinc-200 leading-tight mb-3 group-hover:text-blue-400 transition-colors">{ad.title}</h4>
                    <div className="flex items-center gap-2 text-zinc-400">
                       <span className="text-[8px] font-bold uppercase tracking-widest">Available Now</span>
                    </div>
                 </div>
               ))}
            </div>

            <div className="mt-6 pt-4">
               <button className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400 cursor-not-allowed">Verify to Unlock More</button>
            </div>
          </Card>
        </motion.div>

      </div>

      {/* FUNDING TRACKER LOCKED */}
      <div className="p-8 rounded-[40px] bg-zinc-900 border border-zinc-800 text-center">
        <span className="material-symbols-outlined text-4xl text-zinc-700 mb-4">lock</span>
        <h3 className="text-lg font-black font-headline text-zinc-400 tracking-tight">Funding Status Locked</h3>
        <p className="text-sm font-medium text-zinc-500 mt-2">Complete your profile registration to access your funding dashboard.</p>
      </div>

    </div>
  )
}
