import Header from "../../components/Header/Header.jsx"
import BestSellerSection from "../../components/BestSellerSection/BestSellerSection.jsx"
import DeliveryGuaranteeSection from "../../components/DeliveryGuaranteeSection/DeliveryGuaranteeSection.jsx"
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu.jsx"
import "./Home.css"

function Home() {

  const [category, setCategory] = "All";

  return (
    <div className="home">
        <Header />
        <BestSellerSection />
        <DeliveryGuaranteeSection />
        <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  )
}

export default Home
