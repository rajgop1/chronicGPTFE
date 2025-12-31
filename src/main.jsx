import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<App />} />
        <Route index path="/safeguards" element={<App />} />
        <Route index path="/journey" element={<App />} />
        <Route index path="/how-it-works" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
