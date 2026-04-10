import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { FinancialCarousel } from './FinancialCarousel'
import { CategorizedProfile } from './CategorizedProfile'

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
      
      {/* 1. PRIMARY CONTAINERS (TOP TIER SUMMARY) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Profile Container (Summarized Identity) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-8 group"
        >
          <Card className="h-full bg-white rounded-[40px] border-none shadow-2xl shadow-zinc-200/50 p-10 lg:p-14 relative overflow-hidden">
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="text-3xl font-headline font-black text-zinc-900 tracking-tighter leading-none mb-4">Scholar Identity</h3>
                  <p className="text-[#0052CC] text-[10px] font-black uppercase tracking-[0.2em]">Verified Credentials</p>
                </div>
                <div className="w-16 h-16 rounded-3xl bg-[#0052CC] flex items-center justify-center text-white shrink-0 shadow-xl shadow-blue-900/20 transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-3xl">verified</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-auto">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <span className="material-symbols-outlined text-[14px]">person</span>
                    <p className="text-[10px] font-black uppercase tracking-widest">Official Name</p>
                  </div>
                  <p className="text-2xl font-headline font-black text-zinc-900 tracking-tight">Adebayo Chioma</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <span className="material-symbols-outlined text-[14px]">school</span>
                    <p className="text-[10px] font-black uppercase tracking-widest">Scholar Level</p>
                  </div>
                  <p className="text-2xl font-headline font-black text-zinc-900 tracking-tight">University Tier 1</p>
                </div>
              </div>

              <div className="mt-14 pt-10 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                 <p className="text-zinc-500 text-sm font-medium">Profile fully verified for the 2024/25 academic session.</p>
                 <Button variant="primary" size="lg" iconRight="description">Download Profile PDF</Button>
              </div>
            </div>
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50" />
          </Card>
        </motion.div>

        {/* Uploads Container (Status Summary) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-4"
        >
          <Card className="h-full bg-zinc-900 rounded-[40px] border-none shadow-2xl shadow-zinc-900/10 p-10 flex flex-col text-white relative overflow-hidden">
            <h3 className="text-2xl font-headline font-black tracking-tight mb-8">Verification Health</h3>
            
            <div className="flex-1 space-y-3">
              {documentStatus.map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-5 rounded-3xl bg-white/5 border border-white/5 transition-all hover:bg-white/10">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-xl text-emerald-400">{doc.icon}</span>
                    <span className="text-[11px] font-black uppercase tracking-widest">{doc.label}</span>
                  </div>
                  <span className="material-symbols-outlined text-emerald-400 text-base">check_circle</span>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-3xl bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20">
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                   <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    className="h-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.5)]"
                   />
                </div>
                <p className="text-[14px] font-headline font-black mt-3 text-center text-white">Tier 1: Fully Compliant</p>
            </div>
            {/* Visual background element */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl" />
          </Card>
        </motion.div>
      </div>

      {/* Adverts / Promotions Container (Summary Tier 3) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="bg-zinc-50 rounded-[40px] border-none p-10 lg:p-14">
          <div className="flex flex-col sm:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <p className="text-[#0052CC] text-[10px] font-black uppercase tracking-[0.2em] mb-3">Priority Matches</p>
              <h3 className="text-3xl font-headline font-black text-zinc-900 tracking-tighter">Institutional Adverts</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adverts.map((ad, i) => (
              <div key={i} className="group bg-white p-8 rounded-[32px] border border-zinc-100 hover:border-[#0052CC]/20 hover:shadow-xl hover:shadow-blue-900/5 transition-all cursor-pointer">
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
