import AchievementCard from "./Card/AchievementsCard.component";
import "./Achievements.styles.scss";
import { achievements } from "./achievementsList.component"



const Achievements = () => {

   


    return(
        <>
        
        <section id="achievements" className="achievements section-bg">
                
                <div className="container">

                    <div className="section-title">
                        <h2>Achievements</h2>
                       <p> We pride ourselves on providing best SaaS services to our clients<br />
                       Our achievements include: </p>
                    </div>

                    <div className="row">
                    {
                        achievements?.map((item, index) =>
                            <AchievementCard
                                data={item}
                                index={index} 
                                key={index}
                            />
                    )}
                    </div>
                </div>
            </section>
        </>
    )

}
export default Achievements;