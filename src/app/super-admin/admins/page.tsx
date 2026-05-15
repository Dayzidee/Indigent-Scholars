'use client';

import { useState, useTransition } from 'react';
import { toast } from 'sonner';
import { createAdminUser, deleteAdminUser } from '@/lib/actions/super-admin';
import Link from 'next/link';

interface AdminUser {
  id: string;
  email: string;
  full_name: string | null;
  status: 'active' | 'restricted';
}

interface GeneratedCredentials {
  email: string;
  password: string;
}

export default function AdminManagement() {
  // Demo admin roster data
  const [admins, setAdmins] = useState<AdminUser[]>([
    { id: 'demo_1', email: 'admin.alpha@indigent.com', full_name: 'Admin Alpha', status: 'active' },
    { id: 'demo_2', email: 'admin.beta@indigent.com', full_name: 'Admin Beta', status: 'active' },
    { id: 'demo_3', email: 'admin.gamma@indigent.com', full_name: 'Admin Gamma', status: 'active' },
    { id: 'demo_4', email: 'admin.delta@indigent.com', full_name: 'Admin Delta', status: 'restricted' },
  ]);

  // Form state
  const [newEmail, setNewEmail] = useState('');
  const [newName, setNewName] = useState('');
  const [credentials, setCredentials] = useState<GeneratedCredentials | null>(null);
  const [isPending, startTransition] = useTransition();
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [isDeleting, startDeleteTransition] = useTransition();
  const [copied, setCopied] = useState(false);

  const handleCreateAdmin = () => {
    if (!newEmail.trim() || !newName.trim()) {
      toast.error('Please enter both email and full name');
      return;
    }

    startTransition(async () => {
      const result = await createAdminUser(newEmail, newName);

      if (result.tag === 'success') {
        setCredentials(result.data);
        setAdmins(prev => [
          ...prev,
          {
            id: `new_${Date.now()}`,
            email: result.data.email,
            full_name: newName.trim(),
            status: 'active',
          }
        ]);
        setNewEmail('');
        setNewName('');
        toast.success('Admin account created successfully');
      } else {
        toast.error(result.error);
      }
    });
  };

  const handleDeleteAdmin = (adminId: string) => {
    startDeleteTransition(async () => {
      const result = await deleteAdminUser(adminId);

      if (result.tag === 'success') {
        setAdmins(prev => prev.filter(a => a.id !== adminId));
        setDeleteTarget(null);
        toast.success('Admin account deleted');
      } else {
        toast.error(result.error);
      }
    });
  };

  const handleCopyCredentials = () => {
    if (!credentials) return;
    navigator.clipboard.writeText(
      `Email: ${credentials.email}\nPassword: ${credentials.password}`
    );
    setCopied(true);
    toast.success('Credentials copied to clipboard');
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-6">
        <span>Super Admin</span>
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        <span className="text-amber-400">Admin Management</span>
      </nav>

      {/* Page Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight mb-2">Admin Management</h1>
          <p className="text-slate-400 text-sm flex items-center">
            <span className="material-symbols-outlined text-[18px] mr-2 text-amber-400">admin_panel_settings</span>
            Create, manage, and configure admin accounts.
          </p>
        </div>
        <div className="flex gap-4 text-sm">
          <div className="bg-slate-900 border border-slate-800 px-4 py-3 rounded-xl">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Total Admins</p>
            <p className="text-xl font-black text-white">{admins.length}</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 px-4 py-3 rounded-xl">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Active</p>
            <p className="text-xl font-black text-teal-400">{admins.filter(a => a.status === 'active').length}</p>
          </div>
        </div>
      </header>

      {/* Create Admin Section */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-amber-900/20 to-slate-900 border border-amber-500/20 shadow-2xl">
        <h3 className="text-lg font-bold text-white flex items-center mb-6">
          <span className="material-symbols-outlined mr-3 text-amber-400">person_add</span>
          Generate Admin Access Key
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">
              Admin Email
            </label>
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="newadmin@indigent.com"
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white font-medium focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/10 outline-none transition-all placeholder:text-slate-600"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">
              Full Name
            </label>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white font-medium focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/10 outline-none transition-all placeholder:text-slate-600"
            />
          </div>
        </div>

        <button
          onClick={handleCreateAdmin}
          disabled={isPending}
          className="px-6 py-3 bg-amber-600 hover:bg-amber-500 disabled:bg-amber-800 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all shadow-lg shadow-amber-900/30 flex items-center gap-2"
        >
          {isPending ? (
            <>
              <span className="material-symbols-outlined text-sm animate-spin">refresh</span>
              Generating...
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-sm">vpn_key</span>
              Generate Access Key
            </>
          )}
        </button>

        {/* Generated Credentials Display */}
        {credentials && (
          <div className="mt-6 p-6 rounded-2xl bg-slate-950 border border-amber-500/30 relative">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-amber-400">lock_open</span>
                <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider">Generated Credentials</h4>
              </div>
              <button
                onClick={handleCopyCredentials}
                className="flex items-center gap-1 px-3 py-1.5 bg-amber-600/20 hover:bg-amber-600/30 text-amber-400 rounded-lg text-xs font-bold transition-colors"
              >
                <span className="material-symbols-outlined text-sm">
                  {copied ? 'check' : 'content_copy'}
                </span>
                {copied ? 'Copied!' : 'Copy All'}
              </button>
            </div>

            <div className="space-y-3 font-mono">
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-500 w-16">Email:</span>
                <span className="text-sm text-white font-medium">{credentials.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-500 w-16">Key:</span>
                <span className="text-sm text-amber-400 font-medium tracking-wider">{credentials.password}</span>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-2 text-xs text-slate-500">
              <span className="material-symbols-outlined text-[14px] text-amber-500 mt-0.5 shrink-0">warning</span>
              <p>Share these credentials securely. The access key is shown only once and cannot be retrieved after you leave this page.</p>
            </div>

            <button
              onClick={() => setCredentials(null)}
              className="mt-4 text-xs text-slate-500 hover:text-slate-300 transition-colors font-medium"
            >
              Dismiss
            </button>
          </div>
        )}
      </div>

      {/* Admin Roster Table */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900/20 shadow-2xl overflow-hidden backdrop-blur-xl">
        <div className="px-8 py-6 border-b border-slate-800 flex justify-between items-center">
          <h4 className="text-lg font-bold text-white">Admin Roster</h4>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-slate-500">search</span>
            <input
              type="text"
              placeholder="Search admins..."
              className="pl-10 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-white text-sm focus:outline-none focus:border-slate-700 w-64 transition-all"
            />
          </div>
        </div>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-900/40">
              <th className="px-8 py-5 text-xs font-black text-slate-500 uppercase tracking-widest">Admin</th>
              <th className="px-8 py-5 text-xs font-black text-slate-500 uppercase tracking-widest">Email</th>
              <th className="px-8 py-5 text-xs font-black text-slate-500 uppercase tracking-widest">Status</th>
              <th className="px-8 py-5 text-xs font-black text-slate-500 uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {admins.map((admin) => (
              <tr key={admin.id} className="hover:bg-white/[0.02] transition-colors group">
                <td className="px-8 py-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 shadow-inner group-hover:border-amber-500/50 transition-colors">
                      <span className="material-symbols-outlined text-[20px]">shield</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white uppercase tracking-tight group-hover:text-amber-400 transition-colors">
                        {admin.full_name || 'Unnamed Admin'}
                      </p>
                      <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest mt-0.5">
                        UID: {admin.id.slice(0, 8)}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className="text-xs font-medium text-slate-400 flex items-center">
                    <span className="material-symbols-outlined text-[14px] mr-1.5 opacity-50">mail</span>
                    {admin.email}
                  </span>
                </td>
                <td className="px-8 py-6">
                  {admin.status === 'active' ? (
                    <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest bg-teal-500/10 text-teal-400 border border-teal-500/20">
                      Active
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest bg-amber-500/10 text-amber-500 border border-amber-500/20">
                      Restricted
                    </span>
                  )}
                </td>
                <td className="px-8 py-6 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      href={`/super-admin/admins/${admin.id}`}
                      className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
                      title="Manage permissions"
                    >
                      <span className="material-symbols-outlined text-[18px]">tune</span>
                    </Link>

                    {deleteTarget === admin.id ? (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleDeleteAdmin(admin.id)}
                          disabled={isDeleting}
                          className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all border border-red-500/20"
                          title="Confirm delete"
                        >
                          <span className="material-symbols-outlined text-[18px]">
                            {isDeleting ? 'refresh' : 'check'}
                          </span>
                        </button>
                        <button
                          onClick={() => setDeleteTarget(null)}
                          className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
                          title="Cancel"
                        >
                          <span className="material-symbols-outlined text-[18px]">close</span>
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setDeleteTarget(admin.id)}
                        className="p-2 rounded-lg bg-slate-800/50 hover:bg-red-500/10 text-slate-400 hover:text-red-400 transition-all"
                        title="Delete admin"
                      >
                        <span className="material-symbols-outlined text-[18px]">delete</span>
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
