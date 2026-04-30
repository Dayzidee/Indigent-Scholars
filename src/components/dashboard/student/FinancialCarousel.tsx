'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

const MOCK_DONORS = [
  { name: "Dr. Samuel Okoro", amount: "$250", date: "2h ago", avatar: "SO" },
  { name: "Tech For Good Inc.", amount: "$100", date: "5h ago", avatar: "TF" },
  { name: "Global Scholars Fund", amount: "$50", date: "1d ago", avatar: "GS" },
  { name: "Anonymous Donor", amount: "$150", date: "2d ago", avatar: "?" },
  { name: "EdAfrica Alumni", amount: "$20", date: "3d ago", avatar: "EA" },
]

export function FinancialCarousel() {
  const goal = 1500
  const received = 570
  const percentage = (received / goal) * 100

  return (
    <Card className="bg-zinc-900 rounded-[40px] border-none shadow-2xl shadow-blue-900/5 p-10 overflow-hidden relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
        <div>
           <p className="text-[#0052CC] text-[10px] font-black uppercase tracking-[0.2em] mb-2">Funding Progress</p>
           <h3 className="text-3xl font-headline font-black text-zinc-100 tracking-tighter">Financial Tracker</h3>
        </div>
        <div className="text-right">
           <p className="text-4xl font-headline font-black text-zinc-100 leading-none mb-1">${received}</p>
           <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest">Raised of ${goal} Goal</p>
        </div>
      </div>

      {/* Main Progress Bar */}
      <div className="relative h-4 w-full bg-zinc-800 rounded-full mb-12 overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          className="h-full bg-gradient-to-r from-[#0052CC] to-blue-400 rounded-full shadow-lg shadow-blue-500/20"
        />
      </div>

      {/* Donor Carousel */}
      <div className="relative group">
        <div className="flex justify-between items-center mb-6">
          <p className="text-zinc-400 text-[10px] font-black uppercase tracking-[0.2em]">Individual Contributions</p>
          <div className="flex gap-2">
             <button className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-zinc-800 transition-colors">
               <span className="material-symbols-outlined text-sm">chevron_left</span>
             </button>
             <button className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-zinc-800 transition-colors">
               <span className="material-symbols-outlined text-sm">chevron_right</span>
             </button>
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
          {MOCK_DONORS.map((donor, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="min-w-[200px] snap-start bg-zinc-800 p-5 rounded-3xl border border-zinc-800 flex items-center gap-4 transition-all hover:bg-zinc-900 hover:shadow-xl hover:shadow-blue-900/5"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0052CC] flex items-center justify-center font-black text-xs shadow-sm">
                {donor.avatar}
              </div>
              <div>
                <p className="text-sm font-black text-zinc-100 leading-none mb-1">{donor.name}</p>
                <div className="flex items-center gap-2">
                  <span className="text-[#0052CC] text-xs font-black">{donor.amount}</span>
                  <span className="text-zinc-400 text-[9px] font-bold uppercase tracking-wider">• {donor.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Card>
  )
}
