import { STATES, useStateMachine } from "../../stateMachine";
import "./contract.module.css";

export default function Contract() {
  const { changeState } = useStateMachine();

  return (
    <div id="contract">
      <p>You need to accept the terms of this contract to proceed</p>
      <button onClick={() => changeState(STATES.AGENT_1)}>Yes</button>
      <button onClick={() => changeState(STATES.BAD_ENDING)}>No</button>
    </div>
  );
}
