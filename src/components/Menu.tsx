import React from 'react';

const menuItems = [
  {
    category: "Appetizers",
    items: [
      { name: "Wagyu Carpaccio", price: "$34", desc: "Truffle vinaigrette, pickled shimeji, parmesan crisps" },
      { name: "Bluefin Tuna Tartare", price: "$28", desc: "Avocado mousse, yuzu-soy, nori crackers" }
    ]
  },
  {
    category: "Main Courses",
    items: [
      { name: "Miso-Glazed Chilean Sea Bass", price: "$52", desc: "Baby bok choy, ginger-shiitake dashi" },
      { name: "Herb-Crusted Lamb Rack", price: "$48", desc: "Mint pea purée, heirloom carrots, red wine jus" }
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Dark Chocolate Fondant", price: "$16", desc: "Salted caramel core, Tahitian vanilla bean ice cream" },
      { name: "Deconstructed Lemon Tart", price: "$14", desc: "Lemon curd, sable crumble, toasted meringue" }
    ]
  }
];

const Menu = () => {
  return (
    <section id="menu" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#c9a55c] mb-4">The Menu</h2>
          <div className="w-24 h-px bg-[#c9a55c]/40 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-1 gap-12">
          {menuItems.map((section) => (
            <div key={section.category} className="space-y-8">
              <h3 className="text-2xl font-serif text-white/90 border-b border-white/5 pb-2">
                {section.category}
              </h3>
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                {section.items.map((item) => (
                  <div key={item.name} className="group cursor-default">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-lg font-medium text-white group-hover:text-[#c9a55c] transition-colors">
                        {item.name}
                      </h4>
                      <span className="text-[#c9a55c] font-semibold">{item.price}</span>
                    </div>
                    <p className="text-zinc-500 text-sm italic">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
