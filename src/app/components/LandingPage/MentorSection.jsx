"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import "../../styles/LandingPage/mentorsection.scss";

const mentors = [
  {
    name: "Sushil Sir",
    role: "Skill Trainer",
    img: "/images/Sushil.jpeg",
    bio: "10+ years of industrial training in ITI fittings",
  },
  {
    name: "Neha Mam",
    role: "SSC Banking Guide",
    img: "/images/Neha.jpeg",
    bio: "5+ years of coaching for competitive exams",
  },
  {
    name: "Hema Mam",
    role: "Engineering Mentor",
    img: "/images/Hema.jpeg",
    bio: "Expert in vocational training and skill development",
  },
  {
    name: "Lalita Mam",
    role: "SSC Stenographer Mentor",
    img: "/mentor4.jpg",
    bio: "12+ years of experience in software development",
  },
  {
    name: "Deepak Sir",
    role: "Business Mentor",
    img: "/mentor5.jpg",
    bio: "8+ years of expertise in business management",
  },
];

export default function MentorSection() {
  return (
    <section className="mentor-section">
      <h2 className="mentor-section__title">Our Mentors</h2>
      <p className="mentor-section__subtitle">
        Learn from the Best in their Field
      </p>

      <div className="mentor-section__carousel">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {mentors.map((mentor, idx) => (
            <SwiperSlide key={idx}>
              <div className="mentor-card">
                <img
                  src={mentor.img}                
                  className="mentor-card__img"
                />
                <h3 className="mentor-card__name">{mentor.name}</h3>
                <p className="mentor-card__role">{mentor.role}</p>
                <p className="mentor-card__bio">{mentor.bio}</p>
                <button className="mentor-card__btn">View Profile</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
