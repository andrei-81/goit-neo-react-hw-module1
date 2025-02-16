import React from 'react'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import './style.css'
import App from './components/App.jsx'

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <App />
  </StrictMode>
) 