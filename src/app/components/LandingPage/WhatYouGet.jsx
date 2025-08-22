import React from "react";
import { Briefcase, FileText, BookOpen, RefreshCcw, CheckSquare } from "lucide-react";
import "../../styles/LandingPage/whatyouget.scss";

export default function WhatYouGet() {
  const benefits = [
    {
      icon: <Briefcase size={32} />,
      title: "Job Assistance",
      desc: "Access to 1.6L+ IT & non-IT jobs from 4000+ corporates",
      link: null,
    },
    {
      icon: <FileText size={32} />,
      title: "Scorecard",
      desc: "Valid for 2 years with detailed performance insights",
    //   link: { text: "View Sample Scorecard", url: "#" },
    },
    {
      icon: <BookOpen size={32} />,
      title: "Free Learning Resources",
      desc: "Exclusive online courses to help you prepare better",
      link: null,
    },
    {
      icon: <RefreshCcw size={32} />,
      title: "Resubscribe & Improve",
      desc: "Unlimited chances to enhance your score",
      link: null,
    },
    {
      icon: <CheckSquare size={32} />,
      title: "Free Practice Tests",
      desc: "Crack the real test with ease & confidence",
    //   link: { text: "Take a Sample Test", url: "#" },
    },
  ];

  return (
    <section className="dest-whatyouget">
      <h2 className="dest-whatyouget__title">✨ What Do You Get?</h2>
      <div className="dest-whatyouget__grid">
        {benefits.map((item, i) => (
          <div className="dest-whatyouget__card" key={i}>
            <div className="dest-whatyouget__icon">{item.icon}</div>
            <h3 className="dest-whatyouget__heading">{item.title}</h3>
            <p className="dest-whatyouget__desc">{item.desc}</p>
            {item.link && (
              <a href={item.link.url} className="dest-whatyouget__link">
                {/* {item.link.text} → */}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
