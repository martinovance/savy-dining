import { useState, useMemo, useEffect } from 'react';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop";

const ALL_MENU_ITEMS = [
  {
    id: 1,
    category: "Appetizers",
    name: "Wagyu Carpaccio",
    price: "$34",
    desc: "Truffle vinaigrette, parmesan crisp, micro-greens.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "Appetizers",
    name: "Pan-Seared Scallops",
    price: "$42",
    desc: "Cauliflower purée, pancetta, lemon herb oil.",
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "Appetizers",
    name: "Burrata & Heirloom Tomatoes",
    price: "$28",
    desc: "Aged balsamic, basil oil, toasted sourdough.",
    image: "https://images.unsplash.com/photo-1592417817098-8fd3d9ebc4a5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    category: "Appetizers",
    name: "Crispy Calamari",
    price: "$26",
    desc: "Spiced flour, lemon aioli, fresh parsley.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    category: "Main Courses",
    name: "Lobster Thermidor",
    price: "$68",
    desc: "Brandy cream, Gruyère crust, butter-poached claw.",
    image: "https://images.unsplash.com/photo-1590759668628-05b0fc34bb70?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    category: "Main Courses",
    name: "Dry-Aged Ribeye",
    price: "$85",
    desc: "32-day aged, bone-in, roasted marrow butter.",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 7,
    category: "Main Courses",
    name: "Wild Mushroom Risotto",
    price: "$45",
    desc: "Arborio rice, porcini, truffle oil, pecorino.",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 8,
    category: "Main Courses",
    name: "Herb-Crusted Lamb Rack",
    price: "$72",
    desc: "Minted pea purée, fondant potatoes, red wine jus.",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 9,
    category: "Main Courses",
    name: "Pan-Roasted Sea Bass",
    price: "$58",
    desc: "Asparagus spears, saffron velouté, dill oil.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 10,
    category: "Desserts",
    name: "Valrhona Chocolate Fondant",
    price: "$18",
    desc: "Salted caramel center, Madagascar vanilla bean ice cream.",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 11,
    category: "Desserts",
    name: "Classic Crème Brûlée",
    price: "$16",
    desc: "Tahitian vanilla, caramelized sugar, fresh berries.",
    image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 12,
    category: "Signature Cocktails",
    name: "Smoked Old Fashioned",
    price: "$22",
    desc: "Bourbon, maple syrup, bitters, cedar wood smoke.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop"
  }
];

const ITEMS_PER_PAGE = 10;

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("All");

  // Debounce search query
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(handler);
  }, [searchQuery]);

  const categories = ["All", ...new Set(ALL_MENU_ITEMS.map(item => item.category))];

  const filteredItems = useMemo(() => {
    return ALL_MENU_ITEMS.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(debouncedQuery.toLowerCase()) || 
                            item.desc.toLowerCase().includes(debouncedQuery.toLowerCase());
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [debouncedQuery, activeCategory]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setSearchQuery("");
    setActiveCategory("All");
    setCurrentPage(1);
  };

  return (
    <section id="menu" aria-labelledby="menu-heading" className="max-w-7xl mx-auto py-24 px-6 space-y-12 animate-in fade-in duration-1000">
      <div className="text-center space-y-4">
        <h2 id="menu-heading" className="text-5xl font-serif italic text-amber-500">Le Menu</h2>
        <p className="text-stone-500 uppercase tracking-[0.4em] text-xs">Exquisite Gastronomy</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center border-b border-white/10 pb-8">
        <nav aria-label="Menu Categories" className="flex flex-wrap justify-center gap-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              aria-pressed={activeCategory === cat}
              className={`px-4 py-1 text-sm tracking-widest uppercase transition-colors outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 ${
                activeCategory === cat ? 'text-amber-500 border-b border-amber-500' : 'text-stone-500 hover:text-stone-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </nav>
        
        <div className="relative w-full md:w-64">
          <input
            type="text"
            id="menu-search"
            placeholder="Search our selection..."
            aria-label="Search menu items"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full bg-stone-900/50 border border-white/10 rounded-full py-2 px-4 text-sm text-stone-300 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-colors"
          />
        </div>
      </div>

      {/* Menu Grid - Live region for accessibility */}
      <div 
        key={`${activeCategory}-${currentPage}-${debouncedQuery}`}
        aria-live="polite"
        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 min-h-[600px]"
      >
        {paginatedItems.length > 0 ? (
          paginatedItems.map((item) => (
            <article key={item.id} className="group flex flex-col space-y-4 animate-in slide-in-from-bottom-4 duration-700">
              <div className="aspect-square overflow-hidden rounded-sm border border-white/5">
                <img 
                  src={item.image} 
                  alt={`Photograph of ${item.name}`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
                  }}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="flex flex-col flex-grow space-y-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-serif text-lg text-stone-200 group-hover:text-amber-500 transition-colors truncate pr-2" title={item.name}>
                    {item.name}
                  </h3>
                  <span className="text-amber-500 font-serif text-sm flex-shrink-0" aria-label={`Price: ${item.price}`}>{item.price}</span>
                </div>
                <p className="text-stone-500 text-xs italic font-light leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
                <div className="pt-2">
                  <span className="text-[9px] px-2 py-0.5 border border-stone-800 text-stone-600 uppercase tracking-widest rounded-full">
                    <span className="sr-only">Category: </span>{item.category}
                  </span>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="col-span-full text-center py-20 space-y-6">
            <p className="text-stone-500 italic">No items match your selection.</p>
            <button 
              onClick={resetFilters}
              className="px-6 py-2 border border-amber-500/50 text-amber-500 text-xs uppercase tracking-widest hover:bg-amber-500 hover:text-black transition-all outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav aria-label="Menu pagination" className="flex justify-center items-center gap-8 pt-12 border-t border-white/5">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
            aria-label="Go to previous page"
            className="text-stone-500 hover:text-amber-500 disabled:opacity-30 disabled:hover:text-stone-500 transition-colors uppercase text-xs tracking-widest outline-none focus-visible:underline"
          >
            &larr; Previous
          </button>
          <span className="text-stone-400 text-sm font-serif" aria-current="page">
            Page {currentPage} <span className="text-stone-600 mx-2" aria-hidden="true">/</span> {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
            aria-label="Go to next page"
            className="text-stone-500 hover:text-amber-500 disabled:opacity-30 disabled:hover:text-stone-500 transition-colors uppercase text-xs tracking-widest outline-none focus-visible:underline"
          >
            Next &rarr;
          </button>
        </nav>
      )}
    </section>
  );
};

export default Menu;
