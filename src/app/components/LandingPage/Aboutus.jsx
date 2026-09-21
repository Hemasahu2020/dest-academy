"use client";

import React from "react";
import Image from "next/image";
import "../../styles/LandingPage/aboutus.scss";

const youtubeVideos = [
  {
    id: 1,
    title: "DEST Academy Video 1",
    videoId: "_iGMstt4_5Y",
  },
  {
    id: 2,
    title: "DEST Academy Video 2",
    videoId: "i8X5w52Yt7w",
  },
  {
    id: 3,
    title: "DEST Academy Video 3",
    videoId: "CDm1F4mNJO8",
  },
];
export default function AboutUs() {
  return (
    <section>  
      {/* YouTube Video Cards */}
      <div className="youtube-section">
        <div className="youtube-heading">
          <span>WATCH & LEARN</span>
          <h2>Latest from DEST Academy</h2>
          <p>Explore our latest educational videos and updates.</p>
        </div>

        <div className="youtube-grid">
          {youtubeVideos.map((video) => (
            <div className="youtube-card" key={video.id}>
              <div className="youtube-video-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <div className="youtube-card-content">
                <h3>{video.title}</h3>
                <a
                  href={`https://www.youtube.com/watch?v=${video.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
          ))}
        </div>

        <a
          href="https://www.youtube.com/@DESTAcademy"
          target="_blank"
          rel="noopener noreferrer"
          className="youtube-channel-button"
        >
          Visit DEST Academy YouTube Channel
        </a>
        <div  className="aboutus-section">
          <div className="Above-Section-About-container">
        <h2 className="section-title">About Us</h2>

        <div className="Above-Section-About">
          <div className="aboutus-image">
            <Image
              src="/images/Sushil.jpeg"
              alt="DEST Academy"
              width={1800}
              height={1800}
              className="inline-logo"
            />
          </div>

          <div className="About-right-content">
            <h3 className="aboutus-heading">About Us</h3>

            <p>
              <strong>DEST Academy</strong> (Dream Education Skill & Training
              Pvt. Ltd.) is a registered private limited company committed to
              delivering impactful education, practical skill training, and
              employment-ready programs to youth across India.
            </p>

            <p>
              We believe that{" "}
              <em>
                “Skill is the real foundation of nation building.”
              </em>
            </p>
          </div>
        </div>
      </div>
      </div>
      </div>

    </section>
  );
}