import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/reset.css'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)