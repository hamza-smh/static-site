import "./team-member.styles.scss";
import {FaGithub,FaLinkedin} from 'react-icons/fa';

const TeamMember = ({data,index}) =>{
    const {member,name,post,linkedIn,github} = data;
    
    return(
    < div className = "member-container col-lg-3" key={index}>
            <div className="member d-flex " data-aos="zoom-in" data-aos-delay="100">
                <div className="pic"><img src={member} className="img-fluid dp" alt=""/></div>
                <div className="member-info">
                    <h4>{name}</h4>
                    <span>{post}</span>
                    <div className="social">                        
                        <a href={linkedIn}><FaLinkedin className="img-fluid" /></a>
                        <a href={github}><FaGithub className="img-fluid" /></a>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default TeamMember;