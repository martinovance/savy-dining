import { useState, FormEvent } from 'react';

const ReservationForm = ({ onComplete }: { onComplete: () => void }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onComplete();
    }, 1500);
  };

  return (
    <div className="glass-card p-8 md:p-12 max-w-2xl mx-auto">
      <h3 className="text-3xl font-serif text-center mb-8">Secure Your Table</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-zinc-500">Full Name</label>
            <input required type="text" className="input-field" placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-zinc-500">Guests</label>
            <select className="input-field">
              {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-zinc-500">Date</label>
            <input required type="date" className="input-field" />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-zinc-500">Time</label>
            <select className="input-field">
              {['18:00', '19:00', '20:00', '21:00'].map(t => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>

        <button 
          disabled={loading}
          className="btn-gold w-full mt-4 flex items-center justify-center space-x-2 group"
        >
          {loading ? (
            <span className="animate-pulse">Confirming...</span>
          ) : (
            <>
              <span>Book Reservation</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
