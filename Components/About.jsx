import { FaLaptopCode, FaPalette, FaPlay , FaBrain ,FaVideo  } from "react-icons/fa";

const About = () => {

    return <>
    <section className="about-two section-space">
            <div className="container">
            <div className="row gutter-y-50">
                <div className="col-xxl-8 col-xl-7">
                <div className="about-two__content">
                    <h2 className="sec-title bw-split-in-left">
                    TRIMATRIC AI is a forward-thinking technology company developing cutting-edge AI-based software and solutions.
                    </h2>
                    <div className="about-two__item-grid">
                    <div
                        className="about-two__item wow fadeInUp"
                        data-wow-duration="1500ms"
                        data-wow-delay="00ms"
                    >
                        <div className="about-two__item__top">
                        <span className="about-two__item__icon">
                            <FaLaptopCode size={30} color="#007bff" />
                        </span>
                        <h4 className="about-two__item__title">
                            Versatile <br /> intelligent automation
                        </h4>
                        </div>
                        <p className="about-two__item__text">
                        Utilize AI tools to analyze customer behavior, improve
                        customer sales.
                        </p>
                    </div>
                    <div
                        className="about-two__item wow fadeInUp"
                        data-wow-duration="1500ms"
                        data-wow-delay="100ms"
                    >
                        <div className="about-two__item__top">
                        <span className="about-two__item__icon about-two__item__icon--2">
                            <FaPalette size={30} color="#007bff" />
                        </span>
                        <h4 className="about-two__item__title">
                            Professional <br /> Team Members
                        </h4>
                        </div>
                        <p className="about-two__item__text">
                        In an ideal world disband the squad but rehydrate as needed,
                        yet loop.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
                <div
                className="col-xxl-4 col-xl-5 wow fadeInUp"
                data-wow-duration="1500ms"
                >
                <div className="about-two__image">
                    <div className="about-two__image__one">
                    <img src="/images/Artboard 3.jpg" alt="about" />
                    </div>                    
                </div>
                </div>
            </div>
            </div>
    </section>
    <section className="about-one section-space-2">
        <div className="container">
        <div className="row gutter-y-40 align-items-center">
            <div className="col-lg-7 wow fadeInUp" data-wow-duration="1500ms">
            <h2 className="sec-title bw-split-in-left">
                Trimatric AI to solve <br /> real-world challenges, our <br /> team
                blends <span>creativity</span>, <br /> expertise, and strategy to
                <br /> drive innovation and growth.
            </h2>
            </div>
            <div className="col-lg-5">
            <div className="about-one__content">
                <div
                className="about-one__item wow fadeInUp"
                data-wow-duration="1500ms"
                >
                <h4 className="about-one__item__title">
                    AI Model Development
                </h4>
                <div className="about-one__item__bottom">
                    <span className="about-one__item__icon">
                    <FaBrain size={30} color="#007bff" />
                    </span>
                    <p className="about-one__item__text">
                        We specialize in the development of advanced AI-driven software solutions tailored to meet the specific needs of businesses and industries.
                    </p>
                </div>
                </div>
                <div
                className="about-one__item wow fadeInUp"
                data-wow-duration="1500ms"
                >
                <h4 className="about-one__item__title">
                    Autonomous Surveillance Implementation
                </h4>
                <div className="about-one__item__bottom">
                    <span className="about-one__item__icon">
                    <FaVideo size={30} color="#007bff" />
                    </span>
                    <p className="about-one__item__text">
                        We offer comprehensive Software Design & Development services, delivering customized solutions that meet the unique needs of businesses across.
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="about-one__video">
        <div className="container">
            <div className="about-one__video__inner">
            <div
                className="about-one__video__bg"
                style={{
                backgroundImage: "url(/images/hero-cover.jpg)"
                }}
            />
            <div className="about-one__video__content">
                <a
                href="https://www.youtube.com/embed/p7ZC693WJ5Q" target="_bank"
                className="about-one__video__btn video-popup"
                >
                <FaPlay  size={30} color="#FFFFFF" />
                </a>
            </div>
            <div className="about-one__experience">
                <h3 className="about-one__experience__year">5</h3>
                <p className="about-one__experience__title">
                    year of <br /> experience
                </p>
            </div>
            </div>
        </div>            
        </div>
    </section>
        
    </>
}
export default About;