import { motion } from 'framer-motion';

export default function Orders() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-8"
      >
        <header>
          <span className="text-[#c9a55c] text-xs uppercase tracking-[0.4em]">Culinary Journey</span>
          <h1 className="text-4xl font-serif text-white mt-2">Order History</h1>
        </header>

        <div className="border border-white/5 bg-zinc-900/20 p-20 text-center">
          <p className="text-zinc-500 font-serif italic text-xl">Your past dining experiences will appear here.</p>
          <button className="mt-8 text-[#c9a55c] text-[10px] uppercase tracking-widest border-b border-[#c9a55c]/20 hover:border-[#c9a55c] transition-all">
            View Seasonal Menu
          </button>
        </div>
      </motion.div>
    </div>
  );
}
