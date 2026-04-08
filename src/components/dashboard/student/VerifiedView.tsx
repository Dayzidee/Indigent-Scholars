'use client'

import { ProgressRing } from './ProgressRing'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

const activities = [
  { title: 'Verification Successful', description: 'Your transcript and ID documents were approved by our compliance team.', time: '2h ago', icon: 'task_alt', color: 'blue' },
  { title: 'New Match Alert', description: 'Global STEM Initiative is reviewing profiles in your region.', time: 'Yesterday', icon: 'mail', color: 'yellow' },
]

export function VerifiedView() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-8 space-y-6 md:space-y-10"
    >
      {/* Welcome Section */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-6 mb-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold font-headline text-primary tracking-tight">Welcome back, Amara</h2>
          <p className="text-on-surface-variant mt-2 font-body flex flex-wrap items-center gap-2">
            Your profile is currently 
            <span className="px-2 py-0.5 bg-secondary-container text-on-secondary-container rounded font-bold text-[10px] md:text-xs uppercase tracking-wider flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              Verified & Active
            </span>
          </p>
        </div>
        <div className="md:text-right w-full md:w-auto">
          <p className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Last Update</p>
          <p className="font-headline font-bold text-on-surface text-sm md:text-base">Oct 24, 2023 • 09:42 AM</p>
        </div>
      </section>

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {/* Status Tracker (Full Width Bento Row) */}
        <Card className="col-span-12 bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-sm border border-outline-variant/10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-10">
            <h3 className="font-headline font-bold text-lg">Application Journey</h3>
            <span className="text-xs font-semibold text-secondary flex items-center gap-1">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              Status: Documents Verified
            </span>
          </div>
          
          <div className="relative overflow-x-auto pb-4 sm:pb-0 scrollbar-hide">
            <div className="min-w-[500px] relative px-4">
              {/* Progress Line Background */}
              <div className="absolute top-5 left-0 w-full h-1 bg-surface-container rounded-full z-0"></div>
              {/* Active Progress Line */}
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '50%' }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-5 left-0 h-1 bg-secondary rounded-full z-0"
              ></motion.div>
              
              <div className="relative z-10 flex justify-between text-center">
                {[
                  { label: 'Submitted', icon: 'check', active: true, completed: true },
                  { label: 'Under Review', icon: 'check', active: true, completed: true },
                  { label: 'Verified', icon: 'verified', active: true, highlighted: true },
                  { label: 'Matches Found', icon: 'search', active: false },
                  { label: 'Funded', icon: 'payments', active: false },
                ].map((step, idx) => (
                  <div key={idx} className={cn("flex flex-col items-center gap-3", !step.active && "opacity-40")}>
                    <div className={cn(
                      "rounded-full flex items-center justify-center transition-all duration-500",
                      step.highlighted 
                        ? "w-10 h-10 md:w-12 md:h-12 bg-secondary-container border-4 border-surface-container-lowest text-on-secondary-container ring-4 ring-secondary-container/30 shadow-lg" 
                        : "w-8 h-8 md:w-10 md:h-10 bg-primary text-white",
                      !step.active && !step.highlighted && "bg-surface-container text-on-surface-variant"
                    )}>
                      <span className={cn("material-symbols-outlined", step.highlighted ? "text-xl md:text-2xl" : "text-lg md:text-xl")} style={{ fontVariationSettings: "'wght' 700, 'FILL' 1" }}>
                        {step.icon}
                      </span>
                    </div>
                    <span className={cn(
                      "text-[10px] md:text-xs font-bold font-headline whitespace-nowrap",
                      step.highlighted ? "md:text-sm font-black text-secondary uppercase" : (step.active ? "text-primary" : "text-on-surface-variant")
                    )}>
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Financial Overview Card */}
        <Card className="col-span-12 lg:col-span-7 bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-sm border border-outline-variant/10 flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-0 overflow-hidden relative">
          <div className="z-10 w-full sm:w-auto text-center sm:text-left">
            <h3 className="font-headline font-bold text-lg mb-6">Financial Overview</h3>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] md:text-xs font-bold text-outline uppercase tracking-widest mb-1">Requested Amount</p>
                <p className="text-2xl md:text-3xl font-black font-headline text-primary">₦750,000</p>
              </div>
              <div className="flex justify-center sm:justify-start gap-6 md:gap-8">
                <div>
                  <p className="text-[9px] md:text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Funded to date</p>
                  <p className="text-lg md:text-xl font-bold font-headline text-on-surface">₦485,000</p>
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Remaining</p>
                  <p className="text-lg md:text-xl font-bold font-headline text-outline">₦265,000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-10 shrink-0">
            <ProgressRing percentage={64} size={160} strokeWidth={10} className="md:size-48" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl md:text-3xl font-black font-headline text-primary">64%</span>
              <span className="text-[9px] md:text-[10px] font-bold text-outline uppercase">Goal Reached</span>
            </div>
          </div>
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        </Card>

        {/* Match/Sponsor Teaser Card */}
        <Card className="col-span-12 lg:col-span-5 bg-tertiary-container text-white rounded-xl p-6 md:p-8 shadow-lg relative overflow-hidden flex flex-col scholar-gradient">
          <div className="flex justify-between items-start mb-6 z-10">
            <div className="bg-tertiary-fixed text-on-tertiary-fixed font-bold text-[9px] md:text-[10px] px-3 py-1 rounded-full flex items-center gap-1 animate-pulse">
              <span className="w-1.5 h-1.5 bg-on-tertiary-fixed rounded-full"></span>
              LIVE STATUS
            </div>
            <span className="material-symbols-outlined text-tertiary-fixed text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>handshake</span>
          </div>
          <h3 className="font-headline font-extrabold text-xl md:text-2xl leading-tight mb-4 z-10 text-center sm:text-left">A sponsor is currently reviewing your profile</h3>
          <p className="text-white/80 text-xs md:text-sm mb-8 font-body z-10 leading-relaxed text-center sm:text-left">Your academic excellence and engineering track record have been shortlisted for an EdAfrica Gold Grant.</p>
          <div className="mt-auto bg-white/10 backdrop-blur-md rounded-lg p-4 flex items-center gap-4 z-10 border border-white/10">
            <div className="w-10 h-10 rounded-full bg-tertiary-fixed-dim/20 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-tertiary-fixed" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
            </div>
            <div>
              <p className="text-[10px] md:text-xs font-bold text-tertiary-fixed">Match Probability: High</p>
              <p className="text-[9px] md:text-[10px] text-white/60">Estimated time to match: 2-3 days</p>
            </div>
          </div>
          {/* Abstract Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%">
              <pattern id="grid-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-sm border border-outline-variant/10">
          <h3 className="font-headline font-bold text-lg mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {activities.map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-lg hover:bg-surface-container-low transition-all duration-300 group cursor-pointer border border-transparent hover:border-outline-variant/10">
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shrink-0",
                  item.color === 'blue' ? "bg-blue-50 text-blue-700" : "bg-secondary-container/20 text-secondary"
                )}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div className="flex-1">
                  <p className="font-headline font-bold text-on-surface text-sm md:text-base">{item.title}</p>
                  <p className="text-[10px] md:text-xs text-outline font-body leading-relaxed">{item.description}</p>
                </div>
                <span className="text-[10px] md:text-xs text-outline font-bold uppercase tracking-widest shrink-0">{item.time}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Right Column: Academic & Support */}
        <div className="col-span-12 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          <Card className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-outline-variant/10 relative overflow-hidden flex flex-col justify-center translate-y-0">
            <h4 className="font-headline font-bold text-[10px] md:text-sm text-outline uppercase tracking-widest mb-4">Academic Status</h4>
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-headline font-black text-lg md:text-xl shadow-inner shrink-0">
                4.8
              </div>
              <div className="min-w-0">
                <p className="font-headline font-bold text-on-surface text-sm md:text-base truncate">Current CGPA</p>
                <p className="text-[10px] md:text-xs text-outline truncate">B.Eng Electrical Engineering</p>
              </div>
            </div>
            <div className="pt-4 border-t border-surface-container flex justify-between items-center relative z-10">
              <span className="text-[10px] md:text-xs font-bold text-outline uppercase tracking-wider">Level: 300L</span>
              <button className="text-[10px] md:text-xs font-black text-primary hover:underline transition-all uppercase tracking-widest">Transcript</button>
            </div>
            <span className="absolute -right-4 -bottom-4 material-symbols-outlined text-primary/5 text-6xl md:text-8xl rotate-12 select-none">school</span>
          </Card>

          <Card className="bg-primary text-on-primary rounded-xl p-6 shadow-lg shadow-primary/20 space-y-4 border-none scholar-gradient flex flex-col justify-center">
            <h4 className="font-headline font-bold text-white/70 text-[10px] md:text-xs uppercase tracking-widest">Scholar Support</h4>
            <div className="space-y-3">
              <button className="w-full bg-white/10 hover:bg-white/20 transition-all py-3 px-4 rounded-lg flex items-center justify-between group backdrop-blur-sm border border-white/10">
                <span className="text-xs md:text-sm font-bold">Chat with Advisor</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">chevron_right</span>
              </button>
              <button className="w-full bg-white text-primary py-3 px-4 rounded-lg flex items-center justify-between group shadow-xl hover:bg-white/90 transition-all active:scale-[0.98]">
                <span className="text-xs md:text-sm font-black font-headline uppercase tracking-tight">Update Profile</span>
                <span className="material-symbols-outlined text-sm">edit</span>
              </button>
            </div>
          </Card>
        </div>
      </div>
    </motion.div>
  )
}
