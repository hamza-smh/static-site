
import "./navItem.styles.scss";
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
      <li className="nav-item2">
        <a
          className={isActive ? "nav-link2 active" : "nav-link2"}
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
