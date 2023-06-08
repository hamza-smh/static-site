import "./featureCard.styles.scss";
import featureImg from "./../../../brand/assets/https_/lottiefiles.com/feature.png";
import GetStartedButton from "../../../component/get-started-button/getStartedbutton";
import ImageSwiper from "./imageSwiper/imageSwiper.component";

const FeatureCard = ({data,index}) =>{

    const {title}=data;
    //col-xl-3 col-md-6
    return(

        <div className="card feature-Card ">
            <div className="icon-box">
                <div className="icon">
                    <img src= {featureImg}  />
                </div>
                <h4><a href="">{title}</a></h4>
                <GetStartedButton buttonText="View More" buttonType="normal" />
                
            </div>
        </div>

    )
}
export default FeatureCard;