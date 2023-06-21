import "./achievementsCard.styles.scss";

const AchievementCard = ({data,index}) =>{

    const {title,icon,number}=data;
    
    return(

        < div className = "card Achievement-Card " >
            <div className="icon-box">
                <div className="icon">
                    <img src={icon} />
                </div>
                <h1>{number}</h1>
                <h4><a href="">{title}</a></h4>
               
            </div>
        </div>

    )
}
export default AchievementCard;