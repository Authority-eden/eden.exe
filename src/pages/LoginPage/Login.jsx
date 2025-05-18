import { STATES, useStateMachine } from "../../stateMachine";
import { useEffect, useState } from "react";
import { IDENTITY_PATH } from "../../pathNames";
import styles from "./login.module.css";

export default function Login() {
  const { changeState } = useStateMachine();
  const [errorCode, setErrorCode] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogin(true);
    }, 4000);
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
    <div className={styles.wrapper}>
      <div>
        <h1>Welcome to EDEN.exe</h1>
        <h2 style={{ textAlign: "center" }}>LOG IN</h2>
        <div>
          <form method="post" onSubmit={handleSubmit}>
            <div>
              <span>
                <label>username</label>
                <input
                  type="text"
                  id="user-name"
                  name="username"
                  autoComplete="off"
                />
              </span>
              <span>
                <label>password</label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  autoComplete="off"
                />
              </span>
            </div>
            <br />
            <button type="submit">Submit</button>
            <br />
            {errorCode ? (
              <div className={styles.output}>
                <p>//wrong input</p>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  ) : (
    // Loading screen
    <div className={styles.loginImage}>
      <img src={`${IDENTITY_PATH}loading.png`} className={styles.loading} />
    </div>
  );
}
