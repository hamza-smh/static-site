import "../NavLinkBar/navLinkBar.styles.scss";
import NavItem from "../NavItem/navItem.component";
import GetStartedButton from "../../get-started-button/getStartedbutton";
import NavDropDown from "../NavDropDown/navDropDown.component";


const NavLinkBar = () =>{
    return(
        <div className="navLinkBar">
        < ul className = "navlinkBar  navbar-nav mr-auto" >
            <NavItem nav_item= "Home" scrollTo="#contain" />
            <NavItem nav_item= "About" scrollTo="#about"/>
            <NavItem nav_item= "Services" scrollTo="#services"/>
            <NavItem nav_item= "Portfolio" scrollTo="#portfolio"/>
            <NavItem nav_item= "Team" scrollTo="#team"/>
            
            <NavDropDown />
            
            <NavItem nav_item = "Contact" scrollTo="#contact"/>
            
            <li className="nav-item "><a className ="nav-link scrollto" id = "getstarted" href = '#about'>  
                <GetStartedButton buttonType= "transparent" /></a> 
            </li> 

         </ul>
        </div>
    )
}

 export default NavLinkBar;
