'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { CategorizedProfile } from '@/components/dashboard/student/CategorizedProfile'

export default function ApplyForFundingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleFinalSubmit = () => {
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 2000)
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-transparent">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full"
        >
          <Card className="p-12 rounded-[40px] border-none shadow-2xl bg-zinc-900 text-center">
             <div className="w-20 h-20 bg-emerald-950/30 text-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <span className="material-symbols-outlined text-4xl animate-bounce">check_circle</span>
             </div>
             <h2 className="text-3xl font-headline font-black text-zinc-100 mb-4 tracking-tight">Application Submitted!</h2>
             <p className="text-zinc-500 font-medium leading-relaxed mb-10">
                Your request for Indigent Aid Funding has been successfully queued. Our committee will review your narrative and verified documents within 3-5 business days.
             </p>
             <Button variant="primary" size="lg" className="w-full" onClick={() => window.location.href = '/dashboard/student'}>
                Return to Dashboard
             </Button>
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-transparent pb-32">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-emerald-950/30 text-emerald-600 text-[8px] font-black uppercase tracking-widest border border-emerald-100">Verification Active</span>
              <h1 className="text-4xl font-headline font-black text-zinc-100 tracking-tight">Final Funding Review</h1>
            </div>
            <p className="text-zinc-500 font-medium">Please review all your provided information before final submission.</p>
          </div>
          <div className="px-6 py-4 rounded-[28px] bg-zinc-900 border-2 border-emerald-100 shadow-sm flex items-center gap-4">
             <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                <span className="material-symbols-outlined text-xl">verified</span>
             </div>
             <div>
                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest leading-none mb-1">Status</p>
                <p className="text-sm font-headline font-black text-zinc-100">Verification Success</p>
             </div>
          </div>
        </div>

        <div className="space-y-12">
          
          {/* Module 1: Dashboard Overview Summary */}
          <section className="space-y-6">
            <h3 className="text-xl font-headline font-black text-zinc-100 ml-2">Application Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {[
                 { label: "Application ID", value: "IS-2024-8842", icon: "fingerprint", color: "text-blue-400 bg-blue-50" },
                 { label: "Funding Type", value: "Indigent Aid Grant", icon: "account_balance_wallet", color: "text-purple-600 bg-purple-50" },
                 { label: "Priority Level", value: "High (Scholarship)", icon: "priority_high", color: "text-amber-600 bg-amber-50" }
               ].map((item, i) => (
                 <Card key={i} className="p-6 rounded-[32px] border-none bg-zinc-900 shadow-xl shadow-zinc-200/40 flex items-center gap-5">
                   <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center shrink-0", item.color)}>
                     <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                   </div>
                   <div>
                     <p className="text-zinc-400 text-[9px] font-black uppercase tracking-widest mb-1">{item.label}</p>
                     <p className="text-sm font-headline font-black text-zinc-100 tracking-tight">{item.value}</p>
                   </div>
                 </Card>
               ))}
            </div>
          </section>

          {/* Module 2: Registration Data (Aggregated from CategorizedProfile) */}
          <section className="space-y-6">
            <h3 className="text-xl font-headline font-black text-zinc-100 ml-2">Registration Identity</h3>
            <CategorizedProfile />
          </section>

          {/* Module 3: Application Story & Narrative */}
          <section className="space-y-6">
            <h3 className="text-xl font-headline font-black text-zinc-100 ml-2">Scholarship Narrative</h3>
            <Card className="p-10 lg:p-14 rounded-[40px] border-none bg-zinc-900 shadow-2xl shadow-blue-900/5 relative overflow-hidden">
               <div className="relative z-10">
                 <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-2xl bg-zinc-900 text-white flex items-center justify-center">
                          <span className="material-symbols-outlined text-2xl">history_edu</span>
                       </div>
                       <div>
                          <p className="text-zinc-400 text-[9px] font-black uppercase tracking-widest mb-1">Requested Amount</p>
                          <p className="text-2xl font-headline font-black text-zinc-100 tracking-tight">₦150,000.00</p>
                       </div>
                    </div>
                    <Button variant="ghost" size="sm" iconRight="edit" className="text-[#0052CC]">Edit Story</Button>
                 </div>
                 <div className="bg-zinc-800/50 rounded-[32px] p-8 lg:p-10 border border-zinc-800">
                    <p className="text-zinc-400 leading-relaxed font-medium">
                       "I am a highly motivated Chemical Engineering student at the University of Lagos. Despite the financial hurdles, I have maintained a 4.72 CGPA. This scholarship will ensure I finish my final year and contribute to sustainable energy solutions in Nigeria. My goal is to bridge the gap between rural energy access and industrial efficiency using bio-chemical processes..."
                    </p>
                 </div>
               </div>
               <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
            </Card>
          </section>

          {/* Submission Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10 border-t border-zinc-700">
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-950/30 text-[#0052CC] flex items-center justify-center">
                   <span className="material-symbols-outlined text-xl">info</span>
                </div>
                <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed max-w-xs">
                   By submitting, you confirm that all information provided is accurate and all documents are authentic.
                </p>
             </div>
             <div className="flex items-center gap-4">
                <Button variant="ghost" size="lg" onClick={() => window.history.back()}>Back to Edit</Button>
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="min-w-[240px] shadow-2xl shadow-blue-500/30"
                  onClick={handleFinalSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Syncing Data..." : "Finalize & Submit Application"}
                </Button>
             </div>
          </div>

        </div>
      </div>
    </div>
  )
}
