import "./pricing.styles.scss";
import Plan from "./plan/plan.component";
import { plan } from "./plan/planning";
import GetStartedButton from "../get-started-button/getStartedbutton";

const Pricing = () => {

    return(
        <section id="pricing" className="pricing">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Try out one of our service tiers</h2>
                        <p>
                                With a SaaS focused software house, we understand the 
                                need for providing prices that work for you by 
                                leveraging us as your reliable development 
                                partner
                        </p>
                    </div>

                    <div className="row">
                        {
                            plan?.map((item,index)=>
                            <Plan 
                                data = {item}
                                index={index}
                                key={index}
                            />)
                        }
                    </div>
                    <div className="custom d-flex">
                        <p>Need a custom plan?</p>
                        <div>
                            <GetStartedButton buttonType="solid" buttonText="Contact Us" linkTo="/#contact"/>
                        </div>
                    </div>
                    

                </div>
            </section>
    );
}
export default Pricing;