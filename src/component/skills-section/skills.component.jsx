import ProgressBar from "./progressBar/progressBar.component";
import "./skills.styles.scss";
import skills from "F:/AMProtocol/project/my-app/src/brand/assets/img/skills.png"
const SkillSection = () => {
    return(
        <>

        <section id="skills" class="skills">
                <div class="skills-container" data-aos="fade-up">

                    <div class="skill-row">
                        <div class="image-holder col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
                            <img src={skills} class="skill-img-fluid" alt=""/>
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
                            <h3>Voluptatem dignissimos provident quasi corporis voluptates</h3>
                            <p class="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>

                            <div class="skills-content">

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