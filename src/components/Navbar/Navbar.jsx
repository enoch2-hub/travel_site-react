import React, { useState } from "react";

import SignupLogin from "../SignupLogin/SignupLogin";
import { CiUser } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegWindowClose } from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={require("../../Assets/logo.png")} alt="Logo" />
        <p>WwE</p>
      </div>

      <div className={`nav-links ${isDrawerOpen ? "open" : ""}`}>
        <ul>
          <li>Home</li>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      <SignupLogin onClose={closeDrawer} />

      <button className="drawer-toggle" onClick={toggleDrawer}>
        {isDrawerOpen ? <FaRegWindowClose /> : <RxHamburgerMenu />}
      </button>
    </nav>
  );
};

export default Navbar;
