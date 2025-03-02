// src/components/Footer.js
import React from 'react';
import './Footer.css'; // We'll create this CSS file next

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__backToTop">
        <a href="#top">Back to top</a>
      </div>
      <div className="footer__links">
        <div className="footer__column">
          <h3>Get to Know Us</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Science</li>
          </ul>
        </div>
        <div className="footer__column">
          <h3>Connect with Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className="footer__column">
          <h3>Make Money with Us</h3>
          <ul>
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerator</li>
            <li>Amazon Global Selling</li>
            <li>Become an Affiliate</li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <p>&copy; 2023 Amazon Clone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;