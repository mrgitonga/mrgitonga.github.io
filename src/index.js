import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // <-- 1. Import BrowserRouter
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/cybershujaa-portfolio"> {/* <-- 2. Wrap your App component */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);