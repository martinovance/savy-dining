import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Star, 
  ChevronRight, 
  TrendingUp, 
  Utensils,
  CreditCard,
  Settings
} from 'lucide-react';

const Dashboard = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const stats = [
    { label: 'LOYALTY POINTS', value: '2,450', sub: 'Next reward: 3,000', icon: Star, color: 'text-[#c9a55c]' },
    { label: 'TOTAL VISITS', value: '12', sub: 'Top 5% Guest', icon: TrendingUp, color: 'text-white' },
    { label: 'FAVORITE TABLE', value: 'Table 14', sub: 'Window View', icon: Utensils, color: 'text-white' }
  ];

  const upcomingReservations = [
    { id: 1, date: 'Oct 24, 2026', time: '7:30 PM', guests: 4, type: 'Dinner', status: 'Confirmed' },
    { id: 2, date: 'Nov 02, 2026', time: '1:00 PM', guests: 2, type: 'Lunch', status: 'Pending' }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[#c9a55c]/20 pb-12">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-3 mb-4">
              <span className="h-[1px] w-8 bg-[#c9a55c]"></span>
              <p className="text-[#c9a55c] text-[10px] uppercase tracking-[0.4em]">MEMBER SINCE 2024</p>
            </div>
            <h1 className="text-6xl font-serif tracking-tight">
              Bonjour, <span className="italic text-[#c9a55c]">{user?.firstName || 'Guest'}</span>
            </h1>
          </div>
          <div className="flex items-center space-x-8">
            <div className="text-right">
              <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">STATUS</p>
              <p className="text-[#c9a55c] font-serif italic text-2xl">Gold Elite</p>
            </div>
            <button 
              onClick={() => navigate('/profile')}
              className="p-4 bg-white/5 border border-white/10 hover:border-[#c9a55c]/50 transition-all rounded-full group"
            >
              <Settings className="w-5 h-5 text-[#c9a55c] group-hover:rotate-90 transition-transform duration-500" />
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, i) => (
            <div key={i} className="relative overflow-hidden bg-white/[0.02] border border-white/10 p-8 group hover:bg-white/[0.04] transition-all">
              <div className="relative z-10">
                <stat.icon className={`w-5 h-5 ${stat.color} mb-6`} />
                <h3 className="text-white/40 text-[10px] uppercase tracking-[0.2em] mb-2">{stat.label}</h3>
                <p className="text-4xl font-serif mb-2">{stat.value}</p>
                <p className="text-xs text-white/30 tracking-wide">{stat.sub}</p>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <stat.icon className="w-16 h-16" />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content: Reservations */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-serif tracking-wide uppercase">Upcoming Reservations</h2>
                <button onClick={() => navigate('/orders')} className="text-[#c9a55c] text-[10px] uppercase tracking-widest hover:underline">View All</button>
              </div>
              
              <div className="space-y-4">
                {upcomingReservations.map((res) => (
                  <div key={res.id} className="flex items-center justify-between p-6 bg-white/[0.02] border border-white/5 hover:border-[#c9a55c]/30 transition-all group">
                    <div className="flex items-center space-x-6">
                      <div className="w-12 h-12 bg-[#c9a55c]/10 flex flex-col items-center justify-center border border-[#c9a55c]/20">
                        <span className="text-[10px] text-[#c9a55c] font-bold leading-none">{res.date.split(' ')[0]}</span>
                        <span className="text-lg font-serif leading-none">{res.date.split(' ')[1].replace(',', '')}</span>
                      </div>
                      <div>
                        <p className="text-lg font-serif">{res.type} for {res.guests}</p>
                        <div className="flex items-center space-x-3 mt-1 text-white/40 text-xs">
                          <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {res.time}</span>
                          <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> Main Dining Room</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right flex items-center space-x-6">
                      <span className="text-[10px] uppercase tracking-widest text-[#c9a55c] bg-[#c9a55c]/5 px-3 py-1 border border-[#c9a55c]/10">
                        {res.status}
                      </span>
                      <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-[#c9a55c] group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Quick Actions */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent hover:border-[#c9a55c]/40 transition-all cursor-pointer group">
                <div className="w-10 h-10 bg-[#c9a55c] flex items-center justify-center mb-6">
                  <Utensils className="w-5 h-5 text-black" />
                </div>
                <h3 className="text-xl font-serif mb-2">Private Dining</h3>
                <p className="text-sm text-white/40 mb-6 leading-relaxed">Host your next exclusive event in our vaulted wine cellar or rooftop garden.</p>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#c9a55c] group-hover:translate-x-2 inline-block transition-transform">Inquire Now →</span>
              </div>
              <div className="p-8 border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent hover:border-[#c9a55c]/40 transition-all cursor-pointer group">
                <div className="w-10 h-10 bg-white/10 flex items-center justify-center mb-6">
                  <CreditCard className="w-5 h-5 text-[#c9a55c]" />
                </div>
                <h3 className="text-xl font-serif mb-2">Gift Cards</h3>
                <p className="text-sm text-white/40 mb-6 leading-relaxed">Share the Savy Dining experience with friends and family this season.</p>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 group-hover:translate-x-2 inline-block transition-transform">Purchase →</span>
              </div>
            </section>
          </div>

          {/* Sidebar: Preferences & News */}
          <div className="space-y-8">
            <div className="bg-[#c9a55c]/5 border border-[#c9a55c]/20 p-8">
              <h3 className="text-[#c9a55c] text-[10px] uppercase tracking-[0.3em] mb-6">DINING PREFERENCES</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/40">Seating</span>
                  <span className="font-serif italic text-[#c9a55c]">Near Window</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/40">Dietary</span>
                  <span className="font-serif italic text-[#c9a55c]">Gluten Free</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/40">Water</span>
                  <span className="font-serif italic text-[#c9a55c]">Sparkling</span>
                </li>
              </ul>
              <button className="w-full mt-8 py-3 border border-[#c9a55c]/30 text-[10px] uppercase tracking-widest hover:bg-[#c9a55c] hover:text-black transition-all">
                Update Profile
              </button>
            </div>

            <div className="p-8 border border-white/5 bg-white/[0.01]">
              <h3 className="text-white text-[10px] uppercase tracking-[0.3em] mb-6">EXCLUSIVE OFFERS</h3>
              <div className="space-y-6">
                <div className="group cursor-pointer">
                  <p className="text-[#c9a55c] text-[10px] mb-1 tracking-tighter">LIMITED TIME</p>
                  <p className="font-serif text-lg leading-tight group-hover:text-[#c9a55c] transition-colors">White Truffle Tasting Menu: Member Pre-sale</p>
                </div>
                <div className="group cursor-pointer">
                  <p className="text-white/30 text-[10px] mb-1 tracking-tighter">OCT 30</p>
                  <p className="font-serif text-lg leading-tight group-hover:text-[#c9a55c] transition-colors">Vintage Bordeaux Night: Vault Unlocking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
