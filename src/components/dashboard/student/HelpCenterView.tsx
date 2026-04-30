'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

const faqs = [
  { question: 'How do I track my funding status?', answer: 'You can track your funding status directly from the Dashboard Overview. The Financial Overview card shows the percentage of your goal reached.' },
  { question: 'What documents are required for verification?', answer: 'We typically require a valid Government ID, your most recent Academic Transcript, and proof of indigent status (e.g., local government attestation).' },
  { question: 'How long does the matching process take?', answer: 'Once verified, matching with a sponsor usually takes between 48 hours to 2 weeks, depending on your faculty and academic performance.' },
]

export function HelpCenterView() {
  const [showTicketForm, setShowTicketForm] = useState(false)

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto px-8 py-10 space-y-12 pb-32"
    >
      <section className="text-center space-y-4">
        <h2 className="text-4xl font-headline font-black text-zinc-100 tracking-tighter leading-none">How can we help today?</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto font-body text-sm">Find answers to common questions or reach out to our support team for personalized assistance.</p>
        <div className="relative max-w-xl mx-auto mt-10">
          <span className="absolute left-6 top-1/2 -translate-y-1/2 material-symbols-outlined text-zinc-400">search</span>
          <input 
            type="text" 
            placeholder="Search for articles, guides..." 
            className="w-full pl-14 pr-8 py-5 rounded-[24px] border border-zinc-800 bg-zinc-900 focus:outline-none focus:ring-4 focus:ring-zinc-800 shadow-xl shadow-zinc-950/40 transition-all font-medium text-sm text-zinc-100"
          />
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Getting Started', icon: 'rocket_launch', color: 'blue' },
          { title: 'Verification', icon: 'verified_user', color: 'emerald' },
          { title: 'Payments', icon: 'payments', color: 'amber' },
        ].map((cat, idx) => (
          <Card key={idx} className="p-8 border border-zinc-800 bg-zinc-900 hover:border-blue-200 transition-all cursor-pointer group rounded-[32px] shadow-sm hover:shadow-xl hover:shadow-blue-900/5">
            <div className={cn(
              "w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner border",
              cat.color === 'blue' ? "bg-blue-950/30 text-blue-400 border-blue-100" : cat.color === 'emerald' ? "bg-emerald-950/30 text-emerald-600 border-emerald-100" : "bg-amber-950/30 text-amber-600 border-amber-100"
            )}>
              <span className="material-symbols-outlined text-2xl">{cat.icon}</span>
            </div>
            <h3 className="font-headline font-black text-lg text-zinc-100 mb-2">{cat.title}</h3>
            <p className="text-xs text-zinc-400 font-medium leading-relaxed">Learn more about {cat.title.toLowerCase()} processes and requirements.</p>
          </Card>
        ))}
      </div>

      <section className="space-y-8">
        <h3 className="font-headline font-black text-2xl text-zinc-100 tracking-tight">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Card key={idx} className="p-8 border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 transition-all cursor-pointer group rounded-[24px] shadow-sm">
              <div className="flex justify-between items-center group-hover:text-[#0052CC] transition-colors">
                <span className="font-headline font-black text-zinc-100 group-hover:text-[#0052CC] transition-colors">{faq.question}</span>
                <span className="material-symbols-outlined text-zinc-300 group-hover:text-[#0052CC]">expand_more</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Card className="bg-[#0052CC] text-white p-12 lg:p-16 rounded-[48px] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 border-none shadow-2xl shadow-blue-500/20">
        <div className="z-10 space-y-6 text-center lg:text-left">
          <h3 className="text-4xl lg:text-5xl font-black font-headline tracking-tighter leading-none">Still have questions?</h3>
          <p className="text-white/80 font-medium text-sm lg:text-base max-w-md leading-relaxed">Our dedicated student advisors are available 24/7 to help you navigate your academic funding journey.</p>
          <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
            <button 
              onClick={() => setShowTicketForm(true)}
              className="bg-zinc-900 text-[#0052CC] px-10 py-4 rounded-2xl font-black font-headline shadow-xl hover:scale-105 transition-all active:scale-95 text-sm uppercase tracking-widest"
            >
              Raise a Support Ticket
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-zinc-800/20 px-10 py-4 rounded-2xl font-black font-headline hover:bg-zinc-800/20 transition-all text-sm uppercase tracking-widest">
              Live Chat
            </button>
          </div>
        </div>
        <div className="relative z-10 hidden lg:block pr-8">
           <span className="material-symbols-outlined text-[160px] text-white/10 select-none animate-float" style={{ fontVariationSettings: "'wght' 200" }}>support_agent</span>
        </div>
        {/* Decorative background elements */}
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-400/20 rounded-full blur-[100px]" />
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px]" />
      </Card>

      {/* TICKET CREATION MODAL */}
      <AnimatePresence>
        {showTicketForm && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowTicketForm(false)}
              className="absolute inset-0 bg-zinc-900/60 backdrop-blur-xl"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-zinc-900 rounded-[48px] shadow-2xl overflow-hidden p-10 lg:p-14"
            >
               <div className="flex justify-between items-start mb-10">
                 <div>
                   <h3 className="text-3xl font-headline font-black text-zinc-100 tracking-tighter leading-none mb-4">Raise Support Ticket</h3>
                   <p className="text-zinc-400 text-sm font-medium">Please provide details regarding your inquiry.</p>
                 </div>
                 <button 
                  onClick={() => setShowTicketForm(false)}
                  className="w-12 h-12 rounded-2xl bg-zinc-800 text-zinc-400 flex items-center justify-center hover:bg-zinc-800 transition-colors"
                 >
                   <span className="material-symbols-outlined">close</span>
                 </button>
               </div>

               <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setShowTicketForm(false); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Category</label>
                       <select className="w-full px-6 py-4 bg-zinc-800 border-none rounded-2xl font-black text-zinc-100 text-sm focus:ring-4 focus:ring-blue-50 transition-all appearance-none cursor-pointer">
                          <option>Registration Issue</option>
                          <option>Verification Pipeline</option>
                          <option>Scholarship Matching</option>
                          <option>Funding Disbursement</option>
                          <option>Other / General Inquiry</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Urgency</label>
                       <select className="w-full px-6 py-4 bg-zinc-800 border-none rounded-2xl font-black text-zinc-100 text-sm focus:ring-4 focus:ring-blue-50 transition-all appearance-none cursor-pointer">
                          <option>Low / Routine</option>
                          <option>Medium / Time Sensitive</option>
                          <option>High / Critical</option>
                       </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Subject</label>
                    <input 
                      type="text" 
                      placeholder="Summary of the issue..."
                      className="w-full px-6 py-4 bg-zinc-800 border-none rounded-2xl font-black text-zinc-100 text-sm focus:ring-4 focus:ring-blue-50 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400 ml-1">Detailed Description</label>
                    <textarea 
                      rows={4}
                      placeholder="Please elaborate on your concern..."
                      className="w-full px-6 py-4 bg-zinc-800 border-none rounded-2xl font-medium text-zinc-100 text-sm focus:ring-4 focus:ring-blue-50 transition-all resize-none leading-relaxed"
                    />
                  </div>

                  <div className="pt-6">
                    <Button variant="primary" size="lg" className="w-full py-8 text-base">Submit Application Support Ticket</Button>
                  </div>
               </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </motion.div>
  )
}
