import { STATES, useStateMachine } from "../../stateMachine";
import styles from "./welcome.module.css";

export default function Instructions() {
  const { changeState } = useStateMachine();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>INSTRUCTIONS</h1>
        <br />
        <p>
          Your workspace is built from our collected data logs, which require
          constant maintenance. Your task is to scan through them and identify
          corrupted entries —
          <span className={styles.highlight}> sequences of 6 numbers.</span>{" "}
          These sequences will appear{" "}
          <span className={styles.highlight}> only horizontally.</span> Once
          detected, they must be selected and promptly deleted.
          <br />
          <br />
          For today, you will have to find{" "}
          <span className={styles.highlight}>6 corrupted sequences</span>. You
          will only be able to proceed once all the data is filtered. You can
          check the bottom of the screen to keep tabs on your progress.
        </p>
        <br />
        <button onClick={() => changeState(STATES.AGENT_1)}>Continue</button>
      </div>
    </div>
  );
}
