import React from "react";
import Modal from "react-modal";
import NumbersContainer from "./components/NumbersContainer";
import SelectionBoxOverlay from "./components/SelectionBoxOverlay";
import "./AgentWork.module.css";

const targetSequences = [
  [3, 1, 4, 1],
  [2, 7, 1, 8],
  [0, 5, 0],
];

export default function AgentWork() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [sequences, setSequences] = React.useState(targetSequences);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <header className="eden-header">
        <h1>EDEN.EXE</h1>
      </header>

      <SelectionBoxOverlay
        targetSequences={sequences}
        setSequences={setSequences}
      />
      <NumbersContainer targetSequences={targetSequences} />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className={"pop-up-riddle"}
      />

      <footer id="eden-footer">
        <div>{sequences[0]}</div>
        <div>{sequences[1]}</div>
        <div>{sequences[2]}</div>
      </footer>
    </>
  );
}
