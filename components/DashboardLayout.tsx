import React from 'react';
import { LayoutDashboard, FileText, Settings, Plus, Bell, Search } from 'lucide-react';
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-20 lg:w-64 fixed h-full z-20 glass-panel border-r border-white/10 flex flex-col transition-all duration-300">
                <div className="p-6 flex items-center justify-center lg:justify-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                        <span className="font-bold text-white">Q</span>
                    </div>
                    <span className="hidden lg:block font-bold text-xl tracking-tight text-glow">QUOTEAI</span>
                </div>

                <nav className="flex-1 px-4 py-8 space-y-2">
                    <NavLink href="/dashboard" icon={<LayoutDashboard size={20} />} label="Dashboard" active />
                    <NavLink href="/quotes" icon={<FileText size={20} />} label="Quotes" />
                    <NavLink href="/settings" icon={<Settings size={20} />} label="Settings" />
                </nav>

                <div className="p-4">
                    <button className="w-full aspect-square lg:aspect-auto p-0 lg:p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition-all flex items-center justify-center gap-2 group">
                        <Plus size={20} className="text-indigo-400 group-hover:text-white transition-colors" />
                        <span className="hidden lg:block font-medium text-sm">New Quote</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-20 lg:ml-64 p-8">
                {/* Top Bar */}
                <header className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-3xl font-bold mb-1 text-glow">Dashboard</h1>
                        <p className="text-white/60 text-sm">Welcome back, Evan</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative hidden md:block group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white/80 transition-colors" size={18} />
                            <input
                                type="text"
                                placeholder="Search quotes..."
                                className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:bg-white/10 focus:border-white/20 w-64 transition-all"
                            />
                        </div>
                        <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all relative">
                            <Bell size={18} className="text-white/80" />
                            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]"></span>
                        </button>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-2 border-white/20 shadow-lg"></div>
                    </div>
                </header>

                {children}
            </main>
        </div>
    );
}

function NavLink({ href, icon, label, active = false }: { href: string, icon: React.ReactNode, label: string, active?: boolean }) {
    return (
        <Link
            href={href}
            className={`
        flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group
        ${active
                    ? 'bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)] border border-white/10'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }
      `}
        >
            <span className={`${active ? 'text-indigo-400' : 'group-hover:text-indigo-400'} transition-colors`}>
                {icon}
            </span>
            <span className="hidden lg:block font-medium text-sm">{label}</span>
        </Link>
    );
}
