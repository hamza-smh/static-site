import GetStartedButton from "../get-started-button/getStartedbutton";
import InfoBox from "./InfoBox/infoBox.component";
import "./contact.styles.scss";
import {GoLocation} from "react-icons/go";
import {AiOutlineMail} from "react-icons/ai";
import {BsPhone} from "react-icons/bs";
import YourInfo from "./YourInfo/yourInfo.component";
import Map from "./map/map.component";

const Contact = () =>{

    
        const data = [{
                    title : "Location :",
                    icon : <GoLocation />,
                    info : "A108 Adam Street, New York, NY 535022"
            },
            {
                    title : "Email :",
                    icon : <AiOutlineMail />,
                    info : "info@example.com",
            },
            {
                title : "Call :",
                icon : <BsPhone />,
                info : "+1 5589 55488 555",
            }
        ]
        const yourInfo = [
            {
                label : "Your Name ",
                type : "text",
            },
        
            {
                label : "Your Email ",
                type : "email",
                name : "email"
            },
        ];

    return(
        <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row" id = "detail">

                        <div className="infoHolder col-lg-5 ">
                            <div className="info">
                                {
                                    data?.map((item,index)=>
                                    <InfoBox
                                        data={item}
                                        index={index}
                                        key={index}
                                    />)
                                }
                                
                                <Map />
                                
                            </div>

                        </div>

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
                                    <label htmlFor="name">Subject</label>
                                    <input type="text" className="form-control" name="subject" id="subject" required />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="name">Message</label>
                                    <textarea className="form-control" name="message" rows="10" required></textarea>
                                </div>
                                
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                
                                </div>
                                {/* <div className="text-center"><button type="submit">Send Message</button></div> */}
                                
                                <div className="text-center"><GetStartedButton buttonType="inverted" altText="Send Message" /></div>
                            
                            </form>
                        </div>

                    </div>

                </div>
            </section>
    )
}
export default Contact;