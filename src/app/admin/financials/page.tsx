'use client';

import { useState } from 'react';

interface Transaction {
  id: string;
  type: 'incoming' | 'outgoing';
  amount: number;
  description: string;
  date: string;
  status: 'completed' | 'pending';
}

export default function AdminFinancials() {
  const [transactions] = useState<Transaction[]>([
    { id: 'txn_1092', type: 'incoming', amount: 5000000, description: 'Sponsorship - TechCorp Africa', date: '2023-10-24T10:30:00Z', status: 'completed' },
    { id: 'txn_1093', type: 'outgoing', amount: 150000, description: 'Tuition Disbursement - Adeola Johnson', date: '2023-10-23T14:15:00Z', status: 'completed' },
    { id: 'txn_1094', type: 'incoming', amount: 250000, description: 'Individual Donation - Anonymous', date: '2023-10-22T09:00:00Z', status: 'completed' },
    { id: 'txn_1095', type: 'outgoing', amount: 200000, description: 'Accommodation - Ibrahim Musa', date: '2023-10-21T11:45:00Z', status: 'pending' },
  ]);

  return (
    <div className="space-y-10">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">Financial Ledger</h2>
          <p className="text-slate-500 font-medium tracking-wide flex items-center">
            <span className="material-symbols-outlined text-[18px] mr-2 text-teal-400">account_balance</span>
            Monitor all incoming funds and disbursements.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-3 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-xl transition-colors shadow-lg shadow-teal-500/20 flex items-center">
            <span className="material-symbols-outlined mr-2">download</span>
            Export Ledger
          </button>
        </div>
      </header>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-lg">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Total Inflow (30 Days)</p>
          <h3 className="text-2xl font-black text-teal-400 tracking-tight">₦12,450,000</h3>
        </div>
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-lg">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Total Outflow (30 Days)</p>
          <h3 className="text-2xl font-black text-rose-400 tracking-tight">₦4,200,000</h3>
        </div>
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-lg">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Platform Treasury Balance</p>
          <h3 className="text-2xl font-black text-white tracking-tight">₦38,300,000</h3>
        </div>
      </div>

      {/* Transactions Table */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900/20 shadow-2xl overflow-hidden backdrop-blur-xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-900/40">
              <th className="px-8 py-5 text-xs font-black text-slate-500 uppercase tracking-widest">Transaction ID</th>
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
                  {txn.type === 'incoming' ? (
                    <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest bg-teal-500/10 text-teal-400 border border-teal-500/20">Inflow</span>
                  ) : (
                    <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest bg-rose-500/10 text-rose-400 border border-rose-500/20">Outflow</span>
                  )}
                </td>
                <td className="px-8 py-6 text-sm text-slate-300 font-medium">{txn.description}</td>
                <td className={`px-8 py-6 text-sm font-bold ${txn.type === 'incoming' ? 'text-teal-400' : 'text-rose-400'}`}>
                  {txn.type === 'incoming' ? '+' : '-'}₦{txn.amount.toLocaleString()}
                </td>
                <td className="px-8 py-6">
                  {txn.status === 'completed' ? (
                    <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">Completed</span>
                  ) : (
                    <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest bg-amber-500/10 text-amber-500 border border-amber-500/20">Pending</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
