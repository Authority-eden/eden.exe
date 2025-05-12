import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Modal from "react-modal";
import "./index.css";
import App from "./App.jsx";
import CutThroat from "./pages/RiddlePages/CutThroat.jsx";
import ColorCoded from "./pages/RiddlePages/ColorCoded.jsx";
import AgentWork from "./pages/AgentWorkPage/AgentWork.jsx";
import Login from "./pages/LoginPage/Login.jsx";
import Contract from "./pages/ContractPage/Contract.jsx";
import Congratulation from "./pages/Endings/NormalEnding.jsx";
import Welcome from "./pages/WelcomePage/Welcome.jsx";
import Termination from "./pages/Endings/BadEnding.jsx";
import Instructions from "./pages/WelcomePage/Instructions.jsx";

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
        {/* To delete later */}
        {/* <Route path="/agent_work" element={<AgentWork />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/congratulation" element={<Congratulation />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/termination" element={<Termination />} />
        <Route path="/instructions" element={<Instructions />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
