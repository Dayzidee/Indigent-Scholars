'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

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
      
      {/* 1. PRIMARY CONTAINERS (INCOMPLETE SUMMARY) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Progress Container (Status & CTA) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-8 group"
        >
          <Card className="h-full bg-white rounded-[40px] border-none shadow-2xl shadow-zinc-200/50 p-10 lg:p-14 relative overflow-hidden">
             <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <h3 className="text-3xl font-headline font-black text-zinc-900 tracking-tighter leading-none mb-4">Registration Status</h3>
                    <p className="text-amber-600 text-[10px] font-black uppercase tracking-[0.2em]">Attention Required</p>
                  </div>
                  <div className="w-16 h-16 rounded-3xl bg-amber-500 flex items-center justify-center text-white shrink-0 shadow-xl shadow-amber-900/10 transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-3xl">pending_actions</span>
                  </div>
                </div>

                <div className="space-y-6 mb-auto">
                   <div className="flex justify-between items-end">
                      <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Profile Completion</p>
                      <p className="text-3xl font-headline font-black text-zinc-900 leading-none">{completionPercentage}%</p>
                   </div>
                   <div className="w-full h-3 bg-zinc-100 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${completionPercentage}%` }}
                        className="h-full bg-gradient-to-r from-amber-500 to-orange-400"
                      />
                   </div>
                </div>

                <div className="mt-14 pt-10 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                   <p className="text-zinc-500 text-sm font-medium">Complete your registration to unlock 12+ premium scholarship matches.</p>
                   <Button 
                    onClick={() => window.location.href = '/dashboard/student/registration'} 
                    variant="primary" 
                    size="lg" 
                    iconRight="arrow_forward"
                    className="shadow-xl shadow-blue-500/20"
                   >
                    Finish Registration
                   </Button>
                </div>
             </div>
             <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-amber-50 rounded-full blur-3xl opacity-50" />
          </Card>
        </motion.div>

        {/* Uploads Tracker Container */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-4"
        >
          <Card className="h-full bg-zinc-900 rounded-[40px] border-none shadow-2xl shadow-zinc-900/10 p-10 flex flex-col text-white relative overflow-hidden">
            <h3 className="text-2xl font-headline font-black tracking-tight mb-8">Pending Docs</h3>
            <div className="flex-1 space-y-3">
              {pendingRequirements.map((req, i) => (
                <div key={i} className="flex items-center justify-between p-5 rounded-3xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-all">
                   <div className="flex items-center gap-4">
                      <span className={cn(
                        "material-symbols-outlined text-xl transition-colors",
                        req.status === 'uploaded' ? "text-emerald-400" : "text-amber-400"
                      )}>{req.icon}</span>
                      <span className="text-[11px] font-black uppercase tracking-widest">{req.label}</span>
                   </div>
                   <span className="material-symbols-outlined text-zinc-600 text-base">
                     {req.status === 'uploaded' ? 'check_circle' : 'radio_button_unchecked'}
                   </span>
                </div>
              ))}
            </div>
             <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
          </Card>
        </motion.div>
      </div>

      {/* 2. ADVERTS / PROMOTIONS (WIDE TIER) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="bg-zinc-50 rounded-[40px] border-none p-10 lg:p-14">
          <div className="flex flex-col sm:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <p className="text-[#0052CC] text-[10px] font-black uppercase tracking-[0.2em] mb-3">Priority Matches</p>
              <h3 className="text-3xl font-headline font-black text-zinc-900 tracking-tighter leading-none">Student Opportunities</h3>
            </div>
            <button className="text-zinc-400 font-black text-[10px] uppercase tracking-widest hover:text-zinc-900 transition-colors">
              Unlock More with Verification →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickAdverts.map((ad, i) => (
              <div 
                key={i} 
                className={cn("p-10 rounded-[40px] text-white overflow-hidden relative group cursor-pointer transition-transform hover:scale-[1.02]", ad.color)}
              >
                 <div className="relative z-10">
                   <p className="text-white/50 text-[10px] font-black uppercase tracking-widest mb-4">{ad.portal}</p>
                   <h4 className="text-2xl font-headline font-black mb-10 w-2/3 leading-tight tracking-tight">{ad.title}</h4>
                   <Button variant="outline" className="text-white border-white/20 group-hover:bg-white group-hover:text-zinc-900" iconRight="chevron_right">Apply Now</Button>
                 </div>
                 {/* Decorative Circle */}
                 <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform" />
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

    </div>
  )
}
