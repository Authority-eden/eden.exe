import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
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
      top: `${offset.y}px`,
      left: `${offset.x}px`,
      right: "auto",
      bottom: "auto",
      padding: "1rem",
      width: "400px",
      height: "200px",
      borderRadius: "10px",
      pointerEvents: "auto",
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
        <div>
          <div>CIAOOOOO</div>
          <button
            onClick={() => {
              onClose();
              setViewedMessage((prev) => (prev < 1 ? 1 : prev));
            }}
          >
            Close
          </button>
        </div>
      );
    } else if (typeOfMessage === "popUpMessage2") {
      return (
        <div>
          <div>come va</div>
          <button
            onClick={() => {
              onClose();
              setViewedMessage((prev) => (prev < 2 ? 2 : prev));
            }}
          >
            Close
          </button>
        </div>
      );
    } else if (typeOfMessage === "popUpMessage3") {
      return (
        <div>
          <div>non bene</div>
          <button
            onClick={() => {
              onClose();
              setViewedMessage((prev) => prev + 1);
            }}
          >
            Close
          </button>
        </div>
      );
    } else if (typeOfMessage === "popUpRiddle") {
      return (
        <div>
          <div>CESARE</div>
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
      <div
        className={styles.modalHeader}
        onMouseDown={startDrag}
        style={{ cursor: "move", fontWeight: "bold", marginBottom: "1rem" }}
      >
        Drag here
      </div>
      <ModalType typeOfMessage={typeOfMessage} onClose={CloseModal} />
    </Modal>
  );
}
