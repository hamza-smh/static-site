import "./infoBox.styles.scss";
const InfoBox = ({data, index}) => {
    const { icon,title,info} = data;
    return(
        <div className="infoBox">
            <span>
                <img src={icon}/>
            </span>
            <span>
                
                <p>{info}</p>
            </span>
        </div>
    );
}
export default InfoBox;