import {WhyUsBlock,Slider,Count,TextOutside,ChevronIcon,SliderIconButton} from "./whyUsText.styles";
//import { useContext } from "react";
//import { WhyUsContext } from "../../../context/whyus.context";
import SliderIcon from "./sliderIcon/sliderIcon.component";


const WhyUsText = ({data, selected,setSelected,index}) =>{

    const {textInside,textOutside} = data;
    console.log({
        data,
        selected,
        setSelected,
        index
    })
        const Toggler = (optionId) => {
            if (selected === optionId) {
                // if the selected option is clicked again, reset to default
                setSelected("");
            } else {
                setSelected(optionId);
            }
        };

    

    return(
        <>
        <WhyUsBlock>
            <Slider onClick = {() => Toggler(index)}
            className={selected === index? "active":""}>
                <TextOutside > 
                    <Count>
                        {index +1}
                    </Count>

                    {textOutside}
                </TextOutside>
                

                 <ChevronIcon>
                    {/* <SliderIconButton onClick = {() => setSelected(index)}> */}
                    <SliderIconButton >
                        <SliderIcon selected={selected} index={index}/>
                    </SliderIconButton>
                </ChevronIcon>

            </Slider>
            <>
                {
                    // selected===index ? <p>{textInside}</p> : null
                    selected===index ? <p>{textInside}</p> :null
                } 
            </>
        </WhyUsBlock>
        </>              

    )
}
export default WhyUsText;