export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif text-[#c9a55c] mb-6">SAVY DINING</h3>
            <p className="text-white/50 max-w-sm leading-relaxed text-sm">
              An avant-garde culinary destination where tradition meets innovation. 
              Experience the finest ingredients curated by our master chefs.
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#c9a55c] mb-6">Location</h4>
            <p className="text-white/50 text-sm leading-relaxed">
              123 Culinary Avenue<br />
              Design District<br />
              New York, NY 10001
            </p>
          </div>
          
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#c9a55c] mb-6">Hours</h4>
            <p className="text-white/50 text-sm leading-relaxed">
              Mon - Thu: 5pm - 10pm<br />
              Fri - Sat: 5pm - 11pm<br />
              Sun: 4pm - 9pm
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
            © 2024 SAVY DINING. ALL RIGHTS RESERVED.
          </p>
          <div className="flex space-x-6 text-[10px] uppercase tracking-[0.2em]">
            <a href="#" className="text-white/30 hover:text-[#c9a55c] transition-colors">Privacy</a>
            <a href="#" className="text-white/30 hover:text-[#c9a55c] transition-colors">Terms</a>
            <a href="#" className="text-white/30 hover:text-[#c9a55c] transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
