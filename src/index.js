import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const redirect = sessionStorage.redirect;

if (redirect) {
  delete sessionStorage.redirect;
  window.history.replaceState(null, null, redirect);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);