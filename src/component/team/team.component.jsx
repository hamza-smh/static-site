import "./team.styles.scss";
import TeamMember from "./team-member/team-member.component";
import { team } from "./members.components";


const Team =()=>{

    
    return(
         <section id="team" className="team section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Team</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">
                        {
                            team?.map((item,index)=>
                            <TeamMember
                                data={item}
                                index={index} 
                                key={index}        
                            />
                        )}                        
                    </div>

                </div>
            </section>
    );
}
export default Team;