"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";

import "swiper/css";

const Service = () => {
    return (
        <section className="services-two section-space-2">
            <div className="container">
                <h2 className="sec-title sec-title--center">
                    Our Clients Receive the Highest <br /> Quality Service
                </h2>

                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1200: { slidesPerView: 3 },
                        1400: { slidesPerView: 4 },
                    }}
                    style={{ padding: "30px", background: "#f9f9ff" }}
                >
                    <SwiperSlide>
                        <div className="service-card-two">
                            <div className="service-card-two__bg" />
                            <div className="service-card-two__content">
                                <h3 className="service-card-two__title">
                                    <a href="#">AI-Data Analytics</a>
                                </h3>
                                <p className="service-card-two__text">
                                    We extract actionable insights from data using ML and predictive analytics.
                                </p>
                                <div className="service-card-two__image">
                                    <img src="/images/hero/hero (1).jpg" alt="" />
                                    <a href="#" className="service-card-two__btn">
                                        <span className="service-card-two__btn__icon">
                                            <FaArrowRight size={30} color="#FFFFFF" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="service-card-two">
                            <div className="service-card-two__bg" />
                            <div className="service-card-two__content">
                                <h3 className="service-card-two__title">
                                    <a href="#">AI-Data Analytics</a>
                                </h3>
                                <p className="service-card-two__text">
                                    We extract actionable insights from data using ML and predictive analytics.
                                </p>
                                <div className="service-card-two__image">
                                    <img src="/images/hero/hero (1).jpg" alt="" />
                                    <a href="#" className="service-card-two__btn">
                                        <span className="service-card-two__btn__icon">
                                            <FaArrowRight size={30} color="#FFFFFF" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="service-card-two">
                            <div className="service-card-two__bg" />
                            <div className="service-card-two__content">
                                <h3 className="service-card-two__title">
                                    <a href="#">AI-Data Analytics</a>
                                </h3>
                                <p className="service-card-two__text">
                                    We extract actionable insights from data using ML and predictive analytics.
                                </p>
                                <div className="service-card-two__image">
                                    <img src="/images/hero/hero (1).jpg" alt="" />
                                    <a href="#" className="service-card-two__btn">
                                        <span className="service-card-two__btn__icon">
                                            <FaArrowRight size={30} color="#FFFFFF" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="service-card-two">
                            <div className="service-card-two__bg" />
                            <div className="service-card-two__content">
                                <h3 className="service-card-two__title">
                                    <a href="#">AI-Data Analytics</a>
                                </h3>
                                <p className="service-card-two__text">
                                    We extract actionable insights from data using ML and predictive analytics.
                                </p>
                                <div className="service-card-two__image">
                                    <img src="/images/hero/hero (1).jpg" alt="" />
                                    <a href="#" className="service-card-two__btn">
                                        <span className="service-card-two__btn__icon">
                                            <FaArrowRight size={30} color="#FFFFFF" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="service-card-two">
                            <div className="service-card-two__bg" />
                            <div className="service-card-two__content">
                                <h3 className="service-card-two__title">
                                    <a href="#">AI-Data Analytics</a>
                                </h3>
                                <p className="service-card-two__text">
                                    We extract actionable insights from data using ML and predictive analytics.
                                </p>
                                <div className="service-card-two__image">
                                    <img src="/images/hero/hero (1).jpg" alt="" />
                                    <a href="#" className="service-card-two__btn">
                                        <span className="service-card-two__btn__icon">
                                            <FaArrowRight size={30} color="#FFFFFF" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="service-card-two">
                            <div className="service-card-two__bg" />
                            <div className="service-card-two__content">
                                <h3 className="service-card-two__title">
                                    <a href="#">AI-Data Analytics</a>
                                </h3>
                                <p className="service-card-two__text">
                                    We extract actionable insights from data using ML and predictive analytics.
                                </p>
                                <div className="service-card-two__image">
                                    <img src="/images/hero/hero (1).jpg" alt="" />
                                    <a href="#" className="service-card-two__btn">
                                        <span className="service-card-two__btn__icon">
                                            <FaArrowRight  size={30} color="#FFFFFF" />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Service;
