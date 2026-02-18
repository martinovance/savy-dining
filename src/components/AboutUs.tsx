
const AboutUs = () => {
  return (
    <section id="about" className="py-24 px-6 bg-stone-950 text-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Images Grid */}
          <div className="relative group">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=800&auto=format&fit=crop" 
                  alt="Kitchen Detail" 
                  className="rounded-sm object-cover h-64 w-full grayscale hover:grayscale-0 transition-all duration-700"
                />
                <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop" 
                  alt="Dining Room" 
                  className="rounded-sm object-cover h-80 w-full"
                />
              </div>
              <div className="pt-12 space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=800&auto=format&fit=crop" 
                  alt="Wine Cellar" 
                  className="rounded-sm object-cover h-80 w-full"
                />
                <img 
                  src="https://images.unsplash.com/photo-1554679665-f5537f187268?q=80&w=800&auto=format&fit=crop" 
                  alt="Signature Dish" 
                  className="rounded-sm object-cover h-64 w-full grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-amber-500/30 -z-10 hidden md:block"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-l border-t border-amber-500/30 -z-10 hidden md:block"></div>
          </div>

          {/* Text Content */}
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-amber-500 text-xs uppercase tracking-[0.4em] block">Our Story</span>
              <h2 className="text-5xl font-serif italic text-white leading-tight">
                Where Tradition Meets <br /> Modern Gastronomy
              </h2>
            </div>

            <div className="space-y-6 text-stone-400 font-light leading-relaxed">
              <p>
                Founded in 2024, <span className="text-stone-200">Savy Dining</span> was born from a simple yet profound vision: to create a sanctuary where the art of cuisine and the warmth of hospitality converge. We believe that a meal is more than just sustenance; it is a narrative of flavors, a moment of connection, and a celebration of life\'s finest details.
              </p>
              <p>
                Our culinary team, led by world-class artisans, sources the rarest ingredients from local sustainable farms and global specialists to craft dishes that are both visually stunning and emotionally resonant.
              </p>
            </div>

            {/* Features/What we offer */}
            <div className="grid sm:grid-cols-2 gap-8 pt-6 border-t border-white/5">
              <div className="space-y-3">
                <h4 className="text-amber-500 font-serif text-lg italic">Private Enclaves</h4>
                <p className="text-xs text-stone-500 uppercase tracking-widest leading-loose">
                  Exclusive dining rooms for intimate gatherings and celebrations.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-amber-500 font-serif text-lg italic">The Wine Vault</h4>
                <p className="text-xs text-stone-500 uppercase tracking-widest leading-loose">
                  A curated collection of over 500 vintage labels from around the globe.
                </p>
              </div>
            </div>

            {/* Location & Hours */}
            <div className="bg-white/5 p-8 rounded-sm space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-amber-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h5 className="text-white text-sm uppercase tracking-widest mb-1">Location</h5>
                  <p className="text-stone-400 text-sm">42 Culinary Avenue, Gastronomy District, London</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-amber-500 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <h5 className="text-white text-sm uppercase tracking-widest mb-1">Service Hours</h5>
                  <p className="text-stone-400 text-sm">Tue – Sun: 18:00 — 23:30 <br /> (Monday Closed)</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
