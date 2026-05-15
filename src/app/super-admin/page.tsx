'use client';

import { useState } from 'react';

interface DashboardStats {
  totalFunds: number;
  studentsFunded: number;
  pendingVerifications: number;
  activeAdmins: number;
  adminActionsThisMonth: number;
}

export default function SuperAdminDashboard() {
  const [stats] = useState<DashboardStats>({
    totalFunds: 42500000,
    studentsFunded: 1240,
    pendingVerifications: 24,
    activeAdmins: 4,
    adminActionsThisMonth: 187,
  });

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-6">
        <span>Super Admin</span>
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        <span className="text-amber-400">Overview</span>
      </nav>

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight mb-1">Command Center</h1>
          <p className="text-slate-400 text-sm">Complete system oversight and admin performance monitoring.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-slate-900 text-slate-300 border border-slate-700 px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined text-lg">calendar_today</span>
            Last 30 Days
          </button>
          <button className="bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-amber-500 transition-colors">
            <span className="material-symbols-outlined text-lg">download</span>
            Export Report
          </button>
        </div>
      </div>

      {/* Top Row Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        {/* Metric 1: Funds */}
        <div className="bg-slate-900 p-6 rounded-xl shadow-lg border border-slate-800 hover:border-teal-500/30 transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-teal-500/10 text-teal-400 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <span className="text-xs font-bold text-teal-400 flex items-center gap-1 bg-teal-500/10 px-2 py-1 rounded-full">
              +12.5% <span className="material-symbols-outlined text-xs">trending_up</span>
            </span>
          </div>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Total Funds</p>
          <h3 className="text-2xl font-black text-white tracking-tight">₦{stats.totalFunds.toLocaleString()}</h3>
        </div>

        {/* Metric 2: Students */}
        <div className="bg-slate-900 p-6 rounded-xl shadow-lg border border-slate-800 hover:border-indigo-500/30 transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-indigo-500/10 text-indigo-400 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined">school</span>
            </div>
            <span className="text-xs font-bold text-teal-400 flex items-center gap-1 bg-teal-500/10 px-2 py-1 rounded-full">
              +8.2%
            </span>
          </div>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Students Funded</p>
          <h3 className="text-2xl font-black text-white tracking-tight">{stats.studentsFunded}</h3>
        </div>

        {/* Metric 3: Verifications */}
        <div className="bg-slate-900 p-6 rounded-xl shadow-lg border-2 border-amber-500/20 relative overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-amber-500/10 text-amber-500 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined">verified_user</span>
            </div>
            <span className="bg-amber-500 text-slate-950 text-[10px] font-black px-2 py-1 rounded uppercase animate-pulse">Urgent</span>
          </div>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Pending</p>
          <h3 className="text-2xl font-black text-white tracking-tight">{stats.pendingVerifications}</h3>
        </div>

        {/* Metric 4: Active Admins */}
        <div className="bg-gradient-to-br from-amber-900/30 to-slate-900 p-6 rounded-xl shadow-lg border border-amber-500/20">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-amber-500/10 text-amber-400 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined">admin_panel_settings</span>
            </div>
          </div>
          <p className="text-amber-200/50 text-xs font-bold uppercase tracking-wider mb-1">Active Admins</p>
          <h3 className="text-2xl font-black text-white tracking-tight">{stats.activeAdmins}</h3>
          <p className="text-xs text-amber-400/60 mt-2 font-medium">All operational</p>
        </div>

        {/* Metric 5: Admin Actions */}
        <div className="bg-gradient-to-br from-indigo-900/40 to-slate-900 p-6 rounded-xl shadow-lg border border-indigo-500/20">
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 bg-white/10 text-indigo-400 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined">bolt</span>
            </div>
          </div>
          <p className="text-indigo-200/50 text-xs font-bold uppercase tracking-wider mb-1">Admin Actions</p>
          <h3 className="text-2xl font-black text-white tracking-tight">{stats.adminActionsThisMonth}</h3>
          <p className="text-xs text-indigo-400/60 mt-2 font-medium">This month</p>
        </div>
      </div>

      {/* Admin Activity & Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Growth Chart */}
        <div className="lg:col-span-2 bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <h4 className="text-lg font-bold text-white">Platform Growth</h4>
              <p className="text-sm text-slate-400">Students vs. Sponsors enrollment trend</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-teal-500" />
                <span className="text-xs font-semibold text-slate-400">Students</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-indigo-500" />
                <span className="text-xs font-semibold text-slate-400">Sponsors</span>
              </div>
            </div>
          </div>

          <div className="relative h-64 w-full flex items-end gap-1">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <div key={i} className="w-full border-t border-slate-800/50" />
              ))}
            </div>

            {[40, 55, 70, 60, 85, 95, 80].map((height, i) => (
              <div key={i} className="flex-1 h-full relative group">
                <div className="absolute bottom-0 w-full bg-indigo-500/20 rounded-t-sm transition-all group-hover:bg-indigo-500/30" style={{ height: `${height}%` }} />
                <div className="absolute bottom-0 left-1/4 w-1/2 bg-teal-500 rounded-t-sm shadow-[0_0_10px_rgba(20,184,166,0.3)]" style={{ height: `${height - 15}%` }} />
              </div>
            ))}

            <div className="absolute -bottom-6 w-full flex justify-between text-[10px] font-bold text-slate-500 px-2">
              <span>WK 1</span><span>WK 2</span><span>WK 3</span><span>WK 4</span>
            </div>
          </div>
        </div>

        {/* Admin Performance */}
        <div className="bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-800">
          <div className="mb-8">
            <h4 className="text-lg font-bold text-white">Admin Performance</h4>
            <p className="text-sm text-slate-400">Actions by admin (30 days)</p>
          </div>

          <div className="space-y-6">
            {[
              { name: 'Admin Alpha', actions: 67, width: '70%', color: 'bg-amber-500' },
              { name: 'Admin Beta', actions: 52, width: '55%', color: 'bg-teal-500' },
              { name: 'Admin Gamma', actions: 41, width: '43%', color: 'bg-indigo-500' },
              { name: 'Admin Delta', actions: 27, width: '28%', color: 'bg-rose-500' },
            ].map((admin, i) => (
              <div key={i}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-slate-300">{admin.name}</span>
                  <span className="text-xs font-bold text-slate-400">{admin.actions} actions</span>
                </div>
                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                  <div className={`${admin.color} h-full rounded-full`} style={{ width: admin.width }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent System Logs */}
      <div className="mt-8 bg-slate-900 rounded-2xl shadow-lg border border-slate-800 overflow-hidden">
        <div className="px-6 md:px-8 py-6 border-b border-slate-800 flex justify-between items-center">
          <h4 className="text-lg font-bold text-white">System Activity Logs</h4>
          <button className="text-amber-400 text-sm font-bold hover:underline">View All Logs</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-950/50 text-[10px] font-black uppercase tracking-widest text-slate-500">
                <th className="px-6 md:px-8 py-4">Action</th>
                <th className="px-6 md:px-8 py-4">Subject</th>
                <th className="px-6 md:px-8 py-4">Admin</th>
                <th className="px-6 md:px-8 py-4">Status</th>
                <th className="px-6 md:px-8 py-4 text-right">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="px-6 md:px-8 py-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-sm text-amber-400">person_add</span>
                    <span className="text-sm font-semibold text-white">Admin Created</span>
                  </div>
                </td>
                <td className="px-6 md:px-8 py-4 text-sm text-slate-400">New Admin Account</td>
                <td className="px-6 md:px-8 py-4 text-sm text-amber-400 font-medium">Super Admin</td>
                <td className="px-6 md:px-8 py-4">
                  <span className="px-2 py-1 bg-teal-500/10 text-teal-400 text-[10px] font-bold rounded uppercase">Completed</span>
                </td>
                <td className="px-6 md:px-8 py-4 text-right text-xs text-slate-500 font-medium">5 mins ago</td>
              </tr>
              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="px-6 md:px-8 py-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-sm text-teal-400">verified</span>
                    <span className="text-sm font-semibold text-white">Student Verification</span>
                  </div>
                </td>
                <td className="px-6 md:px-8 py-4 text-sm text-slate-400">Adeola Johnson (ID: #4492)</td>
                <td className="px-6 md:px-8 py-4 text-sm text-slate-400 font-medium">Admin Alpha</td>
                <td className="px-6 md:px-8 py-4">
                  <span className="px-2 py-1 bg-teal-500/10 text-teal-400 text-[10px] font-bold rounded uppercase">Completed</span>
                </td>
                <td className="px-6 md:px-8 py-4 text-right text-xs text-slate-500 font-medium">12 mins ago</td>
              </tr>
              <tr className="hover:bg-slate-800/30 transition-colors">
                <td className="px-6 md:px-8 py-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-sm text-indigo-400">payments</span>
                    <span className="text-sm font-semibold text-white">Payment Disbursement</span>
                  </div>
                </td>
                <td className="px-6 md:px-8 py-4 text-sm text-slate-400">Lagos State University (Tuition)</td>
                <td className="px-6 md:px-8 py-4 text-sm text-slate-400 font-medium">Admin Beta</td>
                <td className="px-6 md:px-8 py-4">
                  <span className="px-2 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold rounded uppercase">Processing</span>
                </td>
                <td className="px-6 md:px-8 py-4 text-right text-xs text-slate-500 font-medium">28 mins ago</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
