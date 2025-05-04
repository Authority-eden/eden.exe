import { useEffect, useRef, useState } from "react";
import "./selectionBox.css"; 

export default function SelectionBoxOverlay() {
  const [boxStyle, setBoxStyle] = useState(null);
  const startPos = useRef({ x: 0, y: 0 });
  const selectionRef = useRef(null);

  useEffect(() => {
    function onMouseDown(e) {
      if (e.button !== 0) return; // Left-click only

      startPos.current = { x: e.pageX, y: e.pageY };
      setBoxStyle({
        left: e.pageX,
        top: e.pageY,
        width: 0,
        height: 0,
      });

      document.body.classList.add("dragging");

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    }

    function onMouseMove(e) {
      const x = Math.min(e.pageX, startPos.current.x);
      const y = Math.min(e.pageY, startPos.current.y);
      const width = Math.abs(e.pageX - startPos.current.x);
      const height = Math.abs(e.pageY - startPos.current.y);

      setBoxStyle({ left: x, top: y, width, height });
    }

    function onMouseUp() {
      if (!selectionRef.current) return;

      const boxRect = selectionRef.current.getBoundingClientRect();
      const numbers = document.querySelectorAll(".numbers");
      const padding = 1;

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
      });

      setBoxStyle(null);
      document.body.classList.remove("dragging");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    }

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
