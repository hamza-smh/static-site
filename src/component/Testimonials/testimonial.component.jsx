
import "./testimonial.styles.scss";
import { comments } from "./TestimonialList.component";
import ImageSwiper from "./Card/imageSwiper/imageSwiper.component";


const Testimonial =() =>{

   


    return(
        <>
        
        <section id="test" className="test section-bg">
                
                <div className="container">

                    <div className="section-title">
                        <h2>Clients Testimonials</h2>
                       <p>Some reviews from our customers</p>
                    </div>

                    <ImageSwiper />
                    
                </div>
            </section>
        </>
    )

}
export default Testimonial;