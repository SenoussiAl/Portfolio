/**
 * @copyright 2024 Senoussi Al-Nadjib
 * @license Apache-2.0
 */

/**
 * Node modules
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
