'use client';

import { useState } from 'react';
import { toast } from 'sonner';

interface PendingApplication {
  id: string;
  status: string;
  school_info?: {
    university?: string;
  };
  profiles: {
    full_name: string;
    email: string;
  };
}

export default function SuperAdminVerification() {
  const [pendingApps, setPendingApps] = useState<PendingApplication[]>([
    {
      id: 'app_1',
      status: 'pending',
      school_info: { university: 'University of Lagos' },
      profiles: { full_name: 'Adeola Johnson', email: 'adeola@example.com' }
    },
    {
      id: 'app_2',
      status: 'pending',
      school_info: { university: 'Obafemi Awolowo University' },
      profiles: { full_name: 'Ibrahim Musa', email: 'ibrahim@example.com' }
    },
    {
      id: 'app_3',
      status: 'pending',
      school_info: { university: 'Ahmadu Bello University' },
      profiles: { full_name: 'Ngozi Eze', email: 'ngozi@example.com' }
    }
  ]);

  const handleAction = async (appId: string, status: 'verified' | 'rejected' | 'requested_changes') => {
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      toast.success(`Application ${status} successfully`);
      setPendingApps(prev => prev.filter(app => app.id !== appId));
    } catch (e) {
      toast.error('Operation failed');
      console.error(e);
    }
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-6">
        <span>Super Admin</span>
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        <span className="text-amber-400">Verification Center</span>
      </nav>

      <header className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <h1 className="text-3xl font-black text-white mb-2 tracking-tight">Verification Center</h1>
          <p className="text-slate-500 font-medium tracking-wide flex items-center">
            <span className="material-symbols-outlined text-[18px] mr-2 text-teal-400">verified_user</span>
            {pendingApps.length} applications awaiting review.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[18px] text-slate-500">search</span>
            <input 
              type="text" 
              placeholder="Search candidates..." 
              className="pl-12 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-amber-500/50 w-64 transition-all"
            />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-6">
        {pendingApps.length === 0 ? (
          <div className="rounded-3xl border border-slate-800 bg-slate-900/20 p-20 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full bg-slate-800/50 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-4xl text-teal-600">check_circle</span>
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Queue is Empty</h4>
            <p className="text-slate-500">Great work! All pending applications have been processed.</p>
          </div>
        ) : (
          pendingApps.map((app, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="flex flex-col md:flex-row md:items-center gap-6 flex-1">
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 shadow-lg">
                  <span className="material-symbols-outlined text-3xl text-indigo-400">person</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <h4 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{app.profiles.full_name}</h4>
                    <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest bg-slate-950 text-slate-500 border border-slate-800">Student</span>
                  </div>
                  <div className="flex items-wrap gap-4 text-xs font-bold uppercase tracking-widest text-zinc-400">
                    <span className="flex items-center"><span className="material-symbols-outlined text-[16px] mr-1.5">corporate_fare</span>{app.school_info?.university || 'University of Lagos'}</span>
                    <span className="flex items-center"><span className="material-symbols-outlined text-[16px] mr-1.5">school</span>Mech. Eng.</span>
                    <span className="flex items-center"><span className="material-symbols-outlined text-[16px] mr-1.5">schedule</span>Applied 2 days ago</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 px-5 py-3 bg-slate-950 border border-slate-800 text-slate-400 hover:text-white rounded-xl transition-all text-sm font-bold group/btn">
                  <span className="material-symbols-outlined text-[18px] group-hover/btn:scale-110 transition-transform">open_in_new</span>
                  <span>View Documents</span>
                </button>
                <div className="h-8 w-[1px] bg-slate-800 mx-2 hidden lg:block"></div>
                <button 
                  onClick={() => handleAction(app.id, 'rejected')}
                  className="p-3 text-rose-500 hover:bg-rose-500/10 rounded-xl transition-all border border-transparent hover:border-rose-500/20"
                >
                  <span className="material-symbols-outlined text-[24px]">cancel</span>
                </button>
                <button 
                  onClick={() => handleAction(app.id, 'verified')}
                  className="p-3 text-teal-400 hover:bg-teal-400/10 rounded-xl transition-all border border-transparent hover:border-teal-400/20"
                >
                  <span className="material-symbols-outlined text-[24px]">check_circle</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
