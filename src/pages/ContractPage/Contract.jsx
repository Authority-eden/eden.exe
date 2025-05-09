import "./Contract.module.css";

export default function Contract() {
  function CloseTab() {
    window.close();
  }

  return (
    <div id="contract">
      <p>You need to accept the terms of this contract to proceed</p>
      <button onClick={CloseTab}>Yes</button>
      <button onClick={CloseTab}>No</button>
    </div>
  );
}
