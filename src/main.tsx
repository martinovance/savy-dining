import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import App from './App.tsx'
import './index.css'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// Debugging: Log if key is missing (safe for production as it's just a boolean check)
if (!PUBLISHABLE_KEY) {
  console.warn("Clerk Publishable Key is missing from environment variables.");
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY || ""}>
      <BrowserRouter basename="/savy-dining">
        <App isAuthEnabled={!!PUBLISHABLE_KEY} />
      </BrowserRouter>
    </ClerkProvider>
  </React.StrictMode>,
)
