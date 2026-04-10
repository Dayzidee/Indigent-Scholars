'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { OutlinedInput } from '@/components/ui/OutlinedInput'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const MOCK_MESSAGES = [
  {
    sender: "Admin: Prateek Rana",
    avatar: "PR",
    color: "bg-purple-100 text-purple-600",
    subject: "Application Decision: Program Closed",
    date: "Feb 08, 2024 • 14:44",
    body: `Hi Adebayo Chioma,

Thank you for your application to Conestoga College - Kitchener Downtown. Having carefully reviewed the information you have submitted, we are very sorry to inform you that we cannot offer you admission at this time.

Please follow the link below to review the PAL eligible programs with current capacity.

Regards,
Scholarship Admin Team`
  },
  {
    sender: "You",
    avatar: "AC",
    color: "bg-blue-100 text-[#0052CC]",
    subject: "Re: Document Verification",
    date: "Feb 05, 2024 • 09:12",
    body: `I have updated the transcript with the official stamp from the registrar. Please let me know if any further changes are needed.`
  }
]

export default function StudentApplicationPage() {
  const [formData, setFormData] = useState({
    amount: '150000',
    story: 'I am a highly motivated Chemical Engineering student at the University of Lagos. Despite the financial hurdles, I have maintained a 4.72 CGPA. This scholarship will ensure I finish my final year and contribute to sustainable energy solutions in Nigeria.'
  })

  return (
    <div className="min-h-screen bg-slate-50/50 pb-32">
       <div className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-headline font-black text-zinc-900 tracking-tight mb-2">My Application</h1>
          <p className="text-zinc-500 font-medium">Manage your scholarship narrative and internal communications.</p>
        </div>

        <div className="space-y-12">
          
          {/* SECTION 1: SCHOLARSHIP STORY FORM */}
          <section>
            <Card className="bg-white rounded-[40px] border-none shadow-2xl shadow-blue-900/5 p-10 lg:p-14">
               <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0052CC] flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">history_edu</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-headline font-black text-zinc-900">Application Narrative</h3>
                    <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em]">Story & Objective</p>
                  </div>
               </div>

               <div className="space-y-8">
                  <div className="max-w-xs">
                    <OutlinedInput 
                      label="Requested Amount (₦)" 
                      icon="payments"
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    />
                  </div>
                  
                  <div className="relative group">
                    <label className="absolute left-6 top-4 z-10 text-[10px] font-black text-[#0052CC] uppercase tracking-widest bg-white px-2 rounded-sm group-focus-within:border-[#0052CC]">Your Scholarship Story</label>
                    <textarea 
                      value={formData.story}
                      onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                      className="w-full min-h-[250px] bg-zinc-50/30 border-2 border-zinc-200 rounded-[32px] p-8 pt-10 text-zinc-800 font-medium focus:outline-none focus:border-[#0052CC] focus:ring-4 focus:ring-blue-600/5 transition-all outline-none resize-none"
                    />
                  </div>

                  <div className="flex justify-end pt-4">
                    <Button variant="primary" size="lg" iconRight="save">Update Application Story</Button>
                  </div>
               </div>
            </Card>
          </section>

          {/* SECTION 1.5: APPLY FOR FUNDING PROMO */}
          <section>
            <div className="bg-[#0052CC] rounded-[40px] p-10 lg:p-14 text-white relative overflow-hidden group">
               <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex-1">
                     <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-white/10 text-white text-[8px] font-black uppercase tracking-widest border border-white/10">Action Required</span>
                        <h4 className="text-sm font-black text-blue-200 uppercase tracking-[0.2em]">Next Step</h4>
                     </div>
                     <h3 className="text-3xl font-headline font-black tracking-tight mb-4">Apply for Funding</h3>
                     <p className="text-blue-100 font-medium leading-relaxed max-w-xl">
                        Your profile is ready. By applying for funding, your verified credentials and scholarship narrative will be submitted to the Indigent Scholars Aid committee for final review.
                     </p>
                  </div>
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    iconRight="arrow_forward"
                    onClick={() => window.location.href = '/dashboard/student/apply-funding'}
                  >
                    Start Funding Application
                  </Button>
               </div>
               
               {/* Background Decorative Elements */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-white/10 transition-all duration-700" />
               <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-900/50 rounded-full -ml-10 -mb-10 blur-2xl" />
            </div>
          </section>

          {/* SECTION 2: GMAIL-STYLE MESSAGING CENTER */}
          <section className="space-y-8">
            <div className="flex items-center gap-4 px-2">
               <div className="h-px flex-1 bg-zinc-200" />
               <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.4em]">Internal Communications</p>
               <div className="h-px flex-1 bg-zinc-200" />
            </div>

            <Card className="bg-white rounded-[40px] border-none shadow-2xl shadow-zinc-200/50 overflow-hidden">
               {/* Messaging Toolbar */}
               <div className="bg-zinc-50 border-b border-zinc-100 px-8 py-5 flex items-center justify-between">
                  <div className="flex gap-4">
                     <div className="flex items-center gap-2 text-zinc-400 hover:text-zinc-600 cursor-pointer transition-colors">
                        <span className="material-symbols-outlined text-xl">refresh</span>
                        <span className="text-[10px] font-black uppercase tracking-widest">Refresh</span>
                     </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#0052CC] font-black text-[10px] uppercase tracking-widest">
                     <span className="w-2 h-2 rounded-full bg-[#0052CC] animate-pulse" />
                     Live Connection
                  </div>
               </div>

               {/* Message Threads */}
               <div className="divide-y divide-zinc-100">
                  {MOCK_MESSAGES.map((msg, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="p-8 lg:p-12 hover:bg-zinc-50/50 transition-all group"
                    >
                       <div className="flex flex-col lg:flex-row gap-8">
                          <div className={cn("w-14 h-14 rounded-[20px] flex items-center justify-center shrink-0 font-black text-sm shadow-sm", msg.color)}>
                            {msg.avatar}
                          </div>
                          <div className="flex-1 min-w-0">
                             <div className="flex flex-col sm:flex-row justify-between items-start mb-4 gap-2">
                                <div>
                                   <h4 className="text-sm font-black text-zinc-900 group-hover:text-[#0052CC] transition-colors">{msg.sender}</h4>
                                   <p className="text-xl font-headline font-black text-zinc-800 tracking-tight mt-1">{msg.subject}</p>
                                </div>
                                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest bg-zinc-100 px-3 py-1 rounded-full">{msg.date}</p>
                             </div>
                             <div className="bg-white/50 border border-zinc-100 rounded-[32px] p-6 lg:p-8">
                                <p className="text-zinc-600 leading-relaxed whitespace-pre-wrap font-medium">
                                  {msg.body}
                                </p>
                             </div>
                          </div>
                       </div>
                    </motion.div>
                  ))}
               </div>

               {/* Quick Reply Bar */}
               <div className="p-8 bg-zinc-50/50 border-t border-zinc-100">
                  <div className="flex items-center gap-4 bg-white border-2 border-zinc-100 rounded-full px-8 py-3 focus-within:border-[#0052CC] transition-all">
                     <input 
                      placeholder="Type a quick reply to administration..."
                      className="flex-1 bg-transparent text-sm font-medium text-zinc-700 outline-none"
                     />
                     <Button variant="primary" size="sm" iconRight="send" className="rounded-full shadow-lg shadow-blue-500/20">Send</Button>
                  </div>
               </div>
            </Card>
          </section>

        </div>
       </div>
    </div>
  )
}
