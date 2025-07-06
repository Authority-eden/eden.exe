import { useState, useRef, useEffect } from "react";
import "react-slideshow-image/dist/styles.css"; // Important for styles
import styles from "./slideshow.module.css";

import img1 from "../../../assets/resources/carousel/1.jpg";
import img2 from "../../../assets/resources/carousel/2.jpg";
import img3 from "../../../assets/resources/carousel/3.jpg";
import img4 from "../../../assets/resources/carousel/4.jpg";
import img5 from "../../../assets/resources/carousel/5.jpg";
import img6 from "../../../assets/resources/carousel/6.jpg";
import img7 from "../../../assets/resources/carousel/7.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);
  const intervalTime = 5000;
  const arrayLength = images.length;

  // Clear and restart timer function
  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === arrayLength - 1 ? 0 : prev + 1));
    }, intervalTime);
  };

  // Initialize timer on mount
  useEffect(() => {
    resetTimer();
    // Cleanup on unmount
    return () => clearInterval(timerRef.current);
  }, []);

  // When currentIndex changes manually, reset timer
  const goForward = () => {
    setCurrentIndex((prev) => (prev === arrayLength - 1 ? 0 : prev + 1));
    resetTimer();
  };

  const goBack = () => {
    setCurrentIndex((prev) => (prev === 0 ? arrayLength - 1 : prev - 1));
    resetTimer();
  };

  return (
    <div className={styles.container}>
      <div className={styles.sliderWrapper}>
        <div
          className={styles.slider}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Slide ${idx + 1}`}
              className={styles.image}
              draggable={false}
            />
          ))}
        </div>
      </div>
      <div className={styles.arrows}>
        <span onClick={goBack} aria-label="back arrow" className={styles.arrow}>
          &larr;
        </span>
        <span
          onClick={goForward}
          aria-label="forward arrow"
          className={styles.arrow}
        >
          &rarr;
        </span>
      </div>
    </div>
  );
}
