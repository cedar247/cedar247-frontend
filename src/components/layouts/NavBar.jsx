import React, { useState } from "react";
import "../CSS/navbar.css";
// import UserStore from "../stores/UserStore";

function Navbar(props) {
  const [active, setActive] = useState("nav_menu nav_active");
  const [toggleIcon, setToggleIcon] = useState("nav_toggler toggle");

  const navToggle = () => {
    active === "nav_menu"
      ? setActive("nav_menu nav_active")
      : setActive("nav_menu");

    //ToggleIcon
    toggleIcon === "nav_toggler"
      ? setToggleIcon("nav_toggler toggle")
      : setToggleIcon("nav_toggler");
  };

  let signInBtn = "block";
  let signOutBtn = "none";
//   if ((UserStore.isLoggedIn === true)) {
//     signOutBtn = "block";
//     signInBtn = "none";
//   }

  return (
    <nav className="nav navbar fixed-top">
      <ul className={active}>
        {props.items && props.items.map(({ item, link }) => {
          return (
            <li className="nav_item nav-item" key={item}>
              <a href={link} className="nav_link nav-link">
                {item}
              </a>
            </li>
          )
        })}
        <li>
          <a href="/signIn" className="nav_links">
            Sign IN
          </a>
        </li>
      </ul>

      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Navbar;