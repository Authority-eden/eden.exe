import { useState } from "react";
import "./enigmaNumber.css";

export default function EnigmaNumber({
  isSpecial,
  isPartOfSequence,
  value,
  id,
  riddlePage,
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
      const page = riddlePage;
      if (page) {
        window.open(
          `${import.meta.env.BASE_URL}${page}`,
          "_blank",
          "width=900, height=600, top=100, left=300"
        );
      } else {
        alert("No riddle assigned to this number.");
      }
      setClassName("numbers visited-special-number");
    }
  }

  return (
    <div
      className={className}
      onClick={OpenPage}
      data-number={value}
      data-id={id}
    >
      {value}
    </div>
  );
}
