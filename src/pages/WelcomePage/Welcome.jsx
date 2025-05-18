import { STATES, useStateMachine } from "../../stateMachine";
import styles from "./welcome.module.css";

export default function Welcome() {
  const { changeState } = useStateMachine();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Welcome back, Agent</h1>
        <p style={{ marginTop: "1vh" }}>
          You have <span className={styles.highlight}>1</span> task to complete
          today
          <br />
          <br />
          As you know,{" "}
          <span className={styles.highlight}>
            EDEN (External Defensive Engineering Network)
          </span>{" "}
          and its continued service requires routine reaffirmation of procedural
          consent. Please read your mandatory Terms of Compliance Agreement
          carefully and accept the conditions whenever you’re ready to get
          started.
        </p>
        <br />
        <button onClick={() => changeState(STATES.CONTRACT_1)}>Continue</button>
      </div>
    </div>
  );
}
