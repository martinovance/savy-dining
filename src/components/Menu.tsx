const menuItems = [
  {
    category: "Appetizers",
    items: [
      { 
        name: "Wagyu Carpaccio", 
        price: "$34", 
        desc: "Truffle vinaigrette, parmesan crisp, micro-greens.",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop"
      },
      { 
        name: "Pan-Seared Scallops", 
        price: "$42", 
        desc: "Cauliflower purée, pancetta, lemon herb oil.",
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=800&auto=format&fit=crop"
      }
    ]
  },
  {
    category: "Main Courses",
    items: [
      { 
        name: "Lobster Thermidor", 
        price: "$68", 
        desc: "Brandy cream, Gruyère crust, butter-poached claw.",
        image: "https://images.unsplash.com/photo-1551248429-4228d5fe73bc?q=80&w=800&auto=format&fit=crop"
      },
      { 
        name: "Dry-Aged Ribeye", 
        price: "$85", 
        desc: "32-day aged, bone-in, roasted marrow butter.",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=800&auto=format&fit=crop"
      }
    ]
  }
];

const Menu = () => {
  return (
    <div id="menu" className="max-w-4xl mx-auto space-y-20 py-24 px-6 animate-in fade-in duration-1000">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-serif italic text-amber-500">Le Menu</h2>
        <p className="text-stone-500 uppercase tracking-[0.3em] text-xs">A Symphony of Flavors</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-16">
        {menuItems.map((section, idx) => (
          <div key={idx} className="space-y-8">
            <h3 className="text-xl font-serif text-stone-300 border-b border-white/10 pb-4">{section.category}</h3>
            <div className="space-y-12">
              {section.items.map((item, i) => (
                <div key={i} className="group cursor-default">
                  <div className="aspect-[16/9] overflow-hidden rounded-sm mb-4 border border-white/5">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    />
                  </div>
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
