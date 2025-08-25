"use client";
import React from "react";
import "../styles/footer.scss";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-about">
          <div className="footer-about-title-logo">
            <h2>DEST Academy</h2>
            <Image
              src="/images/dest_translogo.png"
              alt="DEST Academy Logo"
              width={80}
              height={80}
              className="inline-logo"
            />
          </div>

          <p>
            DEST Academy (Dream Education Skill & Training Pvt. Ltd.) is committed to making education 
            and skill development accessible to all learners, empowering them for career success through 
            practical and future-ready programs.
          </p>
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
            <h4>Courses & Exams</h4>
            <ul>
              <li>IIT JEE</li>
              <li>MPPSC</li>
              <li>SSC</li>
              <li>ITI</li>
            </ul>
          </div>

        <div>
  <h4>Study Materials</h4>
  <ul>
    <li>SSC Study Material</li>
    <li>MPPSC Notes</li>
    <li>ITI Practical Guides</li>
    <li>JEE Notes PDFs</li>
  </ul>
</div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DEST Academy. All rights reserved.</p>
        <p>
          <FaPhoneAlt /> Call: +91 73541 00676
        </p>
      </div>
    </footer>
  );
}
