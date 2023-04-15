import "./testimonialCard.styles.scss";

import GetStartedButton from "../../get-started-button/getStartedbutton";


const TestimonialCard = ({data,index}) =>{

    const {title}=data;
    //col-xl-3 col-md-6
    return(

        <div className="card test-Card ">
            <div className="icon-box">
                <div className="icon">
                  
                </div>
                <h4><a href="">{title}</a></h4>
                <GetStartedButton buttonText="View More" />
                
            </div>
        </div>

    )
}
export default TestimonialCard;