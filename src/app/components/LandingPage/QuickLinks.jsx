"use client";

import React from "react";
import Link from "next/link";
import "../../styles/LandingPage/quicklinks.scss";


import {
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
} from "react-icons/fa";

const quickLinks = [
  {
    id: 1,
    title: "WhatsApp Channel",
    description: "Join our WhatsApp community",
    icon: <FaWhatsapp />,
    link: "https://whatsapp.com/channel/0029Vb8ILVp2v1Ix2FkvOS1g",
    className: "whatsapp",
  },
  {
    id: 2,
    title: "YouTube",
    description: "Watch our latest videos",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/@DESTAcademy",
    className: "youtube",
  },
  {
    id: 3,
    title: "Instagram",
    description: "Follow us on Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/destacademyiticoaching",
    className: "instagram",
  },
  {
    id: 4,
    title: "Facebook",
    description: "Connect with us on Facebook",
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/destacademyiticoaching",
    className: "facebook",
  },
  {
    id: 5,
    title: "Contact Us",
    description: "Chat with us on WhatsApp",
    icon: <FaPhoneAlt />,
    link: "https://wa.me/919238576034?text=Hello%20DEST%20Academy%2C%20I%20want%20more%20information.",
    className: "contact",
  },
];

export default function QuickLinks() {
  return (
    <section className="quick-links-section">

      <div className="quick-links-header">
        <h2>Quick Links</h2>
      </div>

      <div className="quick-links-grid">

        {quickLinks.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className={`quick-link-card ${item.className}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="quick-link-icon">
              {item.icon}
            </div>

            <div className="quick-link-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>

            <span className="quick-link-arrow">
              →
            </span>
          </Link>
        ))}

      </div>

    </section>
  );
}