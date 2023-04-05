import { useContext } from "react";
import { NavBarContext } from "../../../contexts/navbar.context";
import { FaBars } from "react-icons/fa";
import "./navtoggle.styles.scss";

const NavToggleButton = () => {

const {isNavBarOpen , setIsNavBarOpen} =useContext(NavBarContext);
const toggleNavBarOpen = () => setIsNavBarOpen(!isNavBarOpen); 

    return(
        <>
            {/* <i className="bi bi-list mobile-nav-toggle" onClick={toggleNavBarOpen}></i>  */}
            <FaBars className="mobile-nav-toggle" onClick={toggleNavBarOpen} /> 
        </>
    )
}
export default NavToggleButton;