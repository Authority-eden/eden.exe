import "./enigmaNumber.css"

export default function EnigmaNumber({ isSpecial }) {
  function OpenPage() {
    if (isSpecial){
      // TODO: make position relative
      window.open("/Riddle", "_blank", "width=900, height=600, top=100, left=300");
    }
  }


  return (
    <div 
      className={`numbers${isSpecial ? " special-number" : ""}`}
      onClick={OpenPage}
      >
      {Math.floor(Math.random() * 10)}
    </div>
  )
}