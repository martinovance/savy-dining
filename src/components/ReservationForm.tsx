import { useState, FormEvent } from 'react';

const COUNTRY_CODES = [
  { code: '+1', iso: 'us' },
  { code: '+44', iso: 'gb' },
  { code: '+234', iso: 'ng' },
  { code: '+91', iso: 'in' },
  { code: '+61', iso: 'au' },
  { code: '+971', iso: 'ae' },
  { code: '+27', iso: 'za' },
  { code: '+33', iso: 'fr' },
  { code: '+49', iso: 'de' },
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
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+1',
    phone: '',
    guests: '2',
    date: '',
    time: '19:00'
  });

  const selectedCountry = COUNTRY_CODES.find(c => c.code === formData.countryCode) || COUNTRY_CODES[0];

  const sendAutomatedWhatsApp = async (to: string, details: any) => {
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
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
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
            <div className="flex space-x-2 relative">
              <div className="w-2/5 relative">
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="input-field w-full flex items-center justify-between"
                >
                  <span className="flex items-center space-x-2">
                    <img 
                      src={`https://flagcdn.com/w40/${selectedCountry.iso}.png`} 
                      alt=""
                      className="w-6 h-4 object-cover rounded-sm"
                    />
                    <span className="text-zinc-400">{selectedCountry.code}</span>
                  </span>
                  <span className="text-zinc-500 text-[10px]">▼</span>
                </button>
                
                {isOpen && (
                  <div className="absolute z-50 mt-1 w-full max-h-60 overflow-y-auto bg-zinc-950 border border-zinc-800 rounded shadow-2xl py-1 no-scrollbar">
                    {COUNTRY_CODES.map(c => (
                      <button
                        key={c.code}
                        type="button"
                        className="w-full flex items-center space-x-3 px-3 py-2 hover:bg-zinc-900 text-left transition-colors"
                        onClick={() => {
                          setFormData({...formData, countryCode: c.code});
                          setIsOpen(false);
                        }}
                      >
                        <img 
                          src={`https://flagcdn.com/w40/${c.iso}.png`} 
                          alt=""
                          className="w-6 h-4 object-cover rounded-sm"
                        />
                        <span className="text-xs text-zinc-300 ml-auto">{c.code}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <input 
                required 
                type="tel" 
                className="input-field w-3/5" 
                placeholder="10 digits"
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
