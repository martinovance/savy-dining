const Menu = () => {
  const items = [
    { name: "Wagyu Carpaccio", price: "$34", desc: "Truffle vinaigrette, parmesan crisp, micro-greens." },
    { name: "Lobster Thermidor", price: "$68", desc: "Brandy cream, gruyère crust, butter-poached claw." },
    { name: "Pan-Seared Scallops", price: "$42", desc: "Cauliflower purée, pancetta, lemon herb oil." },
    { name: "Dry-Aged Ribeye", price: "$85", desc: "32-day aged, bone-in, roasted marrow butter." }
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-12 animate-in fade-in duration-500">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-serif text-amber-900">Le Menu</h2>
        <p className="text-stone-400 italic text-sm">Curated Selection for the Season</p>
      </div>
      <div className="grid gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex justify-between items-start border-b border-stone-100 pb-6 group">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-800 group-hover:text-amber-700 transition-colors">{item.name}</h3>
              <p className="text-sm text-stone-500 italic">{item.desc}</p>
            </div>
            <span className="font-serif text-lg text-stone-900">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;