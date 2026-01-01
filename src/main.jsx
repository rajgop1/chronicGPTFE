import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.jsx'
import ReactLenis from 'lenis/react';

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
          <Route index path="/" element={<App />} />
          <Route index path="/safeguards" element={<App />} />
          <Route index path="/journey" element={<App />} />
          <Route index path="/how-it-works" element={<App />} />
        </Routes>
      </BrowserRouter>
    </ReactLenis>
  </StrictMode>
)
