import { useState, useMemo, useEffect } from 'react';
import { ALL_MENU_ITEMS } from '../data/menuData';

const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop";

const ITEMS_PER_PAGE = 10;

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState(\"\");
  const [debouncedQuery, setDebouncedQuery] = useState(\"\");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState(\"All\");

  // Debounce search query
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(handler);
  }, [searchQuery]);

  const categories = [\"All\", ...new Set(ALL_MENU_ITEMS.map(item => item.category))];

  const filteredItems = useMemo(() => {
    return ALL_MENU_ITEMS.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(debouncedQuery.toLowerCase()) || 
                            item.desc.toLowerCase().includes(debouncedQuery.toLowerCase());
      const matchesCategory = activeCategory === \"All\" || item.category === activeCategory;
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
    setSearchQuery(\"\");
    setActiveCategory(\"All\");
    setCurrentPage(1);
  };

  return (
    <section id=\"menu\" aria-labelledby=\"menu-heading\" className=\"max-w-7xl mx-auto py-24 px-6 space-y-12 animate-in fade-in duration-1000\">
      <div className=\"text-center space-y-4\">
        <h2 id=\"menu-heading\" className=\"text-5xl font-serif italic text-amber-500\">Le Menu</h2>
        <p className=\"text-stone-500 uppercase tracking-[0.4em] text-xs\">Exquisite Gastronomy</p>
      </div>

      {/* Controls */}
      <div className=\"flex flex-col md:flex-row gap-6 justify-between items-center border-b border-white/10 pb-8\">
        <nav aria-label=\"Menu Categories\" className=\"flex flex-wrap justify-center gap-4\">
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
        
        <div className=\"relative w-full md:w-64\">
          <input
            type=\"text\"
            id=\"menu-search\"
            placeholder=\"Search our selection...\"
            aria-label=\"Search menu items\"
            value={searchQuery}
            onChange={handleSearchChange}
            className=\"w-full bg-stone-900/50 border border-white/10 rounded-full py-2 px-4 text-sm text-stone-300 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-colors\"
          />
        </div>
      </div>

      {/* Menu Grid - Live region for accessibility */}
      <div 
        key={`${activeCategory}-${currentPage}-${debouncedQuery}`}
        aria-live=\"polite\"
        className=\"grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 min-h-[600px]\"
      >
        {paginatedItems.length > 0 ? (
          paginatedItems.map((item) => (
            <article key={item.id} className=\"group flex flex-col space-y-4 animate-in slide-in-from-bottom-4 duration-700\">
              <div className=\"aspect-square overflow-hidden rounded-sm border border-white/5\">
                <img 
                  src={item.image} 
                  alt={`Photograph of ${item.name}`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
                  }}
                  className=\"w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 opacity-90 group-hover:opacity-100\"
                />
              </div>
              <div className=\"flex flex-col flex-grow space-y-2\">
                <div className=\"flex justify-between items-baseline\">
                  <h3 className=\"font-serif text-lg text-stone-200 group-hover:text-amber-500 transition-colors truncate pr-2\" title={item.name}>
                    {item.name}
                  </h3>
                  <span className=\"text-amber-500 font-serif text-sm flex-shrink-0\" aria-label={`Price: ${item.price}`}>{item.price}</span>
                </div>
                <p className=\"text-stone-500 text-xs italic font-light leading-relaxed line-clamp-3\">
                  {item.desc}
                </p>
                <div className=\"pt-2\">
                  <span className=\"text-[9px] px-2 py-0.5 border border-stone-800 text-stone-600 uppercase tracking-widest rounded-full\">
                    <span className=\"sr-only\">Category: </span>{item.category}
                  </span>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className=\"col-span-full text-center py-20 space-y-6\">
            <p className=\"text-stone-500 italic\">No items match your selection.</p>
            <button 
              onClick={resetFilters}
              className=\"px-6 py-2 border border-amber-500/50 text-amber-500 text-xs uppercase tracking-widest hover:bg-amber-500 hover:text-black transition-all outline-none focus-visible:ring-2 focus-visible:ring-amber-500\"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav aria-label=\"Menu pagination\" className=\"flex justify-center items-center gap-8 pt-12 border-t border-white/5\">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
            aria-label=\"Go to previous page\"
            className=\"text-stone-500 hover:text-amber-500 disabled:opacity-30 disabled:hover:text-stone-500 transition-colors uppercase text-xs tracking-widest outline-none focus-visible:underline\"
          >
            &larr; Previous
          </button>
          <span className=\"text-stone-400 text-sm font-serif\" aria-current=\"page\">
            Page {currentPage} <span className=\"text-stone-600 mx-2\" aria-hidden=\"true\">/</span> {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
            aria-label=\"Go to next page\"
            className=\"text-stone-500 hover:text-amber-500 disabled:opacity-30 disabled:hover:text-stone-500 transition-colors uppercase text-xs tracking-widest outline-none focus-visible:underline\"
          >
            Next &rarr;
          </button>
        </nav>
      )}
    </section>
  );
};

export default Menu;
