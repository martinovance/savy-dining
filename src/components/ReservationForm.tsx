import { useState, FormEvent } from 'react';

const COUNTRY_CODES = [
  { code: '+1', name: 'USA', flag: '🇺🇸' },
  { code: '+44', name: 'UK', flag: '🇬🇧' },
  { code: '+234', name: 'Nigeria', flag: '🇳🇬' },
  { code: '+91', name: 'India', flag: '🇮🇳' },
  { code: '+61', name: 'Australia', flag: '🇦🇺' },
  { code: '+971', name: 'UAE', flag: '🇦🇪' },
  { code: '+27', name: 'South Africa', flag: '🇿🇦' },
  { code: '+33', name: 'France', flag: '🇫🇷' },
  { code: '+49', name: 'Germany', flag: '🇩🇪' },
];

interface BookingDetails {
  name: string;
  date: string;
  time: string;
  guests: string;
  phone: string;
}

const ReservationForm = ({ onComplete }: { onComplete: (details: BookingDetails) => void }) => {
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

  const sendAutomatedWhatsApp = async (to: string, details: any) => {
    // Simulated WhatsApp API logic
    console.log('Initiating automated WhatsApp delivery via Service Provider...');
    const payload = {
      from: 'whatsapp:+14155238886',
      to: `whatsapp:${to}`,
      body: `Reservation Confirmed for ${details.name}! Date: ${details.date}, Time: ${details.time}, Guests: ${details.guests}. See you at Savy Dining!`
    };
    console.log('API Payload Prepared (Simulated):', payload);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      return { success: true };
    } catch (error) {
      console.error('API delivery failed:', error);
      return { success: false };
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    const fullNumber = formData.countryCode.replace('+', '') + formData.phone.replace(/\D/g, '');
    const result = await sendAutomatedWhatsApp(fullNumber, formData);

    setLoading(false);
    if (result.success) {
      onComplete({
        name: formData.name,
        date: formData.date,
        time: formData.time,
        guests: formData.guests,
        phone: fullNumber
      });
    }
  };

  return (
    <div className="glass-card p-8 md:p-12 max-w-2xl mx-auto relative">
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
              {[1, 2, 3, 4, 5, 6].map(n => <option key={n} value={n.toString()}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
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
                className="input-field w-2/5"
                value={formData.countryCode}
                onChange={(e) => setFormData({...formData, countryCode: e.target.value})}
              >
                {COUNTRY_CODES.map(c => (
                  <option key={c.code} value={c.code}>
                    {c.flag} {c.code}
                  </option>
                ))}
              </select>
              <input 
                required 
                type="tel" 
                className="input-field w-3/5" 
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
            <span className="animate-pulse">Sending Automated Confirmation...</span>
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
