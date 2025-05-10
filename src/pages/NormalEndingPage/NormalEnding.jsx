import { STATES, useStateMachine } from "../../stateMachine";
import "./normalEnding.module.css";

export default function Congratulation() {
  const { changeState } = useStateMachine();

  return (
    <div>
      <p>Good job. Your work as an Agent is done.</p>
    </div>
  );
}
