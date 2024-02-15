import React from "react";
import { CiUser } from "react-icons/ci";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={require("../../Assets/logo.png")} alt="Logo" />
        <p>WWE</p>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <button className="signup-login">
        <CiUser />
        Sign Up
      </button>
    </nav>
  );
};

export default Navbar;
