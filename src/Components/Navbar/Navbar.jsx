import React from "react";
import Logo from "../../assets/logo.png"; // Adjust the path if necessary
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <img src={Logo} alt="Logo" width="100" />

      <ul className="Nav-menu">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Portfolio</li>
      </ul>

      <div className="Nav-contact">Contact</div>
    </div>
  );
};

export default Navbar;
