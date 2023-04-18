
import React from "react";
import Container from "../../component/container/container.component";
import Client from "../../component/clients/clients.component";
import AboutUs from "../../component/AboutUs/aboutUs.component";
import LearnMore from "../../component/LearnMore/learnMore.component";
import SkillSection from "../../component/skills-section/skills.component";
import Services from "../../component/servicesSection/services.component";
import WhyUs from "../../component/WhyUs/whyus.component";
import Achievements from "../../component/Acheivments/Achievements.component";
import Feature from "../../component/Feature Projects/feature.component";
import Testimonial from "../../component/Testimonials/testimonial.component";
import CTASection from "../../component/ctaSection/ctaSection.component";
import Portfolio from "../../component/portfolio/portfolio.scomponent";
import Team from "../../component/team/team.component";
import Pricing from "../../component/pricing/pricing.component";
import FAQ from "../../component/faq/faq.component";
import Contact from "../../component/contact/contact.component";
import Footer from "../../component/footer/footer.component";




const HomePage =() =>{
    return(
        <>
            <Container />
            <Client />
            {/* <LearnMore /> */}
            <AboutUs />
            {/* <SkillSection /> */}
            <Services />
            <WhyUs />
            <Achievements />
            <Feature />
            <Testimonial />
            {/* <CTASection /> */}
             {/* <Portfolio /> */}
            {/* <Team /> */}
            {/* <Pricing /> */}
            {/* <FAQ /> */}
            <Contact />
            <Footer /> 
        </>
    )
}
export default HomePage;