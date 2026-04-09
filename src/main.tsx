import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import App from './App.tsx'
import './index.css'

// @ts-ignore
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const Root = () => {
  // We ALWAYS wrap in ClerkProvider, but if the key is missing, 
  // we provide an empty string to satisfy the context provider 
  // and handle the "disabled" state within the components.
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY || "missing_key"}>
      <BrowserRouter basename="/savy-dining">
        <App isAuthEnabled={!!PUBLISHABLE_KEY} />
      </BrowserRouter>
    </ClerkProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
