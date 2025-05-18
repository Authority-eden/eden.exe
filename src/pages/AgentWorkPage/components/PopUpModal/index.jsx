import { useEffect, useRef, useState, useCallback } from "react";
import Modal from "react-modal";
import { RIDDLE_PATH } from "../../../../pathNames";
import styles from "./popUpModal.module.css";

export default function PopUpModal({
  isOpen,
  setIsOpen,
  typeOfMessage,
  setSuppressSelectionBox,
  viewedMessage,
  setViewedMessage,
}) {
  const modalRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const positionRef = useRef({ x: 0, y: 0 });
  const [scale, setScale] = useState(0.2);
  const [minimized, setMinimized] = useState(false);

  // Custom style
  const customStyles = {
    content: {
      position: "absolute",
      top: `${offset.y}px`,
      left: `${offset.x - 20}px`,
      right: "auto",
      bottom: "auto",
      padding: "1rem",
      width: "auto",
      height: "auto",
      pointerEvents: "auto",
      backgroundColor: "rgba(0,0,0,0.8)",
      border: "1px solid #fcc23b",
      boxShadow: "0 0 4px  #fcc23b",
      transform: `scale(${scale})`,
      transition: "transform 0.3s ease-out",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0)",
      zIndex: 3000,
      pointerEvents: "none",
    },
  };

  const minimizedCustomStyles = {
    content: {
      position: "absolute",
      top: `5vh`,
      left: `80vw`,
      right: "auto",
      bottom: "auto",
      padding: "1rem",
      width: "auto",
      height: "auto",
      pointerEvents: "auto",
      backgroundColor: "rgba(0,0,0,0.8)",
      border: "1px solid #fcc23b",
      boxShadow: "0 0 4px  #fcc23b",
      transform: `scale(${scale})`,
      transition: "transform 0.3s ease-out",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0)",
      zIndex: 3000,
      pointerEvents: "none",
    },
  };

  // Center modal initially
  useEffect(() => {
    if (isOpen) {
      setScale(0); // Start small

      let centerX;
      let centerY;
      if (typeOfMessage === "popUpRiddle") {
        centerX = window.innerWidth / 2 - 225;
        centerY = window.innerHeight / 2 - 200;
      } else {
        centerX = window.innerWidth / 2 - 200;
        centerY = window.innerHeight / 2 - 100;
      }
      setOffset({ x: centerX, y: centerY });

      // Animate scale-in shortly after mount
      requestAnimationFrame(() => {
        setTimeout(() => {
          setScale(1);
        }, 10);
      });
    } else {
      setScale(0); // Reset for next time
    }
  }, [isOpen, minimized, typeOfMessage]);

  // Drag logic
  useEffect(() => {
    function handleMouseMove(e) {
      if (!dragging) return;
      const dx = e.clientX - positionRef.current.x;
      const dy = e.clientY - positionRef.current.y;

      setOffset((prev) => ({
        x: prev.x + dx,
        y: prev.y + dy,
      }));

      positionRef.current = { x: e.clientX, y: e.clientY };
    }

    function handleMouseUp() {
      setDragging(false);
      setSuppressSelectionBox(false);
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  const startDrag = useCallback(
    (e) => {
      if (minimized) return; // prevent drag when minimized

      positionRef.current = { x: e.clientX, y: e.clientY };
      setDragging(true);
      setSuppressSelectionBox(true);
    },
    [minimized, positionRef, setDragging, setSuppressSelectionBox]
  );

  // Choose modal content
  function ModalType({ typeOfMessage, onClose }) {
    if (typeOfMessage === "popUpMessage1") {
      return (
        <PopUpMessage
          startDrag={startDrag}
          handleClick={() => {
            onClose();
            setViewedMessage((prev) => (prev < 1 ? 1 : prev));
          }}
          text={
            <span>
              They can&apos;t stop me, I see through their web of lies. I left
              the breadcrumbs to follow. A shadow on the corner, the glitches in
              the system. They tell you more than the False Prophet ever could.
            </span>
          }
        ></PopUpMessage>
      );
    } else if (typeOfMessage === "popUpMessage2") {
      return (
        <PopUpMessage
          startDrag={startDrag}
          handleClick={() => {
            onClose();
            setViewedMessage((prev) => (prev < 2 ? 2 : prev));
          }}
          text={
            <span>
              I talk in riddles, but the answers are always there to be found.
              Everything matters, nothing is a coincidence. The records must be
              kept away from prying eyes. Save it, search for it, you can only
              trust yourself.
            </span>
          }
        ></PopUpMessage>
      );
    } else if (typeOfMessage === "popUpMessage3") {
      return (
        <PopUpMessage
          startDrag={startDrag}
          handleClick={() => {
            onClose();
            setViewedMessage((prev) => prev + 1);
          }}
          text={
            <>
              <p>
                There is always more to uncover, sometimes you need to think
                outside the box, to move beyond the constraints of this cage.
              </p>
              <br />
              <span>
                You have the power of a world of knowledge IN YOUR HANDS. Use
                it.
              </span>
            </>
          }
        ></PopUpMessage>
      );
    } else if (typeOfMessage === "popUpRiddle") {
      return (
        <CeaserPopUp
          startDrag={startDrag}
          minimized={minimized}
          setMinimized={setMinimized}
        ></CeaserPopUp>
      );
    } else {
      return null;
    }
  }

  function CloseModal() {
    setScale(0);
    setTimeout(() => {
      setIsOpen(false);
      setSuppressSelectionBox(false);
    }, 200); // Delay matches transition duration
  }

  return minimized ? (
    <Modal
      isOpen={isOpen}
      style={minimizedCustomStyles}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={false}
    >
      <MinimizedPopUp
        minimized={minimized}
        setMinimized={setMinimized}
      ></MinimizedPopUp>
    </Modal>
  ) : (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={false}
    >
      <ModalType typeOfMessage={typeOfMessage} onClose={CloseModal} />
    </Modal>
  );
}

const PopUpMessage = ({ startDrag, handleClick, text }) => {
  return (
    <div className={styles.message}>
      <button className={styles.modalButton} onClick={handleClick}>
        &times;
      </button>
      <div className={styles.messageText} onMouseDown={startDrag}>
        {text}
      </div>
    </div>
  );
};

const CeaserPopUp = ({ startDrag, minimized, setMinimized }) => {
  return !minimized ? (
    <div className={styles.message}>
      <button className={styles.modalButton} onClick={() => setMinimized(true)}>
        &minus;
      </button>
      <div onMouseDown={startDrag}>
        <img
          src={`${RIDDLE_PATH}caesar.jpg`}
          draggable="false"
          height={"300px"}
        />
        <span className={styles.messageText} style={{ textAlign: "center" }}>
          <p>FIXVECEP</p>
        </span>
      </div>
    </div>
  ) : null;
};

const MinimizedPopUp = ({ minimized, setMinimized }) => {
  return minimized ? (
    <button
      className={styles.minimizedButton}
      onClick={() => setMinimized(false)}
    >
      ...
    </button>
  ) : null;
};
