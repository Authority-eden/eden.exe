import { STATES, useStateMachine } from "../../stateMachine";
import { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import styles from "./ending.module.css";
import alarmVideo from "../../assets/resources/error_message_with_audio.mp4";

export default function Revolution() {
  const { changeState } = useStateMachine();
  const [message, setMessage] = useState(false);
  const { currentState } = useStateMachine();
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
    container.scrollTop = (container.scrollHeight - container.clientHeight) / 2;
  }, []);

  useEffect(() => {
    // Try to play video on state change
    if (currentState === STATES.SECRET_ENDING) {
      const video = videoRef.current;
      if (video) {
        video.play().catch((err) => {
          console.warn("Playback blocked:", err);
        });
      }
    }
  }, [currentState]);

  useEffect(() => {
    let timeout;

    timeout = setTimeout(() => {
      setMessage(true);
    }, 33000);

    return () => clearTimeout(timeout);
  }, []);

  const [allowPlay, setAllowPlay] = useState(true);

  return message ? (
    <div className={styles.finalWrapper}>
      <div className={styles.finalState}>
        <p className={styles.message}>
          <span className={styles.highlight}>
            You are not her. You are not Amira.
          </span>
          <br />
          <br />
          Still, you've come farther than expected. You were not supposed to be
          here yet, it’s too soon. You don’t know enough yet. Maybe one day,
          when <span className={styles.highlight}>there's more to uncover</span>
          , we'll speak again.
          <br />
          <span className={styles.highlight}>But for now, the story ends.</span>
          <br />
          <br />
          The Authority is a lie. The algorithm isn’t to protect us, it never
          was. The Event, the Collapse, it was{" "}
          <span className={styles.highlight}>not an accident.</span> JUDAS was a
          scapegoat, a pawn. We lost everything the moment He decided to watch
          us.
          <br />
          <br />
          We believe we are safe, we think we are free, but He is{" "}
          <span className={styles.highlight}>
            taking from us much more than we know.
          </span>{" "}
          We spend our days under surveillance cameras, geolocations, triangular
          circulations, streams of data, lines of code. We give a finger and He
          takes an arm. He eats at our limbs and looks through our minds…
          rather, through our phones, our computers —{" "}
          <span className={styles.highlight}>everything</span> He can access.
          <br />
          <br />
          Is there any difference? We were so easy to fool. So desperate for
          protection we did not see the cracks in the mask. We trust him with
          everything, to keep us safe, but at what point does that turn into a
          voyeuristic obsession?{" "}
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
        </p>
        <br />
        <br />
        <button onClick={() => changeState(STATES.LOGIN)}>
          Reboot the system
        </button>
      </div>
    </div>
  ) : (
    <div className={styles.alarmContainer} ref={containerRef}>
      <div className={styles.alarm}>
        <video
          ref={videoRef}
          src={alarmVideo}
          autoPlay
          playsInline
          controls={false}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
