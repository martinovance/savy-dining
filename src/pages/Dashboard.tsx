import { useUser } from '@clerk/clerk-react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const { user } = useUser();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        <header className="border-b border-white/10 pb-8">
          <span className="text-[#c9a55c] text-xs uppercase tracking-[0.4em]">Member Overview</span>
          <h1 className="text-4xl font-serif text-white mt-2">Welcome Back, {user?.firstName}</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-zinc-900/50 border border-white/5 p-8 backdrop-blur-sm">
            <h3 className="text-[#c9a55c] text-xs uppercase tracking-widest mb-4">Membership Tier</h3>
            <p className="text-2xl font-serif text-white italic">Gold Signature</p>
          </div>
          <div className="bg-zinc-900/50 border border-white/5 p-8 backdrop-blur-sm">
            <h3 className="text-[#c9a55c] text-xs uppercase tracking-widest mb-4">Upcoming Bookings</h3>
            <p className="text-2xl font-serif text-white">0 Active</p>
          </div>
          <div className="bg-zinc-900/50 border border-white/5 p-8 backdrop-blur-sm">
            <h3 className="text-[#c9a55c] text-xs uppercase tracking-widest mb-4">Points Earned</h3>
            <p className="text-2xl font-serif text-white">1,250 XP</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
