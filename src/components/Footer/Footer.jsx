import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
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
          <div>
            <h3>Subscribe to Our Newsletter</h3>
            <p>
              Stay updated with our latest offers, travel tips, and more by
              subscribing to our newsletter.
            </p>
            <form>
              <input type="email" placeholder="Your Email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      {/* <Link> */}
      <div className="footer-logo">
        <img src={require("../../Assets/logo.png")} alt="Logo" />
        <p>WwE</p>
      </div>
      {/* </Link> */}

      <div className="footer-bottom">
        <hr />
        <p>&copy; 2024 Wander wise Expeditions. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
