import { STATES, useStateMachine } from "../../stateMachine";
import { useEffect } from "react";
import { useState } from "react";
import NumbersContainer from "./components/NumbersContainer";
import PopUpModal from "./components/PopUpModal";
import styles from "./AgentWork.module.css";

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
  const [deletedCount, setDeletedCount] = useState(6);
  const [showMessageModal1, setShowMessageModal1] = useState(false);
  const [showMessageModal2, setShowMessageModal2] = useState(false);
  const [showMessageModal3, setShowMessageModal3] = useState(false);
  const [showRiddleModal, setShowRiddleModal] = useState(false);
  const [suppressSelectionBox, setSuppressSelectionBox] = useState(false);
  const [viewedMessage, setViewedMessage] = useState(0);

  // Define when to open the modal
  useEffect(() => {
    if (viewedMessage === 0 && deletedCount === targetSequences.length / 2) {
      setShowMessageModal1(true);
    } else if (viewedMessage === 1 && !showMessageModal2) {
      setShowMessageModal2(true);
    } else if (viewedMessage === 2 && !showMessageModal3) {
      setShowMessageModal3(true);
    } else if (
      deletedCount === targetSequences.length / 6 &&
      !showRiddleModal
    ) {
      setShowRiddleModal(true);
    } else if (deletedCount === 0) {
      changeState(STATES.NORMAL_ENDING);
    }
  }, [
    deletedCount,
    viewedMessage,
    showMessageModal2,
    showMessageModal3,
    showRiddleModal,
  ]);

  function incrementDeletedCount() {
    setDeletedCount((prev) => prev - 1);
  }

  return (
    <>
      <header>
        <h1>EDEN.exe</h1>
        <div className={styles.instructions}>
          <div>
            <p>
              TASK:
              <br />
              select corrupted strings
            </p>
          </div>
          <div>
            <p>
              SELECT:
              <br />
              left click + drag
            </p>
          </div>
          <div>
            <p>
              NAVIGATE:
              <br />
              right click + drag
            </p>
          </div>
        </div>
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
