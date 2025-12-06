"use client";

import DashboardLayout from '@/components/DashboardLayout';
import QuoteCard from '@/components/QuoteCard';
import { TrendingUp, Users, DollarSign, Activity, ArrowRight, Bell } from 'lucide-react';
import Link from 'next/link';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', revenue: 4000 },
    { name: 'Feb', revenue: 3000 },
    { name: 'Mar', revenue: 2000 },
    { name: 'Apr', revenue: 2780 },
    { name: 'May', revenue: 1890 },
    { name: 'Jun', revenue: 2390 },
    { name: 'Jul', revenue: 3490 },
];

export default function DashboardPage() {
    return (
        <DashboardLayout>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Link href="/quotes?status=paid">
                    <StatCard
                        title="Total Revenue"
                        value="$124,500"
                        change="+12.5%"
                        icon={<DollarSign size={24} />}
                        color="violet"
                    />
                </Link>
                <Link href="/quotes?status=active">
                    <StatCard
                        title="Active Quotes"
                        value="24"
                        change="+4"
                        icon={<Activity size={24} />}
                        color="emerald"
                    />
                </Link>
                <Link href="/quotes?status=converted">
                    <StatCard
                        title="Conversion Rate"
                        value="68%"
                        change="+2.4%"
                        icon={<TrendingUp size={24} />}
                        color="blue"
                    />
                </Link>
                <Link href="/quotes?status=new">
                    <StatCard
                        title="New Leads"
                        value="156"
                        change="+18%"
                        icon={<Users size={24} />}
                        color="fuchsia"
                    />
                </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                {/* Revenue Chart */}
                <div className="lg:col-span-2 glass-card p-6 rounded-3xl">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-white">Revenue Trend</h3>
                        <select className="bg-white/5 border border-white/10 rounded-lg text-xs text-white/70 px-3 py-1.5 focus:outline-none focus:border-violet-500/50">
                            <option>Last 6 Months</option>
                            <option>Last Year</option>
                        </select>
                    </div>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                                <XAxis
                                    dataKey="name"
                                    stroke="rgba(255,255,255,0.3)"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                />
                                <YAxis
                                    stroke="rgba(255,255,255,0.3)"
                                    fontSize={12}
                                    tickLine={false}
                                    axisLine={false}
                                    tickFormatter={(value) => `$${value}`}
                                />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'rgba(2, 4, 3, 0.8)', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', backdropFilter: 'blur(10px)' }}
                                    itemStyle={{ color: '#fff' }}
                                />
                                <Area type="monotone" dataKey="revenue" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Recent Activity Feed */}
                <div className="glass-card p-6 rounded-3xl">
                    <h3 className="text-lg font-bold text-white mb-6">Recent Activity</h3>
                    <div className="space-y-6">
                        <ActivityItem
                            icon={<DollarSign size={16} />}
                            color="bg-emerald-500/20 text-emerald-400"
                            title="Payment Received"
                            desc="Quote #1023 was paid in full"
                            time="2h ago"
                        />
                        <ActivityItem
                            icon={<Users size={16} />}
                            color="bg-blue-500/20 text-blue-400"
                            title="New Lead"
                            desc="Sarah Miller requested a quote"
                            time="5h ago"
                        />
                        <ActivityItem
                            icon={<Bell size={16} />}
                            color="bg-amber-500/20 text-amber-400"
                            title="Quote Expiring"
                            desc="Quote #1019 expires in 24h"
                            time="1d ago"
                        />
                        <ActivityItem
                            icon={<Activity size={16} />}
                            color="bg-violet-500/20 text-violet-400"
                            title="System Update"
                            desc="Pricing engine updated"
                            time="2d ago"
                        />
                    </div>
                    <button className="w-full mt-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white/60 hover:text-white text-sm font-medium transition-colors">
                        View All Activity
                    </button>
                </div>
            </div>

            {/* Recent Quotes Section */}
            <div className="mb-8 flex justify-between items-end">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-1">Recent Quotes</h2>
                    <p className="text-white/40 text-sm">Latest activity from your sales pipeline</p>
                </div>
                <Link href="/quotes" className="text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-2 group">
                    View All
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

function StatCard({ title, value, change, icon, color }: { title: string, value: string, change: string, icon: React.ReactNode, color: string }) {
    const isPositive = change.startsWith('+');

    const colorStyles: Record<string, string> = {
        violet: 'from-violet-500/20 to-indigo-500/5 text-violet-400 border-violet-500/20',
        emerald: 'from-emerald-500/20 to-teal-500/5 text-emerald-400 border-emerald-500/20',
        blue: 'from-blue-500/20 to-cyan-500/5 text-blue-400 border-blue-500/20',
        fuchsia: 'from-fuchsia-500/20 to-pink-500/5 text-fuchsia-400 border-fuchsia-500/20',
    };

    const style = colorStyles[color] || colorStyles.violet;

    return (
        <div className="glass-card p-6 rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300 h-full">
            <div className={`absolute inset-0 bg-gradient-to-br ${style} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 ${style.split(' ')[2]}`}>
                        {icon}
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${isPositive
                        ? 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20'
                        : 'bg-rose-400/10 text-rose-400 border-rose-400/20'
                        }`}>
                        {change}
                    </span>
                </div>

                <div>
                    <span className="text-white/40 text-sm font-medium block mb-1">{title}</span>
                    <h3 className="text-3xl font-bold tracking-tight text-white">{value}</h3>
                </div>
            </div>
        </div>
    );
}

function ActivityItem({ icon, color, title, desc, time }: { icon: React.ReactNode, color: string, title: string, desc: string, time: string }) {
    return (
        <div className="flex items-start gap-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${color}`}>
                {icon}
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-white font-medium text-sm truncate">{title}</p>
                <p className="text-white/40 text-xs truncate">{desc}</p>
            </div>
            <span className="text-white/30 text-xs whitespace-nowrap">{time}</span>
        </div>
    );
}
