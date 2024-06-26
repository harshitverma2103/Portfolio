import React, { useState } from "react";
import logo from "../../assets/portfolio_logo.png";
import "./style.css";

const Header = () => {
  const [underline, setUnderline] = useState(false);

  const toggleUnderline = () => {
    setUnderline(!underline);
  };

  return (
    <header className="header">
      <div className="header_item">
        <img className="header_logo_img" src={logo} alt="Logo" />
        <ul className="header_links">
          <li className={`header_link ${underline ? "underline" : ""}`} onMouseEnter={toggleUnderline} onMouseLeave={toggleUnderline}>Home</li>
          <li className={`header_link ${underline ? "underline" : ""}`} onMouseEnter={toggleUnderline} onMouseLeave={toggleUnderline}>About</li>
          <li className={`header_link ${underline ? "underline" : ""}`} onMouseEnter={toggleUnderline} onMouseLeave={toggleUnderline}>Project</li>
          <li className={`header_link ${underline ? "underline" : ""}`} onMouseEnter={toggleUnderline} onMouseLeave={toggleUnderline}>Skills</li>
        </ul>
        <button className="contact_button">Contact me</button>
      </div>
    </header>
  );
};

export default Header;
