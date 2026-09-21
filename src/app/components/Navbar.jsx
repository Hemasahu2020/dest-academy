"use client";

import React from "react";
import Image from "next/image";
import "../styles/navbar.scss";

export default function Navbar() {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <div className="nav-title">DEST Academy ITI Coaching</div>
      </div>

      <ul className="nav-links">
        <li>
          <button onClick={() => handleScroll("home")}>
            Home
          </button>
        </li>

        <li>
          <button onClick={() => handleScroll("browse")}>
            Browse
          </button>
        </li>

        <li>
          <button onClick={() => handleScroll("trade")}>
            Trade
          </button>
        </li>

        <li>
          <button onClick={() => handleScroll("quick-links")}>
            Quick Links
          </button>
        </li>
      </ul>
    </nav>
  );
}