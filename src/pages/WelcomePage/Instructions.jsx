import { STATES, useStateMachine } from "../../stateMachine";
import "./welcome.module.css";

export default function Instructions() {
  const { changeState } = useStateMachine();

  return (
    <div>
      <h1>INSTRUCTIONS</h1>
      <p>
        Your workspace is made of our collected data logs, which require
        constant upkeep.
        <br />
        You must browse through them and find the compromised values — sequences
        of 6 numbers. They will show up exclusively horizontally, from left to
        right; once hovered, they will react noticeably and should not be too
        hard to recognize. Once detected, they must be selected and promptly
        deleted.
        <br />
        <br />
        For today, you will have to find 6 sequences. You will only be able to
        proceed once all the corrupted data is filtered; you can check the
        bottom of the screen to keep tabs on your progress.
      </p>
      <br />
      <button onClick={() => changeState(STATES.AGENT_1)}>Continue</button>
    </div>
  );
}
