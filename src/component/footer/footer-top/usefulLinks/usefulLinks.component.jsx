import "./useful.styles.scss";
import {BiChevronRight} from "react-icons/bi"

const UsefulLink = ({title}) => {
// console.log(data)
//     const {title} = data;
    return(
        <li><BiChevronRight className="rightChevron"/> 
            <a href="#">
                {title}
            </a>
        </li>
    );
}
export default UsefulLink;