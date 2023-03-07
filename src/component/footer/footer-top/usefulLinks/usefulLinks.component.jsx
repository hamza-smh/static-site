import "./useful.styles.scss";

const UsefulLink = ({title}) => {
    return(
        <li><i className="bx bx-chevron-right"></i> <a href="#">{title}</a></li>
    );
}
export default UsefulLink;