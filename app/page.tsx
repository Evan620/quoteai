import DashboardLayout from '@/components/DashboardLayout';
import QuoteCard from '@/components/QuoteCard';
import { TrendingUp, Users, DollarSign, Activity } from 'lucide-react';

export default function Home() {
  return (
    <DashboardLayout>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard title="Total Revenue" value="$124,500" change="+12.5%" icon={<DollarSign size={20} />} />
        <StatCard title="Active Quotes" value="24" change="+4" icon={<Activity size={20} />} />
        <StatCard title="Conversion Rate" value="68%" change="+2.4%" icon={<TrendingUp size={20} />} />
        <StatCard title="New Leads" value="156" change="+18%" icon={<Users size={20} />} />
      </div>

      {/* Recent Quotes Section */}
      <div className="mb-8 flex justify-between items-end">
        <h2 className="text-xl font-semibold text-white/90">Recent Quotes</h2>
        <button className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">View All</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <QuoteCard
          id="Q-1024"
          customerName="James Anderson"
          amount={12500}
          status="pending"
          date="2 hours ago"
          type="HVAC"
        />
        <QuoteCard
          id="Q-1023"
          customerName="Sarah Miller"
          amount={48500}
          status="approved"
          date="5 hours ago"
          type="Windows"
        />
        <QuoteCard
          id="Q-1022"
          customerName="Robert Chen"
          amount={8200}
          status="rejected"
          date="1 day ago"
          type="HVAC"
        />
      </div>
    </DashboardLayout>
  );
}

function StatCard({ title, value, change, icon }: { title: string, value: string, change: string, icon: React.ReactNode }) {
  const isPositive = change.startsWith('+');

  return (
    <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-110 duration-500">
        {icon}
      </div>

      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-indigo-400">
          {icon}
        </div>
        <span className="text-white/50 text-sm font-medium">{title}</span>
      </div>

      <div className="flex items-end justify-between">
        <h3 className="text-2xl font-bold tracking-tight">{value}</h3>
        <span className={`text-xs font-medium px-2 py-1 rounded-full border ${isPositive
            ? 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20'
            : 'bg-rose-400/10 text-rose-400 border-rose-400/20'
          }`}>
          {change}
        </span>
      </div>
    </div>
  );
}
