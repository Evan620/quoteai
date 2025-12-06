import DashboardLayout from '@/components/DashboardLayout';
import { ArrowRight, Download, CheckCircle, XCircle, FileText, Calendar, DollarSign, User } from 'lucide-react';
import Link from 'next/link';

export default function QuoteDetailsPage({ params }: { params: { id: string } }) {
    // Mock Data - In a real app, fetch based on params.id
    const quote = {
        id: params.id || 'Q-1024',
        customer: 'James Anderson',
        date: 'Oct 24, 2023',
        amount: 12500,
        status: 'pending',
        type: 'HVAC Installation',
        items: [
            { desc: 'High Efficiency Heat Pump System (5 Ton)', price: 8500 },
            { desc: 'Smart Thermostat Installation', price: 450 },
            { desc: 'Ductwork Modification & Sealing', price: 1200 },
            { desc: 'Labor & Installation', price: 2350 },
        ]
    };

    return (
        <DashboardLayout>
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <Link href="/quotes" className="text-white/40 hover:text-white text-sm mb-4 inline-flex items-center gap-2 transition-colors">
                            <ArrowRight className="rotate-180" size={14} />
                            Back to Quotes
                        </Link>
                        <div className="flex items-center gap-4">
                            <h1 className="text-3xl font-bold text-white">Quote {quote.id}</h1>
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-400/10 text-amber-400 border border-amber-400/20 flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></div>
                                Pending Review
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <button className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-xl text-sm font-medium border border-white/10 transition-colors flex items-center gap-2">
                            <Download size={16} />
                            Download PDF
                        </button>
                        <button className="px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-xl text-sm font-medium border border-emerald-500/20 transition-colors flex items-center gap-2">
                            <CheckCircle size={16} />
                            Approve
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Line Items */}
                        <div className="glass-card rounded-2xl p-8">
                            <h3 className="text-lg font-semibold text-white mb-6">Line Items</h3>
                            <div className="space-y-4">
                                {quote.items.map((item, index) => (
                                    <div key={index} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0">
                                        <span className="text-white/80 text-sm">{item.desc}</span>
                                        <span className="text-white font-mono">${item.price.toLocaleString()}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-end">
                                <span className="text-white/40 text-sm font-medium uppercase tracking-wider">Total Amount</span>
                                <span className="text-3xl font-bold text-white">${quote.amount.toLocaleString()}</span>
                            </div>
                        </div>

                        {/* AI Insights */}
                        <div className="glass-panel rounded-2xl p-6 border border-violet-500/20 bg-violet-500/5">
                            <h3 className="text-sm font-semibold text-violet-300 mb-4 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(167,139,250,0.6)]"></div>
                                AI Insights
                            </h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                This quote is <span className="text-white font-medium">12% higher</span> than the average for similar HVAC installations in this region. The premium is justified by the high-efficiency heat pump selection, which offers long-term energy savings.
                            </p>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="glass-card rounded-2xl p-6 space-y-6">
                            <h3 className="text-sm font-semibold text-white/40 uppercase tracking-wider">Customer Details</h3>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                    <User size={20} className="text-white/60" />
                                </div>
                                <div>
                                    <p className="text-white font-medium">{quote.customer}</p>
                                    <p className="text-white/40 text-xs">Customer since 2021</p>
                                </div>
                            </div>

                            <div className="space-y-3 pt-4 border-t border-white/5">
                                <div className="flex items-center gap-3 text-sm text-white/60">
                                    <Calendar size={16} className="text-white/40" />
                                    <span>{quote.date}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-white/60">
                                    <FileText size={16} className="text-white/40" />
                                    <span>{quote.type}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
