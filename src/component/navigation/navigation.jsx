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
import NavToggleButton from "./NavToggle/navtoggle.component";
import { FaBars } from "react-icons/fa";
import { useState,useEffect } from "react";





const Navigation = () => {

const [isNavBarOpen, setIsNavBarOpen] = useState(false);
const toggleNavBarOpen = () => setIsNavBarOpen(!isNavBarOpen);



 const [myVariable, setMyVariable] = useState('initial value');

 useEffect(() => {
   const mediaQuery = window.matchMedia('(max-width: 991px)');
   const handleScreenChange = (event) => {
     if (event.matches) {
       setIsNavBarOpen(false);
     } else {
       setIsNavBarOpen(true);
     }
   };
   mediaQuery.addEventListener('change', handleScreenChange);
   return () => {
     mediaQuery.removeEventListener('change', handleScreenChange);
   };
 }, []);
  
  return(
        <>
  

          {/* <!-- ======= Header ======= --> */}
        <header id="header" className="fixed-top ">
            <div className="container ">

                {/* <!-- <h1 className="logo me-auto"><a href="index.html">AMProtocolab</a></h1> -->
      <!-- Uncomment below if you prefer to use an image logo --> */}
                <a href="#contain" className="logo"><img src={logo} alt="" className="logo"/></a>



                <nav id="navbar" className="navbar">
 

                    {/* <NavLinkBar /> */}
                    {/* <button 
                        className="navbar-toggler" data-toggle="collapse"  type="button"
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="true" 
                        aria-label="Toggle navigation" */}
      {/* > */}
        < FaBars className = " mobile-nav-toggle" onClick = {toggleNavBarOpen}/> 
                        {
                           
                            isNavBarOpen?<NavLinkBar/>:<></>
                        }
                    {/* </button> */}
            
             
                    
                  
                    
                    
                  
                
                </nav>
               

            </div>
        </header>

  </>);
}
export default Navigation;