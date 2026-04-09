import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import { dark } from '@clerk/themes'
import App from './App.tsx'
import './index.css'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  console.warn("Clerk Publishable Key is missing from environment variables.");
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY || ""}
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: '#c9a55c',
          colorBackground: '#0a0a0a',
          colorText: '#ffffff',
          colorTextSecondary: 'rgba(255,255,255,0.7)',
          fontFamily: 'serif',
        },
        elements: {
          card: 'bg-[#0a0a0a] border border-white/10 shadow-2xl',
          navbar: 'hidden',
          headerTitle: 'text-[#c9a55c] font-serif uppercase tracking-widest',
          headerSubtitle: 'text-white/60',
          socialButtonsBlockButton: 'border-white/10 hover:bg-white/5',
          formButtonPrimary: 'bg-[#c9a55c] hover:bg-[#b8944b] text-black uppercase tracking-widest font-bold text-xs transition-all',
          footerActionLink: 'text-[#c9a55c] hover:text-[#b8944b]',
          userButtonPopoverCard: 'bg-[#0a0a0a] border border-white/10',
          userButtonTrigger: 'focus:shadow-none focus:ring-2 focus:ring-[#c9a55c]/50',
        }
      }}
    >
      <BrowserRouter basename="/savy-dining">
        <App isAuthEnabled={!!PUBLISHABLE_KEY} />
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>,
)
