import React from "react";
import Image from "next/image";
import WhatYouGet from "./LandingPage/WhatYouGet";
import Aboutus from "./LandingPage/Aboutus";
import WhyDest from "./LandingPage/WhyDest";
import MentorSection from "./LandingPage/MentorSection"
import "../styles/landingpage.scss";

export default function LandingPage() {
  return (
    <section className="landing">   
      <div className="hero">
      <video
          autoPlay
          muted
          loop
          playsInline
          className="background-video"
        >
          <source src="/images/watermarked_preview.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* ✅ Hero Text Content */}
        <h1 className="logo-heading">Welcome to DEST Academy</h1>
        <p>Learn, Explore, and Grow with us.</p>
        <Image
          src="/images/dest_translogo.png"
          alt="DEST Logo"
          width={80}
          height={80}
          className="inline-logo"
        />
      </div>

      <div><Aboutus /></div>
      <div><WhyDest /></div>
      <div className="content"><WhatYouGet /></div>
      <div><MentorSection /></div>
    </section>
  );
}
