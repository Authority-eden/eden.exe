import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import AgentWork from './routes/AgentWork.jsx';
import Riddle from './routes/Riddle.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AgentWork />} />
        <Route path="/riddle" element={<Riddle />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
