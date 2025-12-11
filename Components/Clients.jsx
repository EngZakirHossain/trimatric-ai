"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "@/lib/api";
import Image from "next/image";

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const loadClients = async () => {
      const res = await fetchFromAPI("/clients");
      setClients(res?.data || []);
    };

    loadClients();
  }, []);

    return (
    <div className="container">
      <div className="client-carousel client-carousel--home2 client-carousel--two">
        <div className="client-carousel__content">
          <h4 className="client-carousel__title">100+ happy customers</h4>
        </div>

        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 6000 }}
          spaceBetween={65}
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 40 },
            500: { slidesPerView: 3, spaceBetween: 40 },
            768: { slidesPerView: 3, spaceBetween: 80 },
            992: { slidesPerView: 4, spaceBetween: 60 },
            1200: { slidesPerView: 5, spaceBetween: 109 },
          }}
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <a href={client.website || "#"} className="client-carousel__item" target="_blank" rel="noopener noreferrer">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="client-carousel__image"
                  unoptimized
                />
                {client.hoverLogo && (
                  <Image
                    src={client.hoverLogo}
                    alt={`${client.name} hover`}
                    width={120}
                    height={60}
                    className="client-carousel__hover-image"
                    unoptimized
                  />
                )}
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Clients;
