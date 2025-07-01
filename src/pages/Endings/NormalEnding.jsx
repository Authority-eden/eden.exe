import { STATES, useStateMachine } from "../../stateMachine";
import styles from "./ending.module.css";

export default function Congratulation() {
  const { changeState } = useStateMachine();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>All tasks have been completed.</h1>
        <br />
        <br />
        <p>
          Good job, AGENT <span className={styles.highlight}>ANONAGTZERO</span>,
          ID NO.<span className={styles.highlight}> 8195309</span>.
          <br />
          You have finished all of your daily tasks, deleting a total of{" "}
          <span className={styles.highlight}>6</span> corrupted data sequences.
          <br />
          <br />
          Because of you, and your tireless effort, EDEN can maintain its proper
          functioning, and{" "}
          <span className={styles.highlight}>
            the world is a safer place for all.{" "}
          </span>
          The Authority is very pleased with your performance and thanks you for
          your service. It appreciates you and is grateful for your dedication
          to the job.
          <br />
          <br />
          The Authority reminds you that there have been reports of{" "}
          <span className={styles.highlight}>suspicious glitches</span> in the
          system, beyond the usual corrupted data files. However be reassured
          that The Authority guarantees a safe, secure, and protected work
          environment at all times, and is working on purging the network of any
          unwanted malfunctions. If you are to come across any of these
          glitches, simply{" "}
          <span className={styles.highlight}>ignore them.</span> This is a
          direct order and{" "}
          <span className={styles.highlight}>
            must not be disobeyed under any circumstances.
          </span>
          <br />
          <br />
          As always, The Authority thanks you for your work.
        </p>
        <br />
        <br />

        <button onClick={() => changeState(STATES.LOGIN)}>
          Go to login page
        </button>
      </div>
    </div>
  );
}
