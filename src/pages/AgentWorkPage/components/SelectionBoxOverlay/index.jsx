import { useEffect, useRef, useState } from "react";
import "./selectionBox.css";

export default function SelectionBoxOverlay({
  targetSequences,
  onSequenceDelete,
  suppressSelectionBox,
}) {
  const [boxStyle, setBoxStyle] = useState(null);
  const startPos = useRef({ x: 0, y: 0 });
  const selectionRef = useRef(null);

  useEffect(() => {
    // When you click start tracking the position of the cursor (box size still 0)
    function onMouseDown(e) {
      if (e.button !== 0 || suppressSelectionBox) return; // Left-click only
      const container = document.getElementById("data-container");
      const containerRect = container.getBoundingClientRect();

      const startX = e.clientX - containerRect.left + container.scrollLeft;
      const startY = e.clientY - containerRect.top + container.scrollTop;

      // Check cursor position
      startPos.current = { x: startX, y: startY };
      setBoxStyle({
        left: startX,
        top: startY,
        width: 0,
        height: 0,
      });

      document.body.classList.add("dragging");

      // Functions are called based on the type of interactions
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    }

    // Track box dimensions while you move with the mouse down
    function onMouseMove(e) {
      const container = document.getElementById("data-container");
      const containerRect = container.getBoundingClientRect();

      const currentX = e.clientX - containerRect.left + container.scrollLeft;
      const currentY = e.clientY - containerRect.top + container.scrollTop;

      const x = Math.min(currentX, startPos.current.x);
      const y = Math.min(currentY, startPos.current.y);
      const width = Math.abs(currentX - startPos.current.x);
      const height = Math.abs(currentY - startPos.current.y);

      setBoxStyle({ left: x, top: y, width, height });
    }

    // When you unclick
    function onMouseUp(e) {
      // If no selection, just return
      if (!selectionRef.current) return;

      const boxRect = selectionRef.current.getBoundingClientRect();
      const numbers = Array.from(document.querySelectorAll(".numbers"));

      // Get the bounding box of the selection
      const selected = numbers.filter((el) => {
        const rect = el.getBoundingClientRect();
        return (
          rect.left >= boxRect.left &&
          rect.right <= boxRect.right &&
          rect.top >= boxRect.top &&
          rect.bottom <= boxRect.bottom
        );
      });

      // Sort selected by data-id (to maintain grid order)
      const sorted = selected
        .map((el) => ({
          el,
          id: parseInt(el.dataset.id),
          value: parseInt(el.dataset.number),
        }))
        .sort((a, b) => a.id - b.id);

      const selectedSequence = sorted.map((s) => s.value);

      const allVisible = sorted.every(({ el }) => {
        const style = window.getComputedStyle(el);
        return style.visibility !== "hidden";
      });

      // Check if the selected sequence matches the target sequence
      const matches =
        allVisible &&
        targetSequences.some(
          (seq) =>
            sorted.length === seq.length &&
            sorted.every((s, i) => s.value === seq[i])
        );
      // If they match, then hide them
      if (matches) {
        onSequenceDelete();
        sorted.forEach(({ el }) => (el.style.visibility = "hidden"));
      }

      // After hiding the numbers, set the box style to null to hide it
      setBoxStyle(null);
      document.body.classList.remove("dragging");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    }

    // Call the function onMouseDown when you click
    window.addEventListener("mousedown", onMouseDown);

    return () => {
      window.removeEventListener("mousedown", onMouseDown);
    };
  }, [targetSequences, onSequenceDelete, suppressSelectionBox]);

  return (
    <>
      {boxStyle && (
        <div
          ref={selectionRef}
          className="selection-box"
          style={{
            left: boxStyle.left,
            top: boxStyle.top,
            width: boxStyle.width,
            height: boxStyle.height,
          }}
        ></div>
      )}
    </>
  );
}
