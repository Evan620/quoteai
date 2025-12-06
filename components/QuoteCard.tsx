import React from 'react';
import { Clock, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import Link from 'next/link';

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
        pending: { color: 'text-amber-400', bg: 'bg-amber-400/10', border: 'border-amber-400/20', icon: Clock, glow: 'shadow-[0_0_10px_rgba(251,191,36,0.2)]' },
        approved: { color: 'text-emerald-400', bg: 'bg-emerald-400/10', border: 'border-emerald-400/20', icon: CheckCircle2, glow: 'shadow-[0_0_10px_rgba(52,211,153,0.2)]' },
        rejected: { color: 'text-rose-400', bg: 'bg-rose-400/10', border: 'border-rose-400/20', icon: AlertCircle, glow: 'shadow-[0_0_10px_rgba(251,113,133,0.2)]' },
    };

    const config = statusConfig[status];
    const Icon = config.icon;

    return (
        <Link href={`/quotes/${id}`} className="block group">
            <div className="glass-card rounded-3xl p-6 relative cursor-pointer overflow-hidden h-full">
                {/* Hover Gradient Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                        <div className={`
              px-4 py-1.5 rounded-full text-xs font-semibold border flex items-center gap-2 backdrop-blur-md
              ${config.bg} ${config.color} ${config.border} ${config.glow}
            `}>
                            <Icon size={14} />
                            <span className="capitalize tracking-wide">{status}</span>
                        </div>
                        <span className="text-white/30 text-xs font-mono tracking-wider">{id}</span>
                    </div>

                    <div className="mb-8">
                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-violet-300 transition-colors tracking-tight">{customerName}</h3>
                        <div className="flex items-center gap-2 text-white/50 text-sm">
                            <span className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-xs">{type}</span>
                            <span>•</span>
                            <span>{date}</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-end border-t border-white/5 pt-6">
                        <div>
                            <p className="text-white/40 text-xs mb-1 uppercase tracking-wider font-semibold">Total Value</p>
                            <p className="text-3xl font-bold tracking-tight text-white">${amount.toLocaleString()}</p>
                        </div>

                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-violet-600 group-hover:border-violet-500 group-hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all duration-300">
                            <ArrowRight size={20} className="text-white/60 group-hover:text-white -ml-0.5 transform group-hover:translate-x-0.5 transition-transform" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}
