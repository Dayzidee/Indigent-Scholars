'use client'

import { ProgressRing } from './ProgressRing'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

const activities = [
  { title: 'Verification Successful', description: 'Your transcript and ID documents were approved by our compliance team.', time: '2h ago', icon: 'task_alt', color: 'blue' },
  { title: 'New Match Alert', description: 'Global STEM Initiative is reviewing profiles in your region.', time: 'Yesterday', icon: 'mail', color: 'yellow' },
]

export function VerifiedView() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8 space-y-10">
      {/* Welcome Section */}
      <section className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
        <div>
          <h2 className="text-3xl lg:text-4xl font-extrabold font-headline text-on-surface tracking-tight">Welcome back, Amara</h2>
          <div className="mt-2 flex items-center gap-3">
            <span className="text-on-surface-variant font-body">Profile status:</span>
            <div className="flex items-center gap-2 px-3 py-1 bg-tertiary-container/10 text-tertiary rounded-full font-bold text-[10px] uppercase tracking-widest border border-tertiary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
              Verified & Active
            </div>
          </div>
        </div>
        <div className="text-right glass-panel px-6 py-3 rounded-2xl border border-primary/5">
          <p className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Last Update</p>
          <div className="flex items-center gap-2 font-headline font-bold text-on-surface">
            <span className="material-symbols-outlined text-sm opacity-40">event</span>
            Oct 24, 2023 • 09:42 AM
          </div>
        </div>
      </section>

      <div className="grid grid-cols-12 gap-8">
        {/* Status Tracker */}
        <Card className="col-span-12 bg-surface-container-lowest rounded-[2rem] p-8 lg:p-10 shadow-sm border border-outline-variant/10">
          <div className="flex justify-between items-center mb-12">
            <h3 className="font-headline font-bold text-xl">Application Journey</h3>
            <span className="px-4 py-1.5 bg-secondary-container/20 text-secondary font-bold text-[10px] uppercase tracking-widest rounded-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              Step 3: Verification Complete
            </span>
          </div>
          <div className="relative px-4 lg:px-12">
             {/* Progress Line */}
            <div className="absolute top-1/2 left-0 w-full h-[6px] bg-surface-container rounded-full -translate-y-1/2" />
            <div className="absolute top-1/2 left-0 w-[75%] h-[6px] bg-primary rounded-full -translate-y-1/2 transition-all duration-1000 ease-out" />
            
            <div className="relative z-10 flex justify-between">
              {[
                { label: 'Personal', icon: 'person', completed: true },
                { label: 'Academic', icon: 'school', completed: true },
                { label: 'Financial', icon: 'payments', completed: true, current: true },
                { label: 'Documents', icon: 'description', completed: false },
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center gap-4">
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500",
                    step.completed ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-white border-4 border-primary/20 text-primary/40",
                    step.current && "bg-white border-4 border-primary text-primary scale-110 shadow-xl"
                  )}>
                    <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: (step.completed || step.current) ? "'wght' 700" : "" }}>
                      {step.icon}
                    </span>
                  </div>
                  <span className={cn("text-[10px] font-bold uppercase tracking-widest font-headline", (step.completed || step.current) ? "text-primary" : "text-outline")}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Financial Overview */}
        <Card className="col-span-12 lg:col-span-7 bg-surface-container-lowest rounded-3xl p-10 overflow-hidden relative border-none shadow-sm flex flex-col md:flex-row items-center justify-between">
          <div className="z-10 text-center md:text-left mb-8 md:mb-0">
            <h3 className="font-headline font-bold text-xl mb-8">Financial Overview</h3>
            <div className="space-y-8">
              <div>
                <p className="text-xs font-bold text-outline uppercase tracking-widest mb-2">Requested Amount</p>
                <p className="text-4xl font-black font-headline text-primary">₦750,000</p>
              </div>
              <div className="flex gap-10 justify-center md:justify-start">
                <div>
                  <p className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Funded to date</p>
                  <p className="text-2xl font-bold font-headline text-on-surface">₦485,000</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Remaining</p>
                  <p className="text-2xl font-bold font-headline text-outline">₦265,000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-10">
            <ProgressRing percentage={64} size={200} strokeWidth={14} />
          </div>
          <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        </Card>

        {/* Sponsor Match Teaser */}
        <Card className="col-span-12 lg:col-span-5 bg-tertiary text-white rounded-[2rem] p-8 lg:p-10 shadow-xl relative overflow-hidden flex flex-col border-none scholar-gradient">
          <div className="flex justify-between items-start mb-8 z-10">
            <div className="bg-white/10 text-white font-bold text-[10px] px-4 py-1.5 rounded-full flex items-center gap-2 backdrop-blur-md border border-white/10">
              <span className="w-2 h-2 bg-on-tertiary-fixed rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              LIVE STATUS
            </div>
            <span className="material-symbols-outlined text-tertiary-fixed text-4xl opacity-20" style={{ fontVariationSettings: "'FILL' 1" }}>handshake</span>
          </div>
          <h3 className="font-headline font-extrabold text-2xl lg:text-3xl leading-tight mb-4 z-10">A sponsor is currently reviewing your profile</h3>
          <p className="text-white/70 text-sm mb-10 font-body leading-relaxed z-10">Your academic excellence and engineering track record have been shortlisted for an EdAfrica Gold Grant.</p>
          
          <div className="mt-auto bg-white/5 backdrop-blur-xl rounded-2xl p-5 flex items-center gap-5 z-10 border border-white/10 shadow-lg group hover:bg-white/10 transition-colors cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tertiary-fixed to-tertiary-fixed-dim/40 flex items-center justify-center shadow-inner">
              <span className="material-symbols-outlined text-tertiary text-2xl" data-icon="auto_awesome" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
            </div>
            <div>
              <p className="text-xs font-bold text-tertiary-fixed uppercase tracking-widest">Match Probability: High</p>
              <p className="text-[10px] text-white/40 font-medium">Estimated time to match: ~48 hours</p>
            </div>
            <span className="material-symbols-outlined ml-auto text-white group-hover:translate-x-1 transition-transform">chevron_right</span>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl z-0" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-tertiary-fixed/10 rounded-full -ml-12 -mb-12 blur-2xl z-0" />
          
          <div className="absolute inset-0 opacity-5 pointer-events-none z-0">
            <svg width="100%" height="100%">
              <pattern id="grid-dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid-dots)" />
            </svg>
          </div>
        </Card>

        {/* Recent Activity */}
        <Card className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-3xl p-10 border border-outline-variant/10 shadow-sm">
          <h3 className="font-headline font-bold text-xl mb-8">Recent Activity</h3>
          <div className="space-y-6">
            {activities.map((item, idx) => (
              <div key={idx} className="flex items-center gap-6 p-5 rounded-2xl hover:bg-surface-container-low transition-all duration-300 group cursor-default">
                <div className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm",
                  item.color === 'blue' ? "bg-blue-50 text-blue-700" : "bg-secondary-container/20 text-secondary"
                )}>
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>
                <div className="flex-1">
                  <p className="font-headline font-bold text-on-surface text-lg">{item.title}</p>
                  <p className="text-sm text-on-surface-variant font-body">{item.description}</p>
                </div>
                <span className="text-xs text-outline font-black uppercase tracking-widest">{item.time}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Sidebar Cards */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <Card className="bg-surface-container-lowest rounded-3xl p-8 border border-outline-variant/10 shadow-sm relative overflow-hidden">
            <h4 className="font-headline font-bold text-xs text-outline uppercase tracking-widest mb-6">Academic Status</h4>
            <div className="flex items-center gap-6 mb-8 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-primary shadow-lg shadow-primary/20 text-white flex items-center justify-center font-headline font-black text-2xl">
                4.85
              </div>
              <div>
                <p className="font-headline font-extrabold text-on-surface text-lg">Current CGPA</p>
                <p className="text-sm text-on-surface-variant font-medium">Top 2% of Class</p>
              </div>
            </div>
            <div className="pt-6 border-t border-surface-container flex justify-between items-center relative z-10">
              <div>
                 <p className="text-[10px] font-bold text-outline uppercase tracking-widest mb-0.5">Faculty</p>
                 <p className="text-xs font-bold text-on-surface">Engineering</p>
              </div>
              <div className="text-right">
                 <p className="text-[10px] font-bold text-outline uppercase tracking-widest mb-0.5">Current Level</p>
                 <p className="text-xs font-bold text-on-surface">300 Level</p>
              </div>
            </div>
            
            <div className="absolute top-2 right-2 opacity-[0.03]">
               <span className="material-symbols-outlined text-7xl select-none" style={{ fontVariationSettings: "'wght' 900" }}>school</span>
            </div>
          </Card>

          <div className="bg-primary scholar-gradient text-white rounded-3xl p-8 shadow-xl shadow-primary/20 space-y-4">
            <h4 className="font-headline font-bold text-white/60 text-xs uppercase tracking-widest">Scholar Support</h4>
            <button className="w-full bg-white/10 hover:bg-white/20 transition-all py-4 px-6 rounded-2xl flex items-center justify-between group">
              <span className="text-sm font-bold">Chat with Advisor</span>
              <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">chevron_right</span>
            </button>
            <button className="w-full bg-white text-primary py-4 px-6 rounded-2xl flex items-center justify-between group shadow-lg">
              <span className="text-sm font-black font-headline">Update Profile</span>
              <span className="material-symbols-outlined text-lg">edit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
