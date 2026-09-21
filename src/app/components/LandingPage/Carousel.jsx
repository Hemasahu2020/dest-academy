"use client";

import React from "react";
import Image from "next/image";
import "../../styles/LandingPage/carousel.scss";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Carousel() {
  const carouselImages = [
    {
      id: 1,
      src: "/images/1.png",
      alt: "MP ITI Full Course 2026",
    },
    {
      id: 2,
      src: "/images/2.png",
      alt: "Bihar ITI Course",
    },
    {
      id: 3,
      src: "/images/3.png",
      alt: "Competitive Exam Course",
    },
    {
      id: 4,
      src: "/images/4.png",
      alt: "Skill Development Course",
    },
  ];

  return (
    <div className="hero-carousel">

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1.15}
        centeredSlides={true}
        loop={true}
        speed={700}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".carousel-next",
          prevEl: ".carousel-prev",
        }}
        breakpoints={{
          576: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1.7,
            spaceBetween: 24,
          },
          1024: {
            slidesPerView: 1.65,
            spaceBetween: 28,
          },
          1400: {
            slidesPerView: 1.7,
            spaceBetween: 30,
          },
        }}
        className="landing-swiper"
      >
        {carouselImages.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="carousel-card">

              <Image
                src={item.src}
                alt={item.alt}
                fill
                priority={item.id === 1}
                sizes="(max-width: 576px) 90vw, (max-width: 1024px) 65vw, 60vw"
              />

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className="carousel-prev"
        aria-label="Previous slide"
      >
        &#8592;
      </button>

      <button
        className="carousel-next"
        aria-label="Next slide"
      >
        &#8594;
      </button>

    </div>
  );
}