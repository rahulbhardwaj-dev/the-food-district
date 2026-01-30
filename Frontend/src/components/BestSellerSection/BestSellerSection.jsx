import "./BestSellerSection.css"
import { menu_list } from "../../assets/assets.js"

function BestSellerSection() {
  return (
    <div className="bestsellers-section">
      <div className="bestsellers-title">
        <h2>Our Best Sellers</h2>
      </div>
      <div className="bestsellers-items">
        {menu_list.map((item, index) => {
          return (
            <div className="bestseller-item" key={index}>
              <img src={item.image} alt={item.name} />
              <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BestSellerSection
