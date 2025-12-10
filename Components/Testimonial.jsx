"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

const testimonialsData = [
  {
    name: "Kevin Martin",
    designation: "CEO, Aigence",
    quote:
      "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form, by injected humor, or randomized words.",
    image: "/images/team/Azad.webp",
  },
  {
    name: "Robert Smith",
    designation: "CEO, Aigence",
    quote:
      "We have big contacts we will promote you i know this is the final release but can we add more features? The hair is just too polarising.",
    image: "/images/team/Azad.webp",
  },
  {
    name: "Martin Jhon",
    designation: "CEO, Aigence",
    quote:
      "I'll know it when I see it. We need more images of groups of people having non-specific types of fun. Make the font bigger.",
    image: "/images/team/Azad.webp",
  },
  {
    name: "Jane Cooper",
    designation: "CEO, Aigence",
    quote:
      "Start on it today and we will talk about what I want next time. Can you lower the price for the website? Make it high quality.",
    image: "/images/team/Azad.webp",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonials-four section-space-top ">
      <div className="container">
        <h2 className="sec-title sec-title--center bw-split-in-left">
          What They Are <br /> Talking About Agency
        </h2>

        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          navigation={false}
          breakpoints={{
            0: { slidesPerView: 1 },
            992: { slidesPerView: 2 },
          }}
        >
          {testimonialsData.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="testimonial-card-two">
                <div className="testimonial-card-two__shape">
                  <div className="testimonial-card-two__shape__1" />
                  <div className="testimonial-card-two__shape__2" />
                </div>
                <div className="testimonial-card-two__inner">
                  <p className="testimonial-card-two__quote">{t.quote}</p>
                  <div className="aigence-ratings">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="aigence-ratings__icon">
                        <i className="fas fa-star" />
                      </span>
                    ))}
                  </div>                  
                  <div className="testimonial-card-two__identity">
                    <h4 className="testimonial-card-two__name">{t.name}</h4>
                    <p className="testimonial-card-two__designation">
                      {t.designation}
                    </p>
                    {/* Move image here */}
                    <div style={{ marginTop: "-35px" }}>
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={80}
                        height={80}
                        style={{ borderRadius: "50%" }}
                      />
                    </div>
                  </div>
                </div>                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
