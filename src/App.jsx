import { STATES, useStateMachine } from "./stateMachine";
import AgentWork from "./pages/AgentWorkPage/AgentWork";
import Login from "./pages/LoginPage/Login";

export default function App() {
  const { currentState } = useStateMachine();
  console.info("currentState", currentState);

  return <>{renderAppState(currentState)}</>;
}

// Render each state of the application based on the current state
function renderAppState(applicationState) {
  switch (applicationState) {
    case STATES.AGENT_1:
      return <AgentWork />;
    case STATES.LOGIN:
    default:
      return <Login />;
  }
}
