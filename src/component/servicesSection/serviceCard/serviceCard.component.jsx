import "./serviceCard.styles.scss";

const ServiceCard = ({data,index}) =>{

    const {title,icon,text}=data;
    return(
        <div className="card col-xl-3 col-md-6 ">
            <div className="icon-box">
                <div className="icon">
                    <i>{icon}</i>
                </div>
                <h4><a href="">{title}</a></h4>
                <p>{text}</p>
            </div>
        </div>

    )
}
export default ServiceCard;