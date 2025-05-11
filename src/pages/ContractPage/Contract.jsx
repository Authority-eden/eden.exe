import { STATES, useStateMachine } from "../../stateMachine";
import styles from "./contract.module.css";

export default function Contract() {
  const { changeState } = useStateMachine();

  return (
    <div className={styles.contract}>
      <h1>TERMS OF COMPLIANCE AGREEMENT </h1>
      <br />

      <p>
        AGENT ANONAGTZERO, ID NO. 8195309,
        <br />
        By proceeding beyond this screen, you hereby voluntarily and irrevocably
        agree to the following terms set forth by The Authority:
      </p>
      <br />
      <br />

      <h3>1. Data Collection and Usage</h3>
      <p>
        Throughout your assignment, The Authority may collect relevant input,
        behavioural signals, and interactional patterns in order to maintain
        operational excellence.
        <br />
        You understand that:
        <br /> Data gathered during your service may be reviewed for training,
        strategic alignment, or performance calibration; This process is
        automatic, non-intrusive, and in full accordance with internal
        transparency principles; No further action is required on your part.
      </p>
      <br />
      <br />

      <h3>2. Security Protocol</h3>
      <p>
        For the safety and stability of the system, routine observation may
        occur. This includes passive monitoring and interpretation of
        behavioural tendencies, response timing, and decision patterns.
        <br />
        You may not always be notified of observation; Silence, inaction, and
        indecision may also be recorded; This is standard protocol for all
        agents of your clearance level.
      </p>
      <br />
      <br />

      <h3> 3. Acknowledgment of Risk</h3>
      <p>
        {" "}
        By continuing:
        <br />
        You reaffirm your voluntary participation in this job; You accept that
        your actions will have lasting ramifications within and beyond the
        assignment and that your choices may affect progression and assessment;
        You understand that all protocols are designed with your best
        performance in mind; Order begins where questions end.
        <br />
        You must accept these terms to move forward. If you do, your compliance
        is assumed and binding.
      </p>
      <br />
      <br />

      <p> The Authority.</p>
      <br />

      <button onClick={() => changeState(STATES.AGENT_1)}>[ACCEPT]</button>
      <button onClick={() => changeState(STATES.BAD_ENDING)}>[DECLINE]</button>
    </div>
  );
}
