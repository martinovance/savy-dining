const menuItems = [
  {
    category: "Appetizers",
    items: [
      { name: "Wagyu Carpaccio", price: "$34", desc: "Truffle vinaigrette, parmesan crisp, micro-greens." },
      { name: "Pan-Seared Scallops", price: "$42", desc: "Cauliflower purée, pancetta, lemon herb oil." }
    ]
  },
  {
    category: "Main Courses",
    items: [
      { name: "Lobster Thermidor", price: "$68", desc: "Brandy cream, Gruyère crust, butter-poached claw." },
      { name: "Dry-Aged Ribeye", price: "$85", desc: "32-day aged, bone-in, roasted marrow butter." }
    ]
  }
];

const Menu = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-20 animate-in fade-in duration-1000">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-serif italic text-amber-500">Le Menu</h2>
        <p className="text-stone-500 uppercase tracking-[0.3em] text-xs">A Symphony of Flavors</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-16">
        {menuItems.map((section, idx) => (
          <div key={idx} className="space-y-8">
            <h3 className="text-xl font-serif text-stone-300 border-b border-white/10 pb-4">{section.category}</h3>
            <div className="space-y-8">
              {section.items.map((item, i) => (
                <div key={i} className="group cursor-default">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="font-serif text-lg text-stone-200 group-hover:text-amber-500 transition-colors">{item.name}</h4>
                    <span className="text-amber-500/80 font-serif">{item.price}</span>
                  </div>
                  <p className="text-stone-500 text-sm italic font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
