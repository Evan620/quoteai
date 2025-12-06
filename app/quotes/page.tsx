import DashboardLayout from '@/components/DashboardLayout';
import QuoteCard from '@/components/QuoteCard';
import { Search, Filter } from 'lucide-react';

export default function QuotesPage() {
    return (
        <DashboardLayout>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-white mb-2">All Quotes</h1>
                    <p className="text-white/50">Manage and track your quote requests</p>
                </div>

                <div className="flex gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
                        <input
                            type="text"
                            placeholder="Search quotes..."
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-violet-500/50 transition-colors"
                        />
                    </div>
                    <button className="px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2">
                        <Filter size={18} />
                        <span className="hidden sm:inline">Filter</span>
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Mock Data */}
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
                <QuoteCard
                    id="Q-1021"
                    customerName="Emily Davis"
                    amount={15000}
                    status="pending"
                    date="2 days ago"
                    type="Windows"
                />
                <QuoteCard
                    id="Q-1020"
                    customerName="Michael Wilson"
                    amount={9800}
                    status="approved"
                    date="3 days ago"
                    type="HVAC"
                />
                <QuoteCard
                    id="Q-1019"
                    customerName="David Brown"
                    amount={22000}
                    status="rejected"
                    date="4 days ago"
                    type="Windows"
                />
            </div>
        </DashboardLayout>
    );
}
