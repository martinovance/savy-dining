import { useState, FormEvent } from 'react';

const ReservationForm = ({ onComplete }: { onComplete: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    date: '',
    time: '',
    guests: '2'
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Reservation Request:', formData);
    onComplete();
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 shadow-2xl border border-stone-100 animate-in fade-in duration-700 rounded-lg">
      <h2 className="text-3xl font-serif mb-8 text-center text-stone-800 border-b pb-6">Secure a Table</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">Full Name</label>
          <input 
            type="text" 
            required 
            placeholder="John Doe"
            className="w-full border-b border-stone-200 p-3 bg-transparent focus:border-amber-500 outline-none transition-colors"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">WhatsApp Number</label>
          <input 
            type="tel" 
            required 
            placeholder="+1 234 567 890"
            className="w-full border-b border-stone-200 p-3 bg-transparent focus:border-amber-500 outline-none transition-colors"
            onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
          />
          <p className="text-[10px] text-stone-400 mt-1 italic">Confirmation will be sent via WhatsApp</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">Date</label>
            <input 
              type="date" 
              required 
              className="w-full border-b border-stone-200 p-3 bg-transparent focus:border-amber-500 outline-none transition-colors"
              onChange={(e) => setFormData({...formData, date: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-2">Guests</label>
            <select 
              className="w-full border-b border-stone-200 p-3 bg-transparent outline-none focus:border-amber-500 transition-colors"
              onChange={(e) => setFormData({...formData, guests: e.target.value})}
            >
              {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} Guests</option>)}
            </select>
          </div>
        </div>

        <button 
          type="submit" 
          className="w-full bg-amber-900 text-white p-5 uppercase tracking-widest text-xs font-bold hover:bg-amber-800 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
        >
          Check Availability
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;