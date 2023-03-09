import "./whyUsText.styles.scss";
import { useContext } from "react";
import { WhyUsContext } from "../../../contexts/whyus.context";
import SliderIcon from "./sliderIcon/sliderIcon.component";


const WhyUsText = ({count ,textInside, textOutside}) =>{

    const {isSliderOpen , setIsSliderOpen} = useContext(WhyUsContext);
    const toggleIsSliderOpen = () => setIsSliderOpen(!isSliderOpen); 

    return(
        <>
        <li className="whyUsBlock">
            <a >
                <span>{count}</span>
                <span> {textOutside}</span>
                <span> <SliderIcon /></span>
            </a>
            <div>
                {
                    isSliderOpen ? <p>{textInside}</p> : null
                } 

            </div>
        </li>
        </>              

    )
}
export default WhyUsText;