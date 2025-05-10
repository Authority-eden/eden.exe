import { STATES, useStateMachine } from "../../stateMachine";
import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import NumbersContainer from "./components/NumbersContainer";
import SelectionBoxOverlay from "./components/SelectionBoxOverlay";
import "./agentWork.module.css";

const targetSequences = [
  [3, 1, 4, 1, 3, 1],
  [2, 7, 1, 8, 1, 8],
  [0, 5, 0, 5, 0, 5],
  [3, 1, 4, 1, 3, 1],
  [2, 7, 1, 8, 1, 8],
  [0, 5, 0, 5, 0, 5],
];

export default function AgentWork() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [sequences, setSequences] = useState(targetSequences);
  const [deletedCount, setDeletedCount] = useState(0);
  const { changeState } = useStateMachine();

  function openModal() {
    setIsOpen(true);
  }
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

      {/* <SelectionBoxOverlay
        targetSequences={sequences}
        setSequences={setSequences}
        onSequenceDelete={incrementDeletedCount}
      /> */}
      <NumbersContainer
        targetSequences={targetSequences}
        onSequenceDelete={incrementDeletedCount}
      />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className={"pop-up-riddle"}
      />

      <footer id="eden-footer">
        <progress value={deletedCount / targetSequences.length} />
      </footer>
    </>
  );
}
