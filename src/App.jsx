import { useRef, useEffect } from "react";
import { STATES, useStateMachine } from "./stateMachine";
import AgentWork from "./pages/AgentWorkPage/AgentWork";
import Login from "./pages/LoginPage/Login";
import Contract from "./pages/ContractPage/Contract";
import Termination from "./pages/Endings/BadEnding";
import Congratulation from "./pages/Endings/NormalEnding";
import Revolution from "./pages/Endings/SecretEnding";
import Welcome from "./pages/WelcomePage/Welcome";
import Instructions from "./pages/WelcomePage/Instructions";

import soundtrack from "./assets/resources/soundtrack.mp3";

export default function App() {
  const { currentState } = useStateMachine();
  console.info("currentState", currentState);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (currentState === STATES.SECRET_ENDING) {
      audio.pause();
    } else if (currentState === STATES.LOGIN) {
      // Restart from beginning if desired
      audio.currentTime = 0;
      audio.play().catch((err) => console.warn("Playback blocked:", err));
    }
  }, [currentState]);

  return (
    <>
      {/* Persistent Audio */}
      <audio ref={audioRef} src={soundtrack} loop autoPlay hidden />

      {/* Page Content */}
      {renderAppState(currentState)}
    </>
  );
}

// Render each state of the application based on the current state
function renderAppState(applicationState) {
  switch (applicationState) {
    case STATES.WELCOME:
      return <Welcome />;
    case STATES.CONTRACT_1:
      return <Contract />;
    case STATES.INSTRUCTIONS:
      return <Instructions />;
    case STATES.AGENT_1:
      return <AgentWork />;
    case STATES.BAD_ENDING:
      return <Termination />;
    case STATES.NORMAL_ENDING:
      return <Congratulation />;
    case STATES.SECRET_ENDING:
      return <Revolution />;
    case STATES.LOGIN:
    default:
      return <Login />;
  }
}
