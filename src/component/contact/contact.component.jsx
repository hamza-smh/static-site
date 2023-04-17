import GetStartedButton from "../get-started-button/getStartedbutton";
import InfoBox from "./InfoBox/infoBox.component";
import "./contact.styles.scss";
import {GoLocation} from "react-icons/go";
import {AiOutlineMail} from "react-icons/ai";
import {BsPhone} from "react-icons/bs";
import YourInfo from "./YourInfo/yourInfo.component";
import Map from "./map/map.component";
import { yourInfo } from "./YourInfo/inputList.component";

const Contact = () =>{

    
        
    return(
        <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>We’d love to hear from you</h2>
                        <p>Ready to embark on an exciting journey with AMProtocol Labs? Get in touch with us to discuss your project needs, and our team will be more than happy to assist you.</p>
                    </div>

                    <div className="row" id = "detail">

                        <div className="aboutUser col-lg-7 mt-5 mt-lg-0 ">
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                
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
                                    <label htmlFor="name">Message</label>
                                    <textarea className="form-control" name="message" rows="10" required></textarea>
                                </div>
                                
                                {/* <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                
                                </div> */}
                                
                                
                                <div className="text-center"><GetStartedButton buttonType="solid" buttonText="Send Message" /></div>
                            
                            </form>
                        </div>

                    </div>

                </div>
            </section>
    )
}
export default Contact;