import "./container.styles.scss";
import hero from "F:/AMProtocol/project/my-app/src/brand/assets/img/hero.png";
import GetStartedButton from "../get-started-button/getStartedbutton";
import Navigation from "../navigation/navigation";
import {AiOutlinePlayCircle} from "react-icons/ai";

const Container = () => {
return(
    <div className="contain" id="contain">
        < Navigation />
        <div className="holder col-12 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" id="holder1" data-aos="fade-up" data-aos-delay="200">
            <div className="text-holder">
                <h1>Building Cutting Edge SaaS Solutions</h1>
                <h2>We are team of talented technology enthusiasts helping business with digital automation</h2>
                <div className="links">
                    < GetStartedButton buttonType = "inverted" href="#about" />
                   
                    <div className="watchVideo">
                            <a className="btn-watch-video">
                                <AiOutlinePlayCircle />
                                <span className = "watch-video-text" > Watch Video </span>
                            </a>
                        </div>
                        </div>
                    <div>
                </div>
            </div>
        </div>
        <div className="holder col-lg-12 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" id="img-holder" data-aos="fade-up" data-aos-delay="200">
            < img src ={hero} className = "img-hero animate" id = "hero" alt = ""/>
        </div>
        
    </div>

        //     <section id="hero" className="d-flex ">
        //                 <Navigation />
        //     <div className="container">
        //         <div className="row">
                    
        //             <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
        //                 <h1>Building Cutting Edge SaaS Solutions</h1>
        //                 <h2>We are team of talented technology enthusiasts helping business with digital automation</h2>
        //                 <div className="d-flex justify-content-lg-start">
                            
        //                     <a href="#about" 
        //                     className="btn-get-started scrollto">Get Started</a>
                            
        //                     <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
        //                         className = "glightbox btn-watch-video"><AiOutlinePlayCircle />
        //                         <span>Watch Video</span>
        //                     </a>
        //                 </div>
        //             </div>
        //             <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
        //                 <img src={hero} className="img-fluid animated" alt=""/>
        //             </div>
        //         </div>
        //     </div>

        // </section>
);
}
export default Container;