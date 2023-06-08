// import "./navItem.styles.scss";
// import { NavLink } from "react-router-dom";

// const NavItem = ({nav_item,scrollTo}) => {
// return(
//     <>
//         <li className="nav-item"><a className="nav-link  "  href = {scrollTo} >{nav_item}</a></li>
       
//     </>
// )
// }
// export default NavItem;


//  {
//      /* <li className="nav-item">
//                  <NavLink 
//                   //className="nav-link "  
//                   //activeStyle={{ color:'#fff' }} 
//                   to = {scrollTo} >
//                      {nav_item}
//                  </NavLink>
//              </li> */
//  }

import "./navItem.styles.scss";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const NavItem = ({ nav_item, scrollTo }) => {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsActive(entry.isIntersecting);
    }, { threshold: 0.5 });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <li className="nav-item">
        <a
          className={isActive ? "nav-link active" : "nav-link"}
          href={scrollTo}
          ref={ref}
        >
          {nav_item}
        </a>
      </li>
    </>
  );
};

export default NavItem;
