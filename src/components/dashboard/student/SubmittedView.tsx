'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

export function SubmittedView() {
  const scholarProfile = {
    name: "Adebayo Chioma",
    email: "a.chioma@unilag.edu.ng",
    origin: "Anambra State / Ihiala LGA",
    level: "Undergraduate (300 Level)",
    university: "University of Lagos",
    field: "Engineering (Chemical)",
    matric: "UNILAG/2021/ENG/402"
  }

  const documentStatus = [
    { label: "National ID (NIN)", status: "verified", icon: "verified_user" },
    { label: "Academic Transcript", status: "pending", icon: "pending_actions" },
    { label: "WAEC Result", status: "verified", icon: "verified_user" },
    { label: "Admission Letter", status: "verified", icon: "verified_user" }
  ]

  const adverts = [
    { title: "Shell Niger Delta Scholarship", deadline: "May 15, 2024", tag: "Premium" },
    { title: "Indigent Scholars Aid Fund", deadline: "Ongoing", tag: "Internal" },
    { title: "NNPC/Chevron Merit Award", deadline: "June 02, 2024", tag: "External" }
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-8 pb-32">
      
      {/* Dynamic Status Header */}
      <div className="bg-amber-50 border border-amber-100 rounded-[32px] p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="flex items-center gap-5">
           <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-amber-600 shadow-sm shrink-0">
             <span className="material-symbols-outlined text-2xl animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>hourglass_top</span>
           </div>
           <div>
             <h3 className="font-headline font-black text-amber-900 leading-none mb-1">Application Under Review</h3>
             <p className="text-amber-800/60 text-xs font-bold uppercase tracking-wider">Estimated completion: 3-5 business days</p>
           </div>
        </div>
        <button className="text-amber-600 font-black text-[10px] uppercase tracking-[0.2em] border-2 border-amber-200 px-6 py-2.5 rounded-xl hover:bg-amber-100 transition-colors">
          View Receipt
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* CONTAINER 1: STUDENT PROFILE SUMMARY (2/3) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-8 group"
        >
          <Card className="h-full bg-white rounded-[40px] border-none shadow-2xl shadow-zinc-200/50 p-10 lg:p-14 relative overflow-hidden">
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="text-3xl font-headline font-black text-zinc-900 tracking-tighter leading-none mb-4">Scholar Snapshot</h3>
                  <p className="text-zinc-400 text-sm font-body uppercase tracking-[0.2em] font-black">Submitted Credentials</p>
                </div>
                <div className="w-16 h-16 rounded-3xl bg-zinc-900 flex items-center justify-center text-white shrink-0 shadow-xl shadow-zinc-900/10">
                  <span className="material-symbols-outlined text-3xl">verified</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-auto">
                {[
                  { label: "Official Name", value: scholarProfile.name, icon: "person" },
                  { label: "Origin", value: scholarProfile.origin, icon: "location_on" },
                  { label: "Current Level", value: scholarProfile.level, icon: "school" },
                  { label: "Institutional ID", value: scholarProfile.matric, icon: "tag" }
                ].map((item, i) => (
                  <div key={i} className="space-y-2 opacity-80">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <span className="material-symbols-outlined text-[14px]">{item.icon}</span>
                      <p className="text-[10px] font-black uppercase tracking-widest">{item.label}</p>
                    </div>
                    <p className="text-lg font-headline font-black text-zinc-900 tracking-tight">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-14 pt-10 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                 <p className="text-zinc-500 text-sm font-medium">Profile is locked while under administrative review.</p>
                 <Button variant="outline" size="lg" iconLeft="lock">Request Edit</Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* CONTAINER 2: UPLOADS TRACKER (1/3) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-4"
        >
          <Card className="h-full bg-[#0052CC] rounded-[40px] border-none shadow-2xl shadow-blue-900/10 p-10 flex flex-col text-white">
            <h3 className="text-2xl font-headline font-black tracking-tight mb-8">Verification Status</h3>
            
            <div className="flex-1 space-y-3">
              {documentStatus.map((doc, i) => (
                <div key={i} className={cn(
                  "flex items-center justify-between p-5 rounded-3xl transition-all",
                  doc.status === 'verified' ? "bg-white/10" : "bg-white/5 border border-white/5"
                )}>
                  <div className="flex items-center gap-4">
                    <span className={cn(
                      "material-symbols-outlined text-xl",
                      doc.status === 'verified' ? "text-emerald-400" : "text-amber-400"
                    )}>{doc.icon}</span>
                    <span className="text-[11px] font-black uppercase tracking-widest">{doc.label}</span>
                  </div>
                  {doc.status === 'verified' && (
                    <span className="material-symbols-outlined text-emerald-400 text-base">check_circle</span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-3xl bg-white/10 backdrop-blur-sm">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#99C2FF] mb-2 text-center">Analysis Progress</p>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                   <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "85%" }}
                    className="h-full bg-emerald-400"
                   />
                </div>
                <p className="text-[14px] font-headline font-black mt-3 text-center">85% Processed</p>
            </div>
          </Card>
        </motion.div>

      </div>

      {/* CONTAINER 3: INSTITUTIONAL ADVERTS (FULL WIDTH) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="bg-zinc-50 rounded-[40px] border-none shadow-inner p-10 lg:p-14">
          <div className="flex flex-col sm:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <p className="text-[#0052CC] text-[10px] font-black uppercase tracking-[0.2em] mb-3">Opportunities</p>
              <h3 className="text-3xl font-headline font-black text-zinc-900 tracking-tighter leading-none">Institutional Adverts</h3>
            </div>
            <button className="text-zinc-400 font-black text-[10px] uppercase tracking-widest hover:text-zinc-900 transition-colors py-2">
              Explore Available Grants →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adverts.map((ad, i) => (
              <div key={i} className="group bg-white p-8 rounded-[32px] border border-zinc-100 hover:border-[#0052CC]/20 hover:shadow-xl hover:shadow-[#0052CC]/5 transition-all cursor-pointer">
                 <div className="flex items-center gap-2 mb-6">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest",
                      ad.tag === 'Premium' ? "bg-amber-50 text-amber-600" : "bg-blue-50 text-[#0052CC]"
                    )}>{ad.tag}</span>
                 </div>
                 <h4 className="text-xl font-headline font-black text-zinc-900 leading-tight mb-4 group-hover:text-[#0052CC] transition-colors">{ad.title}</h4>
                 <div className="flex items-center gap-2 text-zinc-400">
                    <span className="material-symbols-outlined text-base">calendar_today</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest">Deadline: {ad.deadline}</span>
                 </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

    </div>
  )
}
