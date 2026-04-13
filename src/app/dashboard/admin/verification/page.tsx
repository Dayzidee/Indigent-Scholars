'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

const pendingStudents = [
  { 
    id: "STU-001", 
    name: "Adebayo Chioma", 
    university: "University of Lagos", 
    docs: ["National ID", "Transcript", "WAEC"],
    submitted: "2h ago",
    status: "Pending Review",
    initials: "AC",
    color: "bg-blue-100 text-blue-400"
  },
  { 
    id: "STU-002", 
    name: "Ibrahim Yusuf", 
    university: "ABU Zaria", 
    docs: ["Admission Letter", "State ID"],
    submitted: "5h ago",
    status: "Under Audit",
    initials: "IY",
    color: "bg-emerald-100 text-emerald-600"
  },
  { 
    id: "STU-003", 
    name: "Chisom Nwosu", 
    university: "UNN", 
    docs: ["Transcript", "NIN"],
    submitted: "1d ago",
    status: "Pending Review",
    initials: "CN",
    color: "bg-amber-100 text-amber-600"
  }
]

export default function VerificationPage() {
  const [selectedStudent, setSelectedStudent] = useState<typeof pendingStudents[0] | null>(null)

  return (
    <div className="min-h-screen bg-zinc-800/50 p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Admin Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="flex items-center gap-3 text-[10px] font-black text-[#0052CC] uppercase tracking-[0.2em] mb-4">
               <span className="material-symbols-outlined text-base">verified_user</span>
               <span>Compliance Hub</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black font-headline tracking-tighter text-zinc-100 leading-none">Verification Center</h1>
            <p className="text-zinc-500 text-sm mt-4 font-medium max-w-lg leading-relaxed">
              Human-in-the-loop review queue for scholar identity and document validation. 
              Ensure all NIN and Academic credentials meet Indigent-Sc standards.
            </p>
          </div>
          <div className="flex gap-3 bg-zinc-900 p-2 rounded-2xl shadow-sm border border-zinc-800">
             <div className="px-6 py-3 text-center">
                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Queue</p>
                <p className="text-2xl font-black text-zinc-100 leading-none">24</p>
             </div>
             <div className="w-px h-10 bg-zinc-800 self-center" />
             <div className="px-6 py-3 text-center">
                <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1">Weekly</p>
                <p className="text-2xl font-black text-emerald-600 leading-none">142</p>
             </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
           
           {/* STUDENT QUEUE LIST (LEFT) */}
           <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between px-2 mb-6">
                <h3 className="font-headline font-black text-lg text-zinc-100">Review Queue</h3>
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest bg-zinc-800 px-3 py-1 rounded-full">
                  Recent First
                </span>
              </div>
              
              <AnimatePresence mode="popLayout">
                {pendingStudents.map((student, i) => (
                  <motion.div
                    key={student.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Card 
                      onClick={() => setSelectedStudent(student)}
                      className={cn(
                        "p-6 rounded-[32px] border-none shadow-sm cursor-pointer transition-all hover:shadow-xl hover:shadow-blue-900/5 group relative overflow-hidden",
                        selectedStudent?.id === student.id ? "bg-[#0052CC] text-white ring-4 ring-blue-100" : "bg-zinc-900 text-zinc-100"
                      )}
                    >
                      <div className="flex items-center gap-5 relative z-10">
                        <div className={cn(
                          "w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xs shrink-0 transition-transform group-hover:scale-110",
                          student.color,
                          selectedStudent?.id === student.id && "bg-zinc-800/20 text-white"
                        )}>
                          {student.initials}
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-headline font-black text-base tracking-tight truncate leading-tight mb-1">{student.name}</h4>
                          <p className={cn(
                            "text-[10px] font-black uppercase tracking-widest truncate",
                            selectedStudent?.id === student.id ? "text-white/60" : "text-zinc-400"
                          )}>{student.university}</p>
                        </div>
                        <div className="ml-auto flex flex-col items-end gap-2">
                          <span className={cn(
                            "px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest",
                            selectedStudent?.id === student.id ? "bg-zinc-800/20 text-white" : "bg-blue-950/30 text-[#0052CC]"
                          )}>
                            {student.docs.length} Docs
                          </span>
                          <p className={cn(
                             "text-[9px] font-bold uppercase tracking-widest",
                             selectedStudent?.id === student.id ? "text-white/40" : "text-zinc-300"
                          )}>{student.submitted}</p>
                        </div>
                      </div>
                      
                      {selectedStudent?.id === student.id && (
                        <motion.div 
                          layoutId="active-indicator"
                          className="absolute right-[-40px] top-[-40px] w-32 h-32 bg-white/5 rounded-full blur-3xl"
                        />
                      )}
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
           </div>

           {/* DOCUMENT AUDIT PREVIEW (RIGHT) */}
           <div className="lg:col-span-7">
              {selectedStudent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-8"
                >
                  <Card className="bg-zinc-900 rounded-[40px] border-none shadow-2xl p-10 lg:p-14 relative overflow-hidden group">
                     {/* Identity Header */}
                     <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-12">
                        <div className="space-y-2">
                           <p className="text-[#0052CC] text-[10px] font-black uppercase tracking-[0.2em]">Auditing Student Identity</p>
                           <h2 className="text-4xl font-headline font-black text-zinc-100 tracking-tighter leading-none">{selectedStudent.name}</h2>
                           <p className="text-zinc-400 text-sm font-medium">{selectedStudent.id} • {selectedStudent.university}</p>
                        </div>
                        <div className="flex gap-2">
                           <button className="w-12 h-12 rounded-2xl bg-zinc-800 text-zinc-400 flex items-center justify-center hover:bg-zinc-800 transition-colors">
                              <span className="material-symbols-outlined">flag</span>
                           </button>
                           <button className="w-12 h-12 rounded-2xl bg-zinc-800 text-zinc-400 flex items-center justify-center hover:bg-zinc-800 transition-colors">
                              <span className="material-symbols-outlined">share</span>
                           </button>
                        </div>
                     </div>

                     {/* Document Preview Area */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {selectedStudent.docs.map((doc, idx) => (
                           <div key={idx} className="space-y-4">
                              <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-zinc-400">
                                 <span>{doc}</span>
                                 <span className="text-[#0052CC]">High Res</span>
                              </div>
                              <div className="aspect-[4/3] bg-zinc-800 rounded-3xl overflow-hidden border border-zinc-700 group/doc relative flex items-center justify-center">
                                 <div className="text-center p-8 space-y-4">
                                    <span className="material-symbols-outlined text-4xl text-zinc-300">description</span>
                                    <p className="text-xs text-zinc-400 font-medium">Click to expand document preview</p>
                                 </div>
                                 <div className="absolute inset-0 bg-zinc-900/5 opacity-0 group-hover/doc:opacity-100 transition-opacity" />
                                 <button className="absolute inset-0 z-20" />
                              </div>
                           </div>
                        ))}
                     </div>

                     {/* Action Controls */}
                     <div className="pt-12 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-6">
                           <div className="flex items-center gap-3">
                              <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/30" />
                              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-100">Compliant</span>
                           </div>
                           <div className="flex items-center gap-3">
                              <div className="w-3 h-3 rounded-full bg-amber-400" />
                              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Needs Review</span>
                           </div>
                        </div>
                        <div className="flex gap-4 w-full sm:w-auto">
                           <Button 
                            variant="outline" 
                            size="lg" 
                            className="flex-1 sm:flex-none py-8 px-10 border-rose-100 text-rose-600 hover:bg-rose-50"
                           >
                            Reject Application
                           </Button>
                           <Button 
                            variant="primary" 
                            size="lg" 
                            className="flex-1 sm:flex-none py-8 px-10 bg-emerald-600 hover:bg-emerald-700 shadow-xl shadow-emerald-900/10"
                            iconRight="check_circle"
                           >
                            Approve Scholar
                           </Button>
                        </div>
                     </div>
                  </Card>

                  {/* Supplemental Metadata */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     {[
                        { label: "IP ADDRESS", value: "192.168.1.1", icon: "bolt" },
                        { label: "DEVICE ID", value: "AAPL-MBP-2023", icon: "laptop_mac" },
                        { label: "SIGNATURE", value: "MATCH:99.4%", icon: "gesture" }
                     ].map((meta, i) => (
                        <Card key={i} className="p-6 bg-zinc-900 rounded-3xl border-none shadow-sm flex items-center gap-4">
                           <span className="material-symbols-outlined text-zinc-300 text-xl">{meta.icon}</span>
                           <div className="min-w-0">
                              <p className="text-[9px] font-black text-zinc-400 uppercase tracking-widest leading-none mb-1">{meta.label}</p>
                              <p className="text-[11px] font-bold text-zinc-100 truncate">{meta.value}</p>
                           </div>
                        </Card>
                     ))}
                  </div>
                </motion.div>
              ) : (
                <div className="h-[600px] border-2 border-dashed border-zinc-700 rounded-[48px] flex flex-col items-center justify-center text-center p-12 space-y-6">
                   <div className="w-24 h-24 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-200">
                      <span className="material-symbols-outlined text-5xl">person_search</span>
                   </div>
                   <div>
                     <h3 className="text-xl font-headline font-black text-zinc-400">Select a scholar to begin audit</h3>
                     <p className="text-zinc-300 text-sm font-medium mt-2">Active review required for all pending registrations.</p>
                   </div>
                </div>
              )}
           </div>

        </div>

      </div>
    </div>
  )
}
