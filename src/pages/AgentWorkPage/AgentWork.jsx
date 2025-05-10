import { STATES, useStateMachine } from "../../stateMachine";
import React, { useEffect } from "react";
import { useState } from "react";
import Modal from "react-modal";
import NumbersContainer from "./components/NumbersContainer";
import SelectionBoxOverlay from "./components/SelectionBoxOverlay";
import "./agentWork.module.css";

const targetSequences = [];
for (let i = 0; i < 6; i++) {
  targetSequences.push(
    Array.from({ length: 6 }, () => Math.floor(Math.random() * 10))
  );
}

export default function AgentWork() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [sequences, setSequences] = useState(targetSequences);
  const [deletedCount, setDeletedCount] = useState(0);
  const { changeState } = useStateMachine();
  let modalClass = "";

  useEffect(() => {
    if (deletedCount == targetSequences.length / 2) {
      setIsOpen(true);
      modalClass = "pop-up-message";
    } else if (deletedCount == (targetSequences.length * 5) / 6) {
      setIsOpen(true);
      modalClass = "pop-up-riddle";
    } else if (deletedCount == targetSequences.length) {
      changeState(STATES.NORMAL_ENDING);
    }
  }, [deletedCount]);

  function closeModal() {
    setIsOpen(false);
  }

  function incrementDeletedCount() {
    setDeletedCount((prev) => prev + 1);
  }

  return (
    <>
      <header className="eden-header">
        <h1>EDEN.EXE</h1>
      </header>

      <NumbersContainer
        targetSequences={targetSequences}
        onSequenceDelete={incrementDeletedCount}
      />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel={"Example Modal"}
        className={`${modalClass}`}
      >
        <p>CIAAAAAAAOOOOOO</p>
      </Modal>

      <footer id="eden-footer">
        <progress value={deletedCount / targetSequences.length} />
      </footer>
    </>
  );
}
