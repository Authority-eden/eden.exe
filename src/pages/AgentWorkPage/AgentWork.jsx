import { STATES, useStateMachine } from "../../stateMachine";
import { useEffect } from "react";
import { useState } from "react";
import Modal from "react-modal";
import NumbersContainer from "./components/NumbersContainer";
import PopUpModal from "./components/PopUpModal";
import styles from "./agentWork.module.css";

const targetSequences = [];
for (let i = 0; i < 6; i++) {
  targetSequences.push(
    Array.from({ length: 6 }, () => Math.floor(Math.random() * 10))
  );
}

export default function AgentWork() {
  const { changeState } = useStateMachine();
  // TODO: keep this for when more agent phases
  const [sequences, setSequences] = useState(targetSequences);
  const [deletedCount, setDeletedCount] = useState(0);
  const [showMessageModal1, setShowMessageModal1] = useState(false);
  const [showMessageModal2, setShowMessageModal2] = useState(false);
  const [showMessageModal3, setShowMessageModal3] = useState(false);
  const [showRiddleModal, setShowRiddleModal] = useState(false);
  const [suppressSelectionBox, setSuppressSelectionBox] = useState(false);
  const [viewedMessage, setViewedMessage] = useState(0);

  // Define when to open the modal
  useEffect(() => {
    if (deletedCount === targetSequences.length / 2 && viewedMessage === 0) {
      setShowMessageModal1(true);
    } else if (viewedMessage === 1) {
      setShowMessageModal2(true);
    } else if (viewedMessage === 2) {
      setShowMessageModal3(true);
    } else if (deletedCount === (targetSequences.length * 5) / 6) {
      setShowRiddleModal(true);
    } else if (deletedCount === targetSequences.length) {
      changeState(STATES.NORMAL_ENDING);
    }
  }, [deletedCount, viewedMessage]);

  function incrementDeletedCount() {
    setDeletedCount((prev) => prev + 1);
  }

  return (
    <>
      <header>
        <h1>EDEN.EXE</h1>
      </header>

      <NumbersContainer
        targetSequences={targetSequences}
        onSequenceDelete={incrementDeletedCount}
        suppressSelectionBox={suppressSelectionBox}
      ></NumbersContainer>

      <PopUpModal
        isOpen={showMessageModal1}
        setIsOpen={setShowMessageModal1}
        typeOfMessage={"popUpMessage1"}
        setSuppressSelectionBox={setSuppressSelectionBox}
        viewedMessage={viewedMessage}
        setViewedMessage={setViewedMessage}
      />
      <PopUpModal
        isOpen={showMessageModal2}
        setIsOpen={setShowMessageModal2}
        typeOfMessage={"popUpMessage2"}
        setSuppressSelectionBox={setSuppressSelectionBox}
        viewedMessage={viewedMessage}
        setViewedMessage={setViewedMessage}
      />
      <PopUpModal
        isOpen={showMessageModal3}
        setIsOpen={setShowMessageModal3}
        typeOfMessage={"popUpMessage3"}
        setSuppressSelectionBox={setSuppressSelectionBox}
        viewedMessage={viewedMessage}
        setViewedMessage={setViewedMessage}
      />
      <PopUpModal
        isOpen={showRiddleModal}
        setIsOpen={setShowRiddleModal}
        typeOfMessage={"popUpRiddle"}
        setSuppressSelectionBox={setSuppressSelectionBox}
      />

      <footer>
        <progress value={deletedCount / targetSequences.length} />
      </footer>
    </>
  );
}
