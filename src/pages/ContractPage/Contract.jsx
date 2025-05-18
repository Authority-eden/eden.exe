import { STATES, useStateMachine } from "../../stateMachine";
import styles from "./contract.module.css";

export default function Contract() {
  const { changeState } = useStateMachine();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.contract}>
          <h1>TERMS OF COMPLIANCE AGREEMENT </h1>
          <br />
          <br />
          <br />
          <p>
            AGENT <span className={styles.highlight}>ANONAGTZERO</span>, ID NO.{" "}
            <span className={styles.highlight}>8195309</span>,
            <br />
            By proceeding beyond this screen, you hereby voluntarily and
            irrevocably agree to the following terms set forth by The Authority:
          </p>
          <br />
          <br />
          <h3 className={styles.highlight}>1. Data Collection and Usage</h3>
          <p>
            Throughout your assignment, The Authority may collect relevant
            input, behavioural signals, and interactional patterns in order to
            maintain operational excellence.
            <br />
            <br />
            You understand that:
            <br />{" "}
            <ul>
              <li>
                Data gathered during your service may be reviewed for training,
                strategic alignment, or performance calibration;
              </li>
              <li>
                This process is automatic, non-intrusive, and in full accordance
                with internal transparency principles;
              </li>
              <li>No further action is required on your part.</li>
            </ul>
          </p>
          <br />
          <br />
          <h3 className={styles.highlight}>2. Security Protocol</h3>
          <p>
            For the safety and stability of the system, routine observation may
            occur. This includes passive monitoring and interpretation of
            behavioural tendencies, response timing, and decision patterns.
            <ul>
              <li>You may not always be notified of observation;</li>
              <li>Silence, inaction, and indecision may also be recorded;</li>
              <li>
                This is standard protocol for all agents of your clearance
                level.
              </li>
            </ul>
          </p>
          <br />
          <br />
          <h3 className={styles.highlight}> 3. Acknowledgment of Risk</h3>
          <p>
            By continuing:
            <br />
            <ul>
              <li>You reaffirm your voluntary participation in this job;</li>
              <li>
                You accept that your actions will have lasting ramifications
                within and beyond the assignment and that your choices may
                affect progression and assessment;
              </li>
              <li>
                You understand that all protocols are designed with your best
                performance in mind;
              </li>
              <li>Order begins where questions end.</li>
            </ul>
            <br />
          </p>
          <br />

          <p style={{ textAlign: "left" }}>
            You must accept these terms to move forward. If you do, your
            compliance is assumed and binding.
          </p>
          <br />
          <p>The Authority.</p>
          <br />
          <div className={styles.sign}>
            <button onClick={() => changeState(STATES.INSTRUCTIONS)}>
              ACCEPT
            </button>
            <button onClick={() => changeState(STATES.BAD_ENDING)}>
              DECLINE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
