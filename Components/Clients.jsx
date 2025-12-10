"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Clients = () => {
  // Internal data — you can change it once and reuse anywhere
  const clientImages = [
    { src: "client-1.webp", alt: "Client 1", link: "#" },
    { src: "client-2.webp", alt: "Client 2", link: "#" },
    { src: "client-3.webp", alt: "Client 3", link: "#" },
    { src: "client-4.webp", alt: "Client 4", link: "#" },
    { src: "client-5.webp", alt: "Client 5", link: "#" },
    { src: "client-1.webp", alt: "Client 1", link: "#" },
    { src: "client-2.webp", alt: "Client 2", link: "#" },
    { src: "client-3.webp", alt: "Client 3", link: "#" },
    { src: "client-4.webp", alt: "Client 4", link: "#" },
    { src: "client-5.webp", alt: "Client 5", link: "#" },
  ];

  const breakpoints = {
    0: { slidesPerView: 2 },
    500: { slidesPerView: 3 },
    768: { slidesPerView: 3 },
    992: { slidesPerView: 4 },
    1200: { slidesPerView: 5 },
  };

  return (
    <div className="clients-carousel">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 3000 }}
        spaceBetween={50}
        breakpoints={breakpoints}
      >
        {clientImages.map((c, i) => (
          <SwiperSlide key={i}>
            <a href={c.link} className="client-carousel__item">
              <img src={`/images/clients/${c.src}`} alt={c.alt} />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Clients;
