import "./aboutUs.styles.scss"
import team from "./../../brand/assets/https_/lottiefiles.com/team.png";
import GetStartedButton from "../get-started-button/getStartedbutton";

const AboutUs = () => {

return(
    <>
    <section id="aboutUs" className="aboutUs section-bg">
        <div className="container-fluid" data-aos="fade-up">            
            <div className="row-container">                
                
                <div className="aboutUs-text">
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
                        <div className="button">
                            <GetStartedButton className="explore" buttonType="solid" buttonText="Explore Now"/>
                        </div>
                    </div>
                 
                </div>
                <div className="img"  >
                        <img src = {team} className="aboutUs-img" alt = "ABOUT_US" />
                        <div className="rectangle"></div>
                </div>                
            </div>
        </div>
    </section>
    </>
);
}
export default AboutUs;