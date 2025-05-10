import { STATES, useStateMachine } from "../../stateMachine";
import "./login.module.css";

export default function Login() {
  const { changeState } = useStateMachine();

  return (
    <div>
      <p>User name</p>
      <input type="text" id="user-name" name="solution" autocomplete="off" />
      <br />
      <p>Password</p>
      <input type="text" id="password" name="solution" autocomplete="off" />
      <br />
      {/* TODO: change into contract */}
      <button onClick={() => changeState(STATES.AGENT_1)}>Submit</button>
    </div>
  );
}
