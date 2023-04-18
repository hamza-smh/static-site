import "./footer-top.styles.scss";
import UsefulLink from "./usefulLinks/usefulLinks.component";
import {FaTwitter , FaFacebookF , FaInstagram,FaLinkedin,FaSkype} from 'react-icons/fa';
import { data, useful ,useful2 } from "./usefulLinks/links.component";
import logo from "../../../brand/logo_transparent.png";
import InfoBox from "./InfoBox/infoBox.component";

const FooterTop = () => {

     
    return(
        <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-4 col-md-6 footer-contact">
                                
                                <img className = "logo" src={logo}/>
                                
                                <p>AMProtocolab is a leading software solution company that specializes in providing innovative and effective solutions to businesses of all sizes.</p>
                                <div className="social-links mt-3">
                                <a href=""><FaTwitter className="img-fluid" /></a>
                                <a href=""><FaFacebookF className="img-fluid" /></a>
                                <a href=""><FaLinkedin className="img-fluid" /></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-links">
             
                                
                                <div className="info">
                                    {
                                        data?.map((item,index)=>
                                        <InfoBox
                                            data={item}
                                            index={index}
                                            key={index}
                                        />)
                                    }    
                                </div>

                            </div>

                            <div className="col-lg-4 col-md-6 footer-explore ">
                                    <h4>Explore</h4>
                                           
                                    <div className="explore">
                                            <ul className="links">                                                     

                                                {
                                                    useful?.map((item,index)=>
                                                    <UsefulLink 
                                                        data = {item}
                                                        index={index}
                                                        key={index}
                                                    />)
                                                }
                                            </ul> 
                                            <ul className="links">                                                     
                                                {
                                                    useful2?.map((item,index)=>
                                                    <UsefulLink 
                                                        data = {item}
                                                        index={index}
                                                        key={index}
                                                    />)
                                                }
                                            </ul> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    
    )

}
export default FooterTop;