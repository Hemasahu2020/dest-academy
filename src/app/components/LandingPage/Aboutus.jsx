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
                            <strong>DEST Academy</strong> (Dream Education Skill & Training) is
                            a registered trust dedicated to empowering youth and society through
                            education, skill development, and employment-oriented training.
                        </p>
                        <p>
                            We strongly believe that <em>“Skill is the real foundation of Nation
                                Building.”</em>
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
                            To provide quality education, practical skills, and
                            self-reliance opportunities for every youth.
                        </p>
                    </div>

                    <div className="aboutus-card">
                        <BookOpen size={32} className="icon" />
                        <h4>Our Mission</h4>
                        <p>
                            Deliver industrial skill training (ITI Fitter, technical skills,
                            vocational programs), online coaching & workshops for
                            competitive exams and career readiness.
                        </p>
                    </div>

                    <div className="aboutus-card">
                        <Users size={32} className="icon" />
                        <h4>Our Focus Areas</h4>
                        <ul>
                            <li>Skill Development – Industrial & Technical Training</li>
                            <li>Education Support – Online & Offline Programs</li>
                            <li>Youth Empowerment – Career Guidance & Personality Growth</li>
                            <li>Community Development – Awareness Drives & Workshops</li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    );
}
