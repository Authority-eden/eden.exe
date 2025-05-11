import { RIDDLE_PATH } from "../../pathNames";
import styles from "./riddle.module.css";

export default function ColorCoded() {
  return (
    <div className={styles.riddleContainer}>
      <img
        src={`${RIDDLE_PATH}pixel_grid.png`}
        alt="pixel grid"
        className={styles.colorCoded}
      />
    </div>
  );
}
