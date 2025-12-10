import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin,FaPinterest,FaYoutube,FaPhone, FaEnvelope, FaMapMarkerAlt    } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
    return <>
    <footer className="main-footer main-footer--two">
        <div
        className="main-footer__bg"
        style={{
            backgroundImage: "url(/images/footer.jpg)"
        }}
        />
        <div className="main-footer__top">
        <div className="container">
            <div className="row gutter-y-40 align-items-center">
            <div
                className="col-xl-3 col-lg-4 col-md-5 wow fadeInUp"
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
                </div>
            </div>
            <div
                className="col-xl-6 col-lg-4 col-md-7 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="100ms"
            >
                <div className="footer-widget footer-widget--social">
                <h3 className="footer-widget__social-title">Get in Touch</h3>
                <div className="social-links" style={{ display: "flex", gap: "10px" }}>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={24} color="#1877F2" title="Facebook" />
                    </a>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={24} color="#1DA1F2" title="Twitter X" />
                    </a>
                    <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                        <FaPinterest size={24} color="#E60023" title="Pinterest" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={24} color="#E4405F" title="Instagram" />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube size={24} color="#FF0000" title="YouTube" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={24} color="#0077B5" title="LinkedIn" />
                    </a>
                </div>
                </div>
            </div>
            <div
                className="col-xl-3 col-lg-4 col-md-7 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="200ms"
            >
                <div className="footer-widget footer-widget--contact">
                <ul className="list-unstyled footer-widget__info">
                    <li>
                    <span className="footer-widget__info__icon">
                        <FaEnvelope  size={24} color="#FF4D4D" title="Email" />
                    </span>
                    <span>
                        <a href="mailto:info@trimatric.ai">
                            info@trimatric.ai
                        </a>
                    </span>
                    </li>
                    <li>
                    <span className="footer-widget__info__icon">
                        <FaPhone size={24} color="#FF0000" title="YouTube" />
                    </span>
                    <span>
                        <a href="tel:+880 1886-636200">+880 1886-636200</a>
                    </span>
                    </li>
                    <li>
                    <span className="footer-widget__info__icon">
                        <FaMapMarkerAlt  size={24} color="#FF4D4D" title="Location" />
                    </span>
                    <span>
                        <p>125 Ramna Century Avenue, Boro Moghbazar, Dhaka-1217 Bangladesh</p>
                    </span>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="container">
        <div className="main-footer__wrapper">
            <div className="row gutter-y-40">
            <div
                className="col-lg-6 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="00ms"
            >
                <div className="footer-widget footer-widget--about">
                <h3 className="footer-widget__about-title">
                    Shaping the Ai <br /> <span>Future</span>
                </h3>
                </div>
            </div>
            <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="100ms"
            >
                <div className="footer-widget footer-widget--links">
                <h2 className="footer-widget__title">Links</h2>
                <ul className="list-unstyled footer-widget__links">
                    <li>
                    <Link href="/about">About</Link>
                    </li>
                    <li>
                    <Link href="/services">Our Services</Link>
                    </li>
                    <li>
                    <a href="projects.html">Recent Projects</a>
                    </li>                    
                    <li>
                    <Link href="/contact">Contact</Link>
                    </li>
                </ul>
                </div>
            </div>
            <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="200ms"
            >
                <div className="footer-widget footer-widget--links">
                <h2 className="footer-widget__title">Explore</h2>
                <ul className="list-unstyled footer-widget__links">
                    <li>
                    <Link href="/teams">Meet the Team</Link>
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
            </div>
        </div>
        </div>
        <div className="main-footer__bottom">
        <div className="container">
            <div className="main-footer__bottom__inner">
            <p className="main-footer__copyright">
                © Copyright <span className="dynamic-year" /> By Trimatric Architech.
            </p>
            </div>
        </div>
        </div>
    </footer>
</>

}
export default Footer;