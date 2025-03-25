import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './assets/css/style.css'
import '@fontsource/merriweather';
import Home from './pages/Home';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
  </StrictMode>,
)
