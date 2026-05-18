'use client';

import { useState } from 'react';
import { useAdminRole } from '@/components/admin/AdminRoleContext';

interface DashboardStats {
  totalFunds: number;
  studentsFunded: number;
  pendingVerifications: number;
}

export default function AdminDashboard() {
  // Use static demo data to prevent latency
  const [stats] = useState<DashboardStats>({
    totalFunds: 42500000,
    studentsFunded: 1240,
    pendingVerifications: 24,
  });
  const { role } = useAdminRole();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-6">
        <span>Admin</span>
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        <span className="text-teal-400">Overview</span>
      </nav>

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight mb-1">Global Overview</h1>
          <p className="text-slate-400 text-sm">Real-time performance and scholarship health monitoring.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-slate-900 text-slate-300 border border-slate-700 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined text-lg">calendar_today</span>
            Last 30 Days
          </button>
          <button className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-teal-500 transition-colors">
            <span className="material-symbols-outlined text-lg">download</span>
            Export Report
          </button>
        </div>
      </div>

      {/* Top Row Metrics: Bento Grid Layout */}
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${role === 'super_admin' ? '4' : '2'} gap-6 mb-8`}>
        {/* Metric 1: Funds */}
        {role === 'super_admin' && (
          <div className="bg-slate-900 p-6 rounded-xl shadow-lg border border-slate-800 hover:border-teal-500/30 transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-teal-500/10 text-teal-400 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined">payments</span>
              </div>
              <span className="text-xs font-bold text-teal-400 flex items-center gap-1 bg-teal-500/10 px-2 py-1 rounded-full">
                +12.5% <span className="material-symbols-outlined text-xs">trending_up</span>
              </span>
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Total Funds Raised</p>
            <h3 className="text-2xl font-black text-white tracking-tight">₦{(stats?.totalFunds || 42500000).toLocaleString()}</h3>
            <div className="mt-4 w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-teal-500 h-full w-3/4 rounded-full"></div>
            </div>
          </div>
        )}

        {/* Metric 2: Students */}
        <div className="bg-slate-900 p-6 rounded-xl shadow-lg border border-slate-800 hover:border-indigo-500/30 transition-all group">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-indigo-500/10 text-indigo-400 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined">school</span>
            </div>
            <span className="text-xs font-bold text-teal-400 flex items-center gap-1 bg-teal-500/10 px-2 py-1 rounded-full">
              +8.2% <span className="material-symbols-outlined text-xs">trending_up</span>
            </span>
          </div>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Total Students Funded</p>
          <h3 className="text-2xl font-black text-white tracking-tight">{stats?.studentsFunded || 1240}</h3>
          <div className="mt-4 flex -space-x-2">
            <div className="w-7 h-7 rounded-full bg-slate-700 border-2 border-slate-900"></div>
            <div className="w-7 h-7 rounded-full bg-slate-600 border-2 border-slate-900"></div>
            <div className="w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-900"></div>
            <div className="w-7 h-7 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold text-white">+20</div>
          </div>
        </div>

        {/* Metric 3: Verifications (Critical State) */}
        <div className="bg-slate-900 p-6 rounded-xl shadow-lg border-2 border-amber-500/20 relative overflow-hidden group">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-amber-500/10 text-amber-500 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined">verified_user</span>
            </div>
            <span className="bg-amber-500 text-slate-950 text-[10px] font-black px-2 py-1 rounded uppercase animate-pulse">Urgent</span>
          </div>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Pending Verifications</p>
          <div className="flex items-baseline gap-3">
            <h3 className="text-2xl font-black text-white tracking-tight">{stats?.pendingVerifications || 24}</h3>
            <span className="text-amber-500 text-xs font-bold">Needs Action</span>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform">
            <span className="material-symbols-outlined text-8xl text-amber-500">warning</span>
          </div>
        </div>

        {/* Metric 4: Success Rate */}
        {role === 'super_admin' && (
          <div className="bg-gradient-to-br from-indigo-900/40 to-slate-900 p-6 rounded-xl shadow-lg border border-indigo-500/20 text-white">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-white/10 text-teal-400 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined">bolt</span>
              </div>
            </div>
            <p className="text-indigo-200/70 text-xs font-bold uppercase tracking-wider mb-1">Paystack Success Rate</p>
            <h3 className="text-2xl font-black text-white tracking-tight">98.2%</h3>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex-1 bg-white/10 h-1 rounded-full overflow-hidden">
                <div className="bg-teal-400 h-full w-[98%]"></div>
              </div>
              <span className="text-[10px] font-bold text-teal-400">Stable</span>
            </div>
          </div>
        )}
      </div>

      {/* Charts Section */}
      <div className={`grid grid-cols-1 ${role === 'super_admin' ? 'lg:grid-cols-3' : 'lg:grid-cols-1'} gap-8`}>
        {/* User Signups: Line Graph Area */}
        <div className={`${role === 'super_admin' ? 'lg:col-span-2' : ''} bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-800`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <h4 className="text-lg font-bold text-white">User Acquisition Growth</h4>
              <p className="text-sm text-slate-400">Students vs. Sponsors enrollment trend</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-teal-500"></span>
                <span className="text-xs font-semibold text-slate-400">Students</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
                <span className="text-xs font-semibold text-slate-400">Sponsors</span>
              </div>
            </div>
          </div>

          {/* Mock Line Chart Visualization */}
          <div className="relative h-64 w-full flex items-end gap-1">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div key={i} className="w-full border-t border-slate-800/50"></div>
              ))}
            </div>

            {[40, 55, 70, 60, 85, 95, 80].map((height, i) => (
              <div key={i} className="flex-1 h-full relative group">
                <div className="absolute bottom-0 w-full bg-indigo-500/20 rounded-t-sm transition-all group-hover:bg-indigo-500/30" style={{ height: `${height}%` }}></div>
                <div className="absolute bottom-0 left-1/4 w-1/2 bg-teal-500 rounded-t-sm shadow-[0_0_10px_rgba(20,184,166,0.3)]" style={{ height: `${height - 15}%` }}></div>
              </div>
            ))}

            {/* Axis Labels */}
            <div className="absolute -bottom-6 w-full flex justify-between text-[10px] font-bold text-slate-500 px-2">
              <span>WK 1</span><span>WK 2</span><span>WK 3</span><span>WK 4</span>
            </div>
          </div>
        </div>

        {/* Funding Volume: Bar Chart Area */}
        {role === 'super_admin' && (
          <div className="bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-800">
            <div className="mb-8">
              <h4 className="text-lg font-bold text-white">Funding Volume</h4>
              <p className="text-sm text-slate-400">Last 30 days distribution</p>
            </div>

            <div className="space-y-6">
              {[
                { label: 'Tuition Fees', value: '₦28.4M', width: '65%', color: 'bg-teal-500' },
                { label: 'Learning Materials', value: '₦8.2M', width: '35%', color: 'bg-indigo-500' },
                { label: 'Accommodation', value: '₦4.1M', width: '20%', color: 'bg-amber-500' },
                { label: 'Research Grants', value: '₦1.8M', width: '10%', color: 'bg-rose-500' },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-slate-300">{item.label}</span>
                    <span className={`text-xs font-bold ${item.color.replace('bg-', 'text-')}`}>{item.value}</span>
                  </div>
                  <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                    <div className={`${item.color} h-full rounded-full`} style={{ width: item.width }}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-teal-500/10 text-teal-400 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-sm">auto_graph</span>
                </div>
                <p className="text-[11px] font-medium leading-tight text-slate-400">
                  Funding volume has increased by <span className="text-teal-400 font-bold">14%</span> compared to the previous month.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Recent Logs (High Density Layout) */}
      <div className="mt-8 bg-slate-900 rounded-2xl shadow-lg border border-slate-800 overflow-hidden">
        <div className="px-6 md:px-8 py-6 border-b border-slate-800 flex justify-between items-center">
          <h4 className="text-lg font-bold text-white">System Activity Logs</h4>
          <button className="text-teal-400 text-sm font-bold hover:underline">View All Logs</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-950/50 text-[10px] font-black uppercase tracking-widest text-slate-500">
                <th className="px-6 md:px-8 py-4">Action</th>
                <th className="px-6 md:px-8 py-4">Subject</th>
                <th className="px-6 md:px-8 py-4">Status</th>
                <th className="px-6 md:px-8 py-4 text-right">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="px-6 md:px-8 py-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-sm text-teal-400">verified</span>
                    <span className="text-sm font-semibold text-white">Student Verification</span>
                  </div>
                </td>
                <td className="px-6 md:px-8 py-4 text-sm text-slate-400">Adeola Johnson (ID: #4492)</td>
                <td className="px-6 md:px-8 py-4">
                  <span className="px-2 py-1 bg-teal-500/10 text-teal-400 text-[10px] font-bold rounded uppercase">Completed</span>
                </td>
                <td className="px-6 md:px-8 py-4 text-right text-xs text-slate-500 font-medium">2 mins ago</td>
              </tr>
              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="px-6 md:px-8 py-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-sm text-indigo-400">payments</span>
                    <span className="text-sm font-semibold text-white">Payment Disbursement</span>
                  </div>
                </td>
                <td className="px-6 md:px-8 py-4 text-sm text-slate-400">Lagos State University (Tuition)</td>
                <td className="px-6 md:px-8 py-4">
                  <span className="px-2 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold rounded uppercase">Processing</span>
                </td>
                <td className="px-6 md:px-8 py-4 text-right text-xs text-slate-500 font-medium">14 mins ago</td>
              </tr>
              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="px-6 md:px-8 py-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-sm text-amber-500">priority_high</span>
                    <span className="text-sm font-semibold text-white">Flagged Account</span>
                  </div>
                </td>
                <td className="px-6 md:px-8 py-4 text-sm text-slate-400">Ibrahim Musa (ID: #1102)</td>
                <td className="px-6 md:px-8 py-4">
                  <span className="px-2 py-1 bg-amber-500/10 text-amber-500 text-[10px] font-bold rounded uppercase">Review Needed</span>
                </td>
                <td className="px-6 md:px-8 py-4 text-right text-xs text-slate-500 font-medium">45 mins ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

