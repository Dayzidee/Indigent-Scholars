'use client'

import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const faqs = [
  { question: 'How do I track my funding status?', answer: 'You can track your funding status directly from the Dashboard Overview. The Financial Overview card shows the percentage of your goal reached.' },
  { question: 'What documents are required for verification?', answer: 'We typically require a valid Government ID, your most recent Academic Transcript, and proof of indigent status (e.g., local government attestation).' },
  { question: 'How long does the matching process take?', answer: 'Once verified, matching with a sponsor usually takes between 48 hours to 2 weeks, depending on your faculty and academic performance.' },
]

export function HelpCenterView() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto px-8 py-10 space-y-12"
    >
      <section className="text-center space-y-4">
        <h2 className="text-4xl font-extrabold font-headline text-primary tracking-tight">How can we help you today?</h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto font-body">Find answers to common questions or reach out to our support team for personalized assistance.</p>
        <div className="relative max-w-xl mx-auto mt-8">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline">search</span>
          <input 
            type="text" 
            placeholder="Search for articles, guides..." 
            className="w-full pl-12 pr-6 py-4 rounded-2xl border border-outline-variant bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm transition-all"
          />
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Getting Started', icon: 'rocket_launch', color: 'blue' },
          { title: 'Verification', icon: 'verified_user', color: 'green' },
          { title: 'Payments', icon: 'payments', color: 'amber' },
        ].map((cat, idx) => (
          <Card key={idx} className="p-8 border border-outline-variant/10 bg-surface-container-lowest hover:border-primary/20 transition-all cursor-pointer group rounded-2xl">
            <div className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform",
              cat.color === 'blue' ? "bg-blue-50 text-blue-600" : cat.color === 'green' ? "bg-green-50 text-green-600" : "bg-amber-50 text-amber-600"
            )}>
              <span className="material-symbols-outlined">{cat.icon}</span>
            </div>
            <h3 className="font-headline font-bold text-lg mb-2">{cat.title}</h3>
            <p className="text-xs text-outline font-body">Learn more about {cat.title.toLowerCase()} processes and requirements.</p>
          </Card>
        ))}
      </div>

      <section className="space-y-6">
        <h3 className="font-headline font-bold text-2xl">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Card key={idx} className="p-6 border border-outline-variant/10 bg-surface-container-lowest hover:bg-surface-container-low transition-all cursor-pointer group rounded-xl">
              <div className="flex justify-between items-center group-hover:text-primary transition-colors">
                <span className="font-headline font-bold">{faq.question}</span>
                <span className="material-symbols-outlined text-outline group-hover:text-primary">expand_more</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Card className="bg-primary scholar-gradient text-white p-10 rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border-none shadow-xl shadow-primary/20">
        <div className="z-10 space-y-4 text-center md:text-left">
          <h3 className="text-3xl font-black font-headline">Still have questions?</h3>
          <p className="text-white/80 font-body max-w-md">Our dedicated student advisors are available 24/7 to help you navigate your academic funding journey.</p>
          <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
            <button className="bg-white text-primary px-8 py-3 rounded-full font-black font-headline shadow-lg hover:bg-white/90 transition-all active:scale-95">
              Live Chat
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-3 rounded-full font-bold hover:bg-white/20 transition-all shadow-xl">
              Email Support
            </button>
          </div>
        </div>
        <div className="relative z-10 hidden lg:block">
           <span className="material-symbols-outlined text-[120px] text-white/10 select-none animate-float">support_agent</span>
        </div>
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </Card>
    </motion.div>
  )
}
