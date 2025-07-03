import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Modal from "react-modal";
import "./index.css";
import App from "./App.jsx";
import GamePage from "./pages/WelcomePage/GamePage.jsx";
import CutThroat from "./pages/RiddlePages/CutThroat.jsx";
import ColorCoded from "./pages/RiddlePages/ColorCoded.jsx";
import HalfHalf from "./pages/RiddlePages/HalfHalf.jsx";
/* --------------------------------- */
import AgentWork from "./pages/AgentWorkPage/AgentWork.jsx";
import Revolution from "./pages/Endings/SecretEnding.jsx";

Modal.setAppElement("#root");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/app" element={<App />} /> */}
        <Route path=" " element={<App />} />
        <Route path="cut_throat" element={<CutThroat />} />
        <Route path="color_coded" element={<ColorCoded />} />
        <Route path="half_half" element={<HalfHalf />} />
        <Route path="agent_work" element={<AgentWork />} />
        <Route path="revolution" element={<Revolution />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
