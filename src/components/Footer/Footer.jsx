import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        {/* <Link> */}
        <div className="footer-logo">
          <img src={require("../../Assets/logo.png")} alt="Logo" />
          <p>WWE</p>
        </div>
        {/* </Link> */}

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@wanderwise.com</p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div className="footer-section">
          <h3>Explore</h3>
          <p>Destinations</p>
          <p>Features</p>
          <p>Reviews</p>
        </div>
      </div>
      <div className="footer-bottom">
        <hr />
        <p>&copy; 2024 Wander Wise Expeditions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
