'use client'

import { 
  ChevronRight, 
  GraduationCap, 
  FileText, 
  CheckCircle2, 
  FileImage, 
  Minus, 
  Plus, 
  Maximize2, 
  Building2, 
  QrCode,
  Slash,
  RotateCcw,
  Check,
  Search,
  Users
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

export default function VerificationCenterPage() {
  return (
    <div className="px-4 md:px-8 max-w-[1600px] mx-auto pb-32">
      {/* Breadcrumbs & Header */}
      <div className="mb-8">
        <nav className="flex items-center gap-2 text-xs font-semibold text-outline mb-4">
          <span className="opacity-60 cursor-pointer hover:text-primary-fixed-dim transition-colors">Admin</span>
          <ChevronRight className="w-3 h-3 opacity-40" />
          <span className="text-primary-fixed-dim">Verification Center</span>
        </nav>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-3xl font-black text-[#313030] tracking-tight">Verification Center</h1>
            <p className="text-on-surface-variant mt-1 text-sm font-medium">Review and validate scholarship applications for the 2024 cohort.</p>
          </div>
          
          {/* Tabs */}
          <div className="flex bg-surface-container-low p-1 rounded-2xl shadow-inner border border-outline-variant/5 self-start">
            <button className="px-6 py-2 rounded-xl text-sm font-bold bg-white shadow-sm text-primary-fixed-dim transition-all">
              Student Queue
            </button>
            <button className="px-6 py-2 rounded-xl text-sm font-bold text-outline hover:text-[#313030] transition-all">
              Sponsor Queue
            </button>
          </div>
        </div>
      </div>

      {/* Split Screen View */}
      <div className="grid grid-cols-12 gap-8 items-start">
        {/* Left Side: Text Data */}
        <div className="col-span-12 lg:col-span-5 space-y-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-outline-variant/10">
            <div className="flex items-start justify-between mb-8">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-[#0052CC]/10 flex items-center justify-center text-[#0052CC] font-black text-2xl shadow-inner uppercase">
                  CO
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#313030] tracking-tight">Chinonso Okafor</h3>
                  <p className="text-[#0052CC] font-bold flex items-center gap-1.5 text-sm mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                    University of Lagos
                  </p>
                </div>
              </div>
              <span className="bg-secondary-container text-on-secondary-container text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-[0.15em] shadow-sm">
                Priority Review
              </span>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="space-y-1">
                <p className="text-[10px] uppercase font-black text-outline tracking-widest">Department</p>
                <p className="font-bold text-[#313030] text-sm">Mechanical Engineering</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] uppercase font-black text-outline tracking-widest">Current Level</p>
                <p className="font-bold text-[#313030] text-sm">300 Level</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] uppercase font-black text-outline tracking-widest">GPA (Last Sem)</p>
                <p className="font-bold text-[#313030] text-sm text-emerald-600">4.52 / 5.0</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] uppercase font-black text-outline tracking-widest">Application ID</p>
                <p className="font-bold text-[#313030] text-sm">#ED-2024-8842</p>
              </div>
            </div>

            <div className="border-t border-outline-variant/10 pt-8">
              <h4 className="text-xs font-black text-[#313030] uppercase tracking-widest mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary-fixed-dim" />
                Scholarship Need Story
              </h4>
              <div className="bg-surface-container-low/30 p-5 rounded-2xl text-sm leading-relaxed text-on-surface-variant font-medium italic border border-outline-variant/5">
                &quot;Coming from a family of six in Enugu, pursuing an Engineering degree has been a collective dream but a financial challenge. My father, a retired teacher, and my mother, a petty trader, have exhausted their savings on my elder siblings&apos; education. This scholarship represents my only path to completing my 300-level project and final year without taking a forced sabbatical to work.&quot;
              </div>
            </div>
          </div>

          {/* Verified Metadata */}
          <div className="bg-white p-6 rounded-3xl border border-outline-variant/10 space-y-4 shadow-sm">
            <div className="flex items-center justify-between text-sm py-1">
              <span className="text-on-surface-variant font-bold">Email Verified</span>
              <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-500/10" />
            </div>
            <div className="flex items-center justify-between text-sm py-1">
              <span className="text-on-surface-variant font-bold">Phone Verified</span>
              <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-500/10" />
            </div>
            <div className="flex items-center justify-between text-sm py-1">
              <div className="space-y-0.5">
                <span className="text-on-surface-variant font-bold">Institutional Referral</span>
                <p className="text-[10px] text-outline font-medium">Verified by Department Head</p>
              </div>
              <span className="font-black text-[#313030] text-xs uppercase tracking-tighter">Dean of Students, UNILAG</span>
            </div>
          </div>
        </div>

        {/* Right Side: Document Viewer */}
        <div className="col-span-12 lg:col-span-7 sticky top-24">
          <div className="bg-[#1c1b1b] rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[650px] border border-white/5">
            <div className="bg-white/5 p-4 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  <FileImage className="w-4 h-4 text-white/70" />
                </div>
                <span className="text-white text-sm font-bold tracking-tight">Student_ID_Card_Front.jpg</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center bg-white/10 rounded-xl p-1">
                  <button className="p-1.5 hover:bg-white/10 rounded-lg text-white transition-colors">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-white font-black text-[10px] px-3 font-mono">100%</span>
                  <button className="p-1.5 hover:bg-white/10 rounded-lg text-white transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="h-4 w-px bg-white/10 mx-1" />
                <button className="p-2 hover:bg-white/10 rounded-xl text-white transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 relative overflow-hidden p-12 flex items-center justify-center bg-zinc-950/50">
              {/* Grid background for document viewer */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                   style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px'}} />
              
              <div className="relative group perspective-1000">
                {/* Simulated ID Card */}
                <motion.div 
                  initial={{ rotateX: 20, y: 50, opacity: 0 }}
                  animate={{ rotateX: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="w-[500px] aspect-[1.586/1] bg-gradient-to-br from-[#0052CC] via-[#0047b3] to-blue-900 rounded-2xl p-8 text-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] border border-white/20 relative overflow-hidden"
                >
                  {/* Decorative circles */}
                  <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
                  <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-sky-400/20 rounded-full blur-2xl" />
                  
                  <div className="flex justify-between items-start mb-10 relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                        <Building2 className="w-7 h-7 text-[#0052CC]" />
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-[12px] font-black uppercase tracking-[0.2em] leading-none">University of Lagos</p>
                        <p className="text-[10px] font-medium opacity-60 italic">Knowledge, Service, Integrity</p>
                      </div>
                    </div>
                    <div className="text-right flex flex-col items-end">
                      <p className="text-[9px] opacity-70 uppercase font-black tracking-widest border-b border-white/30 pb-1 mb-1">Student Identity</p>
                      <p className="text-sm font-black">2023 / 2024</p>
                    </div>
                  </div>

                  <div className="flex gap-10 relative z-10">
                    <div className="w-32 h-36 bg-white/10 rounded-2xl border border-white/20 overflow-hidden backdrop-blur-md shadow-inner group-hover:scale-[1.02] transition-transform">
                      <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxhx43OoRK-sMLMW-f0fWLn5D_4_kYekHO-VXMPddV39bjijqgfEfK27wDy4hpGB-uBiztqEBMIimFFZOLGn0mJELH21ytslnkJl0flCUMFG7B1hGgRe9CdYSyOmbA1no33w98IFCc_XYCd5fDR9neCNg4WmLw8I7VdSBiXhWziEHSLSFd-Sd2t6cbF6WBhGZ5sjG-ATaw_Zn2Ph2Wdaoa0U6OMQ0_E-tm-UesM9K2o9Nb9W92jVns-Z6tPQjQreW_ESaXILLixnIG"
                        alt="ID Portrait"
                        className="w-full h-full object-cover grayscale brightness-110 contrast-125"
                      />
                    </div>
                    <div className="flex-1 space-y-5 py-2">
                      <div className="space-y-1">
                        <p className="text-[8px] uppercase font-black text-white/50 tracking-[0.3em]">Full Name</p>
                        <p className="text-lg font-black uppercase tracking-tight">Chinonso Okafor</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[8px] uppercase font-black text-white/50 tracking-[0.3em]">Matric Number</p>
                        <p className="text-lg font-black tracking-[0.2em] font-mono">180402031</p>
                      </div>
                      <div className="pt-2">
                        <div className="bg-black/40 px-4 py-2 rounded-xl flex items-center justify-center border border-white/10 shadow-inner group-hover:bg-black/50 transition-colors">
                          <QrCode className="w-10 h-10 text-white/30" />
                          <div className="ml-4 flex flex-col gap-0.5 opacity-20">
                            {[1, 2, 3].map(i => <div key={i} className="h-0.5 w-12 bg-white rounded-full" />)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="bg-white/5 p-4 px-8 flex items-center justify-between border-t border-white/5">
              <div className="flex gap-3">
                <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-emerald-500/10">OCR: VALID</span>
                <span className="bg-primary/20 text-[#b2c5ff] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-primary/10">AUTHENTICATED</span>
              </div>
              <p className="text-white/30 text-[10px] font-mono">Captured: Oct 24, 2023 • IP: 197.210.xx.xx</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Action Footer */}
      <footer className="fixed bottom-0 right-0 w-full md:w-[calc(100%-16rem)] z-50 bg-white/80 backdrop-blur-xl border-t border-outline-variant/10 px-6 md:px-12 py-5 shadow-[0_-15px_40px_-20px_rgba(0,0,0,0.1)]">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm" alt="Admin" />
              ))}
              <div className="w-9 h-9 rounded-full border-2 border-white bg-surface-container-high flex items-center justify-center text-[10px] font-black text-[#313030] shadow-sm">+3</div>
            </div>
            <p className="text-[11px] text-on-surface-variant font-bold uppercase tracking-tight">Currently reviewed by 4 administrators</p>
          </div>
          
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-rose-500 text-white hover:bg-rose-600 transition-all font-black text-xs shadow-lg shadow-rose-900/20 uppercase tracking-widest">
              <Slash className="w-4 h-4" />
              Reject
            </button>
            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-secondary-container text-on-secondary-container hover:bg-[#fed65b]/80 transition-all font-black text-xs shadow-lg shadow-amber-900/10 uppercase tracking-widest">
              <RotateCcw className="w-4 h-4" />
              Resubmit
            </button>
            <button className="flex-[2] sm:flex-none flex items-center justify-center gap-2 px-10 py-3.5 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700 transition-all font-black text-xs shadow-lg shadow-emerald-900/20 uppercase tracking-widest">
              <Check className="w-4 h-4" />
              Approve
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}
