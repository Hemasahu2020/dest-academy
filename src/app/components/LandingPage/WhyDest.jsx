import React from "react";
import Image from "next/image";
import "../../styles/LandingPage/whydest.scss";

export default function WhyDest() {
    return (
        <section className="Why-Dest-Section-Container">

            <div className="why-dest-image">
                <Image
                    src="/images/why-dest.webp"
                    alt="DEST Logo"
                    width={80}
                    height={80}
                    className="inline-logo"
                />
            </div>
            <div>
                <h2>
                    Why DEST Academy?
                </h2>
                <ul>
                    <li>Practical & Job-oriented Training</li>
                    <li>Online + Offline Learning Models</li>
                    <li>Focus on Rural & Underprivileged Youth</li>
                    <li>Transparent & Trust-based Work</li>
                </ul>
            </div>

        </section>
    );
}
