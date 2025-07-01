import { STATES, useStateMachine } from "../../stateMachine";
import styles from "./ending.module.css";

export default function Termination() {
  const { changeState } = useStateMachine();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Terms of Compliance Agreement rejected.</h1>
        <br />
        <p>
          The nature of your job as an Agent is of the utmost importance and
          value. The data dealt with calls for all the{" "}
          <span className={styles.highlight}>care and discretion</span>{" "}
          possible, and, as such, The Authority must ensure its manoeuvring is
          closely monitored.
          <br />
          <br />
          You have been warned, at the beginning of your work in The Department,
          that the acceptance of our Terms of Compliance Agreement is protocol
          and mandatory. Its rejection then calls for your immediate and urgent{" "}
          <span className={styles.highlight}>termination</span>.
          <br />
          <br />
          The Authority regrets your departure, AGENT{" "}
          <span className={styles.highlight}>ANONAGTZERO</span>, ID NO.
          <span className={styles.highlight}>8195309</span>, and wishes you
          success for any future career opportunities you may find.
          <br />
          <br />
          Please return all your company belongings to the front desk, or leave
          them on your workstation, until the end of the day. If you have any
          questions feel free to contact Human Resources, on Floor 6, or the
          Customer Service Desk, on Floor 1. You may also directly contact your
          now ex-superior, who has already been warned of your departure.
          <br />
          <br />
          As always, <span className={styles.highlight}>The Authority</span> is
          most grateful for your work.
        </p>
        <div className={styles.out}>
          <button onClick={() => changeState(STATES.LOGIN)}>
            Go to login page
          </button>
        </div>
      </div>
    </div>
  );
}
