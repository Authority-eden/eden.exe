import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Modal from "react-modal";
import "./index.css";
import App from "./App.jsx";
import CutThroat from "./pages/RiddlePages/CutThroat.jsx";
import ColorCoded from "./pages/RiddlePages/ColorCoded.jsx";
import HalfHalf from "./pages/RiddlePages/HalfHalf.jsx";
/* --------------------------------- */
import AgentWork from "./pages/AgentWorkPage/AgentWork.jsx";
import Contract from "./pages/ContractPage/Contract.jsx";

Modal.setAppElement("#root");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/eden.exe/" element={<App />} />
        <Route
          path={`${import.meta.env.BASE_URL}cut_throat`}
          element={<CutThroat />}
        />
        <Route
          path={`${import.meta.env.BASE_URL}color_coded`}
          element={<ColorCoded />}
        />
        <Route
          path={`${import.meta.env.BASE_URL}half_half`}
          element={<HalfHalf />}
        />
        {/* To delete later */}
        <Route
          path={`${import.meta.env.BASE_URL}agent_work`}
          element={<AgentWork />}
        />
        <Route
          path={`${import.meta.env.BASE_URL}contract`}
          element={<Contract />}
        />
        <Route
          path={`${import.meta.env.BASE_URL}welcome`}
          element={<Welcome />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
