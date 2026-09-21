"use client";

import React from "react";
import Link from "next/link";
import "../../styles/LandingPage/browse.scss";

import {
  FaBell,
  FaTools,
  FaUserGraduate,
  FaQuestionCircle,
  FaClipboardList,
  FaBook,
  FaBookOpen,
} from "react-icons/fa";

const browseItems = [
  {
    id: 1,
    title: "Notification",
    icon: <FaBell />,
    link: "/notifications",
  },
  {
    id: 2,
    title: "ITI Latest Update",
    icon: <FaTools />,
    link: "/iti-updates",
  },
  {
    id: 3,
    title: "Apprentice Latest Update",
    icon: <FaUserGraduate />,
    link: "/apprentice-updates",
  },
  {
    id: 4,
    title: "Latest Previous Year Questions",
    icon: <FaQuestionCircle />,
    link: "/previous-year-questions",
  },
  {
    id: 5,
    title: "Test Series",
    icon: <FaClipboardList />,
    link: "/test-series",
  },
  {
    id: 6,
    title: "E-Book",
    icon: <FaBook />,
    link: "/ebooks",
  },
  {
    id: 7,
    title: "Notes",
    icon: <FaBookOpen />,
    link: "/notes",
  },
];

export default function Browse() {
  return (
    <section className="browse-section">

      <div className="browse-header">
        <h2>Browse</h2>
      </div>

      <div className="browse-grid">

        {browseItems.map((item) => (
          <Link
            href={item.link}
            className="browse-card"
            key={item.id}
          >
            <div className="browse-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>
          </Link>
        ))}

      </div>

    </section>
  );
}