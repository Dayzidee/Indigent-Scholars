'use client'

import { 
  ChevronRight, 
  FileText, 
  Table, 
  Filter, 
  MoreHorizontal, 
  ChevronLeft, 
  TrendingUp, 
  Clock, 
  Activity, 
  ArrowUp, 
  Zap, 
  X,
  Search,
  Download,
  Wallet
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const transactions = [
  {
    date: 'Oct 24, 2023',
    time: '09:42 AM',
    sponsor: 'Aliko Foundation',
    student: 'Chidi Okechukwu',
    amount: '450,000.00',
    ref: 'ps_ref_9x2k8l4m5n',
    status: 'Completed'
  },
  {
    date: 'Oct 24, 2023',
    time: '11:15 AM',
    sponsor: 'Private Donor #882',
    student: 'Aisha Bello',
    amount: '125,000.00',
    ref: 'ps_ref_1a5v7r2z0q',
    status: 'Processing'
  },
  {
    date: 'Oct 23, 2023',
    time: '04:30 PM',
    sponsor: 'Global Edu Partners',
    student: 'Emeka Obi',
    amount: '2,500,000.00',
    ref: 'ps_ref_3j8f1h9w2l',
    status: 'Failed'
  },
  {
    date: 'Oct 23, 2023',
    time: '02:10 PM',
    sponsor: 'Trust Bank PLC',
    student: 'Fatima Yusuf',
    amount: '75,000.00',
    ref: 'ps_ref_6m3n8p9k2y',
    status: 'Completed'
  },
  {
    date: 'Oct 23, 2023',
    time: '09:05 AM',
    sponsor: 'Shell Tech Nigeria',
    student: 'Kolawole Adams',
    amount: '880,000.00',
    ref: 'ps_ref_0d1v4x6r8s',
    status: 'Completed'
  }
]

export default function FinancialsPage() {
  const [showToast, setShowToast] = useState(true)

  return (
    <div className="px-4 md:px-8 max-w-[1600px] mx-auto pb-24">
      {/* Breadcrumbs & Title */}
      <div className="mb-10 pt-6">
        <nav className="flex items-center gap-2 text-xs font-black text-outline mb-3 uppercase tracking-tight">
          <span className="opacity-60 cursor-pointer hover:text-primary-fixed-dim transition-colors">Admin</span>
          <ChevronRight className="w-3.5 h-3.5 opacity-40" />
          <span className="text-primary-fixed-dim">Financial Ledger</span>
        </nav>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-black text-[#313030] tracking-tight">Financial Command</h1>
            <p className="text-on-surface-variant text-sm font-medium">Comprehensive transaction audit and settlement management.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2.5 px-5 py-2.5 bg-white border border-outline-variant/30 text-[#313030] font-black text-[11px] uppercase tracking-widest rounded-2xl hover:bg-surface-container-low transition-all shadow-sm active:scale-95">
              <FileText className="w-4 h-4 text-rose-500" />
              Export PDF
            </button>
            <button className="flex items-center gap-2.5 px-5 py-2.5 bg-white border border-outline-variant/30 text-[#313030] font-black text-[11px] uppercase tracking-widest rounded-2xl hover:bg-surface-container-low transition-all shadow-sm active:scale-95">
              <Table className="w-4 h-4 text-emerald-600" />
              Export CSV
            </button>
          </div>
        </div>
      </div>

      {/* Ledger Container */}
      <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-outline-variant/10">
        {/* Table Controls */}
        <div className="p-5 bg-surface-container-low/30 flex flex-col sm:flex-row gap-5 justify-between items-center border-b border-outline-variant/10">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <select className="bg-white border-outline-variant/30 rounded-2xl text-[11px] font-black uppercase tracking-widest text-[#313030] focus:ring-4 focus:ring-primary/5 h-11 px-5 outline-none shadow-sm min-w-[180px]">
              <option>Last 30 Days</option>
              <option>This Quarter</option>
              <option>Year to Date</option>
            </select>
            <button className="flex items-center gap-2.5 px-5 py-2.5 bg-white border border-outline-variant/30 text-[#313030] font-black text-[11px] uppercase tracking-widest rounded-2xl hover:bg-surface-container-high transition-all shadow-sm">
              <Filter className="w-4 h-4 text-primary-fixed-dim" />
              Filters
            </button>
          </div>
          <div className="text-[11px] font-black uppercase tracking-widest text-outline">
            Showing <span className="text-[#313030]">1-12</span> of 842 transactions
          </div>
        </div>

        {/* Dense Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/20">
                <th className="px-8 py-5 text-[10px] font-black text-outline uppercase tracking-[0.2em] border-b border-outline-variant/10">Date & Time</th>
                <th className="px-8 py-5 text-[10px] font-black text-outline uppercase tracking-[0.2em] border-b border-outline-variant/10">Sponsor Name</th>
                <th className="px-8 py-5 text-[10px] font-black text-outline uppercase tracking-[0.2em] border-b border-outline-variant/10">Student Name</th>
                <th className="px-8 py-5 text-[10px] font-black text-outline uppercase tracking-[0.2em] border-b border-outline-variant/10 text-right">Amount (₦)</th>
                <th className="px-8 py-5 text-[10px] font-black text-outline uppercase tracking-[0.2em] border-b border-outline-variant/10">Paystack Ref</th>
                <th className="px-8 py-5 text-[10px] font-black text-outline uppercase tracking-[0.2em] border-b border-outline-variant/10 text-center">Status</th>
                <th className="px-8 py-5 border-b border-outline-variant/10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
              {transactions.map((tx, idx) => (
                <tr key={idx} className="hover:bg-primary/5 transition-all duration-300 group cursor-pointer border-l-4 border-l-transparent hover:border-l-primary">
                  <td className="px-8 py-5">
                    <p className="text-sm font-black text-[#313030] tracking-tight">{tx.date}</p>
                    <p className="text-[10px] font-bold text-outline uppercase opacity-70">{tx.time}</p>
                  </td>
                  <td className="px-8 py-5">
                    <p className="text-sm font-bold text-[#313030]">{tx.sponsor}</p>
                  </td>
                  <td className="px-8 py-5">
                    <p className="text-sm font-medium text-on-surface-variant">{tx.student}</p>
                  </td>
                  <td className="px-8 py-5 text-right font-black text-sm text-[#313030] font-mono">
                    {tx.amount}
                  </td>
                  <td className="px-8 py-5">
                    <p className="font-mono text-[10px] text-outline bg-surface-container-low px-2 py-1 rounded-lg w-fit border border-outline-variant/20">{tx.ref}</p>
                  </td>
                  <td className="px-8 py-5 text-center">
                    <span className={cn(
                      "inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border shadow-sm",
                      tx.status === 'Completed' ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" : 
                      tx.status === 'Processing' ? "bg-amber-500/10 text-amber-600 border-amber-500/20" : 
                      "bg-rose-500/10 text-rose-600 border-rose-500/20"
                    )}>
                      <span className={cn(
                        "w-2 h-2 rounded-full",
                        tx.status === 'Completed' ? "bg-emerald-600 shadow-[0_0_8px_rgba(16,185,129,0.5)]" : 
                        tx.status === 'Processing' ? "bg-amber-600 shadow-[0_0_8px_rgba(245,158,11,0.5)] animate-pulse" : 
                        "bg-rose-600 shadow-[0_0_8px_rgba(244,63,94,0.5)]"
                      )} />
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="p-2 hover:bg-surface-container rounded-xl text-outline hover:text-[#313030] transition-all">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-6 bg-surface-container-low/30 flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-outline-variant/10">
          <div className="flex items-center gap-2">
            <button className="h-10 w-10 flex items-center justify-center rounded-2xl border border-outline-variant/30 text-outline hover:bg-white hover:text-primary-fixed-dim transition-all disabled:opacity-30 disabled:hover:bg-transparent" disabled>
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-1.5 px-2">
              <button className="h-10 w-10 flex items-center justify-center rounded-2xl bg-primary text-white text-[11px] font-black shadow-lg shadow-blue-900/20">1</button>
              <button className="h-10 w-10 flex items-center justify-center rounded-2xl text-[11px] font-black text-[#313030] hover:bg-white transition-all">2</button>
              <button className="h-10 w-10 flex items-center justify-center rounded-2xl text-[11px] font-black text-[#313030] hover:bg-white transition-all">3</button>
              <span className="text-outline px-2 opacity-50">...</span>
              <button className="h-10 w-10 flex items-center justify-center rounded-2xl text-[11px] font-black text-[#313030] hover:bg-white transition-all">71</button>
            </div>
            <button className="h-10 w-10 flex items-center justify-center rounded-2xl border border-outline-variant/30 text-outline hover:bg-white hover:text-primary-fixed-dim transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-outline">Go to page</span>
            <input className="w-16 h-10 bg-white border border-outline-variant/30 rounded-2xl text-xs font-black text-center focus:ring-4 focus:ring-primary/5 outline-none transition-all shadow-sm" type="text" defaultValue="1" />
          </div>
        </div>
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white p-8 rounded-[2rem] border border-outline-variant/10 flex flex-col justify-between min-h-[160px] shadow-sm relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-emerald-500/10 transition-colors" />
          <div className="flex justify-between items-start relative z-10">
            <span className="text-[10px] font-black text-outline uppercase tracking-[0.2em]">Total Settled (24h)</span>
            <div className="p-3 bg-emerald-500/10 rounded-2xl">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
            </div>
          </div>
          <div className="relative z-10">
            <span className="text-3xl font-black text-[#313030] tracking-tight">₦12,840,000.00</span>
            <div className="flex items-center gap-1.5 text-[10px] font-black text-emerald-600 mt-2 uppercase tracking-tight bg-emerald-500/5 w-fit px-2 py-1 rounded-lg">
              <ArrowUp className="w-3.5 h-3.5" />
              12.5% vs Yesterday
            </div>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white p-8 rounded-[2rem] border border-outline-variant/10 flex flex-col justify-between min-h-[160px] shadow-sm relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-amber-500/10 transition-colors" />
          <div className="flex justify-between items-start relative z-10">
            <span className="text-[10px] font-black text-outline uppercase tracking-[0.2em]">Pending Reconciliation</span>
            <div className="p-3 bg-amber-500/10 rounded-2xl">
              <Clock className="w-5 h-5 text-amber-600" />
            </div>
          </div>
          <div className="relative z-10">
            <span className="text-3xl font-black text-[#313030] tracking-tight">18 Transactions</span>
            <p className="text-[11px] text-outline mt-2 font-bold uppercase tracking-widest opacity-70">Est. Value: ₦2,140,500.00</p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white p-8 rounded-[2rem] border border-outline-variant/10 flex flex-col justify-between min-h-[160px] shadow-sm relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
          <div className="flex justify-between items-start relative z-10">
            <span className="text-[10px] font-black text-outline uppercase tracking-[0.2em]">System Health</span>
            <div className="p-3 bg-primary/10 rounded-2xl">
              <Activity className="w-5 h-5 text-primary-fixed-dim" />
            </div>
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl font-black text-[#313030] tracking-tight">99.98%</span>
              <span className="text-[9px] font-black text-emerald-600 bg-emerald-500/10 px-2.5 py-1 rounded-full uppercase tracking-widest border border-emerald-500/20">Optimal</span>
            </div>
            <p className="text-[11px] text-outline font-bold uppercase tracking-widest opacity-70">Latency: 42ms | Gateway: Paystack</p>
          </div>
        </motion.div>
      </div>

      {/* Success Impact Floating Widget */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ y: 100, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.9 }}
            className="fixed bottom-10 right-10 z-[100]"
          >
            <div className="bg-[#1c1b1b] text-white p-5 rounded-[2rem] shadow-2xl flex items-center gap-6 border border-white/10 max-w-md">
              <div className="h-12 w-12 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-900/40 relative">
                <Zap className="w-6 h-6 text-white fill-white" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-primary ring-2 ring-white/10"></span>
                </span>
              </div>
              <div className="flex-1">
                <p className="text-[10px] font-black text-primary-fixed uppercase tracking-[0.2em] mb-1">Live Transaction Activity</p>
                <p className="text-[13px] text-white/90 font-medium leading-snug">New scholarship funded: <span className="text-emerald-400 font-black">₦250k</span> by <span className="font-black">Zenith CSR</span>.</p>
              </div>
              <button 
                onClick={() => setShowToast(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-all text-white/40 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
