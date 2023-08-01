import "../NavLinkBar/navLinkBar.styles.scss";
import NavItem from "../NavItem/navItem.component";
import GetStartedButton from "../../get-started-button/getStartedbutton";
import NavDropDown from "../NavDropDown/navDropDown.component";


const NavLinkBar = () =>{
    return(
        <div className="navLinkBar2" >
        < ul className = "navlinkBar2  navbar2-nav mr-auto collapse navbar-collapse" id="navbarSupportedContent" >
            <NavItem nav_item= "Home" scrollTo="#contain" />
            <NavItem nav_item= "About" scrollTo="#aboutUs"/>
            <NavItem nav_item= "Services" scrollTo="#services"/>
            <NavItem nav_item= "Portfolio" scrollTo="#portfolio"/>
            <NavItem nav_item= "Testimonials" scrollTo="#test"/>
            <NavItem nav_item = "Careers" scrollTo="#careers"/>
            <NavItem nav_item = "Contact Us" scrollTo="#contact"/>
            {/* <NavDropDown /> */}
         </ul>
        </div>
    )
}

 export default NavLinkBar;
