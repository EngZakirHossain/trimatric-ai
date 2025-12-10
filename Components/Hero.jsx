"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import Clients from "@/components/Clients";

const HeroSection = () => {
  const heroImages = Array.from({ length: 10 }, (_, i) => `/images/hero/hero (${i + 1}).jpg`);

  return (
    <section className="hero-two">

      <div className="container">
        <div className="hero-two__content">
          <h2 className="hero-two__title">Unleash the Power of AI</h2>
          <p className="hero-two__title-2">Transforming Businesses with Intelligent Solutions</p>
          <div className="hero-two__button" style={{ marginBottom: "30px" }}>
            <a href="/about" className="aigence-btn">
                <span className="aigence-btn__text">Get In Touch</span>
            </a>
            </div>
        </div>
      </div>

      {/* Hero Slider */}
      <div className="hero-two__container container">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          speed={1000}
          autoplay={{ delay: 3000 }}
          coverflowEffect={{ rotate: 40, stretch: 0, depth: 100, modifier: 1, slideShadows: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 }
          }}
        >
          {heroImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="hero-two__carousel__image">
                <img src={img} alt={`hero ${idx+1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Client Slider (also using Swiper) */}
      <div className="container mt-5">
        <h4 style={{color:"white"}}>100+ happy customers</h4>
        <Clients />
      </div>

    </section>
  );
};

export default HeroSection;
