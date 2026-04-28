'use client'

import { useState } from 'react'
import { 
  ChevronRight, 
  LayoutGrid, 
  StretchHorizontal, 
  Filter, 
  ArrowUpDown, 
  Download, 
  MoreVertical, 
  CheckCircle2, 
  AlertCircle, 
  X, 
  Star, 
  FolderOpen, 
  FileText, 
  File, 
  Wallet, 
  StickyNote,
  Search,
  Users
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

const students = [
  {
    id: 'ED-2024-8831',
    name: 'Chinaza Okoro',
    institution: 'University of Lagos',
    status: 'Verified',
    matchStatus: 'Fully Funded',
    lastActivity: '2 hours ago',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAujtL20LK_jY__3TReXlNfgmLKwiopl3LB9fz10yC_AgOHTXrOqsUS0RxU5KvoH_HOkzzxVuClCP-x2qzpgOAhSkdBJvfZrsvswC1WlcL2G28eGeems1BzytTsn-KgWGY1qbCY73T2NCMIg16_ULfu-iVJSvRW8dUrQ7Fqf8Hr_HD1u6bhrxNq8QfIACBjJB8WoBx3G7lJeN3r1b_9FLJxc2ORHcdriUcEDG6azBBY2mYcBg2SSyNvtUqka-WdJ4PjnB-FSYc3RQke'
  },
  {
    id: 'ED-2024-4219',
    name: 'Babajide Sanwo',
    institution: 'Ahmadu Bello University',
    status: 'Verified',
    matchStatus: 'Pending Match',
    lastActivity: 'Yesterday, 4:15 PM',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADhSn4k9o9l8wGB60esVGM8STq5GSX8dhI9xGd2tIjI1Frw-1Sk1T1deqqY613RGuXrP95JfWvSezaouFibEntQwFc16vMHNdyQYBXQU3o10LrAzx7oh8nIciI6KLqY0cyc5hbWsYkFaUI9ILS-1LAOH2Aj90iFAEjj_oocb8MdhPkBF2UQSfQCFtScLuJiJQhykfHIyMEs4hvbI-gQvGyjGI_CwSKWW7VPeEPvUk2HAHeMbCSaO8cs8fb7nd4r4DqCAfNB9uW1mlJ'
  },
  {
    id: 'ED-2024-9910',
    name: 'Amara Nwosu',
    institution: 'Covenant University',
    status: 'Missing Info',
    matchStatus: 'Fully Funded',
    lastActivity: '3 days ago',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBM1vzwm1VLciWj0EWc3m0Z2KqX_C5iW4eRmJoSo5-pCgr-PgGcK66vlhy0y2tzYdEjYLSGHz04R2h1UETIvCh5HBVsANqZzvI47hfHbhTniN-GXn-vQVAc6qmanjJrAURwP4LQIPSbXnRSARWsHMGsTslP_cTou26LivbP8qa4dIZQZ_qQKXCNpQVYx5g9dF5m1B2l9XSEfbCAYmW5K-nr2GkBy-idWL-p8ru2LV7Z1g8o7sjxNh4pvkfDHsQEDEmi6eZTcSlevMI-'
  }
]

export default function UserCRMPage() {
  const [selectedStudent, setSelectedStudent] = useState<typeof students[0] | null>(null)

  return (
    <div className="h-[calc(100vh-72px)] overflow-hidden flex flex-col bg-surface relative">
      {/* Breadcrumbs & Header */}
      <div className="px-8 pt-6 pb-4 shrink-0">
        <nav className="flex items-center gap-2 text-xs font-bold text-outline mb-2 uppercase tracking-tight">
          <span className="opacity-60 cursor-pointer hover:text-primary-fixed-dim transition-colors">Admin</span>
          <ChevronRight className="w-3 h-3 opacity-40" />
          <span className="text-primary-fixed-dim">User CRM</span>
        </nav>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl font-black text-[#313030] tracking-tight">User Relationship Management</h1>
            <p className="text-on-surface-variant text-sm font-medium mt-1">Manage, verify, and match scholars with funding opportunities.</p>
          </div>
          
          <div className="flex items-center gap-1.5 bg-surface-container-low p-1.5 rounded-2xl border border-outline-variant/10 shadow-inner">
            <button className="px-4 py-2 text-[10px] font-black uppercase tracking-widest bg-white shadow-sm rounded-xl text-[#313030] flex items-center gap-2 transition-all">
              <LayoutGrid className="w-3.5 h-3.5" /> Dense
            </button>
            <button className="px-4 py-2 text-[10px] font-black uppercase tracking-widest text-outline hover:text-[#313030] flex items-center gap-2 transition-all">
              <StretchHorizontal className="w-3.5 h-3.5" /> Comfort
            </button>
          </div>
        </div>
      </div>

      {/* CRM Tabs */}
      <div className="px-8 flex items-center gap-8 border-b border-outline-variant/10 shrink-0 bg-white/50 backdrop-blur-sm z-10">
        <button className="py-5 border-b-4 border-primary text-primary-fixed-dim font-black text-xs uppercase tracking-[0.15em] flex items-center gap-3">
          All Students 
          <span className="bg-primary/10 text-[10px] px-2 py-0.5 rounded-full ring-1 ring-primary/20">1,284</span>
        </button>
        <button className="py-5 border-b-4 border-transparent text-outline hover:text-[#313030] font-black text-xs uppercase tracking-[0.15em] transition-all flex items-center gap-3">
          All Sponsors 
          <span className="bg-surface-container-high text-[10px] px-2 py-0.5 rounded-full text-on-surface-variant font-bold">342</span>
        </button>
      </div>

      {/* Filters & Table Actions */}
      <div className="px-8 py-4 flex items-center justify-between bg-surface-container-low/20 shrink-0 border-b border-outline-variant/5">
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 rounded-2xl bg-white border border-outline-variant/30 text-[11px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-surface-container-low transition-all shadow-sm">
            <Filter className="w-3.5 h-3.5 text-primary-fixed-dim" /> Filters
          </button>
          <button className="px-5 py-2.5 rounded-2xl bg-white border border-outline-variant/30 text-[11px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-surface-container-low transition-all text-on-surface-variant shadow-sm">
            <ArrowUpDown className="w-3.5 h-3.5" /> Sort
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2.5 rounded-xl hover:bg-surface-container-high transition-colors text-outline">
            <Download className="w-5 h-5" />
          </button>
          <button className="p-2.5 rounded-xl hover:bg-surface-container-high transition-colors text-outline">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Data Table */}
      <div className="flex-1 overflow-auto px-8 py-2">
        <table className="w-full text-left border-separate border-spacing-0">
          <thead className="sticky top-0 bg-surface z-10">
            <tr>
              <th className="py-4 px-4 text-[10px] font-black text-outline uppercase tracking-[0.2em] border-b border-outline-variant/10">Student Name</th>
              <th className="py-4 px-4 text-[10px] font-black text-outline uppercase tracking-[0.2em] border-b border-outline-variant/10">Institution</th>
              <th className="py-4 px-4 text-[10px] font-black text-outline uppercase tracking-[0.2em] border-b border-outline-variant/10">App Status</th>
              <th className="py-4 px-4 text-[10px] font-black text-outline uppercase tracking-[0.2em] border-b border-outline-variant/10">Matched Status</th>
              <th className="py-4 px-4 text-[10px] font-black text-outline uppercase tracking-[0.2em] border-b border-outline-variant/10">Last Activity</th>
              <th className="py-4 px-4 border-b border-outline-variant/10"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/5">
            {students.map((student) => (
              <tr 
                key={student.id}
                onClick={() => setSelectedStudent(student)}
                className={cn(
                  "hover:bg-primary/5 transition-all duration-300 cursor-pointer group",
                  selectedStudent?.id === student.id ? "bg-primary/5 ring-1 ring-inset ring-primary/20" : ""
                )}
              >
                <td className="py-4 px-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img 
                        src={student.avatar} 
                        className="w-10 h-10 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500 shadow-sm" 
                        alt={student.name} 
                      />
                      <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-[#313030] group-hover:text-primary-fixed-dim transition-colors">{student.name}</p>
                      <p className="text-[10px] font-bold text-outline uppercase tracking-tight">ID: {student.id}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-xs font-bold text-on-surface-variant">{student.institution}</td>
                <td className="py-4 px-4">
                  <span className={cn(
                    "inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-widest border shadow-sm",
                    student.status === 'Verified' 
                      ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" 
                      : "bg-rose-500/10 text-rose-600 border-rose-500/20"
                  )}>
                    {student.status === 'Verified' ? <CheckCircle2 className="w-3.5 h-3.5 fill-emerald-500/10" /> : <AlertCircle className="w-3.5 h-3.5" />}
                    {student.status}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className={cn(
                    "inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[10px] font-black uppercase tracking-widest border shadow-sm",
                    student.matchStatus === 'Fully Funded' 
                      ? "bg-primary/10 text-primary-fixed-dim border-primary/20" 
                      : "bg-surface-container-high text-on-surface-variant border-outline-variant/30"
                  )}>
                    {student.matchStatus}
                  </span>
                </td>
                <td className="py-4 px-4 text-[11px] font-bold text-outline uppercase opacity-70">{student.lastActivity}</td>
                <td className="py-4 px-4 text-right">
                  <ChevronRight className="w-4 h-4 text-outline group-hover:text-primary-fixed-dim transition-all group-hover:translate-x-1" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 360° User Profile Drawer */}
      <AnimatePresence>
        {selectedStudent && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStudent(null)}
              className="absolute inset-0 bg-[#313030]/20 backdrop-blur-sm z-50 transition-all"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 h-full w-full max-w-[550px] bg-white z-[60] shadow-2xl flex flex-col border-l border-outline-variant/20 overflow-hidden"
            >
              {/* Drawer Header */}
              <div className="px-8 py-7 border-b border-outline-variant/10 flex items-center justify-between bg-surface-container-low/10">
                <div className="flex items-center gap-5">
                  <button 
                    onClick={() => setSelectedStudent(null)}
                    className="p-2.5 hover:bg-surface-container-high rounded-full transition-all group active:scale-90"
                  >
                    <X className="w-5 h-5 text-outline group-hover:text-rose-500 transition-colors" />
                  </button>
                  <h3 className="text-xl font-black text-[#313030] tracking-tight">Student Profile</h3>
                </div>
                <div className="flex gap-3">
                  <button className="px-6 py-2.5 bg-[#0052CC] text-white text-[11px] font-black uppercase tracking-widest rounded-2xl shadow-lg shadow-blue-900/20 hover:scale-[1.02] active:scale-95 transition-all">
                    Approve Scholar
                  </button>
                </div>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-8 space-y-10">
                {/* Profile Identity Card */}
                <div className="bg-white rounded-3xl p-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] border border-outline-variant/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex items-center gap-6">
                      <div className="relative">
                        <img 
                          src={selectedStudent.avatar} 
                          className="w-24 h-24 rounded-3xl object-cover border-4 border-white shadow-xl" 
                          alt="Profile Large" 
                        />
                        <div className="absolute -bottom-2 -right-2 bg-[#fed65b] text-on-secondary w-9 h-9 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                          <Star className="w-4 h-4 text-amber-900 fill-amber-900" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-2xl font-black text-[#313030] tracking-tight">{selectedStudent.name}</h4>
                        <p className="text-sm text-outline font-bold flex items-center gap-2">
                           Lagos, Nigeria <span className="w-1 h-1 bg-outline/30 rounded-full" /> Computer Science
                        </p>
                        <div className="flex gap-2 mt-4">
                          <span className="text-[9px] px-2.5 py-0.5 bg-emerald-500/10 text-emerald-600 rounded-lg font-black uppercase tracking-widest border border-emerald-500/10">Tier 1 Scholar</span>
                          <span className="text-[9px] px-2.5 py-0.5 bg-primary/10 text-primary-fixed-dim rounded-lg font-black uppercase tracking-widest border border-primary/10">Matched: Shell Foundation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant/10">
                    <div className="space-y-1">
                      <p className="text-[10px] text-outline font-black uppercase tracking-widest">GPA</p>
                      <p className="text-lg font-black text-[#313030]">4.85 / 5.0</p>
                    </div>
                    <div className="space-y-1 text-right">
                      <p className="text-[10px] text-outline font-black uppercase tracking-widest">Total Funding</p>
                      <p className="text-lg font-black text-primary-fixed-dim">₦2,400,000</p>
                    </div>
                  </div>
                </div>

                {/* Document History Section */}
                <section>
                  <div className="flex items-center justify-between mb-6">
                    <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#313030] flex items-center gap-3">
                       <FolderOpen className="w-4 h-4 text-primary-fixed-dim" />
                       Documents History
                    </h5>
                    <button className="text-[10px] text-primary-fixed-dim font-black uppercase hover:underline">View All</button>
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: 'Academic_Transcript_Y3.pdf', date: 'Oct 12, 2023', icon: FileText, color: 'text-rose-500' },
                      { name: 'Proof_of_Enrollment.png', date: 'Sep 30, 2023', icon: File, color: 'text-primary' },
                    ].map((doc) => (
                      <div key={doc.name} className="flex items-center justify-between p-4 bg-surface-container-low/30 rounded-2xl border border-transparent hover:border-outline-variant/30 hover:bg-white hover:shadow-sm transition-all cursor-pointer group">
                        <div className="flex items-center gap-4">
                          <div className={cn("p-2.5 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform", doc.color)}>
                            <doc.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-[#313030]">{doc.name}</p>
                            <p className="text-[10px] text-outline font-black uppercase tracking-tighter opacity-70">Uploaded {doc.date}</p>
                          </div>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-500/10" />
                      </div>
                    ))}
                  </div>
                </section>

                {/* Transaction Log */}
                <section>
                  <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#313030] flex items-center gap-3 mb-6">
                    <Wallet className="w-4 h-4 text-secondary-fixed-dim" />
                    Recent Transactions
                  </h5>
                  <div className="rounded-3xl border border-outline-variant/10 overflow-hidden bg-white shadow-sm divide-y divide-outline-variant/10">
                    {[
                      { label: 'Tuition Payment - Sem 1', amount: '+₦450,000' },
                      { label: 'Stipend Disbursement', amount: '+₦50,000' },
                      { label: 'Accommodation Grant', amount: '+₦120,000' },
                    ].map((tx) => (
                      <div key={tx.label} className="p-4 flex justify-between items-center hover:bg-surface-container-low/20 transition-colors">
                        <span className="text-[11px] font-bold text-on-surface uppercase tracking-tight">{tx.label}</span>
                        <span className="text-xs font-black text-emerald-600">{tx.amount}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Admin Notes Section */}
                <section className="pb-12">
                  <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#313030] flex items-center gap-3 mb-6">
                    <StickyNote className="w-4 h-4 text-amber-500" />
                    Internal Admin Notes
                  </h5>
                  <div className="space-y-6">
                    <div className="p-5 bg-primary/5 rounded-2xl border-l-[6px] border-primary shadow-sm">
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-[10px] font-black text-primary-fixed-dim uppercase tracking-[0.1em]">Admin Marcus</span>
                        <span className="text-[10px] text-outline font-bold">2 days ago</span>
                      </div>
                      <p className="text-xs text-on-surface-variant leading-relaxed font-medium italic">
                        &quot;Student has maintained a 4.5+ GPA for three consecutive semesters. Recommendation for the Shell Leadership workshop pending matched status.&quot;
                      </p>
                    </div>
                    <div className="space-y-3">
                      <textarea 
                        className="w-full h-32 bg-surface-container-low/50 rounded-2xl border border-outline-variant/20 p-4 text-xs font-medium focus:ring-4 focus:ring-primary/5 focus:border-primary/30 outline-none transition-all resize-none shadow-inner" 
                        placeholder="Add a new internal note..." 
                      />
                      <button className="w-full py-3.5 bg-white border border-outline-variant/30 rounded-2xl text-[10px] font-black uppercase tracking-widest text-[#313030] hover:bg-surface-container-low active:scale-95 transition-all shadow-sm">
                        Save Admin Note
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
