import HeaderBreadcrumb from "@/Components/HeaderBreadcrumb";
import Clients from "@/components/Clients";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import { FaBullseye, FaEye} from "react-icons/fa";
const About = () => {
    return <>
        <HeaderBreadcrumb pageTitle="About Us" />
        <section className="about-four section-space">
            <div className="container">
            <div className="row gutter-y-40">
                <div className="col-lg-6 wow fadeInUp" data-wow-duration="1500ms">
                <div className="about-four__image">
                    <div className="about-four__image__left">
                    <img
                        src="/images/about/1.webp"
                        alt="about"
                        className="about-four__image__1"
                    />
                    <img
                        src="/images/about/4.webp"
                        alt="about"
                        className="about-four__image__2"
                    />
                    <div className="about-four__circle">
                        <div className="about-four__circle__logo">
                        <img
                            src="/images/logo.png"
                            alt="award"
                        />
                        </div>
                        <div className="curved-circle">
                        <div
                            className="curved-circle--item"
                            data-circle-text-options='{
                                        "radius": 62,
                                        "forceWidth": true,
                                        "forceHeight": true
                                    }'
                        >
                            company award winning
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="about-four__image__right">
                    <img
                        src="/images/about/3.webp"
                        alt="about"
                        className="about-four__image__3"
                    />
                    </div>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="about-four__content">
                    <h2 className="sec-title bw-split-in-left">
                    About Trimatric AI
                    </h2>
                    <h3
                    className="about-four__title wow fadeInUp"
                    data-wow-duration="1500ms"
                    >
                    AI agencies may assist in developing AI-driven products
                    </h3>
                    <p
                    className="about-four__text wow fadeInUp"
                    data-wow-duration="1500ms"
                    >
                    TRIMATRIC AI is a forward-thinking technology company focused on developing cutting-edge artificial intelligence-based
                     software and solutions. With a mission to drive digital transformation, we provide tailored AI-driven services across various sectors,
                      revolutionizing industries with intelligent automation, data analytics, and advanced machine learning solutions.

                      Our expertise extends to large-scale surveillance and road safety projects, where we integrate sophisticated AI systems to enhance public
                       safety, optimize traffic management, and ensure seamless urban mobility. With our innovative solutions, we aim to contribute to the
                        creation of smarter, safer cities.
                    </p>
                    <div className="row gutter-y-30">
                    <div
                        className="col-xl-6 col-lg-12 col-md-6 wow fadeInUp"
                        data-wow-duration="1500ms"
                        data-wow-delay="00ms"
                    >
                        <div className="about-four__item">
                        <div className="about-four__item__top">
                            <div className="about-four__item__icon-box">
                            <span className="about-four__item__icon">
                                <FaBullseye  size={50} color="#35a6ed" title="Phone" />
                            </span>
                            </div>
                            <h4 className="about-four__item__title">
                            Our Mission
                            </h4>
                        </div>
                        <ul>
                            <li>Deliver Intelligent Security Solutions</li>
                            <li>Empower Data-Driven Decisions</li>
                            <li>Optimize Operations through Automation</li>
                            <li>Innovate Management Software</li>
                            <li>Lead Future-Driven AI Innovation</li>
                        </ul>
                        </div>
                    </div>
                    <div
                        className="col-xl-6 col-lg-12 col-md-6 wow fadeInUp"
                        data-wow-duration="1500ms"
                        data-wow-delay="100ms"
                    >
                        <div className="about-four__item">
                        <div className="about-four__item__top">
                            <div className="about-four__item__icon-box">
                            <span className="about-four__item__icon">
                                <FaEye  size={50} color="#35a6ed" title="Phone" />
                            </span>
                            </div>
                            <h4 className="about-four__item__title">
                            Our Vision
                            </h4>
                        </div>
                            <ul>
                                <li>Global AI innovation leader</li>
                                <li>Intelligent security & analytics solutions</li>
                                <li>AI-powered automation for efficiency</li>
                                <li>Seamless AI integration into daily operations</li>
                                <li>Building a smarter, safer digital future</li>
                            </ul>
                        </div>
                    </div>
                    </div>                    
                </div>
                </div>
            </div>
            </div>
        </section>        
        <Clients />
        <Team/>
        <Testimonial/>
    </>
};
export default About;