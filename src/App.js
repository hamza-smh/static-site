import AboutUs from "./component/aboutUs/about.component";
import React from "react";
import Container from "./component/container/container.component";
import Client from "./component/clients/clients.component";
import WhyUs from "./component/why-us/why-us.component";


function App() {
  return (
    <div>      
      <Container />
      <Client />
      <AboutUs />
      <WhyUs />
    </div>
  )
   
  
}

export default App;
