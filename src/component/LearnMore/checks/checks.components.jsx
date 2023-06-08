import {IoMdDoneAll} from "react-icons/io";
import "./checks.styles.scss";

const Checks = ({data,index}) => {
    const {text} = data
    return(
        <li><i><IoMdDoneAll/></i>{text}</li>
    );
}
export default Checks;