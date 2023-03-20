import "./faqList.styles.scss";
import "../../why-us/why-us-textList/whyUsText.component";
import { ChevronIcon,SliderIconButton } from "../../why-us/why-us-textList/whyUsText.styles";
import SliderIcon from "../../why-us/why-us-textList/sliderIcon/sliderIcon.component";

import {BsQuestionCircle} from "react-icons/bs";
import {BiChevronUp,BiChevronDown} from 'react-icons/bi';
const FaqList =({data, selected,setSelected,index})=>{
    
    const {innerText,outerText} = data;

    return(
        <li className="faq-question">
            <a className="slider">
                    <span className="cover">
                        <BsQuestionCircle className="mark"/>
                        {outerText}
                    </span>

                   <ChevronIcon>
                    <SliderIconButton onClick = {() => setSelected(index)}>
                        <SliderIcon selected={selected} index={index}/>
                    </SliderIconButton>
                </ChevronIcon>
                 {
                    selected===index ? <p>{innerText}</p> : null
                } 
              
            </a>
            
        </li>






        // <li data-aos="fade-up" data-aos-delay="100">
        //     <span className="slider">
        //         <BsQuestionCircle /> 
        //         <a data-bs-toggle="collapse"  data-bs-target="#faq-list-1">
        //             {outerText}
        //             </a>
        //         <a><BiChevronDown /><BiChevronUp /></a>    
                
                
        //     </span>
        //     <div id="faq-list-1"  data-bs-parent=".faq-list">
        //         <p>{innerText}</p>
        //     </div>
        // </li>

    )
}
export default FaqList;