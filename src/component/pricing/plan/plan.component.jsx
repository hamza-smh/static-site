import "./plan.styles.scss";
import GetStartedButton from "../../get-started-button/getStartedbutton";
import {FcCheckmark} from 'react-icons/fc';
import {BiX} from "react-icons/bi";

// const Disable = ({ active, children }) => (
//   <i className={`FcCheckmark ${active ? "" : "BiX"}`}></i>
// );



const Plan =({title,price,buttonType,strike,deactivate}) =>{


    return(
        <div className="plan col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="box">
                <h3>{title}</h3>
                <h4><sup>$</sup>{price}<span>per month</span></h4>
                <ul>
                    <li><i><FcCheckmark /></i> Quam adipiscing vitae proin</li>
                    <li><i><FcCheckmark /></i> Nec feugiat nisl pretium</li>
                    <li><i><FcCheckmark /></i> Nulla at volutpat diam uteera</li>
                    
                    <li className={strike}>
                        <i>{deactivate ? <BiX /> : <FcCheckmark />}</i>
                        <span>Pharetra massa massa ultricies</span></li>

                    <li className={strike}>
                        <i>{deactivate ? <BiX /> : <FcCheckmark />}</i>
                        <span>Massa ultricies mi quis hendrerit</span></li>
                </ul>
                <GetStartedButton buttonType={buttonType}/>
            </div>
        </div>


    );   
}
export default Plan;