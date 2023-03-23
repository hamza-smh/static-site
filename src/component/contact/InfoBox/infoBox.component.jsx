import "./infoBox.styles.scss";
const InfoBox = ({icon,title,info}) => {
    return(
        <div className="infoBox">
            <i className="icon">{icon}</i>
            <h4>{title}</h4>
            <p>{info}</p>
        </div>
    );
}
export default InfoBox;