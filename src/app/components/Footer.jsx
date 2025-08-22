"use client";
import React from "react";
import "../styles/footer.scss";
import { FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-about">
          <h2>DEST Academy 🚀</h2>
          <p>
            DEST Academy is democratizing education, making it accessible to all. 
            Join the revolution, learn and grow with us.
          </p>
          <div className="footer-apps">
            <img src="/appstore.png" alt="App Store" />
            <img src="/playstore.png" alt="Google Play" />
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Blogs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h4>Help & Support</h4>
            <ul>
              <li>User Guidelines</li>
              <li>Refund Policy</li>
              <li>Site Map</li>
              <li>Grievance Redressal</li>
            </ul>
          </div>

          <div>
            <h4>Popular Goals</h4>
            <ul>
              <li>IIT JEE</li>
              <li>UPSC</li>
              <li>SSC</li>
              <li>NEET UG</li>
            </ul>
          </div>

          <div>
            <h4>Study Material</h4>
            <ul>
              <li>UPSC Notes</li>
              <li>NEET Notes</li>
              <li>CA Foundation</li>
              <li>SSC Study Material</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DEST Academy. All rights reserved.</p>
        <p>
          <FaPhoneAlt /> Call: +91 8585858585
        </p>
      </div>
    </footer>
  );
}
