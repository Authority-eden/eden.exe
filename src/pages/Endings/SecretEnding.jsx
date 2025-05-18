import { useState, useEffect } from "react";
import styles from "./ending.module.css";

export default function Revolution() {
  const [step, setStep] = useState(0);

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
            <p className={styles.message}>
              You are not her. You are not Amira.
              <br />
              <br />
              Yet you have reached so far already. You were not supposed to be
              here yet, it’s too soon. You don’t know enough. Maybe one day,
              when you have found more, when there is more to find, we can talk.
              The story is over only for now.
              <br />
              <br />
              The Authority is a lie, the algorithm isn’t to protect us, it
              never was. The tragedy of the Event, the Collapse, it was not an
              accident. JUDAS’ role was merely that of the pawns in the chess
              board, the lambs brought to slaughter, to make an example out of.
              We lost everything before the Event, when he decided He wanted
              under his watchful gaze, and now we are.
              <br />
              <br />
              We think we are safe, we think we are free, but He is taking from
              us much more than we know. We spend our days under surveillance
              cameras, geolocations, triangular circulations, streams of data,
              lines of code. We give a finger and He takes an arm; He eats at
              our limbs and looks through our minds, or rather through our
              phones, our computers - everything He can. Is there any
              difference? He has lied, and we were easy to fool. So desperate
              for protection we did not see the cracks in the mask. We trust him
              with everything, to keep us safe, but at what point does that turn
              into a voyeuristic obsession? Is it worth it to toe the line
              between shelter and monitorization?
              <br />
              <br />
              I don’t think so. Amira did not think so either. One day, we will
              tear Him down. We will show everyone the truth.
              <br />
              <br />
              But for now, it ends here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
