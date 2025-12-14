'use client';
import Link from "next/link";
import { FaFacebookF, FaLinkedin,FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt    } from "react-icons/fa";
import { useSite } from "@/app/context/SiteContext";
import Image from "next/image";
import { usePathname } from "next/navigation";

const TopBar = () => {
    const site = useSite();
    if (!site) return null;

    const pathname = usePathname();

    const isActive = (path) => pathname === path;

    const productRoutes = ["/ai-house", "/coohom", "/ai-security"];

    const isProductsActive = productRoutes.includes(pathname);

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
                    {site.address}
                </a>
                </span>
            </li>
            <li>
                <span className="topbar__info__icon">
                    <FaEnvelope  size={24} color="#35a6ed" title="Email" />
                </span>
                <span>
                <a href={`mailto:${site.email}`}>{site.email}</a>
                </span>
            </li>
            <li>
                <span className="topbar__info__icon">
                <FaPhone  size={24} color="#35a6ed" title="Phone" />
                </span>
                <span>
                <a href={`tel:${site.phone}`}>{site.phone}</a>
                </span>
            </li>
            </ul>
            <div className="topbar__social flex gap-3">
                <a href={site.fb_link} target="_blank" rel="noopener noreferrer">
                    <FaFacebookF size={20} color="#1877F2" />
                </a>
                <a href={site.linkedin_link} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={20} color="#0077B5" />
                </a>
                <a href={site.youtube_link} target="_blank" rel="noopener noreferrer">
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
                <Image
                    src={site?.logo || "images/logo.png"}
                    alt={site?.name || "Trimatric AI"}
                    width={150}
                    height={50}
                    unoptimized
                />
            </Link>
            </div>
            <div className="main-header__right">
            <nav className="main-header__nav main-menu">
                <ul className="main-menu__list">
                    <li className={isActive("/") ? "active" : ""}>
                        <Link href="/">Home</Link>
                    </li>

                    <li className={isActive("/about") ? "active" : ""}>
                        <Link href="/about">About</Link>
                    </li>

                    <li className={isActive("/services") ? "active" : ""}>
                        <Link href="/services">Services</Link>
                    </li>

                    <li className={isActive("/teams") ? "active" : ""}>
                        <Link href="/teams">Teams</Link>
                    </li>

                    <li className={`dropdown ${isProductsActive ? "active" : ""}`}>
                        <a href="#">Products</a>
                        <ul>
                        <li className={isActive("/ai-house") ? "active" : ""}>
                            <Link href="/ai-house">AiHouse</Link>
                        </li>
                        <li className={isActive("/coohom") ? "active" : ""}>
                            <Link href="/coohom">CooHom</Link>
                        </li>
                        <li className={isActive("/ai-security") ? "active" : ""}>
                            <Link href="/ai-security">AI Security</Link>
                        </li>
                        </ul>
                    </li>

                    <li className={isActive("/contact") ? "active" : ""}>
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