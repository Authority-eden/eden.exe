import { STATES, useStateMachine } from "../../stateMachine";
import "./BadEnding.module.css";

export default function Termination() {
  const { changeState } = useStateMachine();

  return (
    <div>
      <p>Your defiance will not be tolerated</p>
    </div>
  );
}
