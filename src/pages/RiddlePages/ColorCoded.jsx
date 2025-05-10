import "./riddle.module.css";

export default function ColorCoded() {
  function CloseTab() {
    window.close();
  }

  return (
    <div id="message">
      <p>
        REEEEEED EVERYWHEERE
        <br />
        Have fun with the riddle!
      </p>
      <button onClick={CloseTab}>Close</button>
    </div>
  );
}
