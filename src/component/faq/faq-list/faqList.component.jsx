import "./faqList.styles.scss";
import React,{ useState } from "react";
import {BsQuestionCircle} from "react-icons/bs";
import {BiChevronUp,BiChevronDown} from 'react-icons/bi';

const FaqList =({data, selected,setSelected,index})=>{
    
    const {innerText,outerText} = data;


    const Toggler = (optionId) => {
        if (selected === optionId) {
            // if the selected option is clicked again, reset to default
            setSelected("selected1");
        } else {
            setSelected(optionId);
        }
    };


    return(
        <li className="faq-question">
            <a className="slider">
                 <span className="answer" onClick = {() => Toggler(index)} > 
                    <span className="cover">
                        <i  className="mark"><BsQuestionCircle/></i>  
                        {/* comment */}
                        {outerText}
                    </span>

                    <span>
                        <button selected={selected} index={index}>
                               { 
                                    selected === index ? <BiChevronUp />:<BiChevronDown />
                               }
                        </button>
                    </span>   
                 </span> 
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