import { STATES, useStateMachine } from "./stateMachine";
import AgentWork from "./pages/AgentWorkPage/AgentWork";
import Login from "./pages/LoginPage/Login";
import Contract from "./pages/ContractPage/Contract";
import Termination from "./pages/BadEndingPage/BadEnding";
import Congratulation from "./pages/NormalEndingPage/NormalEnding";
import Revolution from "./pages/SecretEndingPage/SecretEnding";

export default function App() {
  const { currentState } = useStateMachine();
  console.info("currentState", currentState);

  return <>{renderAppState(currentState)}</>;
}

// Render each state of the application based on the current state
// TODO: change start from LOGIN to WELCOME
function renderAppState(applicationState) {
  switch (applicationState) {
    case STATES.CONTRACT_1:
      return <Contract />;
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
