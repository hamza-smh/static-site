import WhyUsText from "./why-us-textList/whyUsText.component";
import "./why-us.styles.scss"
import whyus from "F:/AMProtocol/project/my-app/src/brand/assets/img/why-us.png";
// import { useContext } from "react";
// import { WhyUsContext } from "../../context/whyus.context";
import { useState } from "react";
import { text } from "./whyusTextdata.component";

const WhyUs = () => {

    const [selected, setSelected] = useState(0);
    

console.log({selected})
    

return(
    <>
    <section id="why-us" className="why-us section-bg">
        <div className="container-fluid" data-aos="fade-up">            
            <div className="row-container">                
                
                <div className="why-us-text">
                    <div className="content">
                        <h3>Eum ipsam laborum deleniti <strong>velit pariatur architecto aut nihil</strong></h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                        </p>
                    </div>
                    
                    <div>
                    <ul className="whyUsTextBlock"> 
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
                        
                    </ul>
                    </div>
                </div>
                <div className="img"  >
                        <img src = {whyus} className="why-us-img" alt = "WHY_US" />
                </div>                
            </div>
        </div>
    </section>
    </>
);
}
export default WhyUs;