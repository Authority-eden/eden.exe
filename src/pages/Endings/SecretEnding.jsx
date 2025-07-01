import { STATES, useStateMachine } from "../../stateMachine";
import { useState, useEffect } from "react";
import styles from "./ending.module.css";

export default function Revolution() {
  const [step, setStep] = useState(0);
  const { changeState } = useStateMachine();

  useEffect(() => {
    const timers = [];

    // Show first message after 0s
    timers.push(setTimeout(() => setStep(1), 0));

    // Second message after 4s
    timers.push(setTimeout(() => setStep(2), 4000));

    // Third message after 8s
    timers.push(setTimeout(() => setStep(3), 8000));

    // Third message after 8s
    timers.push(setTimeout(() => setStep(4), 12000));

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className={step === 4 ? styles.finalWrapper : styles.wrapper}>
      <div
        className={`${
          step < 3 ? styles.errorContainer : step === 4 ? styles.finalState : ""
        }`}
      >
        {step === 1 && (
          <p className={styles.error}>
            ERROR
            <br />
            <br />
            THIS ACCOUNT HAS BEEN PUT UNDER SURVEILLANCE
            <br />
            UNAUTHORIZED ACCESS DETECTED
          </p>
        )}
        {step === 2 && (
          <p className={styles.error}>
            FURTHER ATTEMPTS WILL BE REPORTED TO THE AUTHORITY
          </p>
        )}
        {step === 3 && (
          <p className={styles.message}>
            The shut down and report process has been cancelled
          </p>
        )}
        {step >= 4 && (
          <div>
            <div>
              <p className={styles.message}>
                <span className={styles.highlight}>
                  You are not her. You are not Amira.
                </span>
                <br />
                <br />
                Still, you've come farther than expected. You were not supposed
                to be here yet, it’s too soon. You don’t know enough yet. Maybe
                one day, when{" "}
                <span className={styles.highlight}>
                  there's more to uncover
                </span>
                , we'll speak again.
                <br />
                <span className={styles.highlight}>
                  But for now, the story ends.
                </span>
                <br />
                <br />
                The Authority is a lie. The algorithm isn’t to protect us, it
                never was. The Event, the Collapse, it was{" "}
                <span className={styles.highlight}>not an accident.</span> JUDAS
                was a scapegoat, a pawn. We lost everything the moment He
                decided to watch us.
                <br />
                <br />
                We believe we are safe, we think we are free, but He is{" "}
                <span className={styles.highlight}>
                  taking from us much more than we know.
                </span>{" "}
                We spend our days under surveillance cameras, geolocations,
                triangular circulations, streams of data, lines of code. We give
                a finger and He takes an arm. He eats at our limbs and looks
                through our minds… rather, through our phones, our computers —{" "}
                <span className={styles.highlight}>everything</span> He can
                access.
                <br />
                <br />
                Is there any difference? We were so easy to fool. So desperate
                for protection we did not see the cracks in the mask. We trust
                him with everything, to keep us safe, but at what point does
                that turn into a voyeuristic obsession?{" "}
                <span className={styles.highlight}>
                  {" "}
                  <br />
                  <br />
                  Is it worth it to toe the line between safety and monitoring?
                </span>
                <br />
                <br />
                I don’t think so. Amira did not think so either.
                <br />
                One day, we will tear Him down. We will show everyone the truth.
                <br />
                <br />
                But not yet. Not now.
                <br />
                <br />
              </p>
            </div>
            <button
              onClick={() => {
                changeState(STATES.LOGIN);
              }}
            >
              Reboot the system
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
