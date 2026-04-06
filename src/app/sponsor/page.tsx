'use client';

import { useEffect, useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  Users, 
  Heart, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp,
  Globe,
  Zap,
  GraduationCap,
  Search
} from 'lucide-react';
import Link from 'next/link';

export default function SponsorDashboard() {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    async function fetchProfile() {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        setProfile(data);
      }
      setLoading(false);
    }
    fetchProfile();
  }, [supabase]);

  const stats = [
    { 
      label: 'Students Supported', 
      value: '0', 
      icon: Users, 
      color: 'text-indigo-400', 
      bg: 'bg-indigo-500/10' 
    },
    { 
      label: 'Total Impact', 
      value: '₦0.00', 
      icon: Heart, 
      color: 'text-rose-400', 
      bg: 'bg-rose-500/10' 
    },
    { 
      label: 'Verification Status', 
      value: 'Verified Entity', 
      icon: ShieldCheck, 
      color: 'text-teal-400', 
      bg: 'bg-teal-500/10' 
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-10">
        {/* Welcome Section */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-800 p-8 md:p-12">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400">{profile?.full_name?.split(' ')[0] || 'Sponsor'}</span>.
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Your investments are transforming academic destinies. Browse verified applications to find your next matchmaking opportunity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/sponsor/discover" 
                className="inline-flex items-center space-x-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
              >
                <Search className="w-4 h-4 mr-1" />
                <span>Discover Scholars</span>
              </Link>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] -mr-32 -mt-32 rounded-full"></div>
          <Globe className="absolute bottom-4 right-8 w-48 h-48 text-white/5 rotate-12 pointer-events-none" />
        </section>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="group p-6 rounded-2xl bg-slate-900/40 border border-slate-800/50 hover:border-slate-700 transition-all hover:-translate-y-1">
              <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center mb-6`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</p>
              <p className="text-2xl font-bold text-white mt-1 group-hover:text-indigo-400 transition-colors">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Impact / Funded Students */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Your Funded Scholars</h3>
              <Link href="/sponsor/ledger" className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium">View detailed ledger</Link>
            </div>
            
            <div className="rounded-2xl border border-slate-800 bg-slate-900/20 backdrop-blur-sm p-12 flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-slate-800/50 flex items-center justify-center border border-slate-700/50">
                <Heart className="w-10 h-10 text-slate-600" />
              </div>
              <div className="max-w-xs">
                <p className="text-slate-400 italic mb-6 leading-relaxed">
                  No active sponsorships found. Start making an impact today.
                </p>
                <Link 
                  href="/sponsor/discover" 
                  className="inline-flex items-center space-x-2 text-indigo-400 font-bold hover:text-indigo-300 transition-colors group"
                >
                  <span>Browse Verified Applications</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Insights / Notifications */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Impact Insights</h3>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 space-y-4">
              <div className="p-4 rounded-xl bg-teal-500/10 border border-teal-500/20 flex flex-col items-center text-center space-y-3">
                <TrendingUp className="w-8 h-8 text-teal-400" />
                <p className="text-sm font-bold text-white leading-tight">National Outreach Opportunity</p>
                <p className="text-xs text-slate-500 leading-relaxed">Your contributions are currently centered in 1 region. Explore students in other areas to spread your impact.</p>
              </div>
              
              <div className="p-4 rounded-xl hover:bg-slate-800/50 border border-transparent hover:border-slate-700 transition-all cursor-pointer">
                <p className="text-xs text-indigo-400 font-bold uppercase tracking-widest mb-1.5">Platform Update</p>
                <h4 className="text-sm font-semibold text-white">New Verification Rules</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">Updated criteria for student vetting are now active.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
