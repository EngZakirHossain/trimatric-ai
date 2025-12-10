import HeaderBreadcrumb from "@/Components/HeaderBreadcrumb";
import Clients from "@/components/Clients";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
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
                        src="assets/images/about/about-4-1.jpg"
                        alt="about"
                        className="about-four__image__1"
                    />
                    <img
                        src="assets/images/about/about-4-2.jpg"
                        alt="about"
                        className="about-four__image__2"
                    />
                    <div className="about-four__circle">
                        <div className="about-four__circle__logo">
                        <img
                            src="assets/images/shapes/about-award-4-1.png"
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
                    {/*/.curved-circle end*/}
                    </div>
                    {/* /.about-four__image__left */}
                    <div className="about-four__image__right">
                    <img
                        src="assets/images/about/about-4-3.jpg"
                        alt="about"
                        className="about-four__image__3"
                    />
                    </div>
                    {/* /.about-four__image__right */}
                </div>
                {/* /.about-four__image */}
                </div>
                {/* /.col-lg-6 */}
                <div className="col-lg-6">
                <div className="about-four__content">
                    <h2 className="sec-title bw-split-in-left">
                    The Advantages Of Collaborating With An AI Agency
                    </h2>
                    {/* /.sec-title */}
                    <h3
                    className="about-four__title wow fadeInUp"
                    data-wow-duration="1500ms"
                    >
                    AI agencies may assist in developing AI-driven products
                    </h3>
                    {/* /.about-four__title */}
                    <p
                    className="about-four__text wow fadeInUp"
                    data-wow-duration="1500ms"
                    >
                    An AI agency is a business or organization that specializes in
                    leveraging artificial intelligence to provide solutions and
                    services to clients. These agencies typically offer expertise in
                    areas like machine learning.
                    </p>
                    {/* /.about-four__text */}
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
                                <i className="icon-ai-network" />
                            </span>
                            </div>
                            <h4 className="about-four__item__title">
                            Innovate <br /> with AI
                            </h4>
                        </div>
                        {/* /.about-four__item__top */}
                        <p className="about-four__item__text">
                            Utilize AI tools to analyze customer behavior, improve
                            customer sales.
                        </p>
                        {/* /.about-four__item__text */}
                        </div>
                        {/* /.about-four__item */}
                    </div>
                    {/* /.col-xl-6 */}
                    <div
                        className="col-xl-6 col-lg-12 col-md-6 wow fadeInUp"
                        data-wow-duration="1500ms"
                        data-wow-delay="100ms"
                    >
                        <div className="about-four__item">
                        <div className="about-four__item__top">
                            <div className="about-four__item__icon-box">
                            <span className="about-four__item__icon">
                                <i className="icon-ai-connectivity" />
                            </span>
                            </div>
                            <h4 className="about-four__item__title">
                            Maximize Ai <br /> Impact
                            </h4>
                        </div>
                        {/* /.about-four__item__top */}
                        <p className="about-four__item__text">
                            Prior to joining company, she spent 20+ years at Inmosys,
                            where he.
                        </p>
                        {/* /.about-four__item__text */}
                        </div>
                        {/* /.about-four__item */}
                    </div>
                    {/* /.col-xl-6 */}
                    </div>
                    {/* /.row gutter-y-30 */}
                    <div
                    className="about-four__button wow fadeInUp"
                    data-wow-duration="1500ms"
                    >
                    <a href="about.html" className="aigence-btn">
                        <span className="aigence-btn__text">Discover More</span>
                        <span className="aigence-btn__icon">
                        <i className="icon-right-arrow" />
                        </span>
                    </a>
                    {/* /.aigence-btn */}
                    </div>
                    {/* /.about-four__button */}
                </div>
                {/* /.about-four__content */}
                </div>
                {/* /.col-lg-6 */}
            </div>
            {/* /.row gutter-y-40 */}
            </div>
        </section>
         <div className="container mt-5 ">
            <div className="client-carousel__content">
                <h4 className="client-carousel__title">3500 happy customers</h4>
            </div>
            <Clients />
        </div>
        <Team/>
        <Testimonial/>
    </>
};
export default About;