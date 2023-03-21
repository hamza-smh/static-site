import "./team.styles.scss";
import Walter from "../../brand/assets/img/team/team-1.jpg";
import Sarah from "../../brand/assets/img/team/team-2.jpg";
import William from "../../brand/assets/img/team/team-3.jpg";
import Amanda from "../../brand/assets/img/team/team-4.jpg";
import TeamMember from "./team-member/team-member.component";



const Team =()=>{

    const data = [
        {
            name :"Walter White" ,
            post : "Chief Executive Officer" ,
            member: Walter, 
            about : "Explicabo voluptatem mollitia et repellat qui dolorum quasi"
        },
        {
            name : "Sarah Jhonson",
            post : "Product Manager",
            member : Sarah,
            about : "Aut maiores voluptates amet et quis praesentium qui senda para"
        },
        {
            name : "William Anderson",
            post : "CTO",
            member: William, 
            about :"Quisquam facilis cum velit laborum corrupti fuga rerum quia"
        },
        {
            name:"Amanda Jepson",
            post : "Accountant",
            member : Amanda,
            about : "Dolorum tempora officiis odit laborum officiis et et accusamus"
        }
    ];
    return(
         <section id="team" className="team section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Team</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">
                        {
                            data?.map((item,index)=>
                            <TeamMember
                                data={item}
                                index={index}         
                            />
                        )}                        
                    </div>

                </div>
            </section>
    );
}
export default Team;