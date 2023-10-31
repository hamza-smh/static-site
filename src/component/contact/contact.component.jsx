// import GetStartedButton from "../get-started-button/getStartedbutton";
// import "./contact.styles.scss";
// import YourInfo from "./YourInfo/yourInfo.component";
// import { yourInfo } from "./YourInfo/inputList.component";
// import Person from "../../brand/assets/https_/lottiefiles.com/contactUS.png";

// const Contact = () =>{


        
//     return(
//         <section id="contact" className="contact">
//                 <div className="container" data-aos="fade-up">

//                     <div className="section-title">
//                         <h2>We’d love to hear from you</h2>
//                         <p>Ready to embark on an exciting journey with AMProtocol Labs? Get in touch with us to discuss your project needs, and our team will be more than happy to assist you.</p>
//                     </div>

//                     <div className="row" id = "detail">

//                         < div className = "aboutUser " >
// {/* col-lg-7 mt-5 mt-lg-0 */}

//                             <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                
//                                 <h3>Contact Us</h3>                                
                                
//                                 <div className="yourInfo">
//                                     {
//                                         yourInfo?.map((item,index)=>
//                                         <YourInfo
//                                             data={item}
//                                             index={index}      
//                                             key={index}   
//                                         />
//                                     )}
//                                 </div>
                                
                                
//                                 <div className="form-group">
                                    
//                                     <textarea className="form-control" name="message" rows="10" placeholder="Message*" required></textarea>
//                                 </div>
                                
//                                 {/* <div className="my-3">
//                                     <div className="loading">Loading</div>
//                                     <div className="error-message"></div>
//                                     <div className="sent-message">Your message has been sent. Thank you!</div>
                                
//                                 </div> */}
                                
                                

//                                 <label className="agree">
//                                     <input type="checkbox" />
//                                     I agree to process personal data
                                
//                                 </label>

//                                 <div className="submit">
//                                     <GetStartedButton buttonType="solid" buttonText="Submit" />
//                                 </div>
                            
//                             </form>
//                         </div>
                        
//                         {/* col-lg-7 mt-5 mt-lg-0  */}
//                                 <div className="img-holder">
//                             <img src = {Person} className="display"/>
//                     </div>

//                     </div>
                    
//                 </div>
//             </section>
//     )
// }
// export default Contact;











import React,{useState} from "react";
import GetStartedButton from "../get-started-button/getStartedbutton";
 import "./contact.styles.scss";
 import YourInfo from "./YourInfo/yourInfo.component";
 import { yourInfo } from "./YourInfo/inputList.component";
 import Person from "../../brand/assets/https_/lottiefiles.com/contactUS.png";

 const Contact = () =>{

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        message: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('handleSubmit called'); // Add this line

        try {
            console.log('Sending form data to server'); // Add this line
            const response = await fetch('/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Form data submitted successfully');
                // Redirect or display a success message as needed
            } else {
                console.error('Error submitting form data');
            }
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };

    const handleInputChange = (e) => {
        const {
            name,
            value
        } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


        
    return(
        <section id="contact" className="contact">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>We’d love to hear from you</h2>
                        <p>Ready to embark on an exciting journey with AMProtocol Labs? Get in touch with us to discuss your project needs, and our team will be more than happy to assist you.</p>
                    </div>

                    <div className="row" id = "detail">

                        < div className = "aboutUser " >
{/* col-lg-7 mt-5 mt-lg-0 */}

                            <div className="php-email-form" >
                                
                                <h3>Contact Us</h3>                                
                                
                                <div>
                                    <form onSubmit={handleSubmit} method="post" role="form" action="/test" >
                                    <div className="yourInfo">
                                        {yourInfo?.map((item, index) => (
                                            <YourInfo
                                                key={index}
                                                data={item}
                                                onChange={handleInputChange}
                                            />
                                        ))}
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" name="message" rows="10" placeholder="Message*" required></textarea>
                                    </div>
                                    <label className="agree">
                                        <input type="checkbox" />
                                            I agree to process personal data
                                    </label>
                                {/* <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                
                                </div> */}
                                    <div className="submit">
                                         <GetStartedButton buttonType="solid" 
                                            buttonText="Submit" type="submit"/> 
                                            {/* <button type="submit">Submit</button> */}
                                    </div>
                                    </form>
                                </div>
                                
                                
                                
                                
                                
                                

                                

                            </div>
                        </div>
                        
                        {/* col-lg-7 mt-5 mt-lg-0  */}
                                <div className="img-holder">
                            <img src = {Person} className="display"/>
                    </div>

                    </div>
                    
                </div>
            </section>
    )
}
export default Contact;


