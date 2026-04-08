import { useState, useEffect } from 'react';
import ReservationForm from '../components/ReservationForm';
import Menu from '../components/Menu';
import AboutUs from '../components/AboutUs';
import Gallery from '../components/Gallery';

export default function Home() {
  const [, setScrolled] = useState(false);
  const [bookingStep, setBookingStep] = useState<'idle' | 'success'>('idle');
  const [lastBooking, setLastBooking] = useState<{ name: string; date: string; time: string; guests: string; phone: string } | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookingComplete = (details: { name: string; date: string; time: string; guests: string; phone: string }) => {
    setLastBooking(details);
    setBookingStep('success');
  };

  return (
    <div>
      <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#0a0a0a] z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover scale-110"
            alt="Interior"
          />
        </div>
        
        <div className="relative z-20 text-center px-6">
          <span className="block text-xs uppercase tracking-[0.4em] text-[#c9a55c] mb-6 animate-fade-in">Established 2024</span>
          <h2 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-tight">
            The Art of <br /> <span className="italic text-[#c9a55c]">Fine Dining</span>
          </h2>
          <a href="#reservations" className="bg-[#c9a55c] text-black px-8 py-4 text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#b8944d] transition-all inline-block">
            Reserve Your Experience
          </a>
        </div>
      </section>

      <Menu />
      <Gallery />
      <AboutUs />

      <section id="reservations" className="py-24 px-6 relative overflow-hidden text-white bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto">
          {bookingStep === 'success' && lastBooking ? (
            <div className="text-center py-20 space-y-6">
              <div className="w-20 h-20 border border-[#c9a55c] rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-3xl text-[#c9a55c]">✓</span>
              </div>
              <h3 className="text-4xl font-serif text-[#c9a55c]">Reservation Confirmed</h3>
              <p className="text-xl">Thank you, {lastBooking.name}.</p>
              <button 
                onClick={() => setBookingStep('idle')}
                className="mt-8 text-zinc-500 hover:text-[#c9a55c] uppercase text-xs tracking-[0.2em] transition-colors"
              >
                Make another booking
              </button>
            </div>
          ) : (
            <ReservationForm onComplete={handleBookingComplete} />
          )}
        </div>
      </section>
    </div>
  );
}
