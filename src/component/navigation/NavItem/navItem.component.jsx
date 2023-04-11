import "./navItem.styles.scss";

const NavItem = ({nav_item,scrollTo}) => {
return(
    <>
        <li className="nav-item"><a className="nav-link "  href = {scrollTo} >{nav_item}</a></li>
    </>
)
}
export default NavItem;