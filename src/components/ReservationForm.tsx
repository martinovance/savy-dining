import { useState, FormEvent } from 'react';

const ReservationForm = ({ onComplete }: { onComplete: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    <div className="max-w-md mx-auto bg-white p-8 shadow-sm border border-stone-100 animate-in fade-in duration-500">
      <h2 className="text-2xl font-serif mb-6 text-center text-stone-800 border-b pb-4">Secure a Table</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase text-stone-400 mb-1">Full Name</label>
          <input 
            type="text" 
            required 
            className="w-full border-stone-200 p-3 bg-stone-50 focus:ring-1 focus:ring-amber-500 outline-none"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-stone-400 mb-1">Date</label>
            <input 
              type="date" 
              required 
              className="w-full border-stone-200 p-3 bg-stone-50 focus:ring-1 focus:ring-amber-500 outline-none"
              onChange={(e) => setFormData({...formData, date: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-stone-400 mb-1">Guests</label>
            <select 
              className="w-full border-stone-200 p-3 bg-stone-50 outline-none"
              onChange={(e) => setFormData({...formData, guests: e.target.value})}
            >
              {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} Guests</option>)}
            </select>
          </div>
        </div>
        <button 
          type="submit" 
          className="w-full bg-stone-900 text-white p-4 uppercase tracking-widest text-sm hover:bg-black transition-colors"
        >
          Check Availability
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;