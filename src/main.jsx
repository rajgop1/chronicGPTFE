import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.jsx'
import ReactLenis from 'lenis/react';
import Safeguards from './components/safeguards/Safeguards.jsx';
import Journey from './components/Journey/Journey.jsx';
// import ScrollToTop from "./hooks/ScrollToTop.js"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactLenis
      root
      options={{
        smooth: true,
        lerp: 0.1,
        smoothTouch: false,
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        wheelMultiplier: 1,
        touchMultiplier: 2,
      }}>
        
      <BrowserRouter>
        <Routes>
          {/* <ScrollToTop /> */}
          <Route index path="/" element={<App />} />
          <Route index path="/safeguards" element={<Safeguards />} />
          <Route index path="/journey" element={<Journey />} />
          <Route index path="/how-it-works" element={<App />} />
        </Routes>
      </BrowserRouter>
    </ReactLenis>
  </StrictMode>
)
