import { useEffect, useRef, useState } from "react";
import styles from "./eyeTracker.module.css";

export default function EyeTracker() {
  const eyeRef = useRef(null);
  const pupilRef = useRef(null);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isClosed) return;

      const eye = eyeRef.current;
      const pupil = pupilRef.current;

      const eyeRect = eye.getBoundingClientRect();
      const eyeCenterX = eyeRect.left + eyeRect.width / 2;
      const eyeCenterY = eyeRect.top + eyeRect.height / 2;

      const dx = e.clientX - eyeCenterX;
      const dy = e.clientY - eyeCenterY;
      const angle = Math.atan2(dy, dx);

      const maxOffset = 6;
      const pupilX = Math.cos(angle) * maxOffset;
      const pupilY = Math.sin(angle) * maxOffset;

      pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isClosed]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsClosed(true);
      setTimeout(() => setIsClosed(false), 150); // Blink duration
    }, 4000); // Blink every 4 seconds

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className={styles.eyeContainer}>
      <div className={styles.eye} ref={eyeRef}>
        <div
          className={`${styles.pupil} ${isClosed ? styles.closed : ""}`}
          ref={pupilRef}
        ></div>
      </div>
    </div>
  );
}
