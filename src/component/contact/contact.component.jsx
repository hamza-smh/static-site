import GetStartedButton from "../get-started-button/getStartedbutton";
import "./contact.styles.scss";
import YourInfo from "./YourInfo/yourInfo.component";
import { yourInfo } from "./YourInfo/inputList.component";
import Person from "../../brand/assets/https_/lottiefiles.com/man.avif"

const Contact = () =>{

    
        
    return(
        <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>We’d love to hear from you</h2>
                        <p>Ready to embark on an exciting journey with AMProtocol Labs? Get in touch with us to discuss your project needs, and our team will be more than happy to assist you.</p>
                    </div>

                    <div className="row" id = "detail">

                        < div className = "aboutUser col-lg-7 mt-5 mt-lg-0" >


                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                
                                <h3>Contact Us</h3>                                
                                
                                <div className="yourInfo">
                                    {
                                        yourInfo?.map((item,index)=>
                                        <YourInfo
                                            data={item}
                                            index={index}      
                                            key={index}   
                                        />
                                    )}
                                </div>
                                
                                
                                <div className="form-group">
                                    
                                    <textarea className="form-control" name="message" rows="10" placeholder="Message*" required></textarea>
                                </div>
                                
                                {/* <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                
                                </div> */}
                                
                                

                                <label className="agree">
                                    <input type="checkbox" />
                                    I agree to process personal data
                                
                                </label>

                                <div><GetStartedButton buttonType="solid" buttonText="Submit" /></div>
                            
                            </form>
                        </div>
                        
                        {/* col-lg-7 mt-5 mt-lg-0  */}
                                <div className="img-holder">
                            <img src = {Person} className="display"/>
                    </div>

                    </div>
                    
                </div>
            </section>
    )
}
export default Contact;