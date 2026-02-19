import { Camera } from 'lucide-react';

interface GalleryItem {
  id: number;
  url: string;
  category: string;
  title: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000',
    category: 'Ambiance',
    title: 'The Main Hall'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000',
    category: 'Signature',
    title: 'Wagyu Beef'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1470333732907-3f17ca42f9a1?auto=format&fit=crop&q=80&w=1000',
    category: 'Cocktails',
    title: 'Midnight Muse'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1550966841-3ee39b27bc8c?auto=format&fit=crop&q=80&w=1000',
    category: 'Signature',
    title: 'Lobster Risotto'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1544145945-f904253db0ad?auto=format&fit=crop&q=80&w=1000',
    category: 'Ambiance',
    title: 'Private Suites'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=1000',
    category: 'Cocktails',
    title: 'The Cellar'
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.4em] text-[#c9a55c]">Visual Journey</span>
            <h2 className="text-5xl font-serif text-white">Atmosphere & Artistry</h2>
          </div>
          <div className="flex gap-4">
             <div className="flex items-center gap-2 text-[#c9a55c]/60 text-[10px] uppercase tracking-widest border border-[#c9a55c]/20 px-4 py-2 rounded-full">
                <Camera size={14} />
                <span>Gallery</span>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="group relative h-[450px] overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
              <img 
                src={item.url} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#c9a55c] opacity-0 group-hover:opacity-100 transition-opacity duration-500 mb-2 block">
                  {item.category}
                </span>
                <h3 className="text-2xl font-serif text-white">{item.title}</h3>
              </div>
              <div className="absolute inset-0 border border-[#c9a55c]/0 group-hover:border-[#c9a55c]/20 transition-all duration-500 pointer-events-none z-30 m-4"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
