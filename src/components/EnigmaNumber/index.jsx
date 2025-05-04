import "./enigmaNumber.css"

export default function EnigmaNumber({ isSpecial }) {
  function OpenPage() {
    if (isSpecial){
      window.open("/Riddle", "_blank", "width=900, height=600, titlebar=no");
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