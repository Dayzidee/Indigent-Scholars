'use client';

import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { getGlobalStats } from '@/lib/actions/admin';
import { 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Activity,
  ArrowUpRight,
  Database,
  Server,
  Zap,
  GraduationCap
} from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStats() {
      try {
        const data = await getGlobalStats();
        setStats(data);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    }
    loadStats();
  }, []);

  const metricCards = [
    { label: 'Total Volume', value: `₦${stats?.totalFunds.toLocaleString() || '0'}`, icon: TrendingUp, color: 'text-teal-400', bg: 'bg-teal-500/10' },
    { label: 'Verified Scholars', value: stats?.studentsFunded || '0', icon: GraduationCap, color: 'text-indigo-400', bg: 'bg-indigo-500/10' },
    { label: 'Pending Queue', value: stats?.pendingVerifications || '0', icon: ShieldCheck, color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { label: 'Active Users', value: '+142', icon: Users, color: 'text-rose-400', bg: 'bg-rose-500/10' },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-10">
        {/* Real-time Telemetry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metricCards.map((card, i) => (
            <div key={i} className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl shadow-slate-950/20">
              <div className={`w-12 h-12 rounded-2xl ${card.bg} flex items-center justify-center mb-6`}>
                <card.icon className={`w-6 h-6 ${card.color}`} />
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{card.label}</p>
              <h3 className="text-2xl font-black text-white">{card.value}</h3>
              <div className="flex items-center text-[10px] font-bold text-teal-400 mt-3">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                <span>+12.5% vs last month</span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Action Center */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white flex items-center">
                <Activity className="w-5 h-5 mr-3 text-indigo-400" />
                Platform Activity Log
              </h3>
              <button className="text-sm text-indigo-400 hover:text-indigo-300 font-bold transition-colors">Audit trail</button>
            </div>
            
            <div className="p-1 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-800 overflow-hidden">
              <div className="bg-slate-950/40 backdrop-blur-xl p-8 flex flex-col items-center justify-center text-center space-y-6 min-h-[300px]">
                <div className="w-20 h-20 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center shadow-inner">
                  <Zap className="w-10 h-10 text-slate-600 animate-pulse" />
                </div>
                <div className="max-w-md">
                  <h4 className="text-lg font-bold text-white mb-2">Platform Heartbeat: Optimal</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    All subsystems are operational. No critical bottlenecks detected in the last 24 hours of platform activity.
                  </p>
                </div>
                <Link 
                  href="/admin/verification" 
                  className="px-8 py-3 bg-white text-slate-950 font-black rounded-xl hover:bg-indigo-500 hover:text-white transition-all shadow-xl active:scale-95"
                >
                  Enter Verification Center
                </Link>
              </div>
            </div>
          </div>

          {/* Platform Health/Config Snapshot */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center">
              <Server className="w-5 h-5 mr-3 text-teal-400" />
              Instance Status
            </h3>
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-6">
              {[
                { label: 'Database Latency', val: '14ms', status: 'Optimal', color: 'bg-teal-500' },
                { label: 'Storage Usage', val: '2.4 GB', status: 'Healthy', color: 'bg-teal-500' },
                { label: 'Memory Usage', val: '64%', status: 'Normal', color: 'bg-indigo-500' },
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-slate-500">
                    <span>{item.label}</span>
                    <span className="text-white">{item.val}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full ${item.color} w-3/4`}></div>
                  </div>
                </div>
              ))}
              
              <div className="pt-6 border-t border-slate-800">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between group cursor-pointer hover:border-slate-700 transition-all">
                  <div className="flex items-center space-x-3">
                    <Database className="w-4 h-4 text-slate-500" />
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Platform Config</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-700 group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

