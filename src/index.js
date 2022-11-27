import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.js';
import { AuthProvider } from "./providers/auth.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
)