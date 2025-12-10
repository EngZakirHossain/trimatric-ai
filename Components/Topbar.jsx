import Link from "next/link";
import { FaFacebookF, FaLinkedin,FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt    } from "react-icons/fa";

const TopBar = () => {
    return<>
    <div className="topbar topbar--two">
        <div className="container">
        <div className="topbar__inner">
            <ul className="list-unstyled topbar__info">
            <li>
                <span className="topbar__info__icon">
                <FaMapMarkerAlt  size={24} color="#35a6ed" title="Address" />
                </span>
                <span>
                <a href="https://www.google.com/maps">
                    125 Ramna Century Avenue, Boro Moghbazar, Dhaka-1217 Bangladesh
                </a>
                </span>
            </li>
            <li>
                <span className="topbar__info__icon">
                    <FaEnvelope  size={24} color="#35a6ed" title="Email" />
                </span>
                <span>
                <a href="mailto:info@trimatric.ai">info@trimatric.ai</a>
                </span>
            </li>
            <li>
                <span className="topbar__info__icon">
                <FaPhone  size={24} color="#35a6ed" title="Phone" />
                </span>
                <span>
                <a href="tel:+880 1886-636200">+880 1886-636200</a>
                </span>
            </li>
            </ul>
            <div className="topbar__social flex gap-3">
                <a href="https://www.facebook.com/trimatricai" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF size={20} color="#1877F2" />
                </a>
                <a href="https://www.linkedin.com/company/trimatric-ai" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={20} color="#0077B5" />
                </a>
                <a href="https://www.youtube.com/@TrimatricAI" target="_blank" rel="noopener noreferrer">
                    <FaYoutube size={20} color="#FF0000" />
                </a>
            </div>
        </div>
        </div>
    </div>
    <nav className="main-header main-header--two sticky-header sticky-header--normal">
        <div className="main-header__container container">
        <div className="main-header__inner">
            <div className="main-header__logo logo-retina">
            <Link href="/">
                <img
                src="/images/logo.png"
                alt="Aigence HTML"
                width={150}
                />
            </Link>
            </div>
            <div className="main-header__right">
            <nav className="main-header__nav main-menu">
                <ul className="main-menu__list">
                <li className="dropdown megamenu">
                    <Link href="/">Home</Link>                   
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/about">Services</Link>
                </li>
                <li>
                    <Link href="/teams">Teams</Link>
                </li>
                <li className="dropdown">
                    <a href="#">Products</a>
                    <ul>                    
                        <li>
                            <a href="faq.html">AiHouse</a>
                        </li>
                        <li>
                            <a href="404.html">CooHom</a>
                        </li>
                        <li>
                            <a href="404.html">AI Security</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="/contact">Contacts</Link>
                </li>
                </ul>
            </nav>
            <div className="mobile-nav__btn mobile-nav__toggler">
                <span />
                <span />
                <span />
            </div>
            <div className="main-header__btn">
                <Link href="/contact" className="aigence-btn">
                    <span className="aigence-btn__text">Get in Touch</span>
                </Link>
            </div>            
            </div>
        </div>
        </div>
    </nav>
    </>
}

export default TopBar;