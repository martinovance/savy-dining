export default function Footer() {
  return (
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
  );
}
