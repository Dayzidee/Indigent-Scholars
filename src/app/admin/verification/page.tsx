'use client';

import { useEffect, useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { verifyApplication } from '@/lib/actions/admin';
import { 
  ShieldCheck, 
  Search, 
  Filter, 
  ExternalLink, 
  CheckCircle2, 
  XCircle, 
  Clock,
  User,
  GraduationCap,
  Building,
  AlertTriangle
} from 'lucide-react';
import { toast } from 'sonner';

export default function AdminVerification() {
  const [pendingApps, setPendingApps] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    async function loadPending() {
      const { data } = await supabase
        .from('student_applications')
        .select(`
          *,
          profiles (
            full_name,
            email
          )
        `)
        .eq('status', 'pending');
      
      setPendingApps(data || []);
      setLoading(false);
    }
    loadPending();
  }, [supabase]);

  const handleAction = async (appId: string, status: any) => {
    try {
      await verifyApplication(appId, status, 'Approved via Admin Panel');
      toast.success(`Application ${status} successfully`);
      setPendingApps(prev => prev.filter(app => app.id !== appId));
    } catch (e) {
      toast.error('Operation failed');
      console.error(e);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-10">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Verification Center</h2>
            <p className="text-slate-500 font-medium tracking-wide flex items-center">
              <ShieldCheck className="w-4 h-4 mr-2 text-teal-400" />
              {pendingApps.length} applications awaiting review.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search candidates..." 
                className="pl-12 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500/50 w-64 transition-all"
              />
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6">
          {pendingApps.length === 0 ? (
            <div className="rounded-3xl border border-slate-800 bg-slate-900/20 p-20 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-full bg-slate-800/50 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-teal-600" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Queue is Empty</h4>
              <p className="text-slate-500">Great work! All pending applications have been processed.</p>
            </div>
          ) : (
            pendingApps.map((app, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="flex flex-col md:flex-row md:items-center gap-6 flex-1">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 shadow-lg">
                    <User className="w-8 h-8 text-indigo-400" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <h4 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{app.profiles.full_name}</h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest bg-slate-950 text-slate-500 border border-slate-800">Student</span>
                    </div>
                    <div className="flex items-wrap gap-4 text-xs font-bold uppercase tracking-widest text-zinc-400">
                      <span className="flex items-center"><Building className="w-3.5 h-3.5 mr-1.5" />{app.school_info?.university || 'University of Lagos'}</span>
                      <span className="flex items-center"><GraduationCap className="w-3.5 h-3.5 mr-1.5" />Mech. Eng.</span>
                      <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1.5" />Applied 2 days ago</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 px-5 py-3 bg-slate-950 border border-slate-800 text-slate-400 hover:text-white rounded-xl transition-all text-sm font-bold group/btn">
                    <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    <span>View Documents</span>
                  </button>
                  <div className="h-8 w-[1px] bg-slate-800 mx-2 hidden lg:block"></div>
                  <button 
                    onClick={() => handleAction(app.id, 'rejected')}
                    className="p-3 text-rose-500 hover:bg-rose-500/10 rounded-xl transition-all border border-transparent hover:border-rose-500/20"
                  >
                    <XCircle className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => handleAction(app.id, 'verified')}
                    className="p-3 text-teal-400 hover:bg-teal-400/10 rounded-xl transition-all border border-transparent hover:border-teal-400/20"
                  >
                    <CheckCircle2 className="w-6 h-6" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
