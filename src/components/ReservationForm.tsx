import { useState, FormEvent } from 'react';

const COUNTRY_CODES = [
  { code: '+1', name: 'USA/Canada' },
  { code: '+44', name: 'UK' },
  { code: '+234', name: 'Nigeria' },
  { code: '+91', name: 'India' },
  { code: '+61', name: 'Australia' },
  { code: '+971', name: 'UAE' },
  { code: '+27', name: 'South Africa' },
  { code: '+33', name: 'France' },
  { code: '+49', name: 'Germany' },
];

const ReservationForm = ({ onComplete }: { onComplete: () => void }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+1',
    phone: '',
    guests: '2',
    date: '',
    time: '19:00'
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Construct WhatsApp message
    const fullNumber = formData.countryCode.replace('+', '') + formData.phone.replace(/\D/g, '');
    const message = `*Reservation Confirmation - Savy Dining*\n\n` +
                    `Hello ${formData.name}! \n` +
                    `We are pleased to confirm your reservation.\n\n` +
                    `*Details:*\n` +
                    `📅 Date: ${formData.date}\n` +
                    `⏰ Time: ${formData.time}\n` +
                    `👥 Guests: ${formData.guests}\n\n` +
                    `We look forward to hosting you!`;
    
    const whatsappUrl = `https://wa.me/${fullNumber}?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setLoading(false);
      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');
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
            <input 
              required 
              type="text" 
              className="input-field" 
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-zinc-500">Guests</label>
            <select 
              className="input-field"
              value={formData.guests}
              onChange={(e) => setFormData({...formData, guests: e.target.value})}
            >
              {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-zinc-500">Email Address</label>
            <input 
              required 
              type="email" 
              className="input-field" 
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-zinc-500">WhatsApp Number</label>
            <div className="flex space-x-2">
              <select 
                className="input-field w-1/3"
                value={formData.countryCode}
                onChange={(e) => setFormData({...formData, countryCode: e.target.value})}
              >
                {COUNTRY_CODES.map(c => <option key={c.code} value={c.code}>{c.code} ({c.name})</option>)}
              </select>
              <input 
                required 
                type="tel" 
                className="input-field w-2/3" 
                placeholder="000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-zinc-500">Date</label>
            <input 
              required 
              type="date" 
              className="input-field"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-zinc-500">Time</label>
            <select 
              className="input-field"
              value={formData.time}
              onChange={(e) => setFormData({...formData, time: e.target.value})}
            >
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
