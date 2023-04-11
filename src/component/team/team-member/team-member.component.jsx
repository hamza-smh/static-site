import "./team-member.styles.scss";
import {FaTwitter , FaFacebookF , FaInstagramSquare,FaLinkedin} from 'react-icons/fa';

const TeamMember = ({data,index}) =>{
    const {member,name,post,about} = data;
    
    return(
    //    <div className="member-container col-lg-6">
    < div className = "member-container col-lg-6" >
            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
                <div className="pic"><img src={member} className="img-fluid dp" alt=""/></div>
                <div className="member-info">
                    <h4>{name}</h4>
                    <span>{post}</span>
                    <p>{about}</p>
                    <div className="social">
                        <a href=""><FaTwitter className="img-fluid" /></a>
                        <a href=""><FaFacebookF className="img-fluid" /></a>
                        <a href=""><FaInstagramSquare className="img-fluid" /></a>
                        <a href=""><FaLinkedin className="img-fluid" /></a>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default TeamMember;