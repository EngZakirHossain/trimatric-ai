"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaEnvelope, FaPhone, FaLinkedinIn } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "@/lib/api";
import Image from "next/image";


const Team = () => {
    
    const [teamMembers, setTeamMembers] = useState([]);
    
        useEffect(() => {
            const loadTeamMembers = async () => {
            const res = await fetchFromAPI("/teams");
            setTeamMembers(res?.data || []);
            };
    
            loadTeamMembers();
        }, []);

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
                        {teamMembers.map((member, index) => (
                            <SwiperSlide key={index}>
                                <div
                                    className="team-card wow fadeInUp"
                                    data-wow-duration="1500ms"
                                    data-wow-delay={`${index * 100}ms`}
                                >
                                    <div className="team-card__shape" />

                                    <div className="team-card__image">
                                        <Image width={400} height={400}  src={member.image} alt={member.name} unoptimized/>
                                    </div>

                                    <div className="team-card__social">
                                        <span className="team-card__social__icon" />                                       

                                        <div className="team-card__social__links social-links">
                                            {member.email && (
                                                <a
                                                href={`mailto:${member.email}`}
                                                title={member.email}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                >
                                                <FaEnvelope size={20} color="#1877F2" />
                                                </a>
                                            )}
                                            {member.phone && (
                                                <a
                                                href={`tel:${member.phone}`}
                                                title={member.phone}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                >
                                                <FaPhone size={20} color="#1877F2" />
                                                </a>
                                            )}
                                            {/* <a href="https://facebook.com">
                                                <span className="social-links__icon">
                                                    <FaLinkedinIn size={16} />
                                                </span>
                                            </a> */}
                                            
                                        </div>
                                    </div>

                                    <div className="team-card__info">
                                        <h3 className="team-card__name">
                                            <a href="#">{member.name}</a>
                                        </h3>
                                        <p className="team-card__designation">{member.designation}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
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
