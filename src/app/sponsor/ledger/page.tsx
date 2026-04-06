'use client';

import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { getSponsorMatches } from '@/lib/actions/sponsorships';
import { 
  Wallet, 
  History, 
  ArrowUpRight, 
  ExternalLink, 
  Filter,
  Download,
  AlertCircle
} from 'lucide-react';

export default function SponsorLedger() {
  const [matches, setMatches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLedger() {
      try {
        const data = await getSponsorMatches();
        setMatches(data || []);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    }
    loadLedger();
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-10">
        {/* Ledger Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 p-8 rounded-3xl bg-slate-900 border border-slate-800 flex items-center space-x-6">
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
              <Wallet className="w-8 h-8 text-indigo-400" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Total Pledged</p>
              <h2 className="text-3xl font-black text-white">₦{matches.reduce((acc, curr) => acc + Number(curr.amount), 0).toLocaleString()}</h2>
            </div>
          </div>
          
          <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 flex flex-col justify-center">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Active Pledges</p>
            <p className="text-2xl font-bold text-white">{matches.length}</p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 flex flex-col justify-center">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Platform Fees</p>
            <p className="text-2xl font-bold text-teal-400">0.0%</p>
          </div>
        </div>

        {/* Transaction Table */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white flex items-center">
              <History className="w-5 h-5 mr-3 text-indigo-400" />
              Transaction History
            </h3>
            <div className="flex space-x-3">
              <button className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors">
                <Download className="w-4 h-4" />
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white transition-colors text-sm font-bold">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>
          </div>
          
          <div className="rounded-3xl border border-slate-800 bg-slate-900/20 overflow-hidden backdrop-blur-xl shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/40">
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Scholar</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Institution</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Amount</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-widest text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {matches.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-20 text-center">
                      <div className="flex flex-col items-center justify-center space-y-4">
                        <AlertCircle className="w-10 h-10 text-slate-700" />
                        <p className="text-slate-500 italic">No transactions found in this ledger.</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  matches.map((match, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="px-6 py-5">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                            <span className="text-[10px] font-black text-indigo-400">SCH</span>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors uppercase tracking-tight">
                              {match.student_applications?.profiles?.full_name || 'Anonymous Scholar'}
                            </p>
                            <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest mt-0.5">Application ID: {match.student_app_id.slice(0, 8)}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <p className="text-sm font-medium text-slate-400">
                          {match.student_applications?.school_info?.university || 'University of Lagos'}
                        </p>
                      </td>
                      <td className="px-6 py-5">
                        <p className="text-sm font-black text-white">₦{Number(match.amount).toLocaleString()}</p>
                      </td>
                      <td className="px-6 py-5">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${
                          match.status === 'fulfilled' 
                            ? 'bg-teal-500/10 text-teal-400 border-teal-500/20' 
                            : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                        }`}>
                          {match.status}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700 text-slate-400 hover:text-white transition-all shadow-lg">
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
