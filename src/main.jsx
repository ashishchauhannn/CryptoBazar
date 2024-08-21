import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import CoincontextProvider from './Components/Context/Coincontext.jsx'
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CoincontextProvider>
        <App />

      </CoincontextProvider>


    </BrowserRouter>


  </StrictMode>,
)
