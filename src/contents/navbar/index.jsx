import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "./style.css";

const Navbar = () => {
  const [icon, setIcon] = useState(true);

  const toggleBtn = () => {
    setIcon(!icon);
  };

  const data = [
    {
      label: "HOME",
      to: "/",
    },
    {
      label: "ABOUT",
      to: "/about",
    },
    {
      label: "PORTFOLIO",
      to: "/portfolio",
    },
    {
      label: "SKILLS",
      to: "/skills",
    },
    {
      label: "CONTACT",
      to: "/contact",
    },
  ];
  return (
    <div>
      <nav>
        <div className="left-nav">
          <Link to={"/"} className="nav-link">
            <h1>Amit</h1>
          </Link>
        </div>
        <ul className={`right-nav ${!icon ? "show-nav" : ""}`}>
          {data.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item.to} className='nav-list'>{item.label}</NavLink>
              </li>
            );
          })}
        </ul>
        <div id="show-btn" onClick={toggleBtn}>
          {icon ? <FaBars /> : <IoClose />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
