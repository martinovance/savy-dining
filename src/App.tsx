import { useState, useEffect } from 'react';
import ReservationForm from './components/ReservationForm';
import Menu from './components/Menu';
import AboutUs from './components/AboutUs';

function App() {
  const [scrolled, setScrolled] = useState(false);
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
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 px-6 py-4 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-2xl' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold tracking-tighter text-[#c9a55c]">SAVY DINING</h1>
          <div className="hidden md:flex space-x-8 text-xs uppercase tracking-[0.2em] font-medium text-white/70">
            <a href="#menu" className="hover:text-[#c9a55c] transition-colors">The Menu</a>
            <a href="#about" className="hover:text-[#c9a55c] transition-colors">About Us</a>
            <a href="#reservations" className="hover:text-[#c9a55c] transition-colors border-b border-[#c9a55c]/0 hover:border-[#c9a55c]">Reservations</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
          <a href="#reservations" className="btn-gold inline-block">
            Reserve Your Experience
          </a>
        </div>
      </section>

      {/* Content */}
      <main className="bg-[#0a0a0a]">
        <Menu />
        
        <AboutUs />

        <section id="reservations" className="py-24 px-6 relative overflow-hidden text-white">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#c9a55c] to-transparent"></div>
          
          <div className="max-w-4xl mx-auto">
            {bookingStep === 'success' && lastBooking ? (
              <div className="text-center py-20 space-y-6">
                <div className="w-20 h-20 border border-[#c9a55c] rounded-full flex items-center justify-center mx-auto mb-8">
                  <span className="text-3xl text-[#c9a55c]">✓</span>
                </div>
                <h3 className="text-4xl font-serif text-[#c9a55c]">Reservation Confirmed</h3>
                <div className="space-y-2 text-zinc-300">
                  <p className="text-xl">Thank you, {lastBooking.name}.</p>
                  <p className="text-zinc-500 max-w-md mx-auto">
                    A confirmation message has been queued for your WhatsApp number <span className="text-white">+{lastBooking.phone}</span>.
                  </p>
                  <div className="pt-4 text-sm uppercase tracking-widest text-[#c9a55c]">
                    {lastBooking.date} at {lastBooking.time} • {lastBooking.guests} Guests
                  </div>
                </div>
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
      </main>

      {/* Footer */}
      <footer className="bg-[#050505] pt-24 pb-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Logo and About */}
            <div className="col-span-1 md:col-span-1 space-y-6">
              <h1 className="text-2xl font-serif font-bold tracking-tighter text-[#c9a55c]">SAVY DINING</h1>
              <p className="text-stone-500 text-sm leading-relaxed font-light">
                An immersive culinary journey defined by elegance, innovation, and the pursuit of perfection.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-white text-xs uppercase tracking-[0.2em] font-medium">Quick Links</h4>
              <ul className="space-y-4 text-sm text-stone-500 font-light">
                <li><a href="#menu" className="hover:text-[#c9a55c] transition-colors">The Menu</a></li>
                <li><a href="#about" className="hover:text-[#c9a55c] transition-colors">Our Story</a></li>
                <li><a href="#reservations" className="hover:text-[#c9a55c] transition-colors">Reservations</a></li>
                <li><a href="#" className="hover:text-[#c9a55c] transition-colors">Private Dining</a></li>
              </ul>
            </div>

            {/* Location */}
            <div className="space-y-6">
              <h4 className="text-white text-xs uppercase tracking-[0.2em] font-medium">Location</h4>
              <address className="text-sm text-stone-500 font-light not-italic leading-relaxed">
                42 Culinary Avenue<br />
                Gastronomy District<br />
                London, UK
              </address>
              <div className="text-sm text-stone-500 font-light">
                T: +44 20 7946 0000
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-6">
              <h4 className="text-white text-xs uppercase tracking-[0.2em] font-medium">Newsletter</h4>
              <p className="text-xs text-stone-500 uppercase tracking-widest leading-relaxed">
                Join our circle for exclusive seasonal updates.
              </p>
              <form className="flex border-b border-stone-800 pb-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-transparent text-sm w-full outline-none text-stone-300 placeholder:text-stone-700"
                />
                <button type="submit" className="text-[#c9a55c] text-xs uppercase tracking-widest ml-4 hover:opacity-70 transition-opacity">
                  Join
                </button>
              </form>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-stone-600 text-[10px] uppercase tracking-[0.3em] font-light">
              © 2024 SAVY DINING. EXCELLENCE IN EVERY DETAIL.
            </div>
            <div className="flex space-x-12">
              <a href="#" className="text-stone-500 hover:text-white text-[10px] uppercase tracking-widest transition-colors">Instagram</a>
              <a href="#" className="text-stone-500 hover:text-white text-[10px] uppercase tracking-widest transition-colors">Facebook</a>
              <a href="#" className="text-stone-500 hover:text-white text-[10px] uppercase tracking-widest transition-colors">X (Twitter)</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
