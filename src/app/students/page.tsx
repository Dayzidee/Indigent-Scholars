'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/Button'
import { FloatingCustomerCare } from '@/components/ui/FloatingCustomerCare'
import { STUDENTS_DATA } from '@/lib/constants/mock-data'
import Link from 'next/link'

export default function VerifiedStudentsPage() {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Header Section */}
        <div className="text-center mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center mb-4"
          >
            <span className="px-4 py-1.5 rounded-full bg-blue-100 text-[#0052CC] text-[10px] font-black uppercase tracking-[0.3em] border border-blue-200"> Verified Scholars </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-headline font-black text-zinc-100 tracking-tight"
          >
            Empower the Next Generation
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 text-lg max-w-2xl mx-auto font-medium"
          >
            Connect with high-performing students who have undergone rigorous identity and academic verification. Your support can change a life.
          </motion.p>
        </div>

        {/* Student Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {STUDENTS_DATA.map((student, index) => {
            const percentage = (student.raisedAmount / student.totalGoal) * 100
            
            return (
              <motion.div
                key={student.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full bg-zinc-900 rounded-[40px] border border-zinc-800/10 shadow-none overflow-hidden transition-all duration-500 hover:border-[#0052CC]/40 hover:-translate-y-2 flex flex-col p-2">
                  <div className="bg-zinc-800 rounded-[32px] p-8 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-16 h-16 rounded-[24px] bg-zinc-900 border border-zinc-800/20 flex items-center justify-center overflow-hidden">
                        <img 
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.name}`} 
                          alt={student.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="px-3 py-1 rounded-full bg-emerald-950/30 text-emerald-600 text-[8px] font-black uppercase tracking-widest border border-emerald-100 italic"> Identity Verified </div>
                        <div className="px-3 py-1 rounded-full bg-blue-950/30 text-[#0052CC] text-[8px] font-black uppercase tracking-widest border border-blue-100"> Academic Pro </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-2xl font-headline font-black text-zinc-100 tracking-tight leading-none mb-2 group-hover:text-[#0052CC] transition-colors">{student.name}</h3>
                      <p className="text-[#0052CC] text-[10px] font-black uppercase tracking-widest mb-4">{student.university}</p>
                      <p className="text-zinc-500 text-xs leading-relaxed font-medium line-clamp-2">{student.bio}</p>
                    </div>

                    <div className="mt-auto space-y-4 pt-6 border-t border-zinc-800">
                      <div className="flex justify-between items-end">
                        <span className="text-zinc-400 text-[9px] font-black uppercase tracking-widest">Scholar&apos;s GPA</span>
                        <span className="text-lg font-headline font-black text-zinc-200">{student.gpa}</span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                          <span className="text-[#0052CC]">₦{student.raisedAmount.toLocaleString()}</span>
                          <span className="text-zinc-300">Target: ₦{student.totalGoal.toLocaleString()}</span>
                        </div>
                        <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${percentage}%` }}
                            className="h-full bg-[#0052CC] rounded-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <Link href={`/students/${student.id}`} className="block">
                      <Button variant="primary" className="w-full rounded-[24px] py-6 border border-blue-500/20 shadow-none group-hover:scale-[1.02] transition-transform" iconRight="arrow_forward"> View Full Profile </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

      </div>
      <FloatingCustomerCare />
    </div>
  )
}
