import { useEffect, useState } from "react";
import EnigmaNumber from "../EnigmaNumber";
import SelectionBoxOverlay from "../SelectionBoxOverlay";
import "./numbers.css";

export default function NumbersContainer({
  cells = 600,
  row = 20,
  columns = cells / row,
  specialCount = 3,
  targetSequences,
  sequenceLength = 6,
  onSequenceDelete,
}) {
  // useState to avoid re-renders
  const [grid, setGrid] = useState(() =>
    generateGrid(cells, columns, specialCount, targetSequences)
  );

  // Offset to centre the div that is bigger than the screen
  useEffect(() => {
    const container = document.getElementById("data-container");
    const data = document.getElementById("data");

    container.scrollLeft = (data.offsetWidth - container.clientWidth) / 2;
    container.scrollTop = (data.offsetHeight - container.clientHeight) / 2;
  }, []);

  /*  // Array of the numbers for the grid
  const numbersArray = new Array(cells)
    .fill(null)
    .map(() => Math.floor(Math.random() * 10));
  // Track sequence positions
  const sequenceIndices = new Set();
  const insertedSequences = [];

  // Inject each sequence at a unique random position without overlap and
  targetSequences.forEach((seq) => {
    let inserted = false;
    while (!inserted) {
      const pos = Math.floor(Math.random() * (cells - seq.length));

      // Calculate row and column
      const row = Math.floor(pos / columns);
      const col = pos % columns;

      // Ensure it fits in the current row
      if (col + seq.length > columns) continue;

      // Ensure no overlap
      const overlap = seq.some((_, i) => sequenceIndices.has(pos + i));
      if (overlap) continue;

      // Insert
      seq.forEach((num, i) => {
        numbersArray[pos + i] = num;
        sequenceIndices.add(pos + i);
      });

      insertedSequences.push({ startIndex: pos, values: [...seq] });
      inserted = true;
    }
  });

  // Generate specialIndices that do not overlap with sequenceIndices
  const specialIndices = new Set();
  while (
    specialIndices.size < Math.min(specialCount, cells - sequenceIndices.size)
  ) {
    const idx = Math.floor(Math.random() * cells);
    if (!sequenceIndices.has(idx)) {
      specialIndices.add(idx);
      sequenceIndices.add(idx); // Optionally reserve it
    }
  }

  // Create the grid
  const numbers = numbersArray.map((num, idx) => (
    <EnigmaNumber
      key={idx}
      id={idx}
      value={num} // This is the actual value from numbersArray
      isSpecial={specialIndices.has(idx)}
      isPartOfSequence={sequenceIndices.has(idx)}
    />
  )); */

  return (
    <div id="data-container">
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
          />
        ))}
      </div>

      <SelectionBoxOverlay
        targetSequences={targetSequences}
        onSequenceDelete={onSequenceDelete}
      />
    </div>
  );
}

// The number of columns must be a divisor of the number of cells
function generateTemplateColumnOption(value) {
  return `repeat(${value}, 1fr)`;
}

function generateGrid(cells, columns, specialCount, targetSequences) {
  // Array of the numbers for the grid
  const numbersArray = new Array(cells)
    .fill(null)
    .map(() => Math.floor(Math.random() * 10));
  // Track sequence positions
  const sequenceIndices = new Set();
  const insertedSequences = [];

  // Inject each sequence at a unique random position without overlap and
  targetSequences.forEach((seq) => {
    let inserted = false;
    while (!inserted) {
      const pos = Math.floor(Math.random() * (cells - seq.length));

      // Calculate row and column
      const row = Math.floor(pos / columns);
      const col = pos % columns;

      // Ensure it fits in the current row
      if (col + seq.length > columns) continue;

      // Ensure no overlap
      const overlap = seq.some((_, i) => sequenceIndices.has(pos + i));
      if (overlap) continue;

      // Insert
      seq.forEach((num, i) => {
        numbersArray[pos + i] = num;
        sequenceIndices.add(pos + i);
      });

      insertedSequences.push({ startIndex: pos, values: [...seq] });
      inserted = true;
    }
  });

  // Generate specialIndices that do not overlap with sequenceIndices
  const specialIndices = new Set();
  while (
    specialIndices.size < Math.min(specialCount, cells - sequenceIndices.size)
  ) {
    const idx = Math.floor(Math.random() * cells);
    if (!sequenceIndices.has(idx)) {
      specialIndices.add(idx);
      sequenceIndices.add(idx); // Optionally reserve it
    }
  }

  // Create the grid
  const numbers = numbersArray.map((num, idx) => ({
    id: idx,
    value: num,
    isSpecial: specialIndices.has(idx),
    isSequence: sequenceIndices.has(idx),
  }));

  return numbers;
}

/* // Function to generate a grid
function generateGrid(cells, columns, targetSequences = []) {
  const grid = Array.from({ length: cells }, (_, i) => ({
    id: i,
    value: Math.floor(Math.random() * 10),
    isSpecial: false,
    isSequence: false,
  }));

  const allValues = grid.map((g) => g.value);

  // Reserve space for sequences (horizontally only)
  const sequenceIndices = new Set();
  for (const sequence of targetSequences) {
    let placed = false;

    while (!placed) {
      const row = Math.floor(Math.random() * (cells / columns));
      const start =
        row * columns + Math.floor(Math.random() * (columns - sequence.length));

      // Check that no overlap
      const canPlace = sequence.every(
        (_, i) => !sequenceIndices.has(start + i)
      );
      if (canPlace) {
        sequence.forEach((val, i) => {
          const index = start + i;
          grid[index].value = val;
          grid[index].isSequence = true;
          sequenceIndices.add(index);
        });
        placed = true;
      }
    }
  }

  // Add some special numbers not in sequence
  const specialIndices = new Set();
  while (specialIndices.size < Math.min(20, cells)) {
    const idx = Math.floor(Math.random() * cells);
    if (!sequenceIndices.has(idx)) {
      grid[idx].isSpecial = true;
      specialIndices.add(idx);
    }
  }

  return grid;
} */
