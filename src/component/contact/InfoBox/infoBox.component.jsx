import "./infoBox.styles.scss";
const InfoBox = ({data, index}) => {
    const { icon,title,info} = data;
    return(
        <div className="infoBox">
            <span>
                <i className="icon">{icon}</i>
            </span>
            <span>
                <h4>{title}</h4>
                <p>{info}</p>
            </span>
        </div>
    );
}
export default InfoBox;