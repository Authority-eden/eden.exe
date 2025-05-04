import { useEffect, useState } from "react"
import EnigmaNumber from "../EnigmaNumber"
import "./numbers.css"

export default function NumbersContainer({ cells = 600, specialCount = 3 }) {
  // Offset to centre the div that is bigger than the screen
  useEffect(() => {
    const container = document.getElementById('data-container');
    const data = document.getElementById('data');
  
    container.scrollLeft = (data.offsetWidth - container.clientWidth) / 2;
    container.scrollTop = (data.offsetHeight - container.clientHeight) / 2;
  }, [])

  // Generate random unique indices for special numbers
  const specialIndices = new Set(); // Stores unique random indices
  while (specialIndices.size < Math.min(specialCount, cells)) {
    specialIndices.add(Math.floor(Math.random() * cells));
  }

  const numbers = new Array(cells).fill(null).map((_, index) => (
    <EnigmaNumber key={index} isSpecial={specialIndices.has(index)} />
  ));


  return (
    <div id="data-container">
      <div 
        id="data" 
        style={{gridTemplateColumns: generateTemplateColumnOption(cells / 20)}}
        >
        {numbers}
      </div>
    </div>
  )
}

// The number of columns must be a divisor of the number of cells
function generateTemplateColumnOption(value = 30) {
  return `repeat(${value}, 1fr)`
}