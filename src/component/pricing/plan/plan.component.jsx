import "./plan.styles.scss";
import GetStartedButton from "../../get-started-button/getStartedbutton";
import {BiX} from "react-icons/bi";

import { FaCheck, } from "react-icons/fa";

const Plan =({data}) =>{




    const {title,about,price,buttonType,strike,color,service} = data;
    return(
         <div className="plan col-lg-4">
            <div className={color ? "dark box" : "light box"}>
                <h3>{title}</h3>
                <p>{about}</p>
                <h2 className="price">${price}<span>.99</span><span> / month</span></h2>
                <ul>
                    <div className="subscribe d-flex">
                        <GetStartedButton buttonType={buttonType} buttonText="Subscribe"/>
                    </div>
                    {
                        service?.map(({id,text})=>
                            <li>
                                <i><FaCheck /></i>
                                 {text}
                            </li>    
                        )
                    }
                </ul>
                
            </div>
        </div>


    );   
}
export default Plan;




