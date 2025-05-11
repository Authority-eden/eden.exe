import { STATES, useStateMachine } from "../../stateMachine";
import { useEffect, useState } from "react";
import styles from "./login.module.css";

export default function Login() {
  const { changeState } = useStateMachine();
  const [errorCode, setErrorCode] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogin(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

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
      changeState(STATES.WELCOME);
    } else {
      setErrorCode(true);
    }
  }

  return showLogin ? (
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
  ) : (
    <div className={styles.loading}>
      <p>Loading...</p>
    </div>
  );
}
