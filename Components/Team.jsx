"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaFacebookF, FaPinterestP, FaYoutube, FaXTwitter } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";


const Team = () => {
    const teamMembers = [
        {
            name: "Annette Black",
            role: "AI Agent",
            image: "/images/team/Abrar.webp",
        },
        {
            name: "Clara Ross",
            role: "AI Agent",
            image: "/images/team/Abrar.webp",
        },
        {
            name: "Floyd Miles",
            role: "AI Agent",
            image: "/images/team/Abrar.webp",
        },
        {
            name: "Guy Hawkins",
            role: "AI Agent",
            image: "/images/team/Abrar.webp",
        },
        {
            name: "Theresa Webb",
            role: "AI Agent",
            image: "/images/team/Abrar.webp",
        },
        {
            name: "Darrell Steward",
            role: "AI Agent",
            image: "/images/team/Abrar.webp",
        },
    ];

    return (
        <>
            <section className="team-one section-space-bottom">
                <div className="container">
                    <h2 className="sec-title sec-title--center bw-split-in-left">
                        Meet The Professionals <br /> Behind Our Success
                    </h2>
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        loop={true}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            992: { slidesPerView: 3 },
                        }}
                    >
                        {teamMembers.map((m, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className="team-card wow fadeInUp"
                                    data-wow-duration="1500ms"
                                    data-wow-delay={`${index * 100}ms`}
                                >
                                    <div className="team-card__shape" />

                                    <div className="team-card__image">
                                        <img src={m.image} alt={m.name} />
                                    </div>

                                    <div className="team-card__social">
                                        <span className="team-card__social__icon" />

                                        <div className="team-card__social__links social-links">
                                            <a href="https://facebook.com">
                                                <span className="social-links__icon">
                                                    <FaFacebookF size={16} />
                                                </span>
                                            </a>

                                            <a href="https://x.com">
                                                <span className="social-links__icon">
                                                    <FaXTwitter size={16} />
                                                </span>
                                            </a>

                                            <a href="https://pinterest.com">
                                                <span className="social-links__icon">
                                                    <FaPinterestP size={16} />
                                                </span>
                                            </a>

                                            <a href="https://youtube.com">
                                                <span className="social-links__icon">
                                                    <FaYoutube size={16} />
                                                </span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="team-card__info">
                                        <h3 className="team-card__name">
                                            <a href="#">{m.name}</a>
                                        </h3>
                                        <p className="team-card__designation">{m.role}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            {/* Marquee text section stays as it is */}
            <section className="slide-text slide-text--home1 ">
                <div className="slide-text__wrapper">
                    <h1 className="slide-text__scroll">
                        <span>*AI-Driven Solutions</span>
                        <span>*Unlocking AI’s Full Potential</span>
                        <span>*Inspired by Innovation</span>
                        <span>*AI Design Mastery</span>
                        <span>*Turning Ideas into Reality</span>

                        <span>*AI-Driven Solutions</span>
                        <span>*Unlocking AI’s Full Potential</span>
                        <span>*Inspired by Innovation</span>
                        <span>*AI Design Mastery</span>
                        <span>*Turning Ideas into Reality</span>

                        <span>*AI-Driven Solutions</span>
                        <span>*Unlocking AI’s Full Potential</span>
                        <span>*Inspired by Innovation</span>
                        <span>*AI Design Mastery</span>
                        <span>*Turning Ideas into Reality</span>
                    </h1>
                </div>
            </section>
        </>
    );
};

export default Team;
