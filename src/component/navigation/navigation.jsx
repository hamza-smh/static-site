import React from "react";
import GetStartedButton from "../get-started-button/getStartedbutton";
import logo from 'F:/AMProtocol/project/my-app/src/brand/logo_transparent.png';
import "./navigation.styles.scss";

const Navigation = () =>{
    return(
        <>
      
            {/* Navigation Bar */}
          <nav className = "navbar navbar-expand-lg navbar-dark fixed-top " >
            <div className="container">
              <div className="row">
                <img className=" logo" src = {logo} />
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
              </div>
              <div role = "navigation" >
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    < ul className = "navlinkBar navbar-nav mr-auto" >
                        <li className="nav-item"><a className="nav-link scrollto active"  href = '/home'>Home</a></li>
                        <li className="nav-item"><a className="nav-link scrollto"  href = '/about'>About       </a></li>
                        <li className="nav-item"><a className="nav-link scrollto"  href = '/services'>Services    </a></li>
                        <li className="nav-item"><a className="nav-link scrollto"  href = '/portfolio'>Portfolio   </a></li>
                        <li className="nav-item"><a className="nav-link scrollto"  href = '/team'>Team        </a></li>
                        <li className = "nav-item " >
                            <div className="dropdown">
                                <button className="nav-link dropbtn">DropDown    
                                  <i className="fa fa-caret-down"></i>
                                </button>
                                <div className="dropdown-content">
                                  <a href="#">Link 1</a>
                                  <a href="#">Link 2</a>
                                  <a href="#">Link 3</a>
                                </div>
                            </div>   
                        </li> 


                            {/* <li class="nav-item dropdown">
                              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                Dropdown
                              </a>
                              
                              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                              </div>
                            </li> */}
                            



                         <li className="nav-item"><a className="nav-link  scrollto"  href = '/contact'>Contact     </a></li>
                        <li className="nav-item "><a className ="nav-link scrollto" id = "getstarted" href = '/getstarted'>  
                           <GetStartedButton buttonType= "transparent" />
                           </a> </li> 
                    </ul>
                  </div>
              </div> 
            </div>  
          </nav>  
      </>
    );
}
export default Navigation;