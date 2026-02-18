import { useState, useEffect } from 'react';
import ReservationForm from './components/ReservationForm';
import Menu from './components/Menu';
import AboutUs from './components/AboutUs';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [bookingStep, setBookingStep] = useState<'idle' | 'success'>('idle');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            {bookingStep === 'success' ? (
              <div className="text-center py-20 space-y-6">
                <div className="w-20 h-20 border border-[#c9a55c] rounded-full flex items-center justify-center mx-auto mb-8">
                  <span className="text-3xl text-[#c9a55c]">✓</span>
                </div>
                <h3 className="text-4xl font-serif">Reservation Confirmed</h3>
                <p className="text-zinc-500 max-w-md mx-auto">
                  A confirmation email has been sent. We look forward to hosting you for an unforgettable evening.
                </p>
                <button 
                  onClick={() => setBookingStep('idle')}
                  className="text-[#c9a55c] hover:underline uppercase text-xs tracking-widest"
                >
                  Make another booking
                </button>
              </div>
            ) : (
              <ReservationForm onComplete={() => setBookingStep('success')} />
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm">
          <p>© 2024 SAVY DINING. ALL RIGHTS RESERVED.</p>
          <div className="flex space-x-6 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
