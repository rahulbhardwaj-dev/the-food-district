import "./Navbar.css"
import { useState } from "react"

function Navbar() {

  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <div className="left">
        <img src="./logo.png" alt="the_food_district" />
      </div>
      <div className="center">
        <ul>
            <li onClick={() => setMenu("home")} className={menu === "home"? "active" : ""}>home</li>
            <li onClick={() => setMenu("menu")} className={menu === "menu"? "active" : ""}>menu</li>
            <li onClick={() => setMenu("our-story")} className={menu === "our-story"? "active" : ""}>our story</li>
            <li onClick={() => setMenu("contact")} className={menu === "contact"? "active" : ""}>contact</li>
        </ul>
      </div>
      <div className="right">
        <img src="./shopping-basket-line.svg" alt="cart" />
        <button className="contact">Contact Us</button>
        <img src="./hamburger.svg" alt="menu" />
      </div>
    </div>
  )
}

export default Navbar
