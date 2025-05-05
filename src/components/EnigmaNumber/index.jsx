import React, { useState } from "react";
import "./enigmaNumber.css";

export default function EnigmaNumber({
  isSpecial,
  isPartOfSequence,
  number,
  id,
}) {
  // Define the possible classes that the numbers can be part of
  const classes = [
    "numbers",
    isSpecial ? "special-number" : "",
    isPartOfSequence ? "sequence" : "",
  ]
    .join(" ")
    .trim();

  const [className, setClassName] = useState(classes);

  function OpenPage() {
    if (isSpecial) {
      // TODO: make position relative
      window.open(
        "/Riddle",
        "_blank",
        "width=900, height=600, top=100, left=300"
      );
    }
    setClassName("numbers visited-special-number");
  }

  return (
    <div
      className={className}
      onClick={OpenPage}
      data-number={number}
      data-id={id}
    >
      {Math.floor(Math.random() * 10)}
    </div>
  );
}
