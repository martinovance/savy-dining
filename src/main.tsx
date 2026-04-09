import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'
import App from './App.tsx'
import './index.css'

// @ts-ignore
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const Root = () => {
  // If no key is provided, we don't wrap in ClerkProvider to avoid the "Invalid Key" crash.
  // Instead, we render the app directly. The components will handle the absence of Clerk.
  if (!PUBLISHABLE_KEY) {
    return (
      <BrowserRouter basename="/savy-dining">
        <App isAuthEnabled={false} />
      </BrowserRouter>
    );
  }

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <BrowserRouter basename="/savy-dining">
        <App isAuthEnabled={true} />
      </BrowserRouter>
    </ClerkProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
