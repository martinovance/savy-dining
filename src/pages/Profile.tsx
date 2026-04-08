import { useUser } from '@clerk/clerk-react';
import { motion } from 'framer-motion';

export default function Profile() {
  const { user } = useUser();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-12"
      >
        <header className="text-center">
          <div className="w-24 h-24 rounded-full border border-[#c9a55c] mx-auto mb-6 p-1">
            <img src={user?.imageUrl} className="w-full h-full rounded-full object-cover" alt="Profile" />
          </div>
          <h1 className="text-3xl font-serif text-white">{user?.fullName}</h1>
          <p className="text-zinc-500 text-sm mt-2">{user?.primaryEmailAddress?.emailAddress}</p>
        </header>

        <section className="bg-zinc-900/30 border border-white/5 p-10 space-y-8">
          <h2 className="text-[#c9a55c] text-xs uppercase tracking-[0.3em] border-b border-white/5 pb-4">Dining Preferences</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase text-zinc-500 tracking-widest">Dietary Restrictions</label>
              <select className="w-full bg-black border border-white/10 text-white p-3 text-sm focus:border-[#c9a55c] outline-none transition-colors">
                <option>None</option>
                <option>Vegan</option>
                <option>Vegetarian</option>
                <option>Gluten Free</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] uppercase text-zinc-500 tracking-widest">Preferred Seating</label>
              <select className="w-full bg-black border border-white/10 text-white p-3 text-sm focus:border-[#c9a55c] outline-none transition-colors">
                <option>Window View</option>
                <option>Private Booth</option>
                <option>Chef's Table</option>
              </select>
            </div>
          </div>

          <button className="w-full py-4 bg-[#c9a55c] text-black text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#b8944d] transition-colors">
            Update Preferences
          </button>
        </section>
      </motion.div>
    </div>
  );
}
