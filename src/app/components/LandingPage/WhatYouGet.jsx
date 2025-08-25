import React from "react";
import {
  Briefcase,
  FileText,
  BookOpen,
  RefreshCcw,
  CheckSquare,
} from "lucide-react";
import "../../styles/LandingPage/whatyouget.scss";

export default function WhatYouGet() {
  const benefits = [
    {
      icon: <Briefcase size={32} />,
      title: "Job Placement Support",
      desc:
        "Gain access to 1.6L+ job opportunities across 4000+ top IT and non-IT companies.",
      link: null,
    },
    {
      icon: <FileText size={32} />,
      title: "Performance Scorecard",
      desc:
        "A 2-year valid scorecard offering deep insights into your strengths and improvement areas.",
      // link: { text: "View Sample Scorecard", url: "#" },
    },
    {
      icon: <BookOpen size={32} />,
      title: "Free Learning Materials",
      desc:
        "Unlock curated digital resources to boost your exam and job-readiness.",
      link: null,
    },
    {
      icon: <RefreshCcw size={32} />,
      title: "Unlimited Resubmissions",
      desc:
        "Keep improving with unlimited attempts to enhance your score and preparation.",
      link: null,
    },
    {
      icon: <CheckSquare size={32} />,
      title: "Practice Test Access",
      desc:
        "Sharpen your skills with mock tests modeled on real assessment formats.",
      // link: { text: "Try a Sample Test", url: "#" },
    },
  ];

  return (
    <section className="dest-whatyouget">
      <h2 className="dest-whatyouget__title">What You’ll Gain with DEST Academy</h2>
      <div className="dest-whatyouget__grid">
        {benefits.map((item, i) => (
          <div className="dest-whatyouget__card" key={i}>
            <div className="dest-whatyouget__icon">{item.icon}</div>
            <h3 className="dest-whatyouget__heading">{item.title}</h3>
            <p className="dest-whatyouget__desc">{item.desc}</p>
            {item.link && (
              <a href={item.link.url} className="dest-whatyouget__link">
                {item.link.text} →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
