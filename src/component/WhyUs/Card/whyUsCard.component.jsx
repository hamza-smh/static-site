import "./whyUsCard.styles.scss";

const WhyUsCard = ({data,index}) =>{

    const {title,icon,text}=data;
    return(

        <div className="card whyUs-Card ">
            <div className="icon-box">
                <div className="icon">
                    <img src={icon} />
                </div>
                <h4><a href="">{title}</a></h4>
                <p>{text}</p>
            </div>
        </div>

    )
}
export default WhyUsCard;