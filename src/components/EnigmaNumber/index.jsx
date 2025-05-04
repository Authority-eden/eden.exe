import "./enigmaNumber.css"

export default function EnigmaNumber({ isSpecial }) {
  return (
    <div>
      {Math.floor(Math.random() * 10)}
    </div>
  )
}