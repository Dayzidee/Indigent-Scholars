'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

interface Transaction {
  date: string;
  time: string;
  name: string;
  initial: string;
  bgColor: string;
  ref: string;
  amount: string;
  status: string;
  statusColor?: string;
  dotColor?: string;
  dept: string;
  type: string;
  pulse?: boolean;
}

const transactions: Transaction[] = [
  { date: 'Oct 24, 2023', time: '09:42 AM', name: 'Adebayo Olumide', initial: 'AO', bgColor: 'bg-blue-950/30 text-[#0052CC]', ref: 'SCH-772910-NG', amount: '₦450,000', status: 'Completed', statusColor: 'bg-tertiary-fixed-dim/20 text-tertiary', dotColor: 'bg-tertiary', dept: 'Engineering • Year 2', type: 'Scholarship' },
  { date: 'Oct 22, 2023', time: '02:15 PM', name: 'Chisom Nwosu', initial: 'CN', bgColor: 'bg-amber-950/30 text-amber-500', ref: 'SCH-883012-NG', amount: '₦1,200,000', status: 'Transferred', statusColor: 'bg-primary-fixed/30 text-primary', dotColor: 'bg-primary', pulse: true, dept: 'Medicine • Year 1', type: 'Scholarship' },
  { date: 'Oct 20, 2023', time: '11:05 AM', name: 'Ibrahim Ezekiel', initial: 'IE', bgColor: 'bg-zinc-800 text-zinc-400', ref: 'SCH-112233-NG', amount: '₦320,000', status: 'Pledged', statusColor: 'bg-surface-container-highest text-zinc-400', dotColor: 'bg-neutral-400', dept: 'Computer Science • Year 3', type: 'Scholarship' },
]

const deposits: Transaction[] = [
  { date: 'Oct 26, 2023', time: '10:00 AM', name: 'Wallet Top-up', initial: 'WT', bgColor: 'bg-emerald-950/30 text-emerald-500', ref: 'DEP-123456-NG', amount: '₦5,000,000', status: 'Completed', statusColor: 'bg-emerald-950/30 text-emerald-600', dotColor: 'bg-emerald-600', dept: 'Via Bank Transfer', type: 'Deposit' },
  { date: 'Oct 18, 2023', time: '03:30 PM', name: 'Card Deposit', initial: 'CD', bgColor: 'bg-emerald-950/30 text-emerald-500', ref: 'DEP-789012-NG', amount: '₦2,500,000', status: 'Completed', statusColor: 'bg-emerald-950/30 text-emerald-600', dotColor: 'bg-emerald-600', dept: 'Via Paystack', type: 'Deposit' },
]

export function SponsorLedger() {
  const searchParams = useSearchParams()
  const [activeTab, setActiveTab] = useState('Scholarships')
  
  useEffect(() => {
    if (searchParams?.get('action') === 'topup') {
      setActiveTab('Deposits')
      // Optional: scroll to the card section
      const walletCard = document.getElementById('wallet-balance-card')
      if (walletCard) walletCard.scrollIntoView({ behavior: 'smooth' })
    }
  }, [searchParams])

  const displayData = activeTab === 'Deposits' ? deposits : transactions

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-7xl mx-auto space-y-10 pb-20"
    >
      {/* Header Section */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
        <div className="space-y-1">
          <nav className="flex items-center gap-2 text-[10px] font-black text-[#0052CC] tracking-[0.2em] uppercase font-label">
            <span>Accounting</span>
            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
            <span className="text-zinc-400">Transaction History</span>
          </nav>
          <h1 className="text-4xl font-black font-headline tracking-tighter text-zinc-100 leading-none">Funding Ledger</h1>
          <p className="text-zinc-500 font-body text-sm max-w-xl">
            Real-time audit log of scholarship disbursements and commitments across all institutions.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" iconLeft="file_download">
            Export CSV
          </Button>
          <Button iconLeft="add">
            Fund Scholarship
          </Button>
        </div>
      </section>

      {/* Ledger Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-zinc-900 p-6 sm:p-8 rounded-3xl lg:rounded-[32px] shadow-sm border border-zinc-800 flex flex-col justify-between">
          <div>
            <p className="text-[10px] font-black text-zinc-400 font-label uppercase tracking-[0.2em] mb-2">Total Committed</p>
            <p className="text-3xl font-black text-zinc-100 font-headline leading-tight font-headline">₦42,500,000</p>
          </div>
          <div className="mt-4 flex items-center text-[10px] text-emerald-500 font-black uppercase tracking-wider bg-emerald-950/30 px-3 py-1.5 rounded-full border border-emerald-900/20 w-fit">
            <span className="material-symbols-outlined text-sm font-bold mr-1">trending_up</span>
            +12% vs last sem
          </div>
        </div>

        <div className="bg-zinc-900 p-6 sm:p-8 rounded-3xl lg:rounded-[32px] shadow-sm border border-zinc-800 flex flex-col justify-between">
          <div>
            <p className="text-[10px] font-black text-zinc-400 font-label uppercase tracking-[0.2em] mb-2">Active Scholars</p>
            <p className="text-3xl font-black text-zinc-100 font-headline leading-tight font-headline">128</p>
          </div>
          <div className="mt-4 h-3 w-full bg-zinc-800 rounded-full overflow-hidden p-1 border border-zinc-700">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '85%' }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-[#0052CC] rounded-full shadow-sm"
            ></motion.div>
          </div>
        </div>

        <div className="bg-zinc-900 p-6 sm:p-8 rounded-3xl lg:rounded-[32px] shadow-sm border border-zinc-800 flex flex-col justify-between">
          <div>
            <p className="text-[10px] font-black text-zinc-400 font-label uppercase tracking-[0.2em] mb-2">In Queue</p>
            <p className="text-3xl font-black text-zinc-100 font-headline leading-tight font-headline">₦2,140,000</p>
          </div>
          <p className="mt-4 text-[10px] text-zinc-400 font-black uppercase tracking-widest font-label">8 transactions pending</p>
        </div>

        <div className="bg-[#0052CC] p-6 md:p-8 rounded-[24px] md:rounded-[32px] shadow-lg shadow-blue-950/40 border border-zinc-800/10 relative overflow-hidden group">
          <div className="relative z-10 flex flex-col justify-between h-full gap-6">
            <div>
              <p className="text-[10px] font-bold text-white/70 font-label uppercase tracking-[0.2em] mb-1">Wallet Balance</p>
              <p className="text-2xl md:text-3xl font-bold text-white font-headline leading-tight">₦8,920,450</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="glass" size="sm" className="text-[10px] uppercase tracking-widest px-4">Top up</Button>
              <Button 
                variant="glass" 
                size="sm" 
                className={cn("text-[10px] uppercase tracking-widest px-4 bg-white/10", activeTab === 'Deposits' && "bg-zinc-900 text-[#0052CC] shadow-inner")}
                onClick={() => setActiveTab('Deposits')}
              >
                Recent Deposits
              </Button>
            </div>
          </div>
          <span className="material-symbols-outlined absolute -right-6 -top-6 text-7xl md:text-8xl text-white/10 rotate-12 transition-transform group-hover:rotate-0 duration-700" style={{ fontVariationSettings: "'wght' 300" }}>account_balance</span>
        </div>
      </section>

      {/* Ledger Table Section */}
      <section className="bg-zinc-900 rounded-3xl lg:rounded-[40px] shadow-sm overflow-hidden border border-zinc-800 flex flex-col">
        <div className="p-5 sm:p-8 border-b border-zinc-800 flex flex-col md:flex-row justify-between gap-6 items-center">
          <div className="w-full md:w-auto overflow-x-auto no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
            <div className="flex bg-zinc-800 p-1 rounded-xl md:rounded-2xl w-fit">
              {['Scholarships', 'Deposits'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-6 md:px-8 py-2 md:py-2.5 rounded-lg md:rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all font-label whitespace-nowrap",
                    activeTab === tab ? "bg-zinc-900 text-[#0052CC] shadow-sm" : "text-zinc-500 hover:text-zinc-200"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-black text-zinc-400 font-label uppercase tracking-widest">
            <span>Showing 1-12 of 156 entries</span>
            <div className="flex border border-zinc-800 rounded-xl overflow-hidden shadow-sm">
              <button className="p-2.5 bg-zinc-900 hover:bg-zinc-800 border-r border-zinc-800 text-zinc-400"><span className="material-symbols-outlined text-xl">chevron_left</span></button>
              <button className="p-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-400"><span className="material-symbols-outlined text-xl">chevron_right</span></button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto flex-1">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-800/50">
                <th className="px-8 py-6 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] font-label whitespace-nowrap">Date</th>
                <th className="px-8 py-6 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] font-label whitespace-nowrap">
                  {activeTab === 'Deposits' ? 'Source' : 'Student Name'}
                </th>
                <th className="px-8 py-6 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] font-label whitespace-nowrap">Reference ID</th>
                <th className="px-8 py-6 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] font-label whitespace-nowrap">Amount</th>
                <th className="px-8 py-6 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] font-label whitespace-nowrap">Status</th>
                <th className="px-8 py-6 text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] font-label text-right whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/50">
              {displayData.map((tx, idx) => (
                <tr key={idx} className="hover:bg-zinc-800/30 transition-colors group cursor-pointer">
                  <td className="px-6 sm:px-8 py-6 whitespace-nowrap">
                    <span className="block text-sm font-extrabold text-zinc-100 font-headline leading-tight">{tx.date}</span>
                    <span className="block text-[10px] text-zinc-400 font-black mt-1 uppercase tracking-widest font-label">{tx.time}</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className={cn("w-10 h-10 rounded-2xl flex items-center justify-center text-[10px] font-black shadow-sm border border-zinc-800", tx.bgColor)}>
                        {tx.initial}
                      </div>
                      <div>
                        <span className="block text-sm font-extrabold text-zinc-100 font-headline leading-none mb-1">{tx.name}</span>
                        <span className="block text-[10px] text-zinc-400 font-black uppercase tracking-widest font-label">{tx.dept}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 font-mono text-[10px] text-zinc-500 font-bold tracking-tight bg-zinc-800/30">{tx.ref}</td>
                  <td className="px-8 py-6 font-black text-zinc-100 font-headline text-lg leading-none">{tx.amount}</td>
                  <td className="px-8 py-6">
                    <span className={cn(
                      "inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-black text-[9px] uppercase tracking-[0.2em] border border-current/10 font-label",
                      tx.status === 'Completed' ? 'bg-emerald-950/30 text-emerald-600' : 
                      tx.status === 'Transferred' ? 'bg-blue-950/30 text-[#0052CC]' : 'bg-zinc-800 text-zinc-500'
                    )}>
                      <span className={cn("w-1.5 h-1.5 rounded-full", tx.status === 'Completed' ? 'bg-emerald-600' : tx.status === 'Transferred' ? 'bg-[#0052CC]' : 'bg-zinc-400', tx.pulse && "animate-pulse")}></span>
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="p-2.5 bg-zinc-800 text-zinc-400 hover:text-[#0052CC] hover:bg-blue-950/30 transition-all rounded-xl border border-transparent">
                      <span className="material-symbols-outlined text-xl">visibility</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Audit Trail Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-8">
          <div className="flex items-center gap-3">
             <span className="material-symbols-outlined text-[#0052CC] font-bold">verified_user</span>
             <h3 className="text-xl font-black font-headline tracking-tight text-zinc-100">Audit Trail Highlights</h3>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 p-6 sm:p-8 rounded-3xl lg:rounded-[32px] bg-zinc-900 shadow-sm border border-zinc-800 group cursor-default hover:border-[#0052CC]/20 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center text-zinc-400 shrink-0 transition-all group-hover:scale-110 group-hover:text-[#0052CC] border border-zinc-800">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
              </div>
              <div className="space-y-2 sm:border-l border-zinc-800 sm:pl-8">
                <p className="text-sm font-extrabold text-zinc-100 font-headline">External Audit Completed</p>
                <p className="text-xs text-zinc-500 font-body leading-relaxed max-w-lg">
                  Q3 Disbursement reports were verified by Grant Thornton Nigeria with zero discrepancies found. Funds reached all intended scholars.
                </p>
                <span className="inline-block mt-2 text-[9px] font-black text-emerald-500 bg-emerald-950/20 px-4 py-1.5 rounded-full uppercase tracking-widest font-label border border-emerald-900/30">
                  Verified 2 days ago
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 p-6 sm:p-8 rounded-3xl lg:rounded-[32px] bg-zinc-900 shadow-sm border border-zinc-800 group cursor-default hover:border-[#0052CC]/20 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center text-zinc-400 shrink-0 transition-all group-hover:scale-110 group-hover:text-[#0052CC] border border-zinc-800">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>history_edu</span>
              </div>
              <div className="space-y-2 sm:border-l border-zinc-800 sm:pl-8">
                <p className="text-sm font-extrabold text-zinc-100 font-headline">New Pledges Pending</p>
                <p className="text-xs text-zinc-500 font-body leading-relaxed max-w-lg">
                  You have ₦1,450,000 in upcoming scholarship pledges that require transfer confirmation by Nov 5th for the upcoming semester.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Tier Card */}
        <div className="bg-zinc-900 rounded-3xl lg:rounded-[40px] p-6 sm:p-10 text-white relative overflow-hidden group shadow-2xl flex flex-col justify-between min-h-[350px] sm:min-h-[400px]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0052CC]/20 rounded-full blur-[100px] transition-transform duration-1000 group-hover:scale-110"></div>
          
          <div className="relative z-10">
            <div className="bg-zinc-800/50 w-16 h-16 rounded-[24px] flex items-center justify-center mb-10 backdrop-blur-md border border-zinc-800/10 shadow-inner">
              <span className="material-symbols-outlined text-3xl text-[#D4AF37]">workspace_premium</span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-black mb-6 font-headline tracking-tighter leading-tight">Scale Your Impact</h3>
            <p className="text-sm text-zinc-400 leading-relaxed font-body max-w-[240px]">
              Increasing your commitment by 15% unlocks **Platinum Guardian** status, enabling a full departmental endowment.
            </p>
          </div>

          <Button variant="primary" className="mt-10 py-6">
            Upgrade Tier
          </Button>
        </div>
      </section>
    </motion.div>
  )
}
