
import EnigmaNumber from "../EnigmaNumber"
import "./numbers.css"

export default function NumbersContainer({ }) {
  return (
    <div id="data-container">
      <div id="data">
        <EnigmaNumber isSpecial={true} />
      </div>
    </div>
  )
}