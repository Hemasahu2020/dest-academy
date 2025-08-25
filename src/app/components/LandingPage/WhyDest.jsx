import React from "react";
import Image from "next/image";
import "../../styles/LandingPage/whydest.scss";

export default function WhyDest() {
  return (
    <section className="Why-Dest-Section-Container">
      <div className="why-dest-image">
        <Image
          src="/images/why-dest.webp"
          alt="Why DEST Academy"
          width={80}
          height={80}
          className="inline-logo"
        />
      </div>

      <div>
        <h2>Why Choose DEST Academy?</h2>
        <ul>
          <li>Industry-Relevant & Job-Oriented Training Programs</li>
          <li>Blended Learning Approach – Online & Offline Models</li>
          <li>Empowering Rural & Underserved Communities</li>
          <li>Ethical & Transparent Operational Standards</li>
        </ul>
      </div>
    </section>
  );
}
