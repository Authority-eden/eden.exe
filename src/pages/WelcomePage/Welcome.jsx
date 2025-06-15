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
          <br />
          As you know, EDEN (External Defensive Engineering Network) and its
          continued service requires routine reaffirmation of procedural
          consent.
          <br />
          <br />
          Please{" "}
          <span
            className={styles.highlight}
            onClick={() => changeState(STATES.CONTRACT_1)}
          >
            {" "}
            read your mandatory Terms of Compliance Agreement carefully
          </span>{" "}
          and accept the conditions whenever you’re ready to get started.
        </p>
        <br />
        <button
          onClick={() => changeState(STATES.CONTRACT_1)}
          onKeyDown={(e) => {
            if (e.key === "Enter") changeState(STATES.CONTRACT_1);
          }}
        >
          Read Terms
        </button>
      </div>
    </div>
  );
}
