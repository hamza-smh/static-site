import ProgressBar from "./progressBar/progressBar.component";
import "./skills.styles.scss";
import skills from "../../brand/assets/img/skills.png";
const SkillSection = () => {
    return(
        <>

        <section id="skills" className="skills">
                <div className="skills-container" data-aos="fade-up">

                    <div className="skill-row">
                        <div className="image-holder col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
                            <img src={skills} className="skill-img-fluid" alt=""/>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
                            <h3>Voluptatem dignissimos provident quasi corporis voluptates</h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>

                            <div className="skills-content">

                                <ProgressBar id="bar1" title= "HTML" val = "100"/>
                                <ProgressBar id="bar2" title= "CSS"  val = "90"/>
                                <ProgressBar id="bar3" title= "Javascript" val = "75"/>
                                <ProgressBar id="bar4" title= "Photoshop" val = "55"/>

                            </div>

                        </div>
                    </div>

                </div>
            </section>
            

        </>
    );
}

export default SkillSection;