'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const categories = [
  { id: 'account', icon: 'manage_accounts', title: 'Organization & Account', description: 'Manage team access, profile security, and preferences.' },
  { id: 'funding', icon: 'payments', title: 'Funding & Transactions', description: 'Guides on disbursements, tax receipts, and ledger history.' },
  { id: 'scholars', icon: 'school', title: 'Scholar Management', description: 'Tracking progress, communication rules, and verification.' },
  { id: 'compliance', icon: 'verified_user', title: 'Compliance & Legal', description: 'KYC requirements, data protection, and regulatory info.' },
]

const faqs = [
  { question: "How do I add team members to our organization?", answer: "Navigate to Org Settings > Team. You can invite members via email and assign roles such as Administrator or Financial Officer." },
  { question: "When are tax receipts generated?", answer: "Tax-deductible receipts are automatically generated within 24 hours of a settled transaction and can be downloaded from the Funding Ledger." },
  { question: "Can I communicate directly with scholars?", answer: "To ensure safety and privacy, all communication is mediated through our secure messaging portal or handled by your assigned Scholar Advisor." },
  { question: "What is the 'Last Mile' initiative?", answer: "It focuses on scholars who have reached 80% or more of their goal, helping them cross the finish line quickly to begin their studies." },
]

export function SponsorHelp() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-5xl mx-auto space-y-8 md:space-y-12 pb-20 px-4 w-full"
    >
      {/* Search Header */}
      <section className="text-center space-y-6 md:space-y-8 pt-6 md:pt-10">
        <div className="space-y-2">
          <span className="text-[#0052CC] font-bold text-[10px] tracking-[0.2em] uppercase font-label">Support Hub</span>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight font-headline leading-tight">How can we assist you?</h1>
        </div>
        
        <div className="relative max-w-2xl mx-auto group">
          <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-zinc-400 text-xl md:text-2xl group-focus-within:text-[#0052CC] transition-colors">search</span>
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for articles, guides..."
            className="w-full bg-white border border-zinc-200 rounded-2xl lg:rounded-[32px] py-4 md:py-6 pl-14 md:pl-16 pr-6 md:pr-8 text-sm md:text-lg font-medium shadow-xl shadow-zinc-200/50 focus:border-[#0052CC]/30 focus:ring-4 focus:ring-[#0052CC]/5 transition-all font-body outline-none"
          />
        </div>
      </section>

      {/* Category Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {categories.map((cat, idx) => (
          <motion.div 
            key={cat.id}
            whileHover={{ y: -5 }}
            className="bg-white p-6 md:p-8 rounded-3xl lg:rounded-[40px] border border-zinc-100 shadow-sm hover:shadow-xl hover:shadow-[#0052CC]/5 transition-all group cursor-pointer"
          >
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl lg:rounded-[24px] bg-[#0052CC]/5 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[#0052CC] group-hover:text-white transition-all">
              <span className="material-symbols-outlined text-2xl md:text-3xl">{cat.icon}</span>
            </div>
            <h3 className="text-lg md:text-xl font-bold text-zinc-900 mb-1 md:mb-2 font-headline">{cat.title}</h3>
            <p className="text-zinc-500 font-body text-xs md:text-sm leading-relaxed">{cat.description}</p>
          </motion.div>
        ))}
      </section>

      {/* FAQs */}
      <section className="bg-zinc-50 rounded-3xl lg:rounded-[48px] p-6 sm:p-12 border border-zinc-100">
        <h2 className="text-3xl font-black text-zinc-900 mb-10 font-headline tracking-tight px-4 text-center">Frequently Asked Questions</h2>
        <div className="grid gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-3xl lg:rounded-[32px] border border-zinc-100 hover:border-[#0052CC]/20 transition-all">
              <h4 className="font-black text-lg text-zinc-900 mb-3 font-headline leading-tight">{faq.question}</h4>
              <p className="text-zinc-500 text-sm font-body leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Banner */}
      <section className="bg-[#0052CC] rounded-3xl lg:rounded-[48px] p-8 md:p-16 text-center space-y-8 shadow-2xl shadow-blue-600/20 relative overflow-hidden group">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none transform translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition-transform duration-1000">
          <span className="material-symbols-outlined text-[300px] text-white">support_agent</span>
        </div>
        
        <div className="relative z-10 space-y-4">
          <h2 className="text-3xl md:text-4xl font-black text-white font-headline tracking-tighter">Still need a helping hand?</h2>
          <p className="text-white/70 max-w-xl mx-auto font-body text-lg">
            Our specialized support team is available 24/7 to help you maximize your organization's impact.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 relative z-10">
          <Button variant="secondary" size="lg" iconLeft="chat">Start Live Chat</Button>
          <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10" iconLeft="mail">Email Support</Button>
        </div>
      </section>
    </motion.div>
  )
}
