import "./container.styles.scss";
import hero from "../../brand/assets/https_/lottiefiles.com/mobile.png";
import background from "../../brand/assets/https_/lottiefiles.com/background-container.png";
import GetStartedButton from "../get-started-button/getStartedbutton";
import Navigation from "../navigation/navigation";
import {AiOutlinePlayCircle} from "react-icons/ai";
import React from "react";


const Container = () =>{
    return(
        <section id="contain" >
             
            <Navigation />
            <img src= {background} className="containImage" />
            <div className="container">
                <div className="row">
                    <div className="holder col-lg-6  pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
                        <h3>Welcome to AMProtocol Labs.</h3>
                        <h1>Revolutionizing the Software Landscape with Innovative SaaS Solutions and Custom Projects Tailored to your Needs.</h1>
                    
                        <div className="links">
                             < GetStartedButton buttonType = "solid" href="#about" buttonText="Browse Services"/>
                            {/* <div className="watchVideo">
                             <a className="btn-watch-video">
                                 <AiOutlinePlayCircle />
                                 <span className = "watch-video-text" > Watch Video </span>
                             </a>
                         </div> */}
                        </div>
                    </div>
                    <div className="holder col-lg-6 order-1 order-lg-2 ">
                        <img src={hero}  className="hero-img " alt=""/>
                    </div>
                </div>
            </div>

        </section>
    );
}
export default Container;