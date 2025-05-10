import { useEffect, useState } from "react";
import EnigmaNumber from "../EnigmaNumber";
import "./numbers.css";

export default function NumbersContainer({
  cells = 600,
  specialCount = 3,
  targetSequences,
  row = 20,
  columns = cells / row,
}) {
  // Offset to centre the div that is bigger than the screen
  useEffect(() => {
    const container = document.getElementById("data-container");
    const data = document.getElementById("data");

    container.scrollLeft = (data.offsetWidth - container.clientWidth) / 2;
    container.scrollTop = (data.offsetHeight - container.clientHeight) / 2;
  }, []);

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
  const numbers = numbersArray.map((num, idx) => (
    <EnigmaNumber
      key={idx}
      id={idx}
      number={num} // This is the actual value from numbersArray
      isSpecial={specialIndices.has(idx)}
      isPartOfSequence={sequenceIndices.has(idx)}
    />
  ));

  return (
    <div id="data-container">
      <div
        id="data"
        style={{
          gridTemplateColumns: generateTemplateColumnOption(columns),
        }}
      >
        {numbers}
      </div>
    </div>
  );
}

// The number of columns must be a divisor of the number of cells
function generateTemplateColumnOption(value) {
  return `repeat(${value}, 1fr)`;
}
