import "./container.styles.scss";
import hero from "../../brand/assets/https_/lottiefiles.com/mobile.png";
import background from "../../brand/assets/https_/lottiefiles.com/background-container.png";
import GetStartedButton from "../get-started-button/getStartedbutton";
import Navigation from "../navigation/navigation";
import {AiOutlinePlayCircle} from "react-icons/ai";

// const Container = () => {
// return(
//     <div className="contain" id="contain">
//         < Navigation />
//         <div className="holder col-12  pt-4 pt-lg-0 order-2 order-lg-1" id="holder1" data-aos="fade-up">
//             <div className="text-holder">
//                 <h1>Building Cutting Edge SaaS Solutions</h1>
//                 <h2>We are team of talented technology enthusiasts helping business with digital automation</h2>
//                 <div className="links">
//                     < GetStartedButton buttonType = "inverted" href="#about" />
                   
//                     <div className="watchVideo">
//                             <a className="btn-watch-video">
//                                 <AiOutlinePlayCircle />
//                                 <span className = "watch-video-text" > Watch Video </span>
//                             </a>
//                         </div>
//                         </div>
//                     <div>
//                 </div>
//             </div>
//         </div>
//         <div className="holder col-lg-12 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" id="img-holder" data-aos="fade-up" data-aos-delay="200">
//             < img src ={hero} className = "img-hero animate" id = "hero" alt = ""/>
//         </div>
        
//     </div>


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
                        {/* <h2>We are team of talented technology enthusiasts helping business with digital automation</h2> */}
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