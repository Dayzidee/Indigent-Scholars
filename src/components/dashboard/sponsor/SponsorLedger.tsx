'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const transactions = [
  { date: 'Oct 24, 2023', time: '09:42 AM', name: 'Adebayo Olumide', initial: 'AO', bgColor: 'bg-blue-100 text-blue-700', ref: 'SCH-772910-NG', amount: '₦450,000', status: 'Completed', statusColor: 'bg-tertiary-fixed-dim/20 text-tertiary', dotColor: 'bg-tertiary', dept: 'Engineering • Year 2' },
  { date: 'Oct 22, 2023', time: '02:15 PM', name: 'Chisom Nwosu', initial: 'CN', bgColor: 'bg-amber-100 text-amber-700', ref: 'SCH-883012-NG', amount: '₦1,200,000', status: 'Transferred', statusColor: 'bg-primary-fixed/30 text-primary', dotColor: 'bg-primary', pulse: true, dept: 'Medicine • Year 1' },
  { date: 'Oct 20, 2023', time: '11:05 AM', name: 'Ibrahim Ezekiel', initial: 'IE', bgColor: 'bg-neutral-100 text-neutral-600', ref: 'SCH-112233-NG', amount: '₦320,000', status: 'Pledged', statusColor: 'bg-surface-container-highest text-neutral-500', dotColor: 'bg-neutral-400', dept: 'Computer Science • Year 3' },
  { date: 'Oct 19, 2023', time: '08:30 AM', name: 'Fatima Abubakar', initial: 'FA', bgColor: 'bg-purple-100 text-purple-700', ref: 'SCH-994851-NG', amount: '₦580,000', status: 'Completed', statusColor: 'bg-tertiary-fixed-dim/20 text-tertiary', dotColor: 'bg-tertiary', dept: 'Law • Year 4' },
  { date: 'Oct 15, 2023', time: '04:55 PM', name: 'Samuel Uche', initial: 'SU', bgColor: 'bg-emerald-100 text-emerald-700', ref: 'SCH-551092-NG', amount: '₦450,000', status: 'Completed', statusColor: 'bg-tertiary-fixed-dim/20 text-tertiary', dotColor: 'bg-tertiary', dept: 'Economics • Year 2' },
]

export function SponsorLedger() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-7xl mx-auto space-y-12"
    >
      {/* Header Section */}
      <section className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10">
        <div className="space-y-3">
          <nav className="flex items-center gap-2 text-[10px] font-black text-primary tracking-[0.2em] uppercase font-label">
            <span>Accounting</span>
            <span className="material-symbols-outlined text-[10px]" style={{ fontVariationSettings: "'wght' 900" }}>chevron_right</span>
            <span className="text-neutral-400">Transaction History</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-black font-headline tracking-tight text-on-surface">Funding Ledger</h1>
          <p className="text-neutral-500 font-medium font-body leading-relaxed max-w-xl">
            Real-time audit log of scholarship disbursements and commitments.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-outline-variant/20 bg-surface-container-lowest text-on-surface text-sm font-bold hover:bg-surface-container transition-all font-headline shadow-sm">
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'wght' 700" }}>file_download</span>
            Export CSV
          </button>
          <button className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-b from-primary-container to-primary text-white text-sm font-bold hover:opacity-90 active:scale-95 transition-all font-headline shadow-lg text-shadow-sm">
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'wght' 700" }}>add</span>
            Fund Scholarship
          </button>
        </div>
      </section>

      {/* Ledger Stats Bento */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border-l-4 border-primary border border-outline-variant/10">
          <p className="text-[10px] font-black text-neutral-400 font-label uppercase tracking-[0.2em] mb-2">Total Committed</p>
          <p className="text-3xl font-black text-on-surface font-headline leading-tight">₦42,500,000</p>
          <div className="mt-4 flex items-center text-[10px] text-tertiary font-black uppercase tracking-wider bg-tertiary/5 px-2 py-1 rounded-lg w-fit">
            <span className="material-symbols-outlined text-[14px] mr-1" style={{ fontVariationSettings: "'wght' 700" }}>trending_up</span>
            +12% vs last sem
          </div>
        </div>

        <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10">
          <p className="text-[10px] font-black text-neutral-400 font-label uppercase tracking-[0.2em] mb-2">Active Scholars</p>
          <p className="text-3xl font-black text-on-surface font-headline leading-tight">128</p>
          <div className="mt-4 h-1.5 w-full bg-surface-container-low rounded-full overflow-hidden p-[1px] border border-outline-variant/5">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '85%' }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-tertiary rounded-full shadow-[0_0_8px_rgba(0,77,65,0.2)]"
            ></motion.div>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10">
          <p className="text-[10px] font-black text-neutral-400 font-label uppercase tracking-[0.2em] mb-2">In Queue</p>
          <p className="text-3xl font-black text-on-surface font-headline leading-tight">₦2,140,000</p>
          <p className="mt-4 text-[10px] text-neutral-400 font-bold italic tracking-wide">8 transactions pending</p>
        </div>

        <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 relative overflow-hidden group">
          <div className="relative z-10">
            <p className="text-[10px] font-black text-primary font-label uppercase tracking-[0.2em] mb-2">Wallet Balance</p>
            <p className="text-3xl font-black text-primary font-headline leading-tight">₦8,920,450</p>
            <button className="mt-4 text-[10px] font-black text-primary underline underline-offset-4 hover:opacity-70 transition-opacity uppercase tracking-wider">Top up account</button>
          </div>
          <span className="material-symbols-outlined absolute -right-6 -bottom-6 text-9xl text-primary/5 rotate-12 transition-transform group-hover:rotate-0 duration-700" style={{ fontVariationSettings: "'wght' 100" }}>account_balance</span>
        </div>
      </section>

      {/* Ledger Table Section */}
      <section className="bg-surface-container-lowest rounded-3xl shadow-xl shadow-primary/[0.02] overflow-hidden border border-outline-variant/10">
        <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center bg-surface-bright/50 backdrop-blur-md">
          <div className="flex gap-2">
            {['All Time', 'Pending', 'Completed'].map((tab, i) => (
              <button 
                key={tab}
                className={cn(
                  "px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all font-label",
                  i === 0 ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-neutral-400 hover:bg-surface-container-low"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 text-[11px] font-extrabold text-neutral-400 font-label">
            <span>Showing 1-12 of 156 entries</span>
            <div className="flex border border-outline-variant/20 rounded-xl overflow-hidden shadow-inner">
              <button className="p-2 hover:bg-surface-container-low border-r border-outline-variant/20"><span className="material-symbols-outlined text-lg">chevron_left</span></button>
              <button className="p-2 hover:bg-surface-container-low"><span className="material-symbols-outlined text-lg">chevron_right</span></button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/30">
                <th className="px-8 py-5 text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] font-label">Date</th>
                <th className="px-8 py-5 text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] font-label">Student Name</th>
                <th className="px-8 py-5 text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] font-label">Reference ID</th>
                <th className="px-8 py-5 text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] font-label">Amount</th>
                <th className="px-8 py-5 text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] font-label">Status</th>
                <th className="px-8 py-5 text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] font-label text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
              {transactions.map((tx, idx) => (
                <tr key={idx} className="hover:bg-surface-container-low/30 transition-colors group">
                  <td className="px-8 py-6">
                    <span className="block text-sm font-black text-on-surface font-headline">{tx.date}</span>
                    <span className="block text-[10px] text-neutral-400 font-bold mt-1 uppercase tracking-wider">{tx.time}</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black shadow-inner border border-black/5", tx.bgColor)}>
                        {tx.initial}
                      </div>
                      <div>
                        <span className="block text-sm font-black text-on-surface font-headline leading-none mb-1">{tx.name}</span>
                        <span className="block text-[10px] text-neutral-400 font-bold uppercase tracking-widest">{tx.dept}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 font-mono text-[11px] text-neutral-500 font-bold tracking-tight">{tx.ref}</td>
                  <td className="px-8 py-6 font-black text-on-surface font-headline">{tx.amount}</td>
                  <td className="px-8 py-6">
                    <span className={cn("inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-black text-[9px] uppercase tracking-widest border border-current/10 shadow-sm font-label", tx.statusColor)}>
                      <span className={cn("w-1.5 h-1.5 rounded-full", tx.dotColor, tx.pulse && "animate-pulse")}></span>
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="p-3 bg-surface-container-low text-neutral-400 hover:text-primary hover:bg-primary/5 transition-all rounded-xl border border-transparent hover:border-primary/10">
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
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <h3 className="text-xl font-black font-headline flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-secondary-container/10 text-secondary flex items-center justify-center">
              <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'wght' 700" }}>verified_user</span>
            </span>
            Audit Trail Highlights
          </h3>
          <div className="space-y-4">
            <div className="flex gap-6 p-6 rounded-2xl bg-surface-container-lowest shadow-sm border-l-4 border-secondary-container border border-outline-variant/10 group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-secondary-container/10 flex items-center justify-center text-secondary shrink-0 transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-black text-on-surface font-headline">External Audit Completed</p>
                <p className="text-xs text-on-surface-variant font-body leading-relaxed max-w-lg">
                  Q3 Disbursement reports were verified by Grant Thornton Nigeria with zero discrepancies found. Funds reached all intended scholars.
                </p>
                <span className="inline-block mt-3 text-[9px] font-black text-secondary-fixed-dim bg-secondary-container/20 px-3 py-1 rounded-full uppercase tracking-widest font-label border border-secondary/10">
                  Verified 2 days ago
                </span>
              </div>
            </div>

            <div className="flex gap-6 p-6 rounded-2xl bg-surface-container-lowest shadow-sm border-l-4 border-primary border border-outline-variant/10 group cursor-default">
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0 transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>history_edu</span>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-black text-on-surface font-headline">New Pledges Pending</p>
                <p className="text-xs text-neutral-400 font-body leading-relaxed max-w-lg">
                  You have ₦1,450,000 in upcoming scholarship pledges that require transfer confirmation by Nov 5th for the upcoming Fall semester.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Upgrade Card */}
        <div className="bg-inverse-surface rounded-[2rem] p-10 text-inverse-on-surface relative overflow-hidden group shadow-2xl">
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/20 rounded-full blur-[100px] transition-opacity duration-1000 group-hover:opacity-60"></div>
          
          <div className="relative z-10 flex flex-col h-full">
            <div className="bg-white/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-10 backdrop-blur-md border border-white/10">
              <span className="material-symbols-outlined text-3xl text-secondary-fixed">workspace_premium</span>
            </div>
            <h3 className="text-3xl font-black mb-6 leading-[1.1] font-headline">Scale Your Impact</h3>
            <p className="text-sm text-neutral-400 mb-auto leading-relaxed font-body">
              Your funding currently supports 128 scholars. Increasing your commitment by 15% unlocks **Platinum Guardian** status, enabling a full departmental endowment.
            </p>
            <button className="w-full mt-10 py-5 bg-secondary-container text-on-secondary-container rounded-2xl font-black text-sm hover:scale-[1.02] active:scale-95 transition-all font-headline shadow-xl shadow-black/40">
              Upgrade Scholarship Tier
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
