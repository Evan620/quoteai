import React from 'react';
import { LayoutDashboard, FileText, Settings, Plus, Bell, Search } from 'lucide-react';
import Link from 'next/link';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen relative">
            {/* Sidebar */}
            <aside className="w-20 lg:w-72 fixed h-full z-20 glass-panel flex flex-col transition-all duration-300">
                <div className="p-8 flex items-center justify-center lg:justify-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-[0_0_20px_rgba(124,58,237,0.3)] border border-white/10">
                        <span className="font-bold text-white text-lg">Q</span>
                    </div>
                    <span className="hidden lg:block font-bold text-2xl tracking-tight text-white">QUOTEAI</span>
                </div>

                <nav className="flex-1 px-6 py-8 space-y-3">
                    <div className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4 px-3 hidden lg:block">Menu</div>
                    <NavLink href="/dashboard" icon={<LayoutDashboard size={20} />} label="Dashboard" active />
                    <NavLink href="/quotes" icon={<FileText size={20} />} label="Quotes" />
                    <NavLink href="/settings" icon={<Settings size={20} />} label="Settings" />
                </nav>

                <div className="p-6">
                    <Link href="/quotes/new" className="w-full aspect-square lg:aspect-auto p-0 lg:p-4 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] border border-white/10 transition-all flex items-center justify-center gap-3 group relative overflow-hidden">
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <Plus size={20} className="text-white relative z-10" />
                        <span className="hidden lg:block font-semibold text-white relative z-10">New Quote</span>
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-20 lg:ml-72 p-8 lg:p-12 relative z-10">
                {/* Top Bar */}
                <header className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-4xl font-bold mb-2 text-white tracking-tight">Dashboard</h1>
                        <p className="text-white/50">Welcome back, Evan</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="relative hidden md:block group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white transition-colors" size={20} />
                            <input
                                type="text"
                                placeholder="Search..."
                                className="bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-6 text-sm focus:outline-none focus:bg-white/10 focus:border-white/20 w-80 transition-all placeholder:text-white/20 text-white"
                            />
                        </div>

                        <div className="flex items-center gap-4 pl-4 border-l border-white/10">
                            <button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all relative group">
                                <Bell size={20} className="text-white/60 group-hover:text-white transition-colors" />
                                <span className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] border-2 border-[#0a0f0c]"></span>
                            </button>
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 border-2 border-white/10 shadow-lg cursor-pointer hover:scale-105 transition-transform"></div>
                        </div>
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
        flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300 group relative overflow-hidden
        ${active
                    ? 'text-white shadow-[0_0_20px_rgba(0,0,0,0.2)]'
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                }
      `}
        >
            {active && (
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-transparent border-l-4 border-violet-500"></div>
            )}
            <span className={`${active ? 'text-violet-400' : 'group-hover:text-violet-400'} transition-colors relative z-10`}>
                {icon}
            </span>
            <span className="hidden lg:block font-medium relative z-10">{label}</span>
        </Link>
    );
}
