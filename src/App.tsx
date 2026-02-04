import React, { useState } from 'react';
import ReservationForm from './components/ReservationForm';
import Menu from './components/Menu';
import PaymentProcessor from './components/PaymentProcessor';

function App() {
  const [view, setView] = useState<'home' | 'menu' | 'book' | 'pay'>('home');

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      <nav className="p-6 flex justify-between items-center border-b border-stone-200 bg-white sticky top-0 z-10">
        <h1 className="text-2xl font-serif font-bold tracking-tight text-amber-900 cursor-pointer" onClick={() => setView('home')}>
          SAVY DINING
        </h1>
        <div className="space-x-8 text-sm font-medium uppercase tracking-widest">
          <button onClick={() => setView('menu')} className="hover:text-amber-700 transition-colors">Menu</button>
          <button onClick={() => setView('book')} className="hover:text-amber-700 transition-colors">Reservations</button>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto py-12 px-6">
        {view === 'home' && (
          <div className="text-center space-y-8 py-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-5xl font-serif italic text-stone-800">Exquisite flavors, timeless moments.</h2>
            <p className="text-stone-500 max-w-xl mx-auto text-lg leading-relaxed">
              Experience the pinnacle of fine dining where culinary artistry meets legendary hospitality.
            </p>
            <div className="pt-8">
              <button 
                onClick={() => setView('book')}
                className="bg-amber-900 text-white px-10 py-4 rounded-none hover:bg-amber-800 transition-all shadow-xl hover:shadow-2xl"
              >
                Book Your Table
              </button>
            </div>
          </div>
        )}

        {view === 'menu' && <Menu />}
        {view === 'book' && <ReservationForm onComplete={() => setView('pay')} />}
        {view === 'pay' && <PaymentProcessor />}
      </main>

      <footer className="border-t border-stone-200 mt-20 py-12 text-center text-stone-400 text-xs uppercase tracking-widest">
        &copy; 2024 Savy Dining Group. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;