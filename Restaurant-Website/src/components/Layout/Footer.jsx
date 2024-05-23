import React from "react";
import '../../styles/Footer.css';

const Footer = () => {
  return (
    <>
      <hr className="divider" />
      <div className="footer-container">
        <div className="footer-section">
          <h3>ABOUT MY RESTAURANT</h3>
          <ul>
            <li>Who We Are</li>
            <li>Blog</li>
            <li>Work With Us</li>
            <li>Investor Relations</li>
            <li>Report Fraud</li>
            <li>Press Kit</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>ZOMAVERSE</h3>
          <ul>
            <li>Zomato</li>
            <li>Blinkit</li>
            <li>Feeding India</li>
            <li>Hyperpure</li>
            <li>Zomaland</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>FOR RESTAURANTS</h3>
          <ul>
            <li>Partner With Us</li>
            <li>Apps For You</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>LEARN MORE</h3>
          <ul>
            <li>Privacy</li>
            <li>Security</li>
            <li>Terms</li>
            <li>Sitemap</li>
          </ul>
        </div>
      </div>
      <div className="footer-content">
        <p>By continuing past this page, you agree to our <a href="#">Terms of Service</a>, <a href="#">Cookie Policy</a>, <a href="#">Privacy Policy</a> and <a href="#">Content Policies</a>. All trademarks are properties of their respective owners. 2008-2024 © MY RESTAURANT™ Ltd. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
