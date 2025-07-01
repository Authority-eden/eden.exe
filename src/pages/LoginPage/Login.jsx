import { STATES, useStateMachine } from "../../stateMachine";
import { useEffect, useState } from "react";
import styles from "./login.module.css";
import Lottie from "lottie-react";
import logoAnim from "../../assets/edenLogoAnim.json";

export default function Login() {
  const { changeState } = useStateMachine();
  const [errorCode, setErrorCode] = useState(false);
  const [zeroCode, setZeroCode] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loadingValue, setLoadingValue] = useState();

  useEffect(() => {
    let startTime = null;
    const duration = 6666;

    function animate(time) {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const value = 1 / (1 + progress * 55);
      setLoadingValue(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setLoadingValue(0); // Final value
        setShowLogin(true);
      }
    }

    const animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Auto-clear messages after 2.5s
  useEffect(() => {
    let timeout;
    if (errorCode || zeroCode) {
      timeout = setTimeout(() => {
        setErrorCode(false);
        setZeroCode(false);
      }, 2500);
    }
    return () => clearTimeout(timeout);
  }, [errorCode, zeroCode]);

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Reset both before checking again
    setErrorCode(false);
    setZeroCode(false);

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    if (formJson.password === "/OpenGate") {
      setZeroCode(true);
    } else if (
      formJson.username === "anonagtzero" &&
      formJson.password === "/0penGate"
    ) {
      changeState(STATES.WELCOME);
    } else if (
      formJson.username === "halflightmemo" &&
      formJson.password === "l0st-t1meline$"
    ) {
      changeState(STATES.SECRET_ENDING);
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
            <>
              {(errorCode || zeroCode) && (
                <div className={styles.output}>
                  <p>
                    {errorCode ? "//wrong input" : "//it's a zero (0), not a O"}
                  </p>
                </div>
              )}
            </>
          </form>
        </div>
      </div>
    </div>
  ) : (
    // Loading screen
    <div className={styles.loadingState}>
      <div className={styles.loadingLogo}>
        <Lottie
          animationData={logoAnim}
          loop={true}
          style={{ height: 200, width: 200 }}
        />
        <div>ANIMATED EDEN LOGO</div>
        <progress value={loadingValue} />
      </div>
    </div>
  );
}
