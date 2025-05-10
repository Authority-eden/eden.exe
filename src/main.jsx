import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Modal from "react-modal";
import "./index.css";
import App from "./App.jsx";
import Login from "./pages/LoginPage/Login.jsx";
import Contract from "./pages/ContractPage/Contract.jsx";
import AgentWork from "./pages/AgentWorkPage/AgentWork.jsx";
import Termination from "./pages/BadEndingPage/BadEnding.jsx";
import Riddle from "./pages/RiddlePage/Riddle.jsx";
import Congratulation from "./pages/NormalEndingPage/NormalEnding.jsx";
import Revolution from "./pages/SecretEndingPage/SecretEnding.jsx";

Modal.setAppElement("#root");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/riddle" element={<Riddle />} />
        {/* TODO: understand if I really need this code */}
        {/* <Route path="/login" element={<Login />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/termination" element={<Termination />} />
        <Route path="/congratulation" element={<Congratulation />} />
        <Route path="/72_65_76_6F_6C_75_74_69_6F_6E_0A" element={<Revolution />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
