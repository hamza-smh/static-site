// import React from "react";
// import logo from 'F:/AMProtocol/project/my-app/src/brand/logo_transparent.png';
// import "./navigation.styles.scss";
// import NavLinkBar from "./NavLinkBar/navLinkBar.component";

// import NavToggleButton from "./NavToggle/navtoggle.component";

// const Navigation = () =>{
//     return(
//         <>
  
//           <nav className = "navbar navbar-expand-lg navbar-dark fixed-top" id="navbar" >
//             <div className="container">
//               <div className="row">
//                 <img className=" logo" src = {logo} />   
//                 <button className="navbar-toggler" type="button"  data-toggle="collapse" data-target="#navbarSupportedContent" 
//                         aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
//                   <span className="navbar-toggler-icon"></span>
//                 </button>
//               </div>
//               <div role = "navigation" >
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                   <NavLinkBar />
//                     {/* <i className="bi bi-list mobile-nav-toggle"></i>  */}
//                   <NavToggleButton />
//                 </div>
//               </div> 
//             </div>  
//           </nav>  
          
//       </>
//     );
// }
// export default Navigation;






import React from "react";
import logo from 'F:/AMProtocol/project/my-app/src/brand/logo_transparent.png';
import "./navigation.styles.scss";
import NavLinkBar from "./NavLinkBar/navLinkBar.component";
import GetStartedButton from "../get-started-button/getStartedbutton";
import {BiChevronDown} from "react-icons/bi"

import NavToggleButton from "./NavToggle/navtoggle.component";






const Navigation = () => {
  return(<>
  

          {/* <!-- ======= Header ======= --> */}
        <header id="header" className="fixed-top ">
            <div className="container ">

                {/* <!-- <h1 className="logo me-auto"><a href="index.html">AMProtocolab</a></h1> -->
      <!-- Uncomment below if you prefer to use an image logo --> */}
                <a href="index.html" className="logo"><img src={logo} alt="" className="logo"/></a>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a className="nav-link scrollto" href="#about">About</a></li>
                        <li><a className="nav-link scrollto" href="#services">Services</a></li>
                        <li><a className="nav-link   scrollto" href="#portfolio">Portfolio</a></li>
                        <li><a className="nav-link scrollto" href="#team">Team</a></li>
                        <li className="dropdown"><a href="#"><span>Drop Down</span><BiChevronDown /></a>
                            <ul>
                                <li><a href="#">Drop Down 1</a></li>
                                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Drop Down 2</a></li>
                                <li><a href="#">Drop Down 3</a></li>
                                <li><a href="#">Drop Down 4</a></li>
                            </ul>
                        </li>
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                        {/* <li><a className="getstarted scrollto" href="#about">Get Started</a></li> */}
                        <li><a className="nav-button-holder" href = "#about"><GetStartedButton buttonType="transparent" className="nav-button"/></a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
                {/* <!-- .navbar --> */}

            </div>
        </header>

  </>);
}
export default Navigation;