
import React, { useState, useEffect } from 'react';
import logo from 'F:/AMProtocol/project/my-app/src/brand/logo_transparent.png';
import "./navigation.styles.scss";
import NavLinkBar from "./NavLinkBar/navLinkBar.component";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
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


  const [scrolled, setScrolled] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
              const isScrolled = window.scrollY > 50;
              if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
              }
            };
          document.addEventListener('scroll', handleScroll);
            return () => {
              document.removeEventListener('scroll', handleScroll);
            };
        }, [scrolled]);

  return (
    <>
      <header id="header" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        
        <div className="container">
          
          <a href="#contain" className="logo"><img src={logo} alt="" className="logo"/></a>
          
          <nav id="navbar" className="navbar">
            
            <button className='toggler' onClick={toggleNavBarOpen}>
              <FaBars className='mobile-nav-toggle'/>
            </button>
                  {
                    (showNavBar || isNavBarOpen) && <NavLinkBar />
                  }
          </nav>

        </div>

      </header>
    </>
  );
}

export default Navigation;



