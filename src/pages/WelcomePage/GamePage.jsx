import styles from "./gamePage.module.css";
import { IDENTITY_PATH } from "../../pathNames";

export default function GamePage() {
  return (
    <div className={styles.container}>
      <img
        src={`${IDENTITY_PATH}edenLogo.svg`}
        alt="EDEN Logo"
        className={styles.logo}
      />
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className={styles.paragraph}>
        <p className={styles.text}>
          The year 2046. You are an Agent of The Authority, the world order that
          keeps you, your family and all of your data safe. You do not know the
          exact details of how this came to be, you were too young to remember.
          But you know of it, the Collapse, the rise of The Authority, and the
          better world it created for everyone, more peaceful, safe, and free.
          <br />
          <br />
          You are relatively new to your job but you quickly made friends with
          another colleague of yours,{" "}
          <span className={styles.highlight}>Amira Berger</span>. Someone who,
          now that you think of it… You have not seen in a while…
          <br />
          <br />
          In any case there is no time to lose, you have to get going. As you
          leave home, you find a package waiting for you at your doorstep, looks
          like you’ve got mail. You pick it up and take it with you, you can
          check it out when you get to the office, after all you don’t want to
          be late for work. As you get your day started you repeat in your head
          everything you will need to know to access the platform:
          <br />
          <br />
          USERNAME: anonagtzero
          <br />
          PASSWORD: /0penGate
          <br />
          <br />
          Wouldn’t want to forget that...
        </p>
      </div>
      <div className={styles.paragraph}>
        <p>Click below to begin your work as an agent</p>
        <a
          href={`${import.meta.env.BASE_URL}app`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button> Play </button>
        </a>
      </div>
      {/*  <div className={styles.paragraph}>
        <p>a small carousel of images of the game</p>
      </div> */}
      <div className={styles.paragraph}>
        {/*  <p>Short description of the work as a project</p> */}
        <h2>Credits</h2>
        <ul>
          <li>Bertagnin Bianca</li>
          <li>Bissoli Miriam</li>
          <li>Casini Francesca</li>
          <li>Figueiredo Caeiro Alice</li>
          <li>Garipova Dariia</li>
          <li>De Jesus Pereira Beatriz Inês</li>
        </ul>
        <p>
          Polytechnic University of Milan
          <br />
          School of Design
          <br />
          Complex Artifacts and System Design Studio
          <br />
          AY 2024 — 2025
        </p>
        {/*   <p>Double standard resources</p> */}
      </div>
    </div>
  );
}
