import DashboardLayout from '@/components/DashboardLayout';
import { User, Bell, Key, Shield, Save } from 'lucide-react';

export default function SettingsPage() {
    return (
        <DashboardLayout>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
                <p className="text-white/50">Manage your account preferences and API keys</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Settings Navigation */}
                <div className="lg:col-span-1">
                    <div className="glass-panel rounded-2xl p-4 space-y-2">
                        <SettingsNavItem icon={<User size={18} />} label="Profile" active />
                        <SettingsNavItem icon={<Bell size={18} />} label="Notifications" />
                        <SettingsNavItem icon={<Key size={18} />} label="API Keys" />
                        <SettingsNavItem icon={<Shield size={18} />} label="Security" />
                    </div>
                </div>

                {/* Settings Content */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Profile Section */}
                    <section className="glass-card rounded-2xl p-8">
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                            <User className="text-violet-400" size={24} />
                            Profile Information
                        </h2>

                        <div className="space-y-6">
                            <div className="flex items-center gap-6">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 border-4 border-white/10 shadow-xl"></div>
                                <div>
                                    <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-sm font-medium transition-colors border border-white/10">
                                        Change Avatar
                                    </button>
                                    <p className="text-white/30 text-xs mt-2">JPG, GIF or PNG. Max size 800K</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputGroup label="First Name" defaultValue="Evan" />
                                <InputGroup label="Last Name" defaultValue="Doe" />
                                <InputGroup label="Email Address" defaultValue="evan@example.com" type="email" />
                                <InputGroup label="Phone Number" defaultValue="+1 (555) 000-0000" />
                            </div>

                            <div className="pt-4 flex justify-end">
                                <button className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-medium shadow-lg shadow-violet-500/20 transition-all flex items-center gap-2">
                                    <Save size={18} />
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* API Keys Section */}
                    <section className="glass-card rounded-2xl p-8">
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                            <Key className="text-emerald-400" size={24} />
                            API Configuration
                        </h2>

                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-black/20 border border-white/5">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-white/70 text-sm font-medium">Production Key</span>
                                    <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-xs border border-emerald-500/20">Active</span>
                                </div>
                                <div className="flex gap-2">
                                    <code className="flex-1 bg-black/30 p-2 rounded text-white/50 text-sm font-mono truncate">
                                        pk_live_51Mz...92xY
                                    </code>
                                    <button className="p-2 hover:bg-white/10 rounded text-white/50 hover:text-white transition-colors">
                                        <span className="sr-only">Copy</span>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                                    </button>
                                </div>
                            </div>
                            <button className="text-sm text-violet-400 hover:text-violet-300 font-medium transition-colors">
                                + Generate New Key
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </DashboardLayout>
    );
}

function SettingsNavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
    return (
        <button className={`
      w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
      ${active
                ? 'bg-violet-600/10 text-violet-400 border border-violet-500/20'
                : 'text-white/50 hover:text-white hover:bg-white/5'
            }
    `}>
            {icon}
            {label}
        </button>
    );
}

function InputGroup({ label, defaultValue, type = "text" }: { label: string, defaultValue: string, type?: string }) {
    return (
        <div className="space-y-2">
            <label className="text-xs font-medium text-white/40 uppercase tracking-wider">{label}</label>
            <input
                type={type}
                defaultValue={defaultValue}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-violet-500/50 focus:bg-white/10 transition-all"
            />
        </div>
    );
}
