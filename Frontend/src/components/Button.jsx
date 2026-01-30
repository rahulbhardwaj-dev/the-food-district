import "./Button.css"

function Button({text}) {
    
  return (
    <div className="main-btn">
      <button>{text} <span><img src="./arrow-right-long-line.svg" alt="arrow" /></span></button>
    </div>
  )
}

export default Button
