"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "@/lib/api";
import Image from "next/image";
import "swiper/css";

const Project = () => {
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        const loadProjects = async () => {
        const res = await fetchFromAPI("/projects");
        setProjects(res?.data || []);
        };

        loadProjects();
    }, []);

    return (
        <section className="projects-one section-space-2">
            <div className="container">
                <h2 className="sec-title sec-title--center bw-split-in-left">
                    Checkout Our Most <br /> Recent Projects
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
                                    <Image src={p.cover_image} height={500} width={400} alt={p.title} unoptimized/>
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

                                        <p className="project-card__tagline">{p.category_name}</p>
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
