'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';

import { toast } from 'sonner';

export default function AdminSettings() {
  const handleSave = () => {
    toast.success('Platform configurations updated');
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-10">
        <header>
          <h2 className="text-3xl font-bold text-white mb-2">Platform Governance</h2>
          <p className="text-slate-500 font-medium tracking-wide flex items-center">
            <span className="material-symbols-outlined text-[18px] mr-2 text-indigo-400">shield</span>
            Global system architecture and security configurations.
          </p>

        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Verification Engine */}
          <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center mb-6">
              <span className="material-symbols-outlined mr-3 text-teal-400">sync</span>
              Verification Engine
            </h3>

            
            <div className="space-y-6">
              {[
                { label: 'Auto-verify institutional emails', enabled: true },
                { label: 'Manual review required (Sponsors)', enabled: true },
                { label: 'Enable background vetting API', enabled: false },
              ].map((cfg, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-300">{cfg.label}</span>
                  <div className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${cfg.enabled ? 'bg-teal-500' : 'bg-slate-800'}`}>
                    <div className={`w-4 h-4 rounded-full bg-zinc-900 transition-transform ${cfg.enabled ? 'translate-x-6' : 'translate-x-0'}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Funding Logic */}
          <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center mb-6">
              <span className="material-symbols-outlined mr-3 text-indigo-400">database</span>
              Funding Thresholds
            </h3>

            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Max Student Funding (₦)</label>
                <input 
                  type="text" 
                  defaultValue="2,500,000"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white font-medium focus:border-indigo-500/50 outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Institutional Platform Fee (%)</label>
                <input 
                  type="text" 
                  defaultValue="0.0"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white font-medium focus:border-indigo-500/50 outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* System Keys / Security */}
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
          <h3 className="text-lg font-bold text-white flex items-center mb-4">
            <span className="material-symbols-outlined mr-3 text-rose-400">vpn_key</span>
            Platform Credentials & Integrations
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between group cursor-pointer hover:border-slate-700 transition-all">
              <div className="flex items-center space-x-3">
                <span className="material-symbols-outlined text-[18px] text-slate-500">dns</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Paystack API Status</span>
              </div>

              <span className="text-[10px] font-black uppercase tracking-widest text-teal-400">Connected</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between group cursor-pointer hover:border-slate-700 transition-all">
              <div className="flex items-center space-x-3">
                <span className="material-symbols-outlined text-[18px] text-slate-500">notifications</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Gateway Status</span>
              </div>

              <span className="text-[10px] font-black uppercase tracking-widest text-teal-400">Active</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 pb-12">
          <button className="flex items-center space-x-2 text-slate-500 hover:text-rose-500 font-bold transition-colors text-sm">
            <span className="material-symbols-outlined text-[18px]">lock</span>
            <span>Enable Maintenance Mode</span>
          </button>

          <button 
            onClick={handleSave}
            className="flex items-center space-x-3 px-8 py-4 bg-indigo-500 hover:bg-indigo-400 text-white font-bold rounded-2xl transition-all shadow-xl shadow-indigo-500/20 active:scale-95"
          >
            <span className="material-symbols-outlined text-[20px]">save</span>
            <span>Apply Global Settings</span>
          </button>

        </div>
      </div>
    </DashboardLayout>
  );
}
