import { STATES, useStateMachine } from "../../stateMachine";
import styles from "./welcome.module.css";

export default function Instructions() {
  const { changeState } = useStateMachine();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>INSTRUCTIONS</h1>
        <p>
          Your workspace is made of our collected data logs, which require
          constant upkeep. You must browse through them and find the compromised
          values —
          <span className={styles.highlight}> sequences of 6 numbers</span>.
          They will show up exclusively{" "}
          <span className={styles.highlight}>horizontally</span>, from left to
          right
          {/* ; once hovered, they will react noticeably and should not be too
          hard to recognize */}
          . Once detected, they must be selected and promptly deleted.
          <br />
          <br />
          For today, you will have to find 6 sequences. You will only be able to
          proceed once all the corrupted data is filtered; you can check the
          bottom of the screen to keep tabs on your progress.
        </p>
        <br />
        <button onClick={() => changeState(STATES.AGENT_1)}>Continue</button>
      </div>
    </div>
  );
}
