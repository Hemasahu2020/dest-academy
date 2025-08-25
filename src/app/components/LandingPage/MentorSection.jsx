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
    role: "Lead Skill Trainer",
    img: "/images/Sushil.jpeg",
    bio: "Over 10 years of hands-on experience in ITI Fitting and industrial training across multiple sectors.",
  },
  {
    name: "Neha Mam",
    role: "SSC & Banking Exam Coach",
    img: "/images/Neha.jpeg",
    bio: "Trained 1000+ students for SSC and Banking exams with a proven success record spanning 5+ years.",
  },
  {
    name: "Hema Mam",
    role: "Vocational Education Specialist",
    img: "/images/Hema.jpeg",
    bio: "Expert mentor in skill development and vocational education for engineering and non-tech backgrounds.",
  },
  {
    name: "Lalita Mam",
    role: "Stenography & IT Mentor",
    img: "/images/Lalita.jpeg",
    bio: "12+ years in software development and government exam coaching, specializing in stenography and typing.",
  },
  {
    name: "Deepak Sir",
    role: "Business & Career Coach",
    img: "/images/Deepak.png",
    bio: "8 years of business consulting experience focused on career planning, entrepreneurship, and management.",
  },
];

export default function MentorSection() {
  return (
    <section className="mentor-section">
      <h2 className="mentor-section__title">Meet Our Expert Mentors</h2>
      <p className="mentor-section__subtitle">
        Industry professionals guiding your success
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
                <Image
                  src={mentor.img}
                  alt={`${mentor.name} - ${mentor.role}`}
                  width={300}
                  height={300}
                  className="mentor-card__img"
                />
                <h3 className="mentor-card__name">{mentor.name}</h3>
                <p className="mentor-card__role">{mentor.role}</p>
                <p className="mentor-card__bio">{mentor.bio}</p>
                {/* Optional: Link to mentor page or LinkedIn */}
                <button className="mentor-card__btn">View Profile</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
