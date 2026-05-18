'use client';

import { useState, useTransition } from 'react';
import { toast } from 'sonner';

export default function AdminSettings() {
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    
    startTransition(async () => {
      // Simulate API call to update password
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Password updated successfully');
      setFormData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="max-w-3xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Account Settings</h2>
        <p className="text-slate-500 font-medium tracking-wide flex items-center">
          <span className="material-symbols-outlined text-[18px] mr-2 text-teal-400">person</span>
          Manage your profile and security preferences.
        </p>
      </header>

      {/* Security Section */}
      <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
        <h3 className="text-lg font-bold text-white flex items-center mb-6">
          <span className="material-symbols-outlined mr-3 text-teal-400">lock</span>
          Change Password
        </h3>
        
        <form onSubmit={handleSave} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Current Password</label>
              <input 
                type="password" 
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white font-medium focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 outline-none transition-all"
                placeholder="••••••••"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">New Password</label>
              <input 
                type="password" 
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white font-medium focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 outline-none transition-all"
                placeholder="••••••••"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Confirm New Password</label>
              <input 
                type="password" 
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white font-medium focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <button 
              type="submit"
              disabled={isPending}
              className="flex items-center space-x-3 px-6 py-3 bg-teal-600 hover:bg-teal-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all shadow-lg shadow-teal-900/20 active:scale-95"
            >
              {isPending ? (
                <span className="material-symbols-outlined text-[20px] animate-spin">refresh</span>
              ) : (
                <span className="material-symbols-outlined text-[20px]">save</span>
              )}
              <span>Update Password</span>
            </button>
          </div>
        </form>
      </div>

      {/* Notifications Preferences */}
      <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 space-y-6">
        <h3 className="text-lg font-bold text-white flex items-center mb-6">
          <span className="material-symbols-outlined mr-3 text-indigo-400">tune</span>
          Notifications
        </h3>
        
        <div className="space-y-6">
          {[
            { label: 'Email alerts for new applications', enabled: true },
            { label: 'Daily summary reports', enabled: false },
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
    </div>
  );
}
