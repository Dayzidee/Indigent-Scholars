'use client';

import { useState, useMemo } from 'react';
import { useAdminRole } from '@/components/admin/AdminRoleContext';

interface UserProfile {
  id: string;
  role: string;
  full_name: string | null;
  email: string | null;
}

export default function AdminUsers() {
  const { role: currentRole } = useAdminRole();

  const allProfiles = useMemo(() => [
    { id: 'usr_4d5e6f', role: 'student', full_name: 'Adeola Johnson', email: 'adeola.j@student.edu.ng' },
    { id: 'usr_7g8h9i', role: 'sponsor', full_name: 'TechCorp Africa', email: 'csr@techcorp.com' },
    { id: 'usr_0j1k2l', role: 'student', full_name: 'Ibrahim Musa', email: 'ibrahim.m@uni.edu.ng' },
    { id: 'usr_3m4n5o', role: 'student', full_name: 'Ngozi Eze', email: 'ngozi.eze@scholar.edu.ng' },
    { id: 'usr_8p9q0r', role: 'super_admin', full_name: 'Super Admin', email: 'super@scholar.edu.ng' },
    { id: 'usr_1s2t3u', role: 'admin', full_name: 'Regular Admin', email: 'regular_admin@scholar.edu.ng' },
  ], []);

  const profiles = useMemo(() => {
    return allProfiles.filter(p => currentRole === 'super_admin' || (p.role !== 'admin' && p.role !== 'super_admin'));
  }, [allProfiles, currentRole]);

  const getRoleBadge = (role: string) => {
    switch(role) {
      case 'super_admin': return <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest bg-amber-500/10 text-amber-500 border border-amber-500/20">Super Admin</span>;
      case 'admin': return <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest bg-rose-500/10 text-rose-500 border border-rose-500/20">Admin</span>;
      case 'sponsor': return <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">Sponsor</span>;
      case 'student': return <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest bg-teal-500/10 text-teal-500 border border-teal-500/20">Scholar</span>;
      default: return <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest bg-slate-800 text-slate-500">Unassigned</span>;
    }
  };

  return (
    <div className="space-y-10">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Platform Registry</h2>
            <p className="text-slate-500 font-medium tracking-wide flex items-center">
              <span className="material-symbols-outlined text-[18px] mr-2 text-indigo-400">person_check</span>
              Manage and monitor all platform participants.
            </p>

          </div>
          <div className="flex gap-4">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[18px] text-slate-500">search</span>

              <input 
                type="text" 
                placeholder="Search name, email, or ID..." 
                className="pl-12 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500/50 w-80 transition-all font-medium"
              />
            </div>
            <button className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[18px]">filter_list</span>

            </button>
          </div>
        </header>

        {/* User CRM Table */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/20 shadow-2xl overflow-hidden backdrop-blur-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/40">
                <th className="px-8 py-5 text-xs font-black text-slate-500 uppercase tracking-widest">Participant</th>
                <th className="px-8 py-5 text-xs font-black text-slate-500 uppercase tracking-widest">Authorization</th>
                <th className="px-8 py-5 text-xs font-black text-slate-500 uppercase tracking-widest">Contact</th>
                <th className="px-8 py-5 text-xs font-black text-slate-500 uppercase tracking-widest">Joined</th>
                <th className="px-8 py-5 text-xs font-black text-slate-500 uppercase tracking-widest text-right">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {profiles.length === 0 ? (
                <tr><td colSpan={5} className="px-8 py-20 text-center italic text-slate-500">No users found in the system.</td></tr>
              ) : (
                profiles.map((user, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-500 shadow-inner group-hover:border-indigo-500/50 transition-colors">
                          {user.role === 'student' ? <span className="material-symbols-outlined text-[20px]">school</span> : 
                           user.role === 'sponsor' ? <span className="material-symbols-outlined text-[20px]">corporate_fare</span> : 
                           <span className="material-symbols-outlined text-[20px]">shield</span>}
                        </div>

                        <div>
                          <p className="text-sm font-bold text-white uppercase tracking-tight group-hover:text-indigo-400 transition-colors">{user.full_name || 'Anonymous User'}</p>
                          <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-0.5">UID: {user.id.slice(0, 8)}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      {getRoleBadge(user.role)}
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-col space-y-1">
                        <span className="text-xs font-medium text-slate-400 flex items-center"><span className="material-symbols-outlined text-[14px] mr-1.5 opacity-50">mail</span>{user.email}</span>

                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Oct 2023</p>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700 text-slate-400 hover:text-white transition-all shadow-lg group/more">
                        <span className="material-symbols-outlined text-[18px] group-hover/more:translate-x-0.5 transition-transform">chevron_right</span>

                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
      </div>
    </div>
  );
}
