import "./team.styles.scss";
import TeamMember from "./team-member/team-member.component";
import { team,team2 } from "./members.components";
import React from "react";
import { useState } from "react";
import GetStartedButton from "../get-started-button/getStartedbutton";



const Team =()=>{

    const [show,setShow]=useState(false);

    const open=()=>{
        setShow(!show);
    }

    return(
         <section id="team" className="team section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        {/* <h2>Team</h2> */}
                        <h2>Meet Our Amazing Team</h2>
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
                    
                    {show?
                        <div className="row">
                        {
                            team2?.map((item,index)=>
                            <TeamMember
                                data={item}
                                index={index} 
                                key={index}        
                            />
                        )}                        
                        </div>
                        :
                        ""
                    }
                    <div className="button-holder">
                    {show?
                    <button onClick={open} 
                        style={{borderRadius: "25px",
                                width : "130px",
                                height: "fit-content",
                                padding: "10px 8px",
                                fontSize: "14px",
                                fontWeight: "500",
                                border: "2px solid #E63946",
                                margin:"20px 0px",
                                backgroundColor: "#E63946",
                                color: " #f8f8f8",
                            }}>Show Less</button>
                            :
                            <button onClick={open} 
                        style={{borderRadius: "25px",
                                width : "130px",
                                height: "fit-content",
                                padding: "10px 8px",
                                fontSize: "14px",
                                fontWeight: "500",
                                border: "2px solid #E63946",
                                margin:"20px 0px",
                                backgroundColor: "#E63946",
                                color: " #f8f8f8",
                            }}>Show More</button>
                        }
                    </div>


                </div>
            </section>
    );
}
export default Team;