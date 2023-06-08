import ServiceCard from "./serviceCard/serviceCard.component";
import "./services.styles.scss";
import { ourServices } from "./serviceList.component";
import background from "../../brand/assets/https_/lottiefiles.com/pexels-andrea-piacquadio-845451 1.png";
import GetStartedButton from "../get-started-button/getStartedbutton";
const Services =() =>{

   


    return(
        <>
        
        <section id="services" className="services section-bg">
                <img src= {background} id="serviceImage" />
                <div className="container">

                    <div className="section-title">
                        <h2>Services</h2>
                        <p>We provide a wide range of software solutions to help streamline and optimize your business operations. Browse our services below to see how we can help you achieve your goals</p>
                    </div>

                    <div className="row-service">
                    {
                        ourServices?.map((item,index)=>
                            <ServiceCard
                                data={item}
                                index={index} 
                                key={index}
                            />
                    )}
                    </div>
                    <div className="buttons">
                        <GetStartedButton buttonText="Learn More" buttonType="inverted"/>
                        <GetStartedButton buttonText="Get A Quote" buttonType="solid"/>
                    </div>
                </div>
            </section>
        </>
    )

}
export default Services;