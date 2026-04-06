'use client';

import { useEffect, useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { getVerifiedStudents, pledgeFunding } from '@/lib/actions/sponsorships';
import { 
  Users, 
  Search, 
  Filter, 
  GraduationCap, 
  Wallet, 
  ArrowRight,
  ShieldCheck,
  Building
} from 'lucide-react';
import { toast } from 'sonner';

export default function SponsorDiscover() {
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [fundingAmount, setFundingAmount] = useState<number>(0);

  useEffect(() => {
    async function loadStudents() {
      try {
        const data = await getVerifiedStudents();
        setStudents(data || []);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    }
    loadStudents();
  }, []);

  const handlePledge = async (appId: string, amount: number) => {
    if (amount <= 0) {
      toast.error('Please enter a valid funding amount');
      return;
    }
    try {
      await pledgeFunding(appId, amount);
      toast.success('Pledge successfully recorded!');
      // Update local state or revalidate
    } catch (e) {
      toast.error('Failed to record pledge');
      console.error(e);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-10">
        {/* Discovery Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Discover Verified Scholars</h2>
            <p className="text-slate-500 font-medium tracking-wide flex items-center">
              <ShieldCheck className="w-4 h-4 mr-2 text-teal-400" />
              Showing 100% verified applications from Nigeria.
            </p>
          </div>
          
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search institution..." 
                className="pl-12 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500/50 w-64 transition-all"
              />
            </div>
            <button className="px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-400 hover:text-white transition-colors">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Student Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {students.length === 0 ? (
            <div className="col-span-full rounded-3xl border border-slate-800 bg-slate-900/40 p-20 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-full bg-slate-800/50 flex items-center justify-center mb-6">
                <Users className="w-10 h-10 text-slate-600" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">No Verified Students Found</h4>
              <p className="text-slate-500 max-w-sm">We're currently processing new applications. Check back soon for new opportunities.</p>
            </div>
          ) : (
            students.map((app, i) => (
              <div key={i} className="group flex flex-col rounded-3xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all overflow-hidden shadow-xl shadow-slate-950/50">
                {/* Header with Visual Decor */}
                <div className="h-24 bg-gradient-to-br from-indigo-500/20 to-teal-500/20 relative group-hover:from-indigo-500/30 transition-colors">
                  <div className="absolute -bottom-6 left-6 w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center shadow-lg">
                    <GraduationCap className="w-6 h-6 text-teal-400" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 pt-10 space-y-6 flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight mb-1">{app.profiles.full_name}</h3>
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-widest flex items-center">
                      <Building className="w-3.5 h-3.5 mr-1.5" />
                      {app.school_info?.university || 'University of Lagos'}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                      <p className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter mb-1">Target Funding</p>
                      <p className="text-sm font-bold text-white">₦{Number(app.funding_needs).toLocaleString()}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                      <p className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter mb-1">Status</p>
                      <p className="text-sm font-bold text-teal-400">Verified</p>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm italic leading-relaxed line-clamp-2">
                    {app.school_info?.statement || 'A dedicated student seeking to focus fully on academic excellence.'}
                  </p>
                </div>

                {/* Quick Action Footer */}
                <div className="p-6 border-t border-slate-800 bg-slate-950/50 space-y-4">
                  <div className="relative group/input">
                    <Wallet className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within/input:text-indigo-400 transition-colors" />
                    <input 
                      type="number" 
                      placeholder="Amount to pledge..."
                      onChange={(e) => setFundingAmount(Number(e.target.value))}
                      className="w-full pl-12 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-indigo-500/50 transition-all font-bold"
                    />
                  </div>
                  <button 
                    onClick={() => handlePledge(app.id, fundingAmount)}
                    className="w-full flex items-center justify-center space-x-2 px-6 py-3.5 bg-indigo-500 hover:bg-indigo-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/20 active:scale-95 group"
                  >
                    <span>Pledge Funding</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
