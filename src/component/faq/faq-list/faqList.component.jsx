import "./faqList.styles.scss";
import {BsQuestionCircle} from "react-icons/bs";
import {BiChevronUp,BiChevronDown} from 'react-icons/bi';
const FaqList =({data, selected,setSelected,index})=>{
    
    const {innerText,outerText} = data;

    return(
        <li className="faq-question">
            <a className="slider">
                    <span className="cover">
                        <BsQuestionCircle className="mark"/>  
                        {/* comment */}
                        {outerText}
                    </span>

                <span>
                    <button onClick = {() => setSelected(index)}>
                        <i selected={selected} index={index}/>
                    </button>
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