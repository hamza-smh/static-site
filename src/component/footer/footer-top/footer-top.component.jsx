import "./footer-top.styles.scss";
import UsefulLink from "./usefulLinks/usefulLinks.component";
import {FaTwitter , FaFacebookF , FaInstagram,FaLinkedin,FaSkype} from 'react-icons/fa';

const FooterTop = () => {
    return(
        <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>Mark Zingerburger</h3>
                                <p>
                                    A108 Adam Street <br/>New York, NY 535022<br/>United States <br/><br/>
                                    <strong>Phone:</strong> +1 5589 55488 55<br/>
                                    <strong>Email:</strong> info@example.com<br/>
                                </p>
                                                </div>

                                                <div className="col-lg-3 col-md-6 footer-links">
                                                    <h4>Useful Links</h4>
                                                    <ul>
                                                        <UsefulLink title ="Home"></UsefulLink>
                                                        <UsefulLink title ="About Us"></UsefulLink>
                                                        <UsefulLink title ="Services"></UsefulLink>
                                                        <UsefulLink title ="Terms Of Service"></UsefulLink>
                                                        <UsefulLink title ="Privacy Policy"></UsefulLink>
                                                    </ul>
                                                </div>

                                                <div className="col-lg-3 col-md-6 footer-links">
                                                    <h4>Our Services</h4>
                                                    <ul>
                                                        <UsefulLink title ="Web Design"></UsefulLink>
                                                        <UsefulLink title ="Web Development"></UsefulLink>
                                                        <UsefulLink title ="Product Management"></UsefulLink>
                                                        <UsefulLink title ="Marketing"></UsefulLink>
                                                        <UsefulLink title ="Graphic Design"></UsefulLink>
                                                    </ul>
                                                </div>

                                                <div className="col-lg-3 col-md-6 footer-links">
                                                    <h4>Our Social Networks</h4>
                                                    <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                                                    <div className="social-links mt-3">
                                                        
                                                        <a href=""><FaTwitter classname="img-fluid" /></a>
                                                        <a href=""><FaFacebookF classname="img-fluid" /></a>
                                                        <a href=""><FaInstagram classname="img-fluid" /></a>
                                                        <a href=""><FaSkype classname="img-fluid" /></a>
                                                        <a href=""><FaLinkedin classname="img-fluid" /></a>
                                                    </div>
                                                </div>

                                            </div>
                                            </div>
                                        </div>
    
    
    
    
    
    )



}
export default FooterTop;