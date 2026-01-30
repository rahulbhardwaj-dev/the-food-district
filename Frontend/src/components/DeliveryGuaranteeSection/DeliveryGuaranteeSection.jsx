import "./DeliveryGuaranteeSection.css"
import { delivery_image, scooter_image } from "../../assets/assets.js"
import Button from "../Button.jsx"

function DeliveryGuaranteeSection() {
  return (
    <div className="delivery-guarantee-section">
      <div className="left">
        <h2>No Long Waits</h2>
        <h3>Food in 30 Minutes</h3>
        <p>When hunger strikes, we move fast. Freshly cooked food delivered to your door in 30 minutes — no unnecessary waiting.</p>
        <div className="contact-info">
            <div className="scooter-img">
                <img src={scooter_image} alt="Scooter" />
            </div>
            <div className="contact-content">
                <p>Get in Touch :</p>
                <h4>+91 9463361375</h4>
            </div>
        </div>
      </div>

      <div className="center">
        <img src={delivery_image} alt="Delivery Guarantee" />
      </div>
      <div className="right">
        <h2>Feeling Hungry?</h2>
        <h2>Choose Your Food & Time</h2>
        <p>Pick your favorite dishes, set your pickup time, and enjoy hot, delicious food without the wait.</p>
        <Button text="Get Started"/>
        </div>
    </div>
  )
}

export default DeliveryGuaranteeSection
