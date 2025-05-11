import { STATES, useStateMachine } from "../../stateMachine";
import "./welcome.module.css";

export default function Welcome() {
  const { changeState } = useStateMachine();

  return (
    <div>
      <h3>Welcome back, Agent</h3>
      <p>
        You have 1 task to complete today As you know, EDEN (External Defensive
        Engineering Network) and its continued service requires routine
        reaffirmation of procedural consent. Please read your mandatory Terms of
        Compliance Agreement carefully and accept the conditions whenever you’re
        ready to get started.
      </p>
      <br />
      <button onClick={() => changeState(STATES.CONTRACT_1)}>Continue</button>
    </div>
  );
}
