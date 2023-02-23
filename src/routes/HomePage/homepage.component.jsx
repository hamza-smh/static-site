
import React from "react";
import Container from "../../component/container/container.component";
import Client from "../../component/clients/clients.component";
import WhyUs from "../../component/why-us/why-us.component";
import AboutUs from "../../component/aboutUs/about.component";
import SkillSection from "../../component/skills-section/skills.component";
import Services from "../../component/servicesSection/services.component";
import CTASection from "../../component/ctaSection/ctaSection.component";
import Portfolio from "../../component/portfolio/portfolio.scomponent";

const HomePage =() =>{
    return(
        <>
            <Container />
            <Client />
            <AboutUs />
            <WhyUs />
            <SkillSection />
            <Services />
            <CTASection />
            <Portfolio />
        </>
    )
}
export default HomePage;