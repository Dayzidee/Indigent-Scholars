'use client';

import { useState } from 'react';

interface Transaction {
  id: string;
  type: 'incoming' | 'outgoing';
  amount: number;
  description: string;
  status: 'completed' | 'pending';
}

export default function SuperAdminFinancials() {
  const [transactions] = useState<Transaction[]>([
    { id: 'txn_1092', type: 'incoming', amount: 5000000, description: 'Sponsorship - TechCorp Africa', status: 'completed' },
    { id: 'txn_1093', type: 'outgoing', amount: 150000, description: 'Tuition - Adeola Johnson', status: 'completed' },
    { id: 'txn_1094', type: 'incoming', amount: 250000, description: 'Donation - Anonymous', status: 'completed' },
    { id: 'txn_1095', type: 'outgoing', amount: 200000, description: 'Accommodation - Ibrahim Musa', status: 'pending' },
  ]);

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-6">
        <span>Super Admin</span>
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        <span className="text-amber-400">Financial Ledger</span>
      </nav>

      <header className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <h1 className="text-3xl font-black text-white mb-2 tracking-tight">Financial Command Ledger</h1>
          <p className="text-slate-500 font-medium flex items-center">
            <span className="material-symbols-outlined text-[18px] mr-2 text-teal-400">account_balance</span>
            Monitor all funds and disbursements.
          </p>
        </div>
        <button className="px-4 py-3 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-xl transition-colors shadow-lg flex items-center">
          <span className="material-symbols-outlined mr-2">download</span>Export Ledger
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Total Inflow</p>
          <h3 className="text-2xl font-black text-teal-400">₦12,450,000</h3>
        </div>
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Total Outflow</p>
          <h3 className="text-2xl font-black text-rose-400">₦4,200,000</h3>
        </div>
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Treasury Balance</p>
          <h3 className="text-2xl font-black text-white">₦38,300,000</h3>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/20 shadow-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-900/40">
              <th className="px-8 py-5 text-xs font-black text-slate-500 uppercase tracking-widest">ID</th>
              <th className="px-8 py-5 text-xs font-black text-slate-500 uppercase tracking-widest">Type</th>
              <th className="px-8 py-5 text-xs font-black text-slate-500 uppercase tracking-widest">Description</th>
              <th className="px-8 py-5 text-xs font-black text-slate-500 uppercase tracking-widest">Amount</th>
              <th className="px-8 py-5 text-xs font-black text-slate-500 uppercase tracking-widest">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {transactions.map((txn) => (
              <tr key={txn.id} className="hover:bg-white/[0.02] transition-colors">
                <td className="px-8 py-6 text-sm font-bold text-slate-400">{txn.id}</td>
                <td className="px-8 py-6">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest ${txn.type === 'incoming' ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'}`}>
                    {txn.type === 'incoming' ? 'Inflow' : 'Outflow'}
                  </span>
                </td>
                <td className="px-8 py-6 text-sm text-slate-300 font-medium">{txn.description}</td>
                <td className={`px-8 py-6 text-sm font-bold ${txn.type === 'incoming' ? 'text-teal-400' : 'text-rose-400'}`}>
                  {txn.type === 'incoming' ? '+' : '-'}₦{txn.amount.toLocaleString()}
                </td>
                <td className="px-8 py-6">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest ${txn.status === 'completed' ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' : 'bg-amber-500/10 text-amber-500 border border-amber-500/20'}`}>
                    {txn.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
