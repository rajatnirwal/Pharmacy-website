import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './context/ShopContext'; // ✅ import your context

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </React.StrictMode>
);

// Performance metrics (optional)
reportWebVitals();