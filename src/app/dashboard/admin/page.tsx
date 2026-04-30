'use client'

import { motion } from 'framer-motion'
import { 
  Wallet, 
  GraduationCap, 
  ShieldCheck, 
  Zap, 
  Calendar, 
  Download, 
  ChevronRight,
  TrendingUp,
  Activity,
  CheckCircle,
  AlertTriangle,
  Plus
} from 'lucide-react'
import { cn } from '@/lib/utils'

const metrics = [
  {
    title: 'Total Funds Raised',
    value: '₦42.5M',
    change: '+12.5%',
    trend: 'up',
    icon: Wallet,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    progress: 75
  },
  {
    title: 'Total Students Funded',
    value: '1,240',
    change: '+8.2%',
    trend: 'up',
    icon: GraduationCap,
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
    avatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBRK-xvMWtCkcY5n4uDd3vgasekQFAvsPLYb6WssApx4tkH0LuO0ph7z3KHBUc_kfj0_q0e9CJ8jQtGzIjkphW-Y7eEZTYmKFWz67y3AcENBzYnG4H3kOUftxzVU1tjRrtcI9XglsGAUZL31OXsa2lNZBH5XuPDbUwG1rcqpNMFIHv8nrb240a5_2FthXp29ef39mcfzVexCh0EwvBniwIbGjqtKZM1EIIIes7rDLfHx6wOossKx9lkWM8s2ih5amQsw1yY9Tv3K3C4',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBqphNpZb1nRoP4jBQpx7uV6fDlo8vn_ntcOHqsT2XIG-keUcaw3OwWuRA_5R9zSLWzyQdNptcITzrivXBSpmslbPJk7LePZQ43b97tSY8uf4CGOSKFXOMcEGh3dYd2Mbj9RGkQ0cUUKUP-KnMp06NNLago94ILUHRlEWdtANha9yQJIBzOrSX9FJyUSrkfHb04DUrYGaFLrghPsoKzUN4sMXbHJv9YRrivjar91WpNVDQUFDkY4W60qQyDuv2K6Xwqv1WTck3SGE2T',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCC4Fz71hvJK-luDkBZnSRxjqxOC4sMYOMrQEbhKU6cwrv0HLTDiBKU8UXDCN7C395RtLmr70AOe9YfFJCG18qHlxZZbYn4g0HjS3f-I2bMjUel8EAT9UbGz6nB8dpyiXnYA6pbWcT7M6N3CTlYVidj7oecRMOHO6DLTQWUIoAu5-QIsJuz1WXQQKQy2g3FJrSaExaJTZHfzCqBeLNQ4rDIM_Kk4kH21K1y1ub1CLP9xBunlfhazVh86mxIm9C05UtROwQi5wLC7cdI'
    ]
  },
  {
    title: 'Active Pending Verifications',
    value: '24',
    change: 'Needs Action',
    trend: 'warning',
    icon: ShieldCheck,
    color: 'text-rose-500',
    bgColor: 'bg-rose-500/10',
    urgent: true
  },
  {
    title: 'Paystack Success Rate',
    value: '98.2%',
    change: 'Stable',
    trend: 'neutral',
    icon: Zap,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    progress: 98,
    dark: true
  }
]

const recentLogs = [
  {
    action: 'Student Verification',
    subject: 'Adeola Johnson (ID: #4492)',
    status: 'Completed',
    time: '2 mins ago',
    icon: CheckCircle,
    iconColor: 'text-primary'
  },
  {
    action: 'Payment Disbursement',
    subject: 'Lagos State University (Tuition)',
    status: 'Processing',
    time: '14 mins ago',
    icon: Wallet,
    iconColor: 'text-secondary'
  },
  {
    action: 'Flagged Account',
    subject: 'Ibrahim Musa (ID: #1102)',
    status: 'Review Needed',
    time: '45 mins ago',
    icon: AlertTriangle,
    iconColor: 'text-rose-500'
  }
]

export default function AdminOverviewPage() {
  return (
    <div className="px-4 md:px-8 max-w-[1600px] mx-auto">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-outline mb-6">
        <span className="opacity-60 cursor-pointer hover:text-primary-fixed-dim transition-colors">Admin</span>
        <ChevronRight className="w-3 h-3 opacity-40" />
        <span className="text-primary-fixed-dim">Overview</span>
      </nav>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-black text-[#313030] tracking-tight mb-1">Global Overview</h1>
          <p className="text-on-surface-variant text-sm font-medium">Real-time performance and scholarship health monitoring.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white text-[#313030] border border-outline-variant/30 px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-surface-container-low transition-all shadow-sm">
            <Calendar className="w-4 h-4 opacity-70" />
            Last 30 Days
          </button>
          <button className="bg-[#0052CC] text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-[#2563eb] transition-all shadow-lg shadow-blue-900/20">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* Metrics Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {metrics.map((metric, i) => (
          <div 
            key={metric.title}
            className={cn(
              "p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group",
              metric.dark 
                ? "bg-[#313030] border-transparent text-white shadow-xl" 
                : "bg-white border-outline-variant/10 shadow-sm hover:shadow-md hover:border-primary/20",
              metric.urgent && "border-rose-500/20 ring-1 ring-rose-500/5"
            )}
          >
            <div className="flex items-center justify-between mb-5">
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110", metric.bgColor, metric.color)}>
                <metric.icon className="w-6 h-6" />
              </div>
              <div className={cn(
                "px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1",
                metric.trend === 'up' ? "bg-emerald-500/10 text-emerald-600" : 
                metric.trend === 'warning' ? "bg-rose-500/10 text-rose-600 animate-pulse" :
                "bg-amber-500/10 text-amber-600"
              )}>
                {metric.change}
                {metric.trend === 'up' && <TrendingUp className="w-3 h-3" />}
              </div>
            </div>

            <p className={cn("text-[10px] font-black uppercase tracking-[0.15em] mb-1.5", metric.dark ? "text-gray-400" : "text-outline")}>
              {metric.title}
            </p>
            <h3 className={cn("text-2xl font-black tracking-tight", metric.dark ? "text-white" : "text-[#313030]")}>
              {metric.value}
            </h3>

            {metric.progress && (
              <div className="mt-5 w-full bg-surface-container-low/20 h-1.5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${metric.progress}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className={cn("h-full rounded-full", metric.progress > 90 ? "bg-amber-400" : "bg-primary")}
                />
              </div>
            )}

            {metric.avatars && (
              <div className="mt-5 flex -space-x-2">
                {metric.avatars.map((avatar, idx) => (
                  <img 
                    key={idx}
                    src={avatar} 
                    className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm transition-transform hover:z-10 hover:scale-110" 
                    alt="Student"
                  />
                ))}
                <div className="w-8 h-8 rounded-full bg-surface-container-high border-2 border-white flex items-center justify-center text-[10px] font-black text-[#313030] shadow-sm">+20</div>
              </div>
            )}

            {metric.urgent && (
              <div className="absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <AlertTriangle className="w-24 h-24" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        {/* User Acquisition: Bar Mock */}
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h4 className="text-lg font-black text-[#313030]">User Acquisition Growth</h4>
              <p className="text-sm text-outline font-medium">Students vs. Sponsors enrollment trend</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary shadow-sm" />
                <span className="text-xs font-bold text-outline uppercase tracking-wider">Students</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-secondary shadow-sm" />
                <span className="text-xs font-bold text-outline uppercase tracking-wider">Sponsors</span>
              </div>
            </div>
          </div>
          
          <div className="h-64 flex items-end gap-3 md:gap-6 relative">
             <div className="absolute inset-x-0 bottom-0 h-px bg-outline-variant/20" />
             {/* Simple Mock Bars */}
             {[40, 55, 70, 60, 85, 95, 80].map((h, i) => (
               <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer h-full justify-end">
                 <div className="relative w-full h-full flex items-end gap-1">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      className="flex-1 bg-primary/20 rounded-t-lg transition-colors group-hover:bg-primary/30"
                    />
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${h * 0.7}%` }}
                      className="absolute bottom-0 left-1/4 w-1/2 bg-primary rounded-t-lg shadow-sm"
                    />
                 </div>
                 <span className="text-[10px] font-black text-outline uppercase">WK {i + 1}</span>
               </div>
             ))}
          </div>
        </div>

        {/* Funding Volume: Progress List */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-outline-variant/10">
          <div className="mb-10">
            <h4 className="text-lg font-black text-[#313030]">Funding Volume</h4>
            <p className="text-sm text-outline font-medium">Last 30 days distribution</p>
          </div>
          <div className="space-y-8">
            {[
              { label: 'Tuition Fees', value: '₦28.4M', progress: 65, color: 'bg-primary' },
              { label: 'Learning Materials', value: '₦8.2M', progress: 35, color: 'bg-primary/70' },
              { label: 'Accommodation', value: '₦4.1M', progress: 20, color: 'bg-primary/50' },
              { label: 'Research Grants', value: '₦1.8M', progress: 10, color: 'bg-primary/30' },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-xs font-bold text-[#313030]">{item.label}</span>
                  <span className="text-xs font-black text-primary-fixed-dim">{item.value}</span>
                </div>
                <div className="w-full bg-surface-container-low h-3 rounded-full overflow-hidden p-0.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${item.progress}%` }}
                    className={cn("h-full rounded-full shadow-sm", item.color)}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-5 bg-emerald-50 rounded-2xl border border-emerald-100/50 flex items-center gap-4">
            <div className="w-10 h-10 bg-emerald-500/10 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
              <Activity className="w-5 h-5" />
            </div>
            <p className="text-[11px] font-bold leading-tight text-emerald-800">
              Funding volume has increased by <span className="text-emerald-500 text-sm">14%</span> compared to the previous month.
            </p>
          </div>
        </div>
      </div>

      {/* Activity Logs Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-outline-variant/10 overflow-hidden">
        <div className="px-8 py-6 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-low/5">
          <h4 className="text-lg font-black text-[#313030]">System Activity Logs</h4>
          <button className="text-primary-fixed-dim text-sm font-black hover:text-blue-700 transition-colors uppercase tracking-widest">View All Logs</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low/30 text-[10px] font-black uppercase tracking-[0.2em] text-outline">
                <th className="px-8 py-5">Action</th>
                <th className="px-8 py-5">Subject</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5 text-right">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              {recentLogs.map((log, i) => (
                <tr key={i} className="hover:bg-surface-container-low/20 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <log.icon className={cn("w-4 h-4", log.iconColor)} />
                      <span className="text-sm font-bold text-[#313030] group-hover:text-primary-fixed-dim transition-colors">{log.action}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-sm text-on-surface-variant font-medium">{log.subject}</td>
                  <td className="px-8 py-5">
                    <span className={cn(
                      "px-3 py-1 text-[10px] font-black rounded-lg uppercase tracking-wider",
                      log.status === 'Completed' ? "bg-emerald-500/10 text-emerald-600" :
                      log.status === 'Processing' ? "bg-primary/10 text-primary-fixed-dim" :
                      "bg-rose-500/10 text-rose-600"
                    )}>
                      {log.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right text-xs text-outline font-black uppercase tracking-tighter opacity-70">
                    {log.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-[#0052CC] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group">
        <Plus className="w-7 h-7 group-hover:rotate-90 transition-transform duration-300" />
      </button>
    </div>
  )
}
