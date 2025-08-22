import React from "react";
import { BookOpen, Target, Rocket, Users, Briefcase } from "lucide-react";
import Image from "next/image";
import WhatYouGet from "./LandingPage/WhatYouGet";
import Aboutus from "./LandingPage/Aboutus";
import WhyDest from "./LandingPage/WhyDest";
import "../styles/landingpage.scss";


export default function LandingPage() {
  return (
    <section className="landing">   
      <div className="hero">
        <h1 className="logo-heading">
          Welcome to DEST Academy
        </h1>
        <p>Learn, Explore, and Grow with us.</p>
        <Image
          src="/images/dest_translogo.png"
          alt="DEST Logo"
          width={80}
          height={80}
          className="inline-logo"
        />
      </div>
      <div>
        <Aboutus />
      </div>
      <div><WhyDest /></div>
      <div className="content">
        <WhatYouGet />
      </div>
    </section>
  );
}
