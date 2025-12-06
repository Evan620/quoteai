import React from 'react';
import { Clock, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

interface QuoteCardProps {
    id: string;
    customerName: string;
    amount: number;
    status: 'pending' | 'approved' | 'rejected';
    date: string;
    type: 'HVAC' | 'Windows';
}

export default function QuoteCard({ id, customerName, amount, status, date, type }: QuoteCardProps) {
    const statusConfig = {
        pending: { color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/20', icon: Clock },
        approved: { color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20', icon: CheckCircle2 },
        rejected: { color: 'text-rose-400', bg: 'bg-rose-400/10', border: 'border-rose-400/20', icon: AlertCircle },
    };

    const config = statusConfig[status];
    const Icon = config.icon;

    return (
        <div className="glass-card rounded-2xl p-6 relative group cursor-pointer">
            <div className="flex justify-between items-start mb-4">
                <div className={`
          px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1.5
          ${config.bg} ${config.color} ${config.border}
        `}>
                    <Icon size={12} />
                    <span className="capitalize">{status}</span>
                </div>
                <span className="text-white/40 text-xs font-mono">{id}</span>
            </div>

            <h3 className="text-lg font-semibold mb-1 group-hover:text-indigo-300 transition-colors">{customerName}</h3>
            <p className="text-white/50 text-sm mb-6">{type} Installation • {date}</p>

            <div className="flex justify-between items-end">
                <div>
                    <p className="text-white/40 text-xs mb-1">Total Value</p>
                    <p className="text-2xl font-bold tracking-tight">${amount.toLocaleString()}</p>
                </div>

                <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-indigo-500 group-hover:border-indigo-400 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300">
                    <ArrowRight size={18} className="text-white/60 group-hover:text-white -ml-0.5" />
                </button>
            </div>
        </div>
    );
}
