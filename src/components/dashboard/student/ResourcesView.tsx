'use client'

import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const resourceCategories = [
  { title: 'Academic Success', icon: 'school', color: 'blue', items: 12 },
  { title: 'Application Guides', icon: 'description', color: 'green', items: 8 },
  { title: 'Financial Literacy', icon: 'payments', color: 'amber', items: 5 },
  { title: 'Community Support', icon: 'group', color: 'purple', items: 15 },
]

const recentResources = [
  { title: 'How to write a Winning Personal Statement', type: 'Guide', time: 'NEW', icon: 'edit_note' },
  { title: 'Standard Transcript Template (2024)', type: 'Template', time: 'UPDATE', icon: 'description' },
  { title: 'Budgeting for Off-Campus Living', type: 'Article', time: '2d ago', icon: 'wallet' },
]

export function ResourcesView() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto px-8 py-10 space-y-12"
    >
      <section className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
        <div className="space-y-4">
          <h2 className="text-4xl font-extrabold font-headline text-primary tracking-tight">Resource Library</h2>
          <p className="text-on-surface-variant max-w-lg font-body">Everything you need to succeed in your academic journey, from guides to templates and community links.</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-surface-container-lowest border border-outline-variant px-6 py-2.5 rounded-xl font-bold font-headline shadow-sm hover:bg-surface-container-low transition-all">
            My Downloads
          </button>
          <button className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold font-headline shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
            Suggest Resource
          </button>
        </div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {resourceCategories.map((cat, idx) => (
          <Card key={idx} className="p-8 border border-outline-variant/10 bg-surface-container-lowest hover:border-primary/30 transition-all cursor-pointer group rounded-2xl relative overflow-hidden">
            <div className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform",
              cat.color === 'blue' ? "bg-blue-950/30 text-blue-400" : cat.color === 'green' ? "bg-green-950/30 text-green-400" : cat.color === 'amber' ? "bg-amber-950/30 text-amber-600" : "bg-purple-950/30 text-purple-600"
            )}>
              <span className="material-symbols-outlined">{cat.icon}</span>
            </div>
            <h3 className="font-headline font-bold text-lg leading-tight">{cat.title}</h3>
            <p className="text-xs text-outline font-bold mt-2 uppercase tracking-widest">{cat.items} Resources</p>
            <div className="absolute top-2 right-2 opacity-[0.03]">
              <span className="material-symbols-outlined text-6xl select-none" style={{ fontVariationSettings: "'wght' 900" }}>{cat.icon}</span>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <Card className="md:col-span-8 bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/10 shadow-sm">
          <h3 className="font-headline font-bold text-xl mb-8">Recently Added</h3>
          <div className="space-y-4">
            {recentResources.map((res, idx) => (
              <div key={idx} className="flex items-center gap-6 p-4 rounded-2xl border border-outline-variant/5 hover:bg-surface-container-low transition-all bg-surface-container-lowest group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-inner">
                  <span className="material-symbols-outlined text-2xl">{res.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <p className="font-headline font-bold text-on-surface text-lg">{res.title}</p>
                    {res.time === 'NEW' && <span className="bg-primary text-white text-[10px] font-black px-2 py-0.5 rounded-full animate-pulse">NEW</span>}
                  </div>
                  <p className="text-sm text-on-surface-variant font-body">{res.type} • Updated Recently</p>
                </div>
                <button className="material-symbols-outlined text-outline hover:text-primary transition-colors p-2 hover:bg-primary/5 rounded-full">download</button>
              </div>
            ))}
          </div>
        </Card>

        <Card className="md:col-span-4 bg-tertiary-container text-white p-8 rounded-3xl border-none shadow-xl relative overflow-hidden flex flex-col scholar-gradient">
           <h3 className="font-headline font-black text-2xl mb-4 z-10">Premium Content</h3>
           <p className="text-white/70 text-sm mb-10 font-body leading-relaxed z-10">Unlock exclusive workshop materials and one-on-one mentorship transcripts from our top-tier scholars.</p>
           <button className="mt-auto w-full bg-zinc-900 text-tertiary-fixed py-4 rounded-2xl font-black font-headline shadow-lg hover:shadow-white/20 transition-all">
              Unlock All content
           </button>
           <span className="absolute -right-10 -bottom-10 material-symbols-outlined text-8xl text-white/5 rotate-12 z-0 select-none">auto_awesome</span>
        </Card>
      </div>
    </motion.div>
  )
}
