
import React, { useState, useEffect } from 'react';
import logo from "../../brand/AMP Logo-17.png";
import logo2 from "../../brand/AMP Logo-18.png";
import "./navigation2.styles.scss";
import NavLinkBar from "./NavLinkBar/navLinkBar.component";
import { FaBars } from "react-icons/fa";

const Navigation2 = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const toggleNavBarOpen = () => setIsNavBarOpen(!isNavBarOpen);
  
  const [showNavBar, setShowNavBar] = useState(false);

        useEffect(() => {
          const handleResize = () => {
            setShowNavBar(window.innerWidth > 991);
          };
          handleResize();
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, []);


  const [scrolled2, setScrolled2] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
              const isScrolled2 = window.scrollY > 50;
              if (isScrolled2 !== scrolled2) {
                setScrolled2(isScrolled2);
              }
            };
          document.addEventListener('scroll', handleScroll);
            return () => {
              document.removeEventListener('scroll', handleScroll);
            };
        }, [scrolled2]);

  return (
    <>
      <header id="header" className={`navbar ${scrolled2 ? 'scrolled2' : ''}`}>
        
        <div className="container">
          {
            scrolled2?
            <a href="#contain" className="logo"><img src={logo2} alt="" className="logo2"/></a>
            :
            <a href="#contain" className="logo"><img src={logo} alt="" className="logo2"/></a>
          }
          
          
          <nav id="navbar2" className="navbar2">
            
            <button className='toggler' onClick={toggleNavBarOpen}>
              <FaBars className='mobile-nav-toggle'/>
            </button>
                  {
                    (showNavBar || isNavBarOpen) && <NavLinkBar />
                  }
          </nav>
          <div></div>
        </div>

      </header>
    </>
  );
}

export default Navigation2;



