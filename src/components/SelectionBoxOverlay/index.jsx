import { useEffect, useRef, useState } from "react";
import "./selectionBox.css";

export default function SelectionBoxOverlay({
  targetSequences = [[3, 1, 4, 1]],
}) {
  const [boxStyle, setBoxStyle] = useState(null);
  const startPos = useRef({ x: 0, y: 0 });
  const selectionRef = useRef(null);

  useEffect(() => {
    // When you click start tracking the position of the cursor (box size still 0)
    function onMouseDown(e) {
      if (e.button !== 0) return; // Left-click only

      // Check cursor position
      startPos.current = { x: e.pageX, y: e.pageY };
      setBoxStyle({
        left: e.pageX,
        top: e.pageY,
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
      const x = Math.min(e.pageX, startPos.current.x);
      const y = Math.min(e.pageY, startPos.current.y);
      const width = Math.abs(e.pageX - startPos.current.x);
      const height = Math.abs(e.pageY - startPos.current.y);

      setBoxStyle({ left: x, top: y, width, height });
    }

    // When you unclick
    function onMouseUp() {
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

      // Check if the selected sequence matches the target sequence
      const matches = targetSequences.some(
        (seq) =>
          selectedSequence.length === seq.length &&
          selectedSequence.every((val, i) => val === seq[i])
      );
      // If they match, then hide them
      if (matches) {
        sorted.forEach(({ el }) => (el.style.visibility = "hidden"));
      }

      /*  const padding = 1;

      // Hide the selected numbers
      numbers.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (
          rect.left >= boxRect.left + padding &&
          rect.right <= boxRect.right - padding &&
          rect.top >= boxRect.top + padding &&
          rect.bottom <= boxRect.bottom - padding
        ) {
          el.style.visibility = "hidden";
        }
      }); */

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
  }, []);

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
