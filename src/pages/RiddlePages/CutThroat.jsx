import { RIDDLE_PATH } from "../../pathNames";
import "./riddle.module.css";

export default function CutThroat() {
  return (
    <a href={`${RIDDLE_PATH}cut_throat.zip`} download>
      <button>Download Riddle ZIP</button>
    </a>
  );
}
