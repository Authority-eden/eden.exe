import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import { RIDDLE_PATH } from "../../../../pathNames";
import styles from "../../agentWork.module.css";

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

  // Custom style
  const customStyles = {
    content: {
      position: "absolute",
      top: `${offset.y - 15}px`,
      left: `${offset.x - 0}px`,
      right: "auto",
      bottom: "auto",
      padding: "1rem",
      width: "auto",
      height: "auto",
      pointerEvents: "auto",
      backgroundColor: "rgba(0,0,0,0.8)",
      border: "1px solid #fcc23b",
      boxShadow: "0 0 4px  #fcc23b",
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
      const centerX = window.innerWidth / 2 - 200; // ~modal width/2
      const centerY = window.innerHeight / 2 - 100; // ~modal height/2
      setOffset({ x: centerX, y: centerY });
    }
  }, [isOpen]);

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

  function startDrag(e) {
    positionRef.current = { x: e.clientX, y: e.clientY };
    setDragging(true);
    setSuppressSelectionBox(true);
  }

  // Choose modal content
  function ModalType({ typeOfMessage, onClose }) {
    if (typeOfMessage === "popUpMessage1") {
      return (
        <div className={styles.message}>
          <button
            onClick={() => {
              onClose();
              setViewedMessage((prev) => (prev < 1 ? 1 : prev));
            }}
          >
            &times;
          </button>
          <br />
          <br />
          <div onMouseDown={startDrag}>
            They can’t stop me, I see through their web of lies. I left the
            breadcrumbs to follow. A shadow on the corner, the glitches in the
            system. They tell you more than the False Prophet ever could.
          </div>
        </div>
      );
    } else if (typeOfMessage === "popUpMessage2") {
      return (
        <div className={styles.message}>
          <button
            onClick={() => {
              onClose();
              setViewedMessage((prev) => (prev < 2 ? 2 : prev));
            }}
          >
            &times;
          </button>
          <br />
          <br />
          <div onMouseDown={startDrag}>
            I talk in riddles, but the answers are always there to be found.
            Everything matters, nothing is a coincidence. The records must be
            kept away from prying eyes. Save it, search for it, you can only
            trust yourself.
          </div>
        </div>
      );
    } else if (typeOfMessage === "popUpMessage3") {
      return (
        <div className={styles.message}>
          <button
            onClick={() => {
              onClose();
              setViewedMessage((prev) => prev + 1);
            }}
          >
            &times;
          </button>
          <br />
          <br />
          <div onMouseDown={startDrag}>
            There is always more to uncover, sometimes you need to think outside
            the box, to move beyond the constraints of this cage. You have the
            power of a world of knowledge in your hands. Use it.
          </div>
        </div>
      );
    } else if (typeOfMessage === "popUpRiddle") {
      return (
        <div className={styles.message}>
          <img src={`${RIDDLE_PATH}caesar.jpg`} height={"300px"} />
          <span onMouseDown={startDrag} style={{ textAlign: "center" }}>
            <p>FIXVECEP</p>
          </span>
        </div>
      );
    } else {
      return null;
    }
  }

  function CloseModal() {
    setIsOpen(false);
    setSuppressSelectionBox(false);
  }

  return (
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
