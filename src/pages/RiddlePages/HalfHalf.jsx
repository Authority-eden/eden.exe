import styles from "./riddle.module.css";

export default function HalfHalf() {
  return (
    <div className={styles.riddleContainer}>
      <p>
        <span>16 is only half the answer</span>
        <br />
        <br />
        01001110 01000101 01010111 01010011
      </p>
    </div>
  );
}
