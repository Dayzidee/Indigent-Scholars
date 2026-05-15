'use client';

import { useState, useTransition, use } from 'react';
import Link from 'next/link';
import { toast } from 'sonner';

export default function AdminPermissionsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [isPending, startTransition] = useTransition();
  const [isAccountActive, setIsAccountActive] = useState(true);
  const [permissions, setPermissions] = useState({
    canVerifyUsers: true,
    canManageFinances: false,
    canModifySettings: false,
    canViewLogs: true,
  });

  const handleSave = () => {
    startTransition(async () => {
      // Simulate API call to update permissions
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Admin permissions updated successfully');
    });
  };

  const togglePermission = (key: keyof typeof permissions) => {
    setPermissions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-6">
        <Link href="/super-admin" className="hover:text-white transition-colors">Super Admin</Link>
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        <Link href="/super-admin/admins" className="hover:text-white transition-colors">Admin Management</Link>
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        <span className="text-amber-400">Manage Permissions</span>
      </nav>

      {/* Page Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight mb-2">Manage Admin</h1>
          <p className="text-slate-400 text-sm flex items-center">
            <span className="material-symbols-outlined text-[18px] mr-2 text-amber-400">tune</span>
            Configure access controls and permissions for this administrator.
          </p>
        </div>
        
        <div className="flex gap-3">
          <Link 
            href="/super-admin/admins"
            className="px-5 py-2.5 bg-slate-900 border border-slate-800 hover:bg-slate-800 text-white font-bold rounded-xl transition-all flex items-center gap-2"
          >
            Cancel
          </Link>
          <button
            onClick={handleSave}
            disabled={isPending}
            className="px-5 py-2.5 bg-amber-600 hover:bg-amber-500 disabled:bg-amber-800 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all shadow-lg shadow-amber-900/30 flex items-center gap-2"
          >
            {isPending ? (
              <span className="material-symbols-outlined text-sm animate-spin">refresh</span>
            ) : (
              <span className="material-symbols-outlined text-sm">save</span>
            )}
            Save Changes
          </button>
        </div>
      </header>

      {/* Admin Profile Summary */}
      <div className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800 flex items-center gap-6">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-rose-500/20 border border-amber-700/50 flex items-center justify-center">
          <span className="material-symbols-outlined text-[32px] text-amber-400">shield_person</span>
        </div>
        <div>
          <h2 className="text-xl font-bold text-white mb-1">Admin Account</h2>
          <div className="flex items-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px]">fingerprint</span>
              UID: {id}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* Global Access Restriction */}
        <section className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <span className="material-symbols-outlined text-[120px]">block</span>
          </div>
          
          <h3 className="text-lg font-bold text-white flex items-center mb-6">
            <span className="material-symbols-outlined mr-3 text-rose-400">security</span>
            Global Account Status
          </h3>
          
          <div className="flex items-center justify-between p-6 rounded-2xl bg-slate-950/50 border border-slate-800">
            <div>
              <p className="font-bold text-white mb-1">Active Status</p>
              <p className="text-sm text-slate-400">When disabled, this admin will be immediately restricted and cannot log into the system.</p>
            </div>
            
            <button 
              onClick={() => setIsAccountActive(!isAccountActive)}
              className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors ${isAccountActive ? 'bg-amber-500' : 'bg-slate-700'}`}
            >
              <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${isAccountActive ? 'translate-x-8' : 'translate-x-1'}`} />
            </button>
          </div>
        </section>

        {/* Feature Permissions */}
        <section className={`p-8 rounded-3xl bg-slate-900 border border-slate-800 transition-opacity duration-300 ${!isAccountActive ? 'opacity-50 pointer-events-none' : ''}`}>
          <h3 className="text-lg font-bold text-white flex items-center mb-6">
            <span className="material-symbols-outlined mr-3 text-amber-400">rule</span>
            Feature Permissions
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-5 rounded-2xl bg-slate-950/50 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-emerald-400 mt-0.5">how_to_reg</span>
                <div>
                  <p className="font-bold text-white mb-1">Verify Users</p>
                  <p className="text-sm text-slate-400">Allow admin to review and verify student and sponsor applications.</p>
                </div>
              </div>
              <button 
                onClick={() => togglePermission('canVerifyUsers')}
                className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${permissions.canVerifyUsers ? 'bg-amber-500' : 'bg-slate-700'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${permissions.canVerifyUsers ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

            <div className="flex items-center justify-between p-5 rounded-2xl bg-slate-950/50 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-indigo-400 mt-0.5">account_balance_wallet</span>
                <div>
                  <p className="font-bold text-white mb-1">Manage Finances</p>
                  <p className="text-sm text-slate-400">Allow admin to view ledgers, process payouts, and manage escrows.</p>
                </div>
              </div>
              <button 
                onClick={() => togglePermission('canManageFinances')}
                className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${permissions.canManageFinances ? 'bg-amber-500' : 'bg-slate-700'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${permissions.canManageFinances ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

            <div className="flex items-center justify-between p-5 rounded-2xl bg-slate-950/50 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-purple-400 mt-0.5">settings</span>
                <div>
                  <p className="font-bold text-white mb-1">Modify Settings</p>
                  <p className="text-sm text-slate-400">Allow admin to change platform configurations and system variables.</p>
                </div>
              </div>
              <button 
                onClick={() => togglePermission('canModifySettings')}
                className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${permissions.canModifySettings ? 'bg-amber-500' : 'bg-slate-700'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${permissions.canModifySettings ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

            <div className="flex items-center justify-between p-5 rounded-2xl bg-slate-950/50 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-blue-400 mt-0.5">receipt_long</span>
                <div>
                  <p className="font-bold text-white mb-1">View System Logs</p>
                  <p className="text-sm text-slate-400">Allow admin to read audit logs and system activity history.</p>
                </div>
              </div>
              <button 
                onClick={() => togglePermission('canViewLogs')}
                className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${permissions.canViewLogs ? 'bg-amber-500' : 'bg-slate-700'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${permissions.canViewLogs ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
