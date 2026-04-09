import { Routes, Route, useNavigate } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import Footer from './components/Footer';

interface AppProps {
  isAuthEnabled?: boolean;
}

function App({ isAuthEnabled = true }: AppProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-md py-4 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 
            className="text-2xl font-serif font-bold tracking-tighter text-[#c9a55c] cursor-pointer"
            onClick={() => navigate('/')}
          >
            SAVY DINING
          </h1>
          
          <div className="flex items-center space-x-8 text-[10px] uppercase tracking-[0.2em] font-medium">
            <a href="/savy-dining/#menu" className="text-white/70 hover:text-[#c9a55c] transition-colors">Menu</a>
            
            {isAuthEnabled ? (
              <>
                <SignedIn>
                  <button onClick={() => navigate('/dashboard')} className="text-white/70 hover:text-[#c9a55c] transition-colors">Dashboard</button>
                  <button onClick={() => navigate('/orders')} className="text-white/70 hover:text-[#c9a55c] transition-colors">Orders</button>
                  <UserButton afterSignOutUrl="/savy-dining/" />
                </SignedIn>
                
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="text-[#c9a55c] border border-[#c9a55c]/30 px-4 py-2 hover:bg-[#c9a55c] hover:text-black transition-all">
                      Sign In
                    </button>
                  </SignInButton>
                </SignedOut>
              </>
            ) : (
              <span className="text-white/30 italic">Auth Disabled</span>
            )}
          </div>
        </div>
      </nav>

      <main className="pt-20 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
