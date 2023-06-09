
import React from "react";
import Container from "../../component/container/container.component";
import Client from "../../component/clients/clients.component";
import AboutUs from "../../component/AboutUs/aboutUs.component";
import Services from "../../component/servicesSection/services.component";
import WhyUs from "../../component/WhyUs/whyus.component";
import Achievements from "../../component/Acheivments/Achievements.component";
import Feature from "../../component/Feature Projects/feature.component";
import Testimonial from "../../component/Testimonials/testimonial.component";
import Pricing from "../../component/pricing/pricing.component";
import Contact from "../../component/contact/contact.component";
import Footer from "../../component/footer/footer.component";




const HomePage =() =>{
    return(
        <>
            <Container />
            <Client />
            
            <AboutUs />
            
            <Services />
            <WhyUs />
            <Achievements />
            <Feature />
            <Testimonial />
            
             
            
            {/* <Pricing /> */}
            
            <Contact />
            <Footer /> 
        </>
    )
}
export default HomePage;