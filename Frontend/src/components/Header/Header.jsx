import Button from "../Button.jsx";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <h2>Delicious food, delivered to your door.</h2>
        <p>Discover a menu filled with freshly prepared meals, crafted with attention to detail and delivered to you just the way it should be — tasty and satisfying.</p>
        <Button text="Order Now" />
      </div>
      <div className="header-right">
        <img src="./header.png" alt="header_img" />
      </div>
    </div>
  )
}

export default Header