import React from "react";
import logo from "../../assets/portfolio_logo.png";
import "./style.css"

const Header = () => {
  return (
    <header className="header">
      <div className="header_item">
        <img className="header_logo_img" src={logo} alt="Logo" />
        <ul className="header_links">  
          <li className="header_link">Home</li>
          <li className="header_link">About</li>
          <li className="header_link">Project</li>
          <li className="header_link">Skills</li>
        </ul>
        <button className="contact_button">Contact me</button>
      </div>
    </header>
  );
};

export default Header;
