import WhyUsCard from "./Card/whyUsCard.component";
import "./whyus.styles.scss";
import { badge } from "./whyUsList.component";



const WhyUs =() =>{

   


    return(
        <>
        
        <section id="why-us" className="why-us section-bg">
                
                <div className="container">

                    <div className="section-title">
                        <h2>Why Choose Us</h2>
                       
                    </div>

                    <div className="row-service">
                    {
                        badge?.map((item,index)=>
                            <WhyUsCard
                                data={item}
                                index={index} 
                                key={index}
                            />
                    )}
                    </div>
                </div>
            </section>
        </>
    )

}
export default WhyUs;