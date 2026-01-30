import "./ExploreMenu.css"
import { menu_list } from "../../assets/assets.js" 

function ExploreMenu({category, setCategory}) {
  return (
    <div className="explore-menu-section">
        <div className="explore-menu">
            <h1>Explore Our Menu</h1>
            <p>Explore a thoughtfully curated menu filled with deep, rich flavors and irresistible dishes—expertly designed to satisfy your cravings and turn every meal into a lasting memory.</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => (
                <div onClick={() => setCategory(category => category === item.name ? "All" : item.name)} key={index} className={`explore-menu-item`} >
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                </div>
                ))}
            </div>
            <hr />
        </div>
    </div>
  )
}

export default ExploreMenu
