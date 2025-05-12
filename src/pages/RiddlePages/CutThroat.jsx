import { RIDDLE_PATH } from "../../pathNames";
import styles from "./riddle.module.css";

export default function CutThroat() {
  return (
    <div className={styles.riddleContainer}>
      <a href={`${RIDDLE_PATH}cut_throat.zip`} download>
        <button>Download cut_throat ZIP</button>
      </a>
    </div>
  );
}
