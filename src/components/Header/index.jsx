import React, { useState } from "react";
import logo from "../../assets/portfolio_logo.png";
import menu_icon from "../../assets/icons/menu_icon.png";
import "./style.css";

const Header = () => {
  const [underline, setUnderline] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const toggleUnderline = () => {
    setUnderline(!underline);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header">
      <div className="header_item">
        <img className="header_logo_img" src={logo} alt="Logo" />
        <button className="mobile_toggle_button" onClick={toggleMenu}>
          <img src={menu_icon} alt="Menu" />
        </button>
        <ul className={`header_links ${showMenu ? "show" : ""}`}>
          <li
            className="header_link"
            onMouseEnter={toggleUnderline}
            onMouseLeave={toggleUnderline}
          >
            <a href="/">Home</a>
          </li>
          <li
            className="header_link"
            onMouseEnter={toggleUnderline}
            onMouseLeave={toggleUnderline}
          >
            <a href="/">About</a>
          </li>
          <li
            className="header_link"
            onMouseEnter={toggleUnderline}
            onMouseLeave={toggleUnderline}
          >
            <a href="/">Project</a>
          </li>
          <li
            className="header_link"
            onMouseEnter={toggleUnderline}
            onMouseLeave={toggleUnderline}
          >
            <a href="/">Skills</a>
          </li>
          <li
            className="header_link"
            onMouseEnter={toggleUnderline}
            onMouseLeave={toggleUnderline}
          >
            <a href="/">Contact me</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
