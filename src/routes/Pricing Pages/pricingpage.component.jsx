import Navigation2 from "../../component/navigation2/navigation2";
import Pricing from "../../component/pricing/pricing.component";


const PricingPage =() =>{
    return(
        <div className="price-bkg" style={{marginTop: "85px",backgroundColor:"#F4F8FB"}}>
            <Navigation2 />
            <Pricing />
        </div>
    );
}
export default PricingPage;