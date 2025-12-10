"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import "swiper/css";

const Project = () => {
    const projects = [
        {
            img: "/images/hero/hero (1).jpg",
            title: "Cyber Flame",
            tag: "AI Portrait",
        },
        {
            img: "/images/hero/hero (4).jpg",
            title: "Robotic AI Body",
            tag: "AI Design",
        },
        {
            img: "/images/hero/hero (2).jpg",
            title: "Virtual Dream",
            tag: "VR Tech",
        },
        {
            img: "/images/hero/hero (8).jpg",
            title: "Future Vision",
            tag: "Virtual Reality",
        },
        {
            img: "/images/hero/hero (4).jpg",
            title: "Neural Core",
            tag: "Cyborg Tech",
        },
        {
            img: "/images/hero/hero (5).jpg",
            title: "Digital Human",
            tag: "AI Research",
        },
    ];

    return (
        <section className="projects-one section-space-2">
            <div className="container">
                <h2 className="sec-title sec-title--center bw-split-in-left">
                    Checkout Our Most <br /> Recent Work
                </h2>

                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                        1400: { slidesPerView: 4 },
                    }}
                    style={{ paddingTop: "20px" }}
                >
                    {projects.map((p, index) => (
                        <SwiperSlide key={index}>
                            <div className="project-card" style={{ background: "transparent" }}>
                                <div className="project-card__image">
                                    <img src={p.img} alt={p.title} />
                                </div>

                                <div className="project-card__content">
                                    <div className="project-card__inner">
                                        <a href="project-details.html" className="project-card__btn">
                                            <span className="project-card__btn__icon">
                                               <FaArrowRight size={30} color="#35a6ed" />
                                            </span>
                                        </a>

                                        <h3 className="project-card__title">
                                            <a href="project-details.html">{p.title}</a>
                                        </h3>

                                        <p className="project-card__tagline">{p.tag}</p>
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

export default Project;
