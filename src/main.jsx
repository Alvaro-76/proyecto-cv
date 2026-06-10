import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Detecta si está en GitHub Pages o Vercel
const basename = window.location.hostname.includes('github.io') ? '/proyecto-cv' : '/'
console.log(window.location.hostname)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/proyecto-cv">
        <App />
    </BrowserRouter>    
  </StrictMode>,
)
