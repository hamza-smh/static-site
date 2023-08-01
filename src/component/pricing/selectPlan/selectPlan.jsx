import React from "react";
import "./selectPlan.styles.scss";
import { plan } from "../plan/planning";
import { useState } from "react";
import GetStartedButton from "../../get-started-button/getStartedbutton";


const SelectPlan = () => {
  const [selectedPlan, setSelectedPlan] = useState(1);

  const choose = (index) => {
    setSelectedPlan(index);
  };

  const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const today = new Date();
  const formattedDate = `${today.getDate()} ${monthNames[today.getMonth()]}, ${today.getFullYear()}`;

  return (
    <>
    
      <section id="select" className="select">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Select Plan</h2>
            <p>
              For a complete plan comparison and to view all features visit the
              pricing page.
            </p>
          </div>
          <div className="selection d-flex">
            <div className="plan col-lg-4 ">
              {plan?.map((item, index) => (
                <button
                  key={index}
                  onClick={() => choose(index)}
                  className={selectedPlan === index ? "picked" : "notPicked"}
                >
                    <h3>
                            {item.title}
                        {item.recommended?<span> (Recommended)</span>: ""}
                    </h3>
                  <p>{item.about}</p>
                  <h2 className="price">
                    ${item.price}
                    <span>.99</span>
                    <span> / month</span>
                  </h2>
                </button>
              ))}
            </div>
            <div className="pay col-lg-8">
                <div classname="bill">
                    <h4>Order Summary</h4>
                    <div className="payment d-flex">
                        <div className="title col-lg-6">
                            {plan[selectedPlan].title}
                        </div>
                        <div className="cost col-lg-6">
                            ${plan[selectedPlan].price}.99
                        </div>
                        
                    </div>
                    <hr className="line"/>

                        <div className="payment d-flex">
                            <div className="title col-lg-6">
                                <b>Due Now</b>
                            </div>
                            <div className="cost col-lg-6">
                                <b>${plan[selectedPlan].price}.99</b>
                            </div>
                        </div>

                        <div className="payment d-flex">
                            <div className="title coupon col-lg-6">Have a Coupon ?</div>
                        </div>
                </div>


                <div classname="bill">
                    <h4>Renewal Summary</h4>
                    <div className="payment d-flex">
                        <div className="title col-lg-6">
                            Date
                        </div>
                        <div className="cost col-lg-6">
                            {formattedDate}
                        </div>
                        
                    </div>
                    

                        <div className="payment d-flex">
                            <div className="title col-lg-6">
                                Amount
                            </div>
                            <div className="cost col-lg-6">
                                ${plan[selectedPlan].price}.99
                            </div>
                        </div>

                        
                </div>
                
                <div className="continue d-flex ">
                    <GetStartedButton buttonText="Continue" buttonType="solid" />
                </div>


            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SelectPlan;
