import React from "react";
import GetStartedButton from "../get-started-button/getStartedbutton";
import logo from 'F:/AMProtocol/project/my-app/src/brand/logo_transparent.png';
import "./navigation.styles.scss";




const Navigation = () =>{
    return(
        <>
      
            {/* Navigation Bar */}
          <nav className = "navbar navbar-expand-lg navbar-dark fixed-top" id="navbar" >
            <div className="container">
              <div className="row">
                <img className=" logo" src = {logo} />
                
                <button className="navbar-toggler" type="button"  data-toggle="collapse" data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                
                </button>
              </div>
              <div role = "navigation" >
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    < ul className = "navlinkBar navbar-nav mr-auto" >
                        <li className="nav-item"><a className="nav-link scrollto active"  href = '/home'>Home</a></li>
                        <li className="nav-item"><a className="nav-link scrollto"  href = '/about'>About       </a></li>
                        <li className="nav-item"><a className="nav-link scrollto"  href = '/services'>Services    </a></li>
                        <li className="nav-item"><a className="nav-link scrollto"  href = '/portfolio'>Portfolio   </a></li>
                        <li className="nav-item"><a className="nav-link scrollto"  href = '/team'>Team        </a></li>
                        <li class="nav-item dropdown">
                              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" 
                                  role="button" data-toggle="dropdown" aria-haspopup="true" 
                                  aria-expanded="true">Dropdown
                              </a>      
                              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Another action </a>
                                <a class="dropdown-item" href="#">Another action</a>                              
                                <a class="dropdown-item" href="#">Something else here</a>
                              </div>
                            </li>


                        <li className="nav-item"><a className="nav-link  scrollto"  href = '/contact'>Contact     </a></li>
                        <li className="nav-item "><a className ="nav-link scrollto" id = "getstarted" href = '/getstarted'>  
                           <GetStartedButton buttonType= "transparent" />
                           </a> </li> 
                    </ul>
                     <i class="bi bi-list mobile-nav-toggle"></i> 
                  </div>
              </div> 
            </div>  
          </nav>  
      </>
    );
}
export default Navigation;