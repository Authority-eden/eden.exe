import { useEffect, useState } from "react";
import EnigmaNumber from "../EnigmaNumber";
import "./numbers.css";

export default function NumbersContainer({
  cells = 600,
  specialCount = 3,
  targetSequences,
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
  const usedIndices = new Set();

  // Inject each sequence at a unique random position without overlap
  targetSequences.forEach((seq) => {
    let inserted = false;
    while (!inserted) {
      const pos = Math.floor(Math.random() * (cells - seq.length));
      const overlap = seq.some((_, i) => usedIndices.has(pos + i));
      // Check for overlaps
      if (!overlap) {
        seq.forEach((num, i) => {
          numbersArray[pos + i] = num;
          usedIndices.add(pos + i);
        });
        inserted = true;
      }
    }
  });

  // Generate specialIndices that do not overlap with usedIndices
  const specialIndices = new Set();
  while (
    specialIndices.size < Math.min(specialCount, cells - usedIndices.size)
  ) {
    const idx = Math.floor(Math.random() * cells);
    if (!usedIndices.has(idx)) {
      specialIndices.add(idx);
      usedIndices.add(idx); // Optionally reserve it
    }
  }

  // Create the grid
  const numbers = numbersArray.map((num, idx) => (
    <EnigmaNumber
      key={idx}
      id={idx}
      number={num} // This is the actual value from numbersArray
      isSpecial={specialIndices.has(idx)}
      isPartOfSequence={usedIndices.has(idx)}
    />
  ));

  return (
    <div id="data-container">
      <div
        id="data"
        style={{
          gridTemplateColumns: generateTemplateColumnOption(cells / 20),
        }}
      >
        {numbers}
      </div>
    </div>
  );
}

// The number of columns must be a divisor of the number of cells
function generateTemplateColumnOption(value = 30) {
  return `repeat(${value}, 1fr)`;
}
