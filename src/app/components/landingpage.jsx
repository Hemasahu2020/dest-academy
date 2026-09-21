import React from "react";
import Image from "next/image";
import Aboutus from "./LandingPage/Aboutus";
import "../styles/landingpage.scss";
import Carousel from "./LandingPage/Carousel";
import Browse from "./LandingPage/Browse";
import QuickLinks from "./LandingPage/QuickLinks";
import Trades from "./LandingPage/Trades"


export default function LandingPage() {
  return (
    <section id="home" className="landing">
      <Carousel />

      <div id="browse">
        <Browse />
      </div>

      <div id="trade">
        <Trades />
      </div>

      <div id="quick-links">
        <QuickLinks />
      </div>

      <Aboutus />
    </section>
  );
}
