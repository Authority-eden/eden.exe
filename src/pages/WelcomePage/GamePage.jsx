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
      <div className={styles.paragraph}>
        <blockquote>
          <p>
            Cool sentence that might summarise the feel of the game/storyworld
          </p>
        </blockquote>
      </div>
      <div className={styles.paragraph}>
        <p className={styles.text}>
          The year 2046. You are an Agent of The Authority, the world order that{" "}
          <span className={styles.highlight}>keeps</span> you, your family and
          all of <span className={styles.highlight}>your data safe.</span> You
          do not know the exact details of how this came to be, you were too
          young to remember. But you know of it, the Collapse, the rise of The
          Authority, and the better world it created for everyone, more
          peaceful, safe, and free.
          <br />
          <br />
          You are relatively new to your job but you quickly made friends with
          another colleague of yours,{" "}
          <span className={styles.highlight}>Amira Berger.</span> Someone who,
          now that you think of it… You have not seen in a while…
          <br />
          <br />
          In any case there is no time to lose, you have to get going. As you
          leave home, you find a package waiting for you at your doorstep, looks
          like you’ve got mail. You pick it up and take it with you, you can
          check it out when you get to the office, after all you don’t want to
          be late for work. As you get your day started you repeat in your head
          everything you will need to know to access the platform:
        </p>
        <br />
        <br />
        <p className={styles.credentials}>
          USERNAME: <span className={styles.highlight}>anonagtzero</span>
          <br />
          PASSWORD: <span className={styles.highlight}>/0penGate</span>
          <br />
          <br />
          <br />
        </p>
        <p> Wouldn’t want to forget that...</p>
      </div>

      <hr />

      <br />
      <div className={styles.credentials}>
        <h1>Begin your work as an agent</h1>
        <br />

        <button
          onClick={() =>
            window.open(`${import.meta.env.BASE_URL}app`, "_blank")
          }
        >
          Play
        </button>
      </div>
      <div className={styles.paragraph}>
        <p>a small carousel of images of the game</p>
      </div>

      <hr />
      <br />

      <h1>The Project</h1>

      <div className={styles.paragraph}>
        <p>
          EDEN.exe is a single-player investigative narrative game where truth
          hides behind firewalls, riddles, and forgotten data trails. After
          receiving a cryptic journal from a missing colleague, Amira Berger,
          the player steps into the role of an agent in a world run by opaque
          systems and manipulated information. On the surface, your job is to
          process data, follow protocol, and comply. But if you pay attention
          and are willing to investigate further you’ll find that, buried in the
          noise, are fragments of a lost truth. Through ciphers, coded websites,
          contradictory reports, and haunting pop-ups, the player uncovers the
          real story of the past 20 years, a history rewritten by the
          institutions that claimed to protect it. As the investigation deepens,
          so does the question: are you here to serve the system… or expose it?
          Sometimes, to uncover the future, you must reassemble the past.
        </p>
        <br />
        <hr />
        <br />

        <h3>General Double Standard Papers</h3>
        <div>
          <ul>
            <li>
              <a
                href="https://journals.rudn.ru/semiotics-semantics/article/view/7211/6664"
                target="_blank"
              >
                Paper
              </a>
            </li>
            <li>
              <a
                href="https://site.unibo.it/canadausa/it/articoli/double-standard-cosa-e-e-perche-combatterlo"
                target="_blank"
              >
                Paper
              </a>
            </li>
            <li>
              <a
                href="https://link.springer.com/article/10.1007/s10551-010-0654-3"
                target="_blank"
              >
                Paper
              </a>
            </li>
            <li>
              <a href="https://www.jstor.org/stable/223435" target="_blank">
                Paper
              </a>
            </li>
            <li>
              <a
                href="https://journals.rudn.ru/semiotics-semantics/article/view/7211/6664"
                target="_blank"
              >
                Paper
              </a>
            </li>{" "}
            <li>
              <a
                href="https://academic.oup.com/bjaesthetics/article/64/1/67/7180751?utm_source=chatgpt.com&login=true#436466792"
                target="_blank"
              >
                Paper
              </a>
            </li>
          </ul>

          <h3>Privacy VS Surveillance Double Standard Papers</h3>
          <div>
            <ul>
              <li>
                <a
                  href="https://journals.rudn.ru/semiotics-semantics/article/view/7211/6664"
                  target="_blank"
                >
                  Paper
                </a>
              </li>
              <li>
                <a
                  href="https://site.unibo.it/canadausa/it/articoli/double-standard-cosa-e-e-perche-combatterlo"
                  target="_blank"
                >
                  Paper
                </a>
              </li>
              <li>
                <a
                  href="https://link.springer.com/article/10.1007/s10551-010-0654-3"
                  target="_blank"
                >
                  Paper
                </a>
              </li>
              <li>
                <a href="https://www.jstor.org/stable/223435" target="_blank">
                  Paper
                </a>
              </li>
              <li>
                <a
                  href="https://journals.rudn.ru/semiotics-semantics/article/view/7211/6664"
                  target="_blank"
                >
                  Paper
                </a>
              </li>{" "}
              <li>
                <a
                  href="https://academic.oup.com/bjaesthetics/article/64/1/67/7180751?utm_source=chatgpt.com&login=true#436466792"
                  target="_blank"
                >
                  Paper
                </a>
              </li>
            </ul>
          </div>
          <br />
          <hr />
          <br />

          <h2>Credits</h2>
          <ul>
            <li>Bertagnin Bianca</li>
            <li>Bissoli Miriam</li>
            <li>Casini Francesca</li>
            <li>Figueiredo Caeiro Alice</li>
            <li>Garipova Dariia</li>
            <li>De Jesus Pereira Beatriz Inês</li>
          </ul>
          <div>
            <p>
              Polytechnic University of Milan
              <br />
              School of Design
              <br />
              Complex Artifacts and System Design Studio
              <br />
              AY 2024 — 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
