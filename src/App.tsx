import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import { Menu, X } from 'lucide-react';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', path: '/', type: 'button' },
    { name: 'MENU', path: '#menu', type: 'anchor' },
  ];

  const authNavItems = [
    { name: 'DASHBOARD', path: '/dashboard' },
    { name: 'ORDERS', path: '/orders' },
  ];

  const handleNavigation = (path: string, type: string = 'button') => {
    setIsMenuOpen(false);
    if (type === 'anchor') {
      if (window.location.pathname !== '/savy-dining/') {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById('menu');
          el?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById('menu');
        el?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <nav className="fixed w-full z-50 bg-black/95 backdrop-blur-md py-4 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 
            className="text-2xl font-serif font-bold tracking-tighter text-[#c9a55c] cursor-pointer"
            onClick={() => handleNavigation('/')}
          >
            SAVY DINING
          </h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-[10px] uppercase tracking-[0.2em] font-medium">
            {navItems.map((item) => (
              <button 
                key={item.name}
                onClick={() => handleNavigation(item.path, item.type)} 
                className="text-white/70 hover:text-[#c9a55c] transition-colors"
              >
                {item.name}
              </button>
            ))}
            
            {isAuthEnabled ? (
              <>
                <SignedIn>
                  {authNavItems.map((item) => (
                    <button 
                      key={item.name}
                      onClick={() => handleNavigation(item.path)} 
                      className="text-white/70 hover:text-[#c9a55c] transition-colors"
                    >
                      {item.name}
                    </button>
                  ))}
                  <UserButton 
                    afterSignOutUrl="/savy-dining/"
                    signInUrl="/savy-dining/"
                  />
                </SignedIn>
                
                <SignedOut>
                  <SignInButton 
                    mode="modal"
                    afterSignInUrl="/savy-dining/dashboard"
                    afterSignUpUrl="/savy-dining/dashboard"
                  >
                    <button className="text-[#c9a55c] border border-[#c9a55c]/30 px-4 py-2 hover:bg-[#c9a55c] hover:text-black transition-all uppercase tracking-widest">
                      SIGN IN
                    </button>
                  </SignInButton>
                </SignedOut>
              </>
            ) : (
              <span className="text-white/30 italic uppercase">AUTH DISABLED</span>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <SignedIn>
              <UserButton 
                afterSignOutUrl="/savy-dining/"
                signInUrl="/savy-dining/"
              />
            </SignedIn>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#c9a55c] p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 border-b border-white/5 py-8 px-6 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col space-y-6 text-center text-xs uppercase tracking-[0.3em] font-medium">
              {navItems.map((item) => (
                <button 
                  key={item.name}
                  onClick={() => handleNavigation(item.path, item.type)} 
                  className="text-white/70 hover:text-[#c9a55c] transition-colors py-2"
                >
                  {item.name}
                </button>
              ))}
              
              {isAuthEnabled && (
                <>
                  <SignedIn>
                    {authNavItems.map((item) => (
                      <button 
                        key={item.name}
                        onClick={() => handleNavigation(item.path)} 
                        className="text-white/70 hover:text-[#c9a55c] transition-colors py-2"
                      >
                        {item.name}
                      </button>
                    ))}
                  </SignedIn>
                  
                  <SignedOut>
                    <SignInButton 
                      mode="modal"
                      afterSignInUrl="/savy-dining/dashboard"
                      afterSignUpUrl="/savy-dining/dashboard"
                    >
                      <button 
                        onClick={() => setIsMenuOpen(false)}
                        className="text-[#c9a55c] border border-[#c9a55c]/30 px-6 py-3 hover:bg-[#c9a55c] hover:text-black transition-all uppercase tracking-[0.2em] inline-block mx-auto"
                      >
                        SIGN IN
                      </button>
                    </SignInButton>
                  </SignedOut>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-20 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
