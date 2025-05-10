import "./riddle.module.css";

export default function CutThroat() {
  function CloseTab() {
    window.close();
  }

  return (
    <div id="message">
      <p>
        You clicked the special number!
        <br />
        Have fun with the riddle!
      </p>
      <button onClick={CloseTab}>Close</button>
    </div>
  );
}
