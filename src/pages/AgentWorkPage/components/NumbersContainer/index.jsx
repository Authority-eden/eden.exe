import { useEffect, useState, useRef } from "react";
import EnigmaNumber from "../EnigmaNumber";
import SelectionBoxOverlay from "../SelectionBoxOverlay";
import "./numbers.css";

const riddleNames = ["color_coded", "cut_throat"];

export default function NumbersContainer({
  cells = 600,
  row = 20,
  columns = cells / row,
  specialCount = 2,
  targetSequences,
  sequenceLength = 6,
  onSequenceDelete,
  suppressSelectionBox,
}) {
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const scrollStart = useRef({ left: 0, top: 0 });
  const [isRightClickDragging, setIsRightClickDragging] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
    container.scrollTop = (container.scrollHeight - container.clientHeight) / 2;

    // Prevent right-click context menu
    const preventContextMenu = (e) => e.preventDefault();
    container.addEventListener("contextmenu", preventContextMenu);

    return () => {
      container.removeEventListener("contextmenu", preventContextMenu);
    };
  }, []);

  function handleMouseDown(e) {
    if (e.button === 2) {
      // right mouse button
      isDragging.current = true;
      setIsRightClickDragging(true);
      dragStart.current = { x: e.clientX, y: e.clientY };
      scrollStart.current = {
        left: containerRef.current.scrollLeft,
        top: containerRef.current.scrollTop,
      };
    }
  }

  function handleMouseMove(e) {
    if (isDragging.current) {
      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;
      containerRef.current.scrollLeft = scrollStart.current.left - dx;
      containerRef.current.scrollTop = scrollStart.current.top - dy;
    }
  }

  function handleMouseUp() {
    isDragging.current = false;
    setIsRightClickDragging(false);
  }

  // useState to avoid re-renders
  const [grid, setGrid] = useState(() =>
    generateGrid(cells, columns, specialCount, targetSequences)
  );

  return (
    <div
      id="data-container"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{
        cursor: isRightClickDragging ? "grabbing" : "default",
      }}
    >
      <div
        id="data"
        style={{
          gridTemplateColumns: generateTemplateColumnOption(columns),
        }}
      >
        {grid.map((item) => (
          <EnigmaNumber
            key={item.id}
            id={item.id}
            value={item.value}
            isSpecial={item.isSpecial}
            isPartOfSequence={item.isSequence}
            riddlePage={item.riddlePage}
          />
        ))}
      </div>

      <SelectionBoxOverlay
        targetSequences={targetSequences}
        onSequenceDelete={onSequenceDelete}
        suppressSelectionBox={suppressSelectionBox}
      />
    </div>
  );
}

// The number of columns must be a divisor of the number of cells
function generateTemplateColumnOption(value) {
  return `repeat(${value}, 1fr)`;
}

// Generate the grid of number with injected sequences and special numbers leading to a different page each
function generateGrid(cells, columns, specialCount, targetSequences) {
  const numbersArray = new Array(cells)
    .fill(null)
    .map(() => Math.floor(Math.random() * 10));

  const sequenceIndices = new Set();
  const insertedSequences = [];

  // Insert sequences
  targetSequences.forEach((seq) => {
    let inserted = false;
    while (!inserted) {
      const pos = Math.floor(Math.random() * (cells - seq.length));
      const row = Math.floor(pos / columns);
      const col = pos % columns;
      if (col + seq.length > columns) continue;

      const overlap = seq.some((_, i) => sequenceIndices.has(pos + i));
      if (overlap) continue;

      seq.forEach((num, i) => {
        numbersArray[pos + i] = num;
        sequenceIndices.add(pos + i);
      });

      insertedSequences.push({ startIndex: pos, values: [...seq] });
      inserted = true;
    }
  });

  // Riddles list – must match specialCount length
  const riddleNames = ["color_coded", "cut_throat"]; // Add more if needed
  if (riddleNames.length !== specialCount) {
    throw new Error("Riddle count must match specialCount.");
  }

  // Generate special cells with exact 1:1 mapping to riddles
  const availableIndices = [...Array(cells).keys()].filter(
    (i) => !sequenceIndices.has(i)
  );

  const shuffledIndices = shuffleArray(availableIndices).slice(0, specialCount);
  const specialCells = shuffledIndices.map((idx, i) => ({
    idx,
    riddle: riddleNames[i],
  }));

  const specialIndexSet = new Set(specialCells.map((item) => item.idx));

  // Final grid
  const numbers = numbersArray.map((num, idx) => {
    const special = specialCells.find((item) => item.idx === idx);
    return {
      id: idx,
      value: num,
      isSpecial: !!special,
      isSequence: sequenceIndices.has(idx),
      riddlePage: special?.riddle || null, // will never be null
    };
  });

  return numbers;
}

// Fisher-Yates shuffle
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
