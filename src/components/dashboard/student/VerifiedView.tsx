import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { FinancialCarousel } from './FinancialCarousel'
import { CategorizedProfile } from './CategorizedProfile'
import { FundingTracker } from './FundingTracker'
import { STUDENTS_DATA } from '@/lib/constants/mock-data'

export function VerifiedView() {
  const documentStatus = [
    { label: "National ID (NIN)", status: "verified", icon: "verified_user" },
    { label: "Academic Transcript", status: "verified", icon: "verified_user" },
    { label: "WAEC Result", status: "verified", icon: "verified_user" },
    { label: "Admission Letter", status: "verified", icon: "verified_user" }
  ]

  const adverts = [
    { title: "Shell Niger Delta Scholarship", deadline: "May 15, 2024", tag: "Premium" },
    { title: "Indigent Scholars Aid Fund", deadline: "Ongoing", tag: "Internal" },
    { title: "NNPC/Chevron Merit Award", deadline: "June 02, 2024", tag: "External" }
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-12 pb-32">
      
      {/* 1. PRIMARY CONTAINERS (SUMMARY TIER) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        
        {/* Profile Container: Summarized Identity */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="group"
        >
          <Card className="h-full bg-white rounded-[40px] border-none shadow-2xl shadow-zinc-200/50 p-10 relative overflow-hidden flex flex-col">
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-10">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#0052CC] flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-2xl font-bold">person</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[8px] font-black uppercase tracking-widest border border-emerald-100 italic">Verified</div>
              </div>

              <div className="space-y-4 mb-auto">
                <div>
                  <h3 className="text-xl font-headline font-black text-zinc-900 tracking-tight leading-none mb-1">Adebayo Chioma</h3>
                  <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest">Scholar Level 1</p>
                </div>
                <div className="pt-4 border-t border-zinc-50 space-y-3">
                   <div className="flex items-center justify-between">
                     <span className="text-zinc-400 text-[9px] font-bold uppercase tracking-widest">Institution</span>
                     <span className="text-xs font-black text-zinc-800">UNILAG</span>
                   </div>
                   <div className="flex items-center justify-between">
                     <span className="text-zinc-400 text-[9px] font-bold uppercase tracking-widest">Faculty</span>
                     <span className="text-xs font-black text-zinc-800">Engineering</span>
                   </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-100">
                <Button variant="ghost" size="sm" className="w-full justify-start px-0 text-[#0052CC]" iconRight="chevron_right">Full Identity View</Button>
              </div>
            </div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-50/50 rounded-full blur-3xl" />
          </Card>
        </motion.div>

        {/* Uploads Container: Status & View */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="h-full bg-zinc-900 rounded-[40px] border-none shadow-2xl shadow-zinc-900/10 p-10 flex flex-col text-white relative overflow-hidden">
            <h3 className="text-lg font-headline font-black tracking-tight mb-8">Document Vault</h3>
            
            <div className="flex-1 space-y-3">
              {documentStatus.slice(0, 3).map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-base text-emerald-400">check_circle</span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-zinc-300">{doc.label}</span>
                  </div>
                  <span className="material-symbols-outlined text-zinc-500 text-sm hover:text-white cursor-pointer exit_to_app">visibility</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-[9px] font-black uppercase tracking-widest text-emerald-400 mb-1 italic">System Health: 100%</p>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                   <div className="h-full bg-emerald-400 w-full" />
                </div>
            </div>
          </Card>
        </motion.div>

        {/* Adverts / Promotions: Institutional News */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="h-full bg-zinc-50 rounded-[40px] border-none p-10 flex flex-col relative overflow-hidden">
            <div className="flex items-center justify-between mb-8">
               <h3 className="text-lg font-headline font-black tracking-tight text-zinc-900">Institutional Ads</h3>
               <span className="material-symbols-outlined text-zinc-300">campaign</span>
            </div>

            <div className="space-y-4 flex-1">
               {adverts.slice(0, 2).map((ad, i) => (
                 <div key={i} className="p-5 rounded-[24px] bg-white border border-zinc-100 hover:shadow-lg transition-all cursor-pointer group">
                    <p className="text-[#0052CC] text-[8px] font-black uppercase tracking-widest mb-1">{ad.tag}</p>
                    <h4 className="text-xs font-headline font-black text-zinc-800 leading-tight mb-3 group-hover:text-[#0052CC] transition-colors">{ad.title}</h4>
                    <div className="flex items-center gap-2 text-zinc-400 group-hover:text-zinc-500 transition-colors">
                       <span className="material-symbols-outlined text-[12px]">calendar_today</span>
                       <span className="text-[8px] font-bold uppercase tracking-widest">{ad.deadline}</span>
                    </div>
                 </div>
               ))}
            </div>

            <div className="mt-6 pt-4">
               <button className="text-[9px] font-black uppercase tracking-[0.2em] text-[#0052CC] hover:underline transition-all">View All Opportunities &rarr;</button>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* PREMIUM FUNDING TRACKER */}
      <FundingTracker 
        receivedAmount={STUDENTS_DATA[0].raisedAmount}
        totalAmount={STUDENTS_DATA[0].totalGoal}
        phase="Phase 1: Registration Entry"
        nextMilestone={500000}
        sponsors={STUDENTS_DATA[0].sponsors}
      />

      {/* 2. SECONDARY TIER (AND ADDITION FOR VERIFIED USERS) */}
      <div className="space-y-12">
        <div className="flex items-center gap-4">
           <div className="h-px flex-1 bg-zinc-100" />
           <p className="text-zinc-300 text-[10px] font-black uppercase tracking-[0.5em]">Deep Insights & Analytics</p>
           <div className="h-px flex-1 bg-zinc-100" />
        </div>

        {/* Financial Tracker Carousel */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <FinancialCarousel />
        </motion.section>

        {/* Full Categorized Profile Sections */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <CategorizedProfile />
        </motion.section>
      </div>

    </div>
  )
}
