"use client";

import React from "react";
import Link from "next/link";
import "../../styles/LandingPage/trade.scss";

import {
  FaTools,
  FaFire,
  FaCogs,
  FaWrench,
  FaKeyboard,
  FaLaptopCode,
  FaBolt,
} from "react-icons/fa";

const trades = [
  {
    id: 1,
    title: "Fitter",
    icon: <FaTools />,
    link: "/courses/fitter",
    className: "fitter",
  },
  {
    id: 2,
    title: "Welder",
    icon: <FaFire />,
    link: "/courses/welder",
    className: "welder",
  },
  {
    id: 3,
    title: "Turner",
    icon: <FaCogs />,
    link: "/courses/turner",
    className: "turner",
  },
  {
    id: 4,
    title: "Machinist",
    icon: <FaWrench />,
    link: "/courses/machinist",
    className: "machinist",
  },
  {
    id: 5,
    title: "Stenographer",
    icon: <FaKeyboard />,
    link: "/courses/stenographer",
    className: "stenographer",
  },
  {
    id: 6,
    title: "COPA",
    icon: <FaLaptopCode />,
    link: "/courses/copa",
    className: "copa",
  },
  {
    id: 7,
    title: "Electrician",
    icon: <FaBolt />,
    link: "/courses/electrician",
    className: "electrician",
  },
];

export default function Trade() {
  return (
    <section className="trade-section">
      <div className="trade-header">      
        <h2>Trade</h2>      
      </div>

      <div className="trade-grid">
        {trades.map((trade) => (
          <Link
            href={trade.link}
            key={trade.id}
            className={`trade-card ${trade.className}`}
          >
            <div className="trade-icon">
              {trade.icon}
            </div>

            <div className="trade-content">
              <h3>{trade.title}</h3>
              <p>Explore Courses</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}