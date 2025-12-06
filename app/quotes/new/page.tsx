import DashboardLayout from '@/components/DashboardLayout';
import { Upload, FileText, ArrowRight, X } from 'lucide-react';
import Link from 'next/link';

export default function NewQuotePage() {
    return (
        <DashboardLayout>
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <Link href="/quotes" className="text-white/40 hover:text-white text-sm mb-4 inline-flex items-center gap-2 transition-colors">
                        <ArrowRight className="rotate-180" size={14} />
                        Back to Quotes
                    </Link>
                    <h1 className="text-3xl font-bold text-white mb-2">Create New Quote</h1>
                    <p className="text-white/50">Upload project documents to generate an AI-powered quote</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Form */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* File Upload Zone */}
                        <div className="glass-card rounded-2xl p-8 border-2 border-dashed border-white/10 hover:border-violet-500/50 transition-colors group cursor-pointer text-center">
                            <div className="w-16 h-16 rounded-full bg-white/5 mx-auto flex items-center justify-center mb-4 group-hover:bg-violet-500/20 group-hover:text-violet-400 transition-all">
                                <Upload size={32} className="text-white/40 group-hover:text-violet-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">Upload Project Files</h3>
                            <p className="text-white/40 text-sm mb-6">Drag and drop your PDF plans here, or click to browse</p>
                            <button className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl text-sm font-medium transition-colors">
                                Select Files
                            </button>
                        </div>

                        {/* Project Details */}
                        <div className="glass-card rounded-2xl p-6 space-y-4">
                            <h3 className="text-lg font-semibold text-white mb-4">Project Details</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-white/40 uppercase tracking-wider">Customer Name</label>
                                    <input type="text" placeholder="e.g. John Smith" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-white/40 uppercase tracking-wider">Project Type</label>
                                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 transition-all appearance-none">
                                        <option value="hvac">HVAC Installation</option>
                                        <option value="windows">Luxury Windows</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-medium text-white/40 uppercase tracking-wider">Project Address</label>
                                <input type="text" placeholder="e.g. 123 Main St, Beverly Hills, CA" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 transition-all" />
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Info */}
                    <div className="space-y-6">
                        <div className="glass-panel rounded-2xl p-6">
                            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">AI Analysis</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3 text-sm text-white/60">
                                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">1</div>
                                    <p>Upload PDF plans and specifications</p>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white/60">
                                    <div className="w-5 h-5 rounded-full bg-white/10 text-white/40 flex items-center justify-center flex-shrink-0 mt-0.5">2</div>
                                    <p>AI extracts measurements and requirements</p>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-white/60">
                                    <div className="w-5 h-5 rounded-full bg-white/10 text-white/40 flex items-center justify-center flex-shrink-0 mt-0.5">3</div>
                                    <p>Review and approve generated quote</p>
                                </div>
                            </div>
                        </div>

                        <button className="w-full py-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-xl font-bold shadow-lg shadow-violet-500/25 transition-all flex items-center justify-center gap-2 group">
                            <span>Generate Quote</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
