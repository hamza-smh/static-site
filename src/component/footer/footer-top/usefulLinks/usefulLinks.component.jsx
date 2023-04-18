import "./useful.styles.scss";
import {BiChevronRight} from "react-icons/bi"

const UsefulLink = ({data,index}) => {
    const {title,ref}= data;
// console.log(data)
//     const {title} = data;
    return(
        <li>
            <a href={ref}>
                {title}
            </a>
        </li>
    );
}
export default UsefulLink;