import {IoMdDoneAll} from "react-icons/io";
import "./checks.styles.scss";

const Checks = ({text}) => {
    return(
        <li><i><IoMdDoneAll/></i>{text}</li>
    );
}
export default Checks;