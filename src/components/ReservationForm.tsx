import { useState, FormEvent } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

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

const ReservationForm = ({ onComplete }: { onComplete: () => void }) => {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+1',
    phone: '',
    guests: '2',
    date: '',
    time: '19:00'
  });

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 5000);
  };

  const sendAutomatedWhatsApp = async (to: string, details: any) => {
    // INFO: This function currently MOCKS the WhatsApp integration.
    // To receive actual messages, a real provider (Twilio, Meta, or Vonage) 
    // must be connected to a production backend. 
    
    console.log('Initiating automated WhatsApp delivery via Service Provider...');
    
    const payload = {
      from: 'whatsapp:+14155238886', // Twilio Sandbox Number
      to: `whatsapp:${to}`,
      body: `Reservation Confirmed for ${details.name}! Date: ${details.date}, Time: ${details.time}, Guests: ${details.guests}. See you at Savy Dining!`
    };

    console.log('API Payload Prepared (Simulated):', payload);

    try {
      // Mocking the API response delay
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
      showToast(`Success! A confirmation message has been queued for +${fullNumber}.`, 'success');
      setTimeout(() => onComplete(), 2000);
    } else {
      showToast('There was an issue sending your confirmation. Please try again.', 'error');
    }
  };

  return (
    <div className="glass-card p-8 md:p-12 max-w-2xl mx-auto relative">
      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-24 right-6 z-[100] flex items-center space-x-3 p-4 rounded-lg shadow-2xl border transition-all animate-in fade-in slide-in-from-top-4 ${
          toast.type === 'success' ? 'bg-zinc-900 border-[#c9a55c] text-white' : 'bg-red-950 border-red-500 text-white'
        }`}>
          {toast.type === 'success' ? (
            <CheckCircle2 className="text-[#c9a55c] w-5 h-5" />
          ) : (
            <XCircle className="text-red-500 w-5 h-5" />
          )}
          <p className="text-sm font-medium">{toast.message}</p>
        </div>
      )}

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
