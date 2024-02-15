import React, { useState } from "react";

import { CiUser } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegWindowClose } from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={require("../../Assets/logo.png")} alt="Logo" />
        <p>WWE</p>
      </div>

      {/* <ul className="nav-links">
          <li>Home</li>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul> */}

      <div className={`nav-links ${isDrawerOpen ? "open" : ""}`}>
        <ul>
          <li>Home</li>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="signup-login-mini">
          <CiUser />
          Sign Up
        </button>
      </div>

      <button className="signup-login">
        <CiUser />
        Sign Up
      </button>

      <button className="drawer-toggle" onClick={toggleDrawer}>
        {isDrawerOpen ? <FaRegWindowClose /> : <RxHamburgerMenu />}
      </button>
    </nav>
  );
};

export default Navbar;
