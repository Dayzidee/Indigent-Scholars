'use client'

import { 
  ChevronRight, 
  Landmark, 
  Plus, 
  MoreVertical, 
  ShieldCheck, 
  UserPlus, 
  Lock, 
  ArrowRight, 
  ScrollText, 
  RefreshCw,
  Search,
  Settings
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

const schools = [
  {
    name: 'University of Lagos',
    location: 'Akoka, Yaba',
    id: 'UL-2024-NG',
    bank: 'Access Bank PLC',
    account: '0012938841',
    status: 'Verified'
  },
  {
    name: 'Ahmadu Bello University',
    location: 'Zaria, Kaduna',
    id: 'ABU-2024-NG',
    bank: 'Zenith Bank',
    account: '1011228490',
    status: 'Verified'
  },
  {
    name: 'Covenant University',
    location: 'Ota, Ogun',
    id: 'CU-2024-PRV',
    bank: 'First Bank of Nigeria',
    account: '3118220042',
    status: 'Pending Aud'
  }
]

const admins = [
  {
    name: 'Chima Okoro',
    email: 'c.okoro@edafrica.org',
    role: 'Super Admin',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBa_F-242X-vbzeHHZ2lZmwypL5bLs6FYNIh66vuijDbg47SKyEK0tMVNVZEOZFNwb-VOIPZxcl19HTa2dWJPUY2PlUkvu2OIT2hsUBcp1YQYaj-7RYdE_HVRQXbmAW5vSENjQ_gyVpy5Swxrq2ZD0X-AEk5zTmDdWoUjXv_FzSP-qaP6vhxUPFBu5hZu18kPzngzqClT0rqpah_ybEHx0NC6HpDOJuTA_FLbeKb8NK55z_9TwlqIY4lgSZFGaEiFa9WHE6lXfT_Tch'
  },
  {
    name: 'Bolu Adeniyi',
    email: 'b.adeniyi@edafrica.org',
    role: 'Reviewer',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMrffZjsGzaxtBSql8XmIxp_MZxk0eETO8UWGMWGwv8i1VlIasIw3YADDQ76-hBFRqpkw1WKwgDRCodhw7YJVSnyUoq5UbOoqkvCQZon-aotlX0WDTn1sIupPMOUodZ5Q18JKw7P-_biZBJVOnbQc_njyB5w3ZzIzs72X7WjbZ8s4Xg0U2pYJUPgAzX4c0E39OPrmEbShLugZUSyrWxR76wTPUASIQK73V2j1Ml_LsXCvzp_IOIRJZhTZ_Y9S1z_4YelDX5gtmg6Bz'
  },
  {
    name: 'Amina Yusuf',
    email: 'a.yusuf@edafrica.org',
    role: 'Reviewer',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSPSwrF5yX2YwbDFnPjT8fY3P74Uu-obvxF7cAeJjgRjyTL_FWwQ8hUQaPmhLZvHtR85fou6hCTnVa0K2dcsl0eH0nuZZzvS0Gk-KO6RTxWEEb3bnLNNy1fnaMaGoRxL-fmlAJ_dYZrnyIEiwzkwjhNflyadhoyf1U3S6jOtWv25yuFE8dBZMMJzNzV38Cd_28UiZtsqEPwFR7xcgUypDPGjwFEfQDgqhsrApXz-WcOIp_ZBc0sgBh7KJ6KETXaep7M3lNKjMoFvNJ'
  }
]

export default function SettingsPage() {
  return (
    <div className="px-4 md:px-8 max-w-[1600px] mx-auto pb-24">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 mb-8 pt-6 text-[10px] font-black uppercase tracking-[0.2em] text-outline">
        <span className="opacity-60 cursor-pointer hover:text-primary-fixed-dim transition-colors">Admin</span>
        <ChevronRight className="w-3.5 h-3.5 opacity-40" />
        <span className="text-primary-fixed-dim">Platform Management</span>
      </nav>

      {/* Page Header */}
      <div className="mb-12">
        <h2 className="text-4xl font-black text-[#313030] tracking-tight mb-3">Platform Management</h2>
        <p className="text-on-surface-variant max-w-2xl font-medium leading-relaxed">
          Configure core institutional data, manage university registry, and define administrative access control for the EdAfrica Scholarship Portal.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Section 1: School Registry */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-1 lg:col-span-8 bg-white rounded-[2.5rem] p-10 shadow-sm border border-outline-variant/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32" />
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 relative z-10">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary-fixed-dim shadow-inner">
                <Landmark className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-[#313030] tracking-tight">School Registry</h3>
                <p className="text-[10px] text-outline font-black uppercase tracking-widest mt-0.5">Verified Partner Institutions</p>
              </div>
            </div>
            <button className="bg-[#0052CC] text-white px-6 py-3 rounded-2xl text-[11px] font-black uppercase tracking-widest flex items-center gap-2.5 hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-blue-900/20">
              <Plus className="w-4 h-4" />
              Add New University
            </button>
          </div>

          <div className="overflow-x-auto relative z-10">
            <table className="w-full text-left border-separate border-spacing-0">
              <thead>
                <tr className="border-b border-outline-variant/20">
                  <th className="pb-5 text-[10px] font-black uppercase tracking-[0.2em] text-outline border-b border-outline-variant/10">University Name</th>
                  <th className="pb-5 text-[10px] font-black uppercase tracking-[0.2em] text-outline border-b border-outline-variant/10">Matched ID</th>
                  <th className="pb-5 text-[10px] font-black uppercase tracking-[0.2em] text-outline border-b border-outline-variant/10">Official Bank Account</th>
                  <th className="pb-5 text-[10px] font-black uppercase tracking-[0.2em] text-outline border-b border-outline-variant/10">Status</th>
                  <th className="pb-5 border-b border-outline-variant/10"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/5">
                {schools.map((school) => (
                  <tr key={school.id} className="hover:bg-primary/5 transition-all duration-300 group">
                    <td className="py-6 pr-4">
                      <div className="flex flex-col">
                        <span className="font-black text-[#313030] group-hover:text-primary-fixed-dim transition-colors tracking-tight">{school.name}</span>
                        <span className="text-[10px] font-bold text-outline uppercase tracking-tight opacity-70">{school.location}</span>
                      </div>
                    </td>
                    <td className="py-6 font-mono text-xs font-black text-primary-fixed-dim bg-primary/5 px-3 rounded-xl w-fit">{school.id}</td>
                    <td className="py-6 px-4">
                      <div className="flex flex-col">
                        <span className="text-xs font-black text-[#313030]">{school.bank}</span>
                        <span className="text-[11px] font-bold text-outline font-mono mt-0.5">{school.account}</span>
                      </div>
                    </td>
                    <td className="py-6">
                      <span className={cn(
                        "inline-flex items-center px-3 py-1 rounded-xl text-[9px] font-black uppercase tracking-[0.15em] border shadow-sm",
                        school.status === 'Verified' 
                          ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" 
                          : "bg-amber-500/10 text-amber-600 border-amber-500/20"
                      )}>
                        {school.status}
                      </span>
                    </td>
                    <td className="py-6 text-right">
                      <button className="p-2.5 rounded-xl hover:bg-surface-container-high transition-colors text-outline">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>

        {/* Section 2: Admin Roles & Permissions */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="col-span-1 lg:col-span-4 bg-[#1c1b1b] text-white rounded-[2.5rem] p-10 shadow-2xl flex flex-col justify-between overflow-hidden relative group"
        >
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32 transition-all group-hover:bg-primary/30 duration-1000" />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white shadow-inner">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-black tracking-tight">Admin Roles</h3>
                  <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mt-0.5">Access Control</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-12">
              {admins.map((admin) => (
                <div key={admin.email} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-all cursor-pointer group/item">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-full bg-white/10 overflow-hidden ring-2 ring-transparent group-hover/item:ring-primary/50 transition-all">
                      <img src={admin.avatar} className="w-full h-full object-cover" alt={admin.name} />
                    </div>
                    <div>
                      <p className="text-sm font-black tracking-tight">{admin.name}</p>
                      <p className="text-[10px] text-gray-500 font-bold">{admin.email}</p>
                    </div>
                  </div>
                  <span className={cn(
                    "text-[9px] px-2.5 py-1 rounded-lg font-black uppercase tracking-widest border",
                    admin.role === 'Super Admin' ? "bg-amber-500/20 text-amber-500 border-amber-500/20" : "bg-primary/20 text-primary-fixed-dim border-primary/20"
                  )}>
                    {admin.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto relative z-10">
            <button className="w-full py-4.5 bg-white text-[#1c1b1b] rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-gray-100 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-xl">
              <UserPlus className="w-4.5 h-4.5" />
              Invite New Admin
            </button>
            <p className="text-center text-[10px] text-gray-500 font-bold mt-5 uppercase tracking-tighter opacity-70">Invite link expires in 24 hours.</p>
          </div>
        </motion.section>
      </div>

      {/* System Configuration Settings Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Lock, title: 'Audit Logs', desc: 'Monitor all administrative actions and data modifications.', color: 'text-rose-500', bg: 'bg-rose-500/5' },
          { icon: ScrollText, title: 'Scholarship Rules', desc: 'Define minimum GPA and financial threshold requirements.', color: 'text-primary', bg: 'bg-primary/5' },
          { icon: RefreshCw, title: 'API Integrations', desc: 'Manage webhooks and external verification service connections.', color: 'text-emerald-500', bg: 'bg-emerald-500/5' },
        ].map((item, idx) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.1 }}
            className="bg-white p-8 rounded-[2rem] border border-outline-variant/10 hover:border-primary/30 hover:shadow-xl transition-all group pointer-events-auto"
          >
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-inner", item.bg)}>
              <item.icon className={cn("w-6 h-6", item.color)} />
            </div>
            <h4 className="font-black text-[#313030] text-lg mb-2 tracking-tight">{item.title}</h4>
            <p className="text-xs text-on-surface-variant font-medium leading-relaxed mb-6">{item.desc}</p>
            <button className="text-[10px] font-black text-primary-fixed-dim uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-3 transition-all">
              View Settings <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
