import "../NavLinkBar/navLinkBar.styles.scss";
import NavItem from "../NavItem/navItem.component";
import GetStartedButton from "../../get-started-button/getStartedbutton";
import NavDropDown from "../NavDropDown/navDropDown.component";


const NavLinkBar = () =>{
    return(
        <div className="navLinkBar" >
        < ul className = "navlinkBar  navbar-nav mr-auto collapse navbar-collapse" id="navbarSupportedContent" >
            <NavItem nav_item= "Home" scrollTo="#contain" />
            <NavItem nav_item= "About" scrollTo="#aboutUs"/>
            <NavItem nav_item= "Services" scrollTo="#services"/>
            <NavItem nav_item= "Portfolio" scrollTo="#portfolio"/>
            <NavItem nav_item= "Testimonials" scrollTo="#testimonials"/>
            <NavItem nav_item = "Careers" scrollTo="#careers"/>
            <NavItem nav_item = "Contact Us" scrollTo="#contactUs"/>
            {/* <NavDropDown /> */}
            
            
            
            <li className="nav-item "><a className ="nav-link scrollto" id = "getstarted" href = '#about'>  
                <GetStartedButton buttonType= "solid" buttonText="Get Started"/></a> 
            </li> 

         </ul>
        </div>
    )
}

 export default NavLinkBar;
