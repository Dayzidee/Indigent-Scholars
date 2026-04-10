'use client'

import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/Button'
import { STUDENTS_DATA, StudentProfile } from '@/lib/constants/mock-data'
import { FundingTracker } from '@/components/dashboard/student/FundingTracker'
import Link from 'next/link'

export default function SponsorshipPage() {
  const { id } = useParams()
  const router = useRouter()
  const [student, setStudent] = useState<StudentProfile | null>(null)
  const [amount, setAmount] = useState<string>('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    const found = STUDENTS_DATA.find(s => s.id === id)
    if (found) {
      setStudent(found)
    }
  }, [id])

  if (!student) return <div className="p-20 text-center font-headline font-black text-zinc-300 uppercase tracking-[0.5em]">Gathering Scholar Records...</div>

  const remaining = student.totalGoal - student.raisedAmount
  const suggestedAmounts = [50000, 100000, 250000, 500000]

  const handleDonate = () => {
    if (!amount || isNaN(Number(amount))) return
    setIsProcessing(true)
    setTimeout(() => {
      setIsProcessing(false)
      setIsSuccess(true)
    }, 2000)
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full"
        >
          <Card className="bg-white rounded-[40px] border-none shadow-2xl p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-24 h-24 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto mb-8">
                <span className="material-symbols-outlined text-5xl">check_circle</span>
              </div>
              <h2 className="text-3xl font-headline font-black text-zinc-900 tracking-tight mb-2">Impact Confirmed</h2>
              <p className="text-zinc-500 mb-10 leading-relaxed font-medium">You have successfully committed <span className="text-[#0052CC] font-black">₦{Number(amount).toLocaleString()}</span> to {student.name}'s education. A formal receipt has been sent to your ledger.</p>
              
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
                      className="w-full text-[10px] tracking-widest"
                      onClick={() => setIsSuccess(false)}
                  >
                      Another Donation
                  </Button>
                  <Button 
                      variant="glass" 
                      className="w-full text-[10px] bg-zinc-50 text-zinc-900 border-zinc-100 tracking-widest"
                      onClick={() => router.push('/dashboard/sponsor/ledger?action=topup')}
                  >
                      Make a Deposit
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-50" />
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FDFDFF] pb-32">
      {/* Header / Top Info */}
      <div className="bg-white border-b border-zinc-100 py-6 px-10 flex items-center justify-between sticky top-0 z-50 shadow-sm backdrop-blur-md bg-white/80">
         <div className="flex items-center gap-6">
            <button onClick={() => router.back()} className="w-10 h-10 rounded-full border border-zinc-100 flex items-center justify-center hover:bg-zinc-50 transition-colors">
               <span className="material-symbols-outlined text-zinc-400">arrow_back</span>
            </button>
            <div>
               <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-0.5">Scholar Funding</p>
               <h1 className="text-xl font-headline font-black text-zinc-900 tracking-tight leading-none italic">{student.name}</h1>
            </div>
         </div>
         <Link href={`/students/${student.id}`}>
            <Button variant="ghost" className="text-[#0052CC]" iconRight="open_in_new">View Full Profile</Button>
         </Link>
      </div>

      <div className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* LEFT COLUMN: Student Brief & Tracker */}
        <div className="lg:col-span-7 space-y-12">
            
            {/* Direct Impact Card */}
            <div className="flex flex-col md:flex-row items-center gap-10">
               <div className="w-48 h-64 rounded-[40px] bg-zinc-200 overflow-hidden shadow-2xl shadow-blue-900/10 shrink-0 border-4 border-white">
                  <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&auto=format&fit=crop&q=60" className="w-full h-full object-cover" alt={student.name} />
               </div>
               <div className="space-y-6">
                  <div className="space-y-1">
                    <h2 className="text-4xl font-headline font-black text-zinc-900 tracking-tight">{student.name}</h2>
                    <p className="text-zinc-400 font-medium">{student.university} • {student.level}</p>
                  </div>
                  <p className="text-zinc-600 leading-relaxed font-medium line-clamp-3">"{student.bio}"</p>
                  <div className="flex flex-wrap gap-3">
                    <div className="px-5 py-2.5 rounded-2xl bg-blue-50 text-[#0052CC] text-[10px] font-black uppercase tracking-widest border border-blue-100">GPA: {student.gpa}</div>
                    <div className="px-5 py-2.5 rounded-2xl bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest border border-emerald-110">NIN Verified</div>
                  </div>
               </div>
            </div>

            <div className="pt-10">
               <FundingTracker 
                  receivedAmount={student.raisedAmount} 
                  totalAmount={student.totalGoal}
                  phase="Active Funding"
                  nextMilestone={student.totalGoal}
                  className="bg-zinc-50/50 p-8 rounded-[48px]"
               />
            </div>
        </div>

        {/* RIGHT COLUMN: Donation Control */}
        <div className="lg:col-span-5 sticky top-32">
            <Card className="bg-white rounded-[48px] border-none shadow-2xl shadow-zinc-200/60 p-12 space-y-10 relative overflow-hidden">
               <div className="relative z-10">
                  <div>
                    <h3 className="text-2xl font-headline font-black text-zinc-900 tracking-tight mb-2">Support this Goal</h3>
                    <p className="text-zinc-400 text-xs font-medium">Select a preset amount or enter a custom sum to contribute.</p>
                  </div>

                  {/* Preset Buttons */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                     {suggestedAmounts.map((amt) => (
                       <button 
                        key={amt}
                        onClick={() => setAmount(amt.toString())}
                        className={cn(
                          "py-4 rounded-2xl font-headline font-black text-sm transition-all border-2",
                          amount === amt.toString() ? "bg-[#0052CC] border-[#0052CC] text-white shadow-lg shadow-blue-400/30" : "bg-zinc-50 border-zinc-50 text-zinc-400 hover:border-zinc-200"
                        )}
                       >
                         ₦{amt.toLocaleString()}
                       </button>
                     ))}
                  </div>

                  {/* Custom Input */}
                  <div className="space-y-4 pt-10 border-t border-zinc-100 mt-10">
                     <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Custom Contribution</p>
                     <div className="relative">
                        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-headline font-black text-zinc-300">₦</span>
                        <input 
                           type="number"
                           placeholder="0.00"
                           value={amount}
                           onChange={(e) => setAmount(e.target.value)}
                           className="w-full bg-zinc-50 border-none rounded-3xl py-6 pl-12 pr-6 text-2xl font-headline font-black text-zinc-900 focus:ring-4 ring-blue-500/10 placeholder:text-zinc-200 transition-all outline-none"
                        />
                     </div>
                  </div>

                  {/* Action Shortcuts */}
                  <div className="flex gap-3 pt-6">
                     <button 
                      onClick={() => setAmount(student.totalGoal.toString())}
                      className="flex-1 bg-white border border-zinc-200 rounded-2xl py-3 text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:bg-zinc-50 transition-all"
                     >
                        Full Goal
                     </button>
                     <button 
                      onClick={() => setAmount(remaining.toString())}
                      className="flex-1 bg-white border border-zinc-200 rounded-2xl py-3 text-[10px] font-black uppercase tracking-widest text-[#0052CC] hover:bg-blue-50 transition-all"
                     >
                        Remaining
                     </button>
                  </div>

                  <div className="pt-12">
                     <Button 
                        onClick={handleDonate}
                        variant="primary" 
                        size="lg" 
                        className="w-full py-10 text-xl font-black tracking-tighter shadow-2xl shadow-blue-500/30"
                        disabled={!amount || isProcessing}
                     >
                        {isProcessing ? 'Deploying Capital...' : 'Confirm Contribution'}
                     </Button>
                     <p className="text-[9px] text-center text-zinc-300 font-bold uppercase tracking-widest mt-6 flex items-center justify-center gap-2">
                        <span className="material-symbols-outlined text-[12px]">security</span>
                        Encrypted Ledger Transaction
                     </p>
                  </div>
               </div>

               {/* Design accents */}
               <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-50/50 rounded-full blur-3xl" />
            </Card>
        </div>
      </div>
    </div>
  )
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}
