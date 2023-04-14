import "./learnMore.styles.scss";
import SectionTitle from "../section-title/section-title.component";
import  Checks  from "./checks/checks.components";

const LearnMore = () => {

    const checks = [
         {text : "Ullamco laboris nisi ut aliquip ex ea commodo consequat"},
         {text : "Duis aute irure dolor in reprehenderit in voluptate velit"},
         {text : "Ullamco laboris nisi ut aliquip ex ea commodo consequat"}
    ]
return(
    <>
       <section id="learnMore" className="learnMore">
                <div className="learnMore-container" >

                    <SectionTitle title = "Learn More" />

                    <div className="row content">
                         < div  className = "col-lg-6">  
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <ul className="checklist">

                                   {
                                    checks?.map((item,index)=>
                                    <Checks
                                        data = {item}
                                        index={index}
                                        key={index}
                                    />
                                   )} 

                            </ul>
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0">
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <a href="#" className="btn-learn-more">Learn More</a>
                        </div>
                    </div>

                </div>
            </section>
    </>
);
}
export default LearnMore;