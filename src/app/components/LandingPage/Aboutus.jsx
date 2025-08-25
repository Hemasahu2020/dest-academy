import React from "react";
import { Target, BookOpen, Users } from "lucide-react";
import Image from "next/image";
import "../../styles/LandingPage/aboutus.scss";

export default function AboutUs() {
    return (
        <section className="aboutus-section">
            <div className="Above-Section-About-container">
                <h2 className="section-title">About Us</h2>
                <div className="Above-Section-About">
                    <div className="aboutus-image">
                        <Image
                            src="/images/thumb-nail.jpeg"
                            alt="DEST Logo"
                            width={1800}
                            height={1800}
                            className="inline-logo"
                        />
                    </div>
                    <div className="About-right-content">
                        <h3 className="aboutus-heading">About Us</h3>
                        <p>
                            <strong>DEST Academy</strong> (Dream Education Skill & Training Pvt. Ltd.) 
                            is a registered private limited company committed to delivering 
                            impactful education, practical skill training, and employment-ready programs 
                            to youth across India.
                        </p>
                        <p>
                            We believe that <em>“Skill is the real foundation of nation building.”</em>
                        </p>
                    </div>
                </div>
            </div>
            <div className="aboutus-container">
                <div className="aboutus-grid">
                    <div className="aboutus-card">
                        <Target size={32} className="icon" />
                        <h4>Our Vision</h4>
                        <p>
                            To empower the next generation through accessible, industry-relevant 
                            education and skills that lead to sustainable careers and self-reliance.
                        </p>
                    </div>

                    <div className="aboutus-card">
                        <BookOpen size={32} className="icon" />
                        <h4>Our Mission</h4>
                        <p>
                            To provide technical training (e.g., ITI Fitter), vocational education, 
                            and online coaching for competitive exams—delivered through modern, 
                            blended learning models that prioritize job readiness.
                        </p>
                    </div>

                    <div className="aboutus-card">
                        <Users size={32} className="icon" />
                        <h4>Our Focus Areas</h4>
                        <ul>
                            <li>Skill Development – Industrial, Technical & Soft Skills</li>
                            <li>Education Enablement – Online & Offline Learning Solutions</li>
                            <li>Youth Empowerment – Career Guidance & Personality Development</li>
                            <li>Community Impact – Awareness Campaigns & Public Workshops</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
