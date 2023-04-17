import FeatureCard from "./Card/featureCard.component";
import "./feature.styles.scss";
import { feature } from "./featureList.component";
import ImageSwiper from "./Card/imageSwiper/imageSwiper.component";


const Feature =() =>{

   


    return(
        <>
        
        <section id="feature" className="feature section-bg">
                
                <div className="container">

                    <div className="section-title">
                        <h2>Featured Projects</h2>
                       <p>Our portfolio showcases a wide array of successful projects we've completed for our esteemed clients, including our cutting-edge SaaS products in the pipeline.</p>
                    </div>

                    <ImageSwiper />
                </div>
            </section>
        </>
    )

}
export default Feature;