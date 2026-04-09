import { dark } from '@clerk/themes';
import { SignedIn, useUser, useClerk } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 flex justify-between items-end border-b border-[#c9a55c]/20 pb-8">
          <div>
            <p className="text-[#c9a55c] text-xs uppercase tracking-[0.3em] mb-2">Welcome Back</p>
            <h1 className="text-5xl font-serif">{user?.firstName || \'Guest\'}</h1>
          </div>
          <div className="text-right">
            <p className="text-white/40 text-[10px] uppercase tracking-widest">Membership Status</p>
            <p className="text-[#c9a55c] font-serif italic text-xl">Gold Member</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 p-8 hover:border-[#c9a55c]/50 transition-colors cursor-pointer group" onClick={() => navigate(\'/orders\')}>
            <h3 className="text-[#c9a55c] text-xs uppercase tracking-widest mb-4">Recent Reservations</h3>
            <p className="text-2xl font-serif group-hover:translate-x-2 transition-transform">View History →</p>
          </div>
          
          <div className="bg-white/5 border border-white/10 p-8 hover:border-[#c9a55c]/50 transition-colors cursor-pointer group" onClick={() => navigate(\'/profile\')}>
            <h3 className="text-[#c9a55c] text-xs uppercase tracking-widest mb-4">Dining Profile</h3>
            <p className="text-2xl font-serif group-hover:translate-x-2 transition-transform">Preferences →</p>
          </div>

          <div className="bg-[#c9a55c] p-8 text-black">
            <h3 className="text-black/60 text-xs uppercase tracking-widest mb-4">Rewards Points</h3>
            <p className="text-4xl font-serif">2,450</p>
            <p className="text-sm mt-2 opacity-70">Next reward at 3,000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
