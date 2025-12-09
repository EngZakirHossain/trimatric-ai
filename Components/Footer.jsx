const Footer = () => {
    return <>     
        <footer className="main-footer">
            <div
            className="main-footer__bg"
            style={{
                backgroundImage: "url(/images/footer.jpg)"
            }}
            />
            <div className="main-footer__top">
            <div className="container">
                <div className="row gutter-y-30">
                <div
                    className="col-xl-4 col-lg-6 col-md-7 wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="00ms"
                >
                    <div className="footer-widget footer-widget--about">
                    <a href="index.html" className="footer-widget__logo logo-retina">
                        <img
                        src="/images/logo.png"
                        alt="Aigence HTML Template"
                        width={150}
                        />
                    </a>
                    <p className="footer-widget__text">
                        AI agency harnesses AI to improve business operations and
                        deliver custom solutions.
                    </p>
                    <div className="social-links">
                        <a href="https://facebook.com">
                        <span className="social-links__icon">
                            <i className="icon-facebook" aria-hidden="true" />
                            <span className="sr-only">Facebook</span>
                        </span>
                        </a>
                        <a href="https://x.com">
                        <span className="social-links__icon">
                            <i className="icon-twitter-x" aria-hidden="true" />
                            <span className="sr-only">Twitter X</span>
                        </span>
                        </a>
                        <a href="https://pinterest.com">
                        <span className="social-links__icon">
                            <i className="icon-pinterest" aria-hidden="true" />
                            <span className="sr-only">Pinterest</span>
                        </span>
                        </a>
                        <a href="https://youtube.com">
                        <span className="social-links__icon">
                            <i className="icon-youtube" aria-hidden="true" />
                            <span className="sr-only">Youtube</span>
                        </span>
                        </a>
                    </div>
                    </div>
                </div>
                <div
                    className="col-xl-2 col-lg-3 col-md-5 col-sm-6 wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="100ms"
                >
                    <div className="footer-widget footer-widget--links">
                    <h2 className="footer-widget__title">Links</h2>
                    <ul className="list-unstyled footer-widget__links">
                        <li>
                        <a href="about.html">About</a>
                        </li>
                        <li>
                        <a href="services.html">Our Services</a>
                        </li>
                        <li>
                        <a href="projects.html">Recent Projects</a>
                        </li>
                        <li>
                        <a href="blog-grid-right.html">Upcoming News</a>
                        </li>
                        <li>
                        <a href="contact.html">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div
                    className="col-xl-3 col-lg-3 col-md-5 col-sm-6 wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="100ms"
                >
                    <div className="footer-widget footer-widget--links">
                    <h2 className="footer-widget__title">Explore</h2>
                    <ul className="list-unstyled footer-widget__links">
                        <li>
                        <a href="team.html">Meet the Team</a>
                        </li>
                        <li>
                        <a href="contact.html">Support</a>
                        </li>
                        <li>
                        <a href="about.html">Privacy Policy</a>
                        </li>
                        <li>
                        <a href="about.html">Terms of Use</a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div
                    className="col-xl-3 col-lg-6 col-md-7 wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="300ms"
                >
                    <div className="footer-widget footer-widget--contact">
                    <h2 className="footer-widget__title">Contact</h2>
                    <address className="footer-widget__address">
                        125 Ramna Century Avenue, Boro Moghbazar, Dhaka-1217 Bangladesh
                    </address>
                    <ul className="list-unstyled footer-widget__info">
                        <li>
                        <span className="footer-widget__info__icon">
                            <i className="icon-email" />
                        </span>
                        <span>
                            <a href="mailto:info@trimatric.com">
                            info@trimatric.com
                            </a>
                        </span>
                        </li>
                        <li>
                        <span className="footer-widget__info__icon">
                            <i className="icon-phone-2" />
                        </span>
                        <span>
                            <a href="tel:+880 1886-636200">+880 1886-636200</a>
                        </span>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="main-footer__bottom">
            <div className="container">
                <div className="main-footer__bottom__inner">
                <p className="main-footer__copyright">
                    © Copyright <span className="dynamic-year" /> Trimatric AI. All
                    Rights Reserved.
                </p>
                </div>
            </div>
            </div>
        </footer>
    </>
}
export default Footer;