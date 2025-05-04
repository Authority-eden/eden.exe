import NumbersContainer from "../components/NumbersContainer"
import SelectionBoxOverlay from "../components/SelectionBoxOverlay"
import "./AgentWork.module.css"

export default function AgentWork() {

  return (
    <>
      <header className="eden-header">
        <h1>EDEN.EXE</h1>
      </header>

      <SelectionBoxOverlay />
      <NumbersContainer />

      <footer id="eden-footer">
        <h2>Footer</h2>
      </footer>
    </>
  )
}