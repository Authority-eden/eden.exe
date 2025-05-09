import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Riddle from "./pages/RiddlePage/Riddle.jsx";
import Contract from "./pages/ContractPage/Contract.jsx";
import Termination from "./pages/BadEndingPage/BadEnding.jsx";
import Congratulation from "./pages/SecretEndingPage/SecretEnding.jsx";
import Login from "./pages/LoginPage/Login.jsx";
import AgentWork from "./pages/AgentWorkPage/AgentWork.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/riddle" element={<Riddle />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/termination" element={<Termination />} />
        {<Route path="/kusareden" element={<Congratulation />} />}
        {<Route path="/login" element={<Login />} />}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
