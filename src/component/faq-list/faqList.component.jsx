import "./faqList.styles.scss";
import React,{ useState } from "react";
import {BsQuestionCircle} from "react-icons/bs";
import {BiChevronUp,BiChevronDown} from 'react-icons/bi';

const FaqList =({data, selected,setSelected,index})=>{
    
    const {innerText,outerText} = data;


    const Toggler = (optionId) => {
        if (selected === optionId) {
            setSelected("");
        } else {
            setSelected(optionId);
        }
    };


    return(
        <li className="faq-question">
            <a className="slider">
                 <span onClick = {() => Toggler(index)}  
                  className={selected === index? "active":""}> 
                    <span className="cover">
                        <i  className="mark"><BsQuestionCircle/></i>  
                       
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
    )
}
export default FaqList;