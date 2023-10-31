import "./testimonialCard.styles.scss";
import star from "./../../../brand/assets/https_/lottiefiles.com/Star.png";
import GetStartedButton from "../../get-started-button/getStartedbutton";
import { comments } from "../TestimonialList.component";
import {BsStarFill} from "react-icons/bs";
import apostrophe from "../../../brand/assets/https_/lottiefiles.com/”.png";

const TestimonialCard = ({data,index}) =>{

    const {user,comment,dp,city,rating}=data;
    

     const ratingStars = Array(rating).fill(null);
    return(

        <div className="card test-Card " key={index}>
            <div className="icon-box">
                <div className="intro">
                    <div className="user">
                    <div className="icon">
                      {dp}
                    </div>
                    <h4>
                        <a href="">{user}</a>
                        <p className="city">{city}</p>
                        <div className="rating">    
                            {
                                ratingStars.map((star, index) => (
                                     <BsStarFill key={index} className="star"/>
                                ))
                            }    
                        </div>   
                    </h4>
                    </div>
                    <img src={apostrophe} className="apostrophe"/>
                </div>
                <p>{comment}</p>
                
                
            </div>
        </div>

    )
}
export default TestimonialCard;