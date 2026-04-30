'use client'

import React, { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/Button'
import { STUDENTS_DATA, StudentProfile } from '@/lib/constants/mock-data'

import { FinalFundingReview } from '@/components/dashboard/sponsor/FinalFundingReview'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function SponsorshipPage() {
  const { id } = useParams()
  const router = useRouter()
  const student = STUDENTS_DATA.find(s => s.id === id) || null
  const [amount, setAmount] = useState<string>('')
  const [customAddition, setCustomAddition] = useState<string>('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  if (!student) return <div className="p-20 text-center font-headline font-black text-zinc-300 uppercase tracking-[0.5em]">Gathering Scholar Records...</div>

  // Initialize with full bulk funding amount
  useState(() => {
    if (student) setAmount(student.totalGoal.toString())
  })

  const handleDonate = () => {
    if (!amount || isNaN(Number(amount))) return
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setIsSuccess(true)
    }, 2000)
  }


  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Success Modal Overlay */}
      {isSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full relative z-10"
          >
            <Card className="bg-zinc-900 rounded-[40px] border border-zinc-800 shadow-2xl p-12 text-center relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-24 h-24 rounded-full bg-emerald-950/30 text-emerald-500 flex items-center justify-center mx-auto mb-8">
                  <span className="material-symbols-outlined text-5xl">check_circle</span>
                </div>
                <h2 className="text-3xl font-headline font-black text-zinc-100 tracking-tight mb-2">Impact Confirmed</h2>
                <p className="text-zinc-400 mb-10 leading-relaxed font-medium">You have successfully committed <span className="text-[#0052CC] font-black">₦{Number(amount).toLocaleString()}</span> to {student.name}&apos;s education. A formal receipt has been sent to your ledger.</p>
                
                <div className="space-y-4">
                  <Button 
                      variant="primary" 
                      className="w-full" 
                      size="lg"
                      onClick={() => router.push('/dashboard/sponsor')}
                  >
                      Return to Dashboard
                  </Button>
                  <div className="grid grid-cols-2 gap-3">
                    <Button 
                        variant="outline" 
                        className="w-full text-[10px] tracking-widest bg-zinc-900 hover:bg-zinc-800"
                        onClick={() => setIsSuccess(false)}
                    >
                        Another Donation
                    </Button>
                    <Button 
                        variant="glass" 
                        className="w-full text-[10px] bg-zinc-800 text-zinc-100 border-zinc-800 hover:bg-zinc-700 tracking-widest"
                        onClick={() => router.push('/dashboard/sponsor/ledger?action=topup')}
                    >
                        Make a Deposit
                    </Button>
                  </div>
                </div>
              </div>
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-950/30 rounded-full blur-3xl opacity-50 pointer-events-none" />
            </Card>
          </motion.div>
        </div>
      )}
      {/* Header / Top Info */}
      <div className="bg-zinc-950/80 border-b border-zinc-800/50 py-6 px-10 flex items-center justify-between sticky top-0 z-50 shadow-lg backdrop-blur-xl">
         <div className="flex items-center gap-6">
            <button onClick={() => router.back()} className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 transition-all duration-300">
               <span className="material-symbols-outlined text-zinc-400">arrow_back</span>
            </button>
            <div>
               <p className="text-[9px] font-black text-[#0052CC] uppercase tracking-[0.3em] mb-1">Scholar Mission</p>
               <h1 className="text-xl font-headline font-black text-white tracking-tight leading-none italic">{student.name}</h1>
            </div>
         </div>
         <Link href={`/students/${student.id}`}>
            <Button variant="ghost" className="text-[#0052CC] hover:bg-[#0052CC]/10" iconRight="open_in_new">Scholar Details</Button>
         </Link>
      </div>

      <div className="max-w-7xl mx-auto px-10 py-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* LEFT COLUMN: Student Brief & Tracker */}
        <div className="lg:col-span-7 space-y-12">
            
            {/* Direct Impact Card */}
            <div className="flex flex-col md:flex-row items-center gap-10">
               <div className="w-48 h-64 rounded-[40px] bg-zinc-700 overflow-hidden shadow-2xl shadow-blue-900/10 shrink-0 border-4 border-zinc-800">
                  <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&auto=format&fit=crop&q=60" className="w-full h-full object-cover" alt={student.name} />
               </div>
               <div className="space-y-6">
                  <div className="space-y-1">
                    <h2 className="text-4xl font-headline font-black text-zinc-100 tracking-tight">{student.name}</h2>
                    <p className="text-zinc-400 font-medium">{student.university} • {student.level}</p>
                  </div>
                  <p className="text-zinc-400 leading-relaxed font-medium line-clamp-3">&quot;{student.bio}&quot;</p>
                  <div className="flex flex-wrap gap-4">
                    <div className="px-6 py-3 rounded-2xl bg-[#0052CC]/5 text-[#0052CC] text-[10px] font-black uppercase tracking-[0.2em] border border-[#0052CC]/10 backdrop-blur-sm">GPA: {student.gpa}</div>
                    <div className="px-6 py-3 rounded-2xl bg-emerald-950/10 text-emerald-500 text-[10px] font-black uppercase tracking-[0.2em] border border-emerald-900/20 backdrop-blur-sm">NIN Verified</div>
                  </div>
               </div>
            </div>

                <FinalFundingReview student={student} compact={true} />
            </div>

        {/* RIGHT COLUMN: Donation Control */}
        <div className="lg:col-span-5 sticky top-32 space-y-8">
            <Card className="bg-zinc-900/50 rounded-[48px] border border-zinc-800/20 shadow-2xl shadow-black/80 p-12 space-y-10 relative overflow-hidden backdrop-blur-md">
               <div className="relative z-10">
                  <div>
                    <h3 className="text-2xl font-headline font-black text-zinc-100 tracking-tight mb-2">Indigent Funding Commitment</h3>
                    <p className="text-zinc-400 text-xs font-medium">As a Sole Benefactor, you are committing to the full requested amount or more.</p>
                  </div>

                  {/* Custom Input */}
                  <div className="space-y-4 pt-8">
                     <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest flex items-center justify-between">
                       <span>Funding Deposit</span>
                       <span className="text-primary-fixed-dim">Min: ₦{student.totalGoal.toLocaleString()}</span>
                     </p>
                     <div className="relative">
                        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-headline font-black text-zinc-300">₦</span>
                        <input 
                           type="number"
                           placeholder={student.totalGoal.toString()}
                           value={amount}
                           onChange={(e) => setAmount(e.target.value)}
                           min={student.totalGoal}
                           className="w-full bg-zinc-800 border-none rounded-3xl py-6 pl-12 pr-6 text-2xl font-headline font-black text-zinc-100 focus:ring-4 ring-primary-fixed-dim/10 placeholder:text-zinc-200 transition-all outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                     </div>
                  </div>

                  {/* Additional Support */}
                  <div className="pt-8 mt-8 border-t border-zinc-800/50">
                    <p className="text-zinc-400 text-sm font-medium mb-5 leading-relaxed">
                      <span className="text-white font-bold">Amplify your impact:</span> Consider an additional contribution to further support their academic and personal needs.
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <button 
                        onClick={() => setAmount((Number(amount || student.totalGoal) + 500000).toString())}
                        className="bg-zinc-800/50 border border-zinc-700/50 hover:border-[#0052CC]/50 rounded-2xl py-4 text-sm font-black text-zinc-300 hover:text-white transition-all shadow-sm hover:bg-zinc-800"
                      >
                        + ₦500k
                      </button>
                      <button 
                        onClick={() => setAmount((Number(amount || student.totalGoal) + 1000000).toString())}
                        className="bg-zinc-800/50 border border-zinc-700/50 hover:border-[#0052CC]/50 rounded-2xl py-4 text-sm font-black text-zinc-300 hover:text-white transition-all shadow-sm hover:bg-zinc-800"
                      >
                        + ₦1M
                      </button>
                    </div>
                    <div className="relative flex items-stretch bg-zinc-800/50 border border-zinc-700/50 rounded-2xl overflow-hidden focus-within:border-[#0052CC]/50 focus-within:bg-zinc-800 transition-all hover:bg-zinc-800/80">
                        <div className="flex items-center pl-5 pr-2">
                           <span className="text-lg font-black text-zinc-400 shrink-0 whitespace-nowrap">+ ₦</span>
                        </div>
                        <input
                          type="number"
                          placeholder="Custom Amount"
                          value={customAddition}
                          onChange={(e) => setCustomAddition(e.target.value)}
                          className="w-full bg-transparent border-none py-4 pl-1 pr-4 text-sm font-black text-zinc-100 focus:ring-0 outline-none placeholder:text-zinc-600 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                        <button 
                          onClick={() => {
                            if (customAddition && !isNaN(Number(customAddition))) {
                              setAmount((Number(amount || student.totalGoal) + Number(customAddition)).toString())
                              setCustomAddition('')
                            }
                          }}
                          className="px-6 py-4 bg-[#0052CC]/10 text-[#0052CC] text-[10px] font-black uppercase tracking-widest hover:bg-[#0052CC] hover:text-white transition-colors border-l border-zinc-700/50"
                        >
                          Add
                        </button>
                    </div>
                  </div>

                  <div className="pt-10">
                     <Button 
                        onClick={handleDonate}
                        variant="primary" 
                        size="lg" 
                        className="w-full py-10 text-xl font-black tracking-tighter shadow-2xl shadow-blue-500/30"
                        disabled={!amount || isProcessing}
                     >
                        {isProcessing ? 'Processing Donation...' : 'Confirm Contribution'}
                     </Button>
                     <p className="text-[9px] text-center text-zinc-300 font-bold uppercase tracking-widest mt-6 flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-[12px]">security</span>
                        Encrypted Ledger Transaction
                     </p>
                  </div>
               </div>

               {/* Design accents */}
               <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-950/30 rounded-full blur-3xl" />
            </Card>
        </div>
      </div>
    </div>
  )
}
