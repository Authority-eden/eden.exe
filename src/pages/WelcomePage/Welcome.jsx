import { STATES, useStateMachine } from "../../stateMachine";
import "./welcome.module.css";

export default function Welcome() {
  const { changeState } = useStateMachine();

  return (
    <div>
      <p>Your are an agent working for Eden.</p>
      <br />
      <button onClick={() => changeState(STATES.LOGIN)}>Submit</button>
    </div>
  );
}
