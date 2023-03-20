<<<<<<< Updated upstream
import "./whyUsText.styles.scss";
=======
import {WhyUsBlock,Slider,Count,TextOutside,ChevronIcon,SliderIconButton} from "./whyUsText.styles";
>>>>>>> Stashed changes
import { useContext } from "react";
import { WhyUsContext } from "../../../contexts/whyus.context";
import SliderIcon from "./sliderIcon/sliderIcon.component";


const WhyUsText = ({data, selected,setSelected,index}) =>{

<<<<<<< Updated upstream
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
=======
    const {textInside,textOutside,text} = data;
    console.log({
        data,
        selected,
        setSelected,
        index
    })

    const toggleSlider = () => {
        return setSelected(index);
    }

    return(
        <>
        <WhyUsBlock>
            <Slider  >
                <TextOutside> 
                    <Count>
                        {index +1}
                    </Count>

                    {textOutside}
                </TextOutside>
                

                 <ChevronIcon>
                    <SliderIconButton onClick = {() => setSelected(index)}>
                        <SliderIcon selected={selected} index={index}/>
                    </SliderIconButton>
                </ChevronIcon>

            </Slider>
            <>
                {
                    selected===index ? <p>{textInside}</p> : null
                } 
            </>
        </WhyUsBlock>
>>>>>>> Stashed changes
        </>              

    )
}
export default WhyUsText;