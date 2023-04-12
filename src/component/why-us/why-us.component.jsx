import WhyUsText from "./why-us-textList/whyUsText.component";
import "./why-us.styles.scss"
import whyus from "F:/AMProtocol/project/my-app/src/brand/assets/img/why-us.png";
import { useState } from "react";
import team from "./../../brand/assets/https_/lottiefiles.com/team.png";
import GetStartedButton from "../get-started-button/getStartedbutton";

const WhyUs = () => {

    const [selected, setSelected] = useState(0);
    


    

return(
    <>
    <section id="why-us" className="why-us section-bg">
        <div className="container-fluid" data-aos="fade-up">            
            <div className="row-container">                
                
                <div className="why-us-text">
                    <div className="content">
                        <h5>About Us</h5>
                        <h3><strong>We are experts in SaaS Development</strong> </h3>
                        <p>
                           Welcome to AMProtocol Labs, your go - to destination
                           for innovative SaaS solutions and custom software projects.Founded in January 2023 by Anab and Hassan, our mission is to identify gaps in traditional practices and improve processes using cutting - edge techniques.
                        </p>
                        <p>
                           Anab and Hassan, the visionary founders of AMProtocol Labs, lead a talented team of software engineers, designers, and project managers.We 're driven by the desire to make a difference in the software industry by bridging gaps in traditional practices and enhancing processes through innovative techniques.
                        </p>
                        <p>
                           Our commitment to quality, creativity, and forward - thinking sets us apart, allowing us to consistently deliver top - notch solutions
                           for our clients.We have new SaaS products in pipeline,
                        </p>
                        <p> 
                            Click onto our <strong>Portfolio</strong> to check them out.
                        </p>
                        <GetStartedButton buttonType="solid" buttonText="Explore Now"/>
                    </div>
                    
                    <div>
                    {/* <ul className="whyUsTextBlock"> 
                        {
                            text?.map((item,index)=>
                            <WhyUsText
                                selected={selected}
                                setSelected={setSelected} 
                                data={item}
                                index={index} 
                                key={index}
                            />
                        )}
                        
                    </ul> */}
                    </div>
                </div>
                <div className="img"  >
                        <img src = {team} className="why-us-img" alt = "WHY_US" />
                        <div className="rectangle"></div>
                </div>                
            </div>
        </div>
    </section>
    </>
);
}
export default WhyUs;