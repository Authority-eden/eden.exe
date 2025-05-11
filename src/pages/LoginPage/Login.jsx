import { STATES, useStateMachine } from "../../stateMachine";
import { use, useState } from "react";
import "./login.module.css";

export default function Login() {
  const { changeState } = useStateMachine();
  const [errorCode, setErrorCode] = useState(false);

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    if (
      formJson.username === "anonagtzero" &&
      formJson.password === "/0penGate"
    ) {
      changeState(STATES.CONTRACT_1);
    } else {
      setErrorCode(true);
    }
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>Username</label>
      <input type="text" id="user-name" name="username" autoComplete="off" />
      <br />
      <label>Password</label>
      <input type="text" id="password" name="password" autoComplete="off" />
      <br />
      <button type="submit">Submit</button>
      <br />
      {errorCode ? (
        <div>
          <p>*Wrong input</p>
        </div>
      ) : null}
    </form>
  );
}
