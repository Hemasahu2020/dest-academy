"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="nav-title">DEST Academy</div>
        <div>
          <Image
            src="/images/dest_translogo.png"
            alt="DEST Logo"
            width={80}
            height={80}
            className="inline-logo"
          />
        </div>
      </div>
      <ul className="nav-links">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/courses">Courses</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
