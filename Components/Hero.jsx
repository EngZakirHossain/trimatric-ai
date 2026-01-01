"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import Clients from "@/Components/Clients";
import Link from "next/link";
import { fetchFromAPI } from "@/lib/api";
import Image from "next/image";

const HeroSection = () => {
  const [heroImages, setHeroImages] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const response = await fetchFromAPI("/sliders");
      setHeroImages(response?.data || []);
    };
    loadImages();
  }, []);

  return (
    <section className="hero-two">
      <div className="container">
        <div className="hero-two__content">
          <h2 className="hero-two__title">Unleash the Power of AI</h2>
          <p className="hero-two__title-2">
            Transforming Businesses with Intelligent Solutions
          </p>
          <div className="hero-two__button" style={{ marginBottom: "30px" }}>
            <Link href="/contact" className="aigence-btn">
              <span className="aigence-btn__text">Get In Touch</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Slider */}
      <div className="hero-two__container container">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          speed={1000}
          autoplay={{ delay: 3000 }}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {heroImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="hero-two__carousel__image">
                <Image
                  src={img.image}       // ensure your API returns "image"
                  alt={`hero-${idx}`}
                  width={400}
                  height={400}
                  className="img-fluid"
                  unoptimized
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Client Slider */}
      <Clients />
      
    </section>
  );
};

export default HeroSection;
