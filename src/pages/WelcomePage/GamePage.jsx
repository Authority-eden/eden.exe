import { useState } from "react";
import styles from "./gamePage.module.css";
import { IDENTITY_PATH } from "../../pathNames";
import Slider from "./components/index.jsx";
import PopUpModal from "../AgentWorkPage/components/PopUpModal/index.jsx";

export default function GamePage() {
  const [isDSVisible, setIsDSVisible] = useState(false);
  const [isPvsSVisible, setIsPvsSVisible] = useState(false);
  const [showJournalModal, setShowJournalModal] = useState(false);

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
            I’m beginning to wonder if this system was designed to trap people
            like me… people who ask questions…
          </p>
        </blockquote>
      </div>

      <br />
      <br />
      <br />

      <div className={styles.paragraph}>
        <p className={styles.text}>
          The year 2046. You are an Agent of The Authority, the world order that{" "}
          keeps you, your family and all of{" "}
          <span className={styles.highlight}>your data safe.</span> You do not
          know the exact details of how this came to be, you were too young to
          remember. But you know of it, the Collapse, the rise of The Authority,
          and the better world it created for everyone, more peaceful, safe, and
          free.
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

        <p className={styles.credentials}>
          USERNAME: <span className={styles.highlight}>anonagtzero</span>
          <br />
          PASSWORD: <span className={styles.highlight}>/0penGate</span>
        </p>
        <p> Wouldn’t want to forget that…</p>
      </div>

      <hr />

      <div className={styles.credentials}>
        <h1>Begin your work as an agent</h1>

        <br />
        <br />
        <br />
        <br />

        <button
          onClick={() => {
            setShowJournalModal(true);
          }}
        >
          Play
        </button>
        <PopUpModal
          isOpen={showJournalModal}
          setIsOpen={setShowJournalModal}
          typeOfMessage={"journalMessage"}
          setSuppressSelectionBox={() => {}}
        />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <hr />
      </div>

      <h1>The Project</h1>

      <div className={styles.paragraph}>
        <p>
          EDEN.exe is a{" "}
          <span className={styles.highlight}>
            single-player investigative narrative game
          </span>{" "}
          where truth hides behind firewalls, riddles, and forgotten data
          trails.
          <br />
          <br />
          After receiving a cryptic journal from a missing colleague, Amira
          Berger, the player steps into the role of an agent in a world run by{" "}
          <span className={styles.highlight}>
            opaque systems and manipulated information.
          </span>
          <br />
          <br />
          On the surface, your job is to process data, follow protocol, and
          comply. But if you pay attention and are willing to investigate
          further you’ll find that, buried in the noise, are{" "}
          <span className={styles.highlight}>fragments of a lost truth.</span>
          <br />
          <br />
          Through ciphers, coded websites, contradictory reports, and haunting
          pop-ups, the player uncovers the{" "}
          <span className={styles.highlight}>
            real story of the past 20 years,
          </span>{" "}
          a history rewritten by the institutions that claimed to protect it.
          <br />
          <br />
          As the investigation deepens, so does the question:{" "}
          <span className={styles.highlight}>
            are you here to serve the system… or to expose it
            <span style={{ fontFamily: "Chakra Petch" }}>?</span>
          </span>{" "}
          Sometimes, to uncover the future, you must reassemble the past.
        </p>
        <br />
        <Slider></Slider>
      </div>

      <hr />
      <br />
      <h1>Resources</h1>
      <div className={styles.research}>
        <button
          onClick={() => {
            setIsDSVisible(!isDSVisible);
          }}
        >
          Double Standards
        </button>
        <button
          onClick={() => {
            setIsPvsSVisible(!isPvsSVisible);
          }}
        >
          Privacy VS Surveillance
        </button>
      </div>
      <div
        style={{
          display: isDSVisible ? "block" : "none",
        }}
      >
        <br />
        <h3>General Double Standard Papers</h3>
        <div></div>
        <ul>
          <li>
            <a
              href="https://link.springer.com/article/10.1007/s10551-010-0654-3"
              target="_blank"
            >
              Double Standards: The Role of Techniques of Neutralization
            </a>
          </li>
          <li>
            <a
              href="https://journals.sagepub.com/doi/epub/10.1177/1474885114546137"
              target="_blank"
            >
              Autonomy and cultural practices: The risk of double standards
            </a>
          </li>
          <li>
            <a
              href="https://site.unibo.it/canadausa/it/articoli/double-standard-cosa-e-e-perche-combatterlo"
              target="_blank"
            >
              Double Standard: cosa è e perché combatterlo
            </a>
          </li>
          <li>
            <a
              href="https://doaj.org/article/20ececaaab444a0dbde0603f31460dc0"
              target="_blank"
            >
              The Concept of “Double Standards” in the Sociolinguistics
              Discourse
            </a>
          </li>
          <li>
            <a href="https://www.jstor.org/stable/223435" target="_blank">
              Double Standards for Competence: Theory and Research
            </a>
          </li>{" "}
          <li>
            <a
              href="https://academic.oup.com/bjaesthetics/article/64/1/67/7180751?"
              target="_blank"
            >
              Double-Standard Moralism: Why We Can Be More Permissive Within Our
              Imagination
            </a>
          </li>
        </ul>
      </div>
      <br />
      <div
        style={{
          display: isPvsSVisible ? "block" : "none",
        }}
      >
        <h3>Privacy VS Surveillance Double Standard Papers</h3>
        <div>
          <ul>
            <li>
              <a
                href="https://onlinelibrary.wiley.com/doi/epdf/10.1111/socf.12040"
                target="_blank"
              >
                Sociological Reflections on Security Through Surveillance
              </a>
            </li>
            <li>
              <a
                href="https://www.sciencedirect.com/science/article/abs/pii/S0963868707000492?"
                target="_blank"
              >
                Internet privacy concerns and beliefs about government
                surveillance – An empirical investigation
              </a>
            </li>
            <li>
              <a
                href="https://www.tandfonline.com/doi/full/10.1080/2573234X.2021.1920856"
                target="_blank"
              >
                Balancing privacy rights and surveillance analytics: a decision
                process guide
              </a>
            </li>
            <li>
              <a
                href="https://cris.unibo.it/retrieve/8e1cbd36-6950-4acd-9e9f-1ada9c9f49a2/sorveglianza%20federalismi%20Mollo.pdf"
                target="_blank"
              >
                Sorveglianza di massa, rispetto della vita privata e trattamento
                di categorie particolari di dati nel quadro multilivello di
                tutela della persona
              </a>
            </li>
            <li>
              <a
                href="https://www.sciencedirect.com/science/article/abs/pii/S0740624X15000246"
                target="_blank"
              >
                Public opinion on National Security Agency surveillance
                programs: A multi-method approach
              </a>
            </li>{" "}
            <li>
              <a
                href="https://www.aei.org/wp-content/uploads/2015/04/Cyber-surveillance-regulations.pdf?x85095"
                target="_blank"
              >
                Cyber surveillance regulations: Is the United States asking
                China to accept a double standard?
              </a>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <hr />

      <div className={styles.uniCredits}>
        <h2>Credits</h2>
        <ul>
          <li>Bertagnin Bianca</li>
          <li>Bissoli Miriam</li>
          <li>Casini Francesca</li>
          <li>Figueiredo Caeiro Alice</li>
          <li>Garipova Dariia</li>
          <li>De Jesus Pereira Beatriz Inês</li>
        </ul>
      </div>
      <div className={styles.uniCredits}>
        <p>
          Polytechnic University of Milan
          <br />
          School of Design
          <br />
          Complex Artifacts and System Design Studio
          <br />
          AY 2024 — 2025
        </p>
        <br />
      </div>
    </div>
  );
}
