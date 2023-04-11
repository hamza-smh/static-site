import FaqList from "./faq-list/faqList.component";
import { useState } from "react";
import "./faq.styles.scss";
import { questions } from "./faq-list/questions.component";

const FAQ = () => {

    const [selected, setSelected] = useState(0);
    


    return(
        <section id="faq" className="faq section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Frequently Asked Questions</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="faq-list">
                        <ul>

                        {
                            questions?.map((item,index)=>
                            <FaqList
                                selected={selected}
                                setSelected={setSelected} 
                                data={item}
                                index={index} 
                                key={index}
                            />
                        )}




                            {/* <FaqList 
                                outerText = "Non consectetur a erat nam at lectus urna duis?"
                                innerText = "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non."
                            />
                            <FaqList 
                                outerText = "Feugiat scelerisque varius morbi enim nunc ?"
                                innerText = "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui."
                            />
                                
                            <FaqList 
                                outerText = "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?"
                                innerText = "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis"
                            />
                                
                            <FaqList 
                                outerText = "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?"
                                innerText = " Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in."
                            />
                                
                            <FaqList 
                                outerText = "Non consectetur a erat nam at lectus urna duis?"
                                innerText = "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non."
                            /> */}


                        </ul>
                    </div>

                </div>
            </section>
    )
}

export default FAQ;