import {WhyUsBlock,Slider,Count,TextOutside,ChevronIcon,SliderIconButton} from "./whyUsText.styles";
//import { useContext } from "react";
//import { WhyUsContext } from "../../../context/whyus.context";
import SliderIcon from "./sliderIcon/sliderIcon.component";


const WhyUsText = ({data, selected,setSelected,index}) =>{

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
            <Slider >
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
        </>              

    )
}
export default WhyUsText;