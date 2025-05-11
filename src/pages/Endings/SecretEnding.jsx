import { STATES, useStateMachine } from "../../stateMachine";
import styles from "./ending.module.css";

export default function Revolution() {
  const { changeState } = useStateMachine();

  return (
    <div>
      <p>Hi. I'm Dr. Kaido. You are one of the chosen one.</p>
    </div>
  );
}
