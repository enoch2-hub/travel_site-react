// SignupLogin.js

import React, { useState } from "react";

import { CiUser } from "react-icons/ci";

import "./SignupLogin.css";

const SignupLogin = ({ onClose }) => {
  const [showComponent, setShowComponent] = useState(false);

  const handleButtonClick = () => {
    setShowComponent(true);
  };

  const handleClose = () => {
    setShowComponent(false);
    onClose();
  };

  return (
    <div>
      <button className="signup-login-mini" onClick={handleButtonClick}>
        <CiUser />
        Sign Up
      </button>
      <button className="signup-login" onClick={handleButtonClick}>
        <CiUser />
        Sign Up
      </button>
      {showComponent && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            {/* Your signup/login form goes here */}
            <h2>Signup/Login</h2>
            <form action="/">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" />
              <br />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" />
              <br />
              <button>Submit</button>
            </form>
            {/* ... */}
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupLogin;
