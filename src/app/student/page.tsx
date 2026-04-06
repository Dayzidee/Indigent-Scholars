'use client';

import { useEffect, useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { 
  FileText, 
  Wallet, 
  ShieldCheck, 
  ArrowRight,
  Clock,
  ExternalLink,
  GraduationCap
} from 'lucide-react';
import Link from 'next/link';

export default function StudentDashboard() {
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
      label: 'Active Applications', 
      value: '0', 
      icon: FileText, 
      color: 'text-teal-400', 
      bg: 'bg-teal-500/10' 
    },
    { 
      label: 'Funding Received', 
      value: '₦0.00', 
      icon: Wallet, 
      color: 'text-indigo-400', 
      bg: 'bg-indigo-500/10' 
    },
    { 
      label: 'Verification Status', 
      value: profile?.role === 'student' ? 'Pending' : 'Not Started', 
      icon: ShieldCheck, 
      color: 'text-amber-400', 
      bg: 'bg-amber-500/10' 
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-10">
        {/* Welcome Section */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-800 p-8 md:p-12">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-400">{profile?.full_name?.split(' ')[0] || 'Scholar'}</span>.
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Your academic journey is illuminated by potential. Complete your application to unlock matching opportunities with global sponsors.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/student/application" 
                className="inline-flex items-center space-x-2 px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-teal-500/20 active:scale-95"
              >
                <span>Continue Application</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 blur-[80px] -mr-32 -mt-32 rounded-full"></div>
          <GraduationCap className="absolute bottom-4 right-8 w-48 h-48 text-white/5 -rotate-12 pointer-events-none" />
        </section>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="group p-6 rounded-2xl bg-slate-900/40 border border-slate-800/50 hover:border-slate-700 transition-all hover:-translate-y-1">
              <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center mb-6`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</p>
              <p className="text-2xl font-bold text-white mt-1 group-hover:text-teal-400 transition-colors">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Content Tabs/Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Activity Timeline */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Recent Activity</h3>
              <button className="text-sm text-teal-400 hover:text-teal-300 transition-colors font-medium">View all activity</button>
            </div>
            
            <div className="rounded-2xl border border-slate-800 bg-slate-900/20 backdrop-blur-sm p-12 flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-slate-800/50 flex items-center justify-center border border-slate-700/50">
                <Clock className="w-10 h-10 text-slate-600" />
              </div>
              <div className="max-w-xs">
                <p className="text-slate-400 italic mb-6 leading-relaxed">
                  "The journey of a thousand miles begins with a single step."
                </p>
                <Link 
                  href="/student/application" 
                  className="inline-flex items-center space-x-2 text-teal-400 font-bold hover:text-teal-300 transition-colors group"
                >
                  <span>Start your application</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links / Resources */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Resources</h3>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 space-y-4">
              {[
                { title: 'Application Guide', desc: 'Tips for a winning profile' },
                { title: 'Required Documents', desc: 'Checklist for verification' },
                { title: 'Privacy Policy', desc: 'How we handle your data' }
              ].map((res, i) => (
                <div key={i} className="group p-4 rounded-xl hover:bg-slate-800/50 border border-transparent hover:border-slate-700 transition-all cursor-pointer">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-semibold text-white group-hover:text-teal-400 transition-colors">{res.title}</h4>
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{res.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
