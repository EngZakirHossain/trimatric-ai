const TopBar = () => {
    return<>
    <div className="topbar topbar--two">
        <div className="container">
        <div className="topbar__inner">
            <ul className="list-unstyled topbar__info">
            <li>
                <span className="topbar__info__icon">
                <i className="icon-location" />
                </span>
                <span>
                <a href="https://www.google.com/maps">
                    125 Ramna Century Avenue, Boro Moghbazar, Dhaka-1217 Bangladesh
                </a>
                </span>
            </li>
            <li>
                <span className="topbar__info__icon">
                <i className="icon-email" />
                </span>
                <span>
                <a href="mailto:info@trimatric.ai">info@trimatric.ai</a>
                </span>
            </li>
            <li>
                <span className="topbar__info__icon">
                <i className="icon-phone" />
                </span>
                <span>
                <a href="tel:+880 1886-636200">+880 1886-636200</a>
                </span>
            </li>
            </ul>
            <div className="topbar__social">
            <a href="https://www.facebook.com/trimatricai">
                <i className="icon-facebook" aria-hidden="true" />
                <span className="sr-only">Facebook</span>
            </a>           
            <a href="https://www.linkedin.com/company/trimatric-ai">
                <i className="icon-pinterest" aria-hidden="true" />
                <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://www.youtube.com/@TrimatricAI">
                <i className="icon-youtube" aria-hidden="true" />
                <span className="sr-only">Youtube</span>
            </a>
            </div>
        </div>
        </div>
    </div>
    <nav className="main-header main-header--two sticky-header sticky-header--normal">
        <div className="main-header__container container">
        <div className="main-header__inner">
            <div className="main-header__logo logo-retina">
            <a href="index.html">
                <img
                src="/images/logo.png"
                alt="Aigence HTML"
                width={150}
                />
            </a>
            </div>
            <div className="main-header__right">
            <nav className="main-header__nav main-menu">
                <ul className="main-menu__list">
                <li className="dropdown megamenu">
                    <a href="index.html">Home</a>                   
                </li>
                <li>
                    <a href="about.html">About</a>
                </li>
                <li className="dropdown">
                    <a href="#">Pages</a>
                    <ul>
                    <li className="dropdown">
                        <a href="#">Our Team</a>
                        <ul>
                        <li>
                            <a href="team.html">Our Team</a>
                        </li>
                        <li>
                            <a href="team-carousel.html">Team Carousel</a>
                        </li>
                        <li>
                            <a href="team-details.html">Team Details</a>
                        </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#">Our Projects</a>
                        <ul>
                        <li>
                            <a href="projects.html">Our Projects</a>
                        </li>
                        <li>
                            <a href="projects-carousel.html">Projects Carousel</a>
                        </li>
                        <li>
                            <a href="project-details.html">Project Details</a>
                        </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#">Our Testimonials</a>
                        <ul>
                        <li>
                            <a href="testimonials.html">Our Testimonials 01</a>
                        </li>
                        <li>
                            <a href="testimonials-2.html">Our Testimonials 02</a>
                        </li>
                        <li>
                            <a href="testimonials-3.html">Our Testimonials 03</a>
                        </li>
                        <li>
                            <a href="testimonials-carousel.html">
                            Testimonials Carousel 01
                            </a>
                        </li>
                        <li>
                            <a href="testimonials-carousel-2.html">
                            Testimonials Carousel 02
                            </a>
                        </li>
                        <li>
                            <a href="testimonials-carousel-3.html">
                            Testimonials Carousel 03
                            </a>
                        </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#">Gallery</a>
                        <ul>
                        <li>
                            <a href="gallery.html">Gallery masonry</a>
                        </li>
                        <li>
                            <a href="gallery-filter.html">Gallery filter</a>
                        </li>
                        <li>
                            <a href="gallery-grid.html">Gallery Grid</a>
                        </li>
                        <li>
                            <a href="gallery-carousel.html">Gallery Carousel</a>
                        </li>
                        </ul>
                    </li>
                    <li>
                        <a href="faq.html">FAQS</a>
                    </li>
                    <li>
                        <a href="404.html">404 Error</a>
                    </li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a href="#">Services</a>
                    <ul>
                    <li className="dropdown">
                        <a href="#">Services Grid</a>
                        <ul>
                        <li>
                            <a href="services.html">Services Grid 01</a>
                        </li>
                        <li>
                            <a href="services-2.html">Services Grid 02</a>
                        </li>
                        <li>
                            <a href="services-3.html">Services Grid 03</a>
                        </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#">Services Carousel</a>
                        <ul>
                        <li>
                            <a href="services-carousel.html">
                            Services Carousel 01
                            </a>
                        </li>
                        <li>
                            <a href="services-carousel-2.html">
                            Services Carousel 02
                            </a>
                        </li>
                        <li>
                            <a href="services-carousel-3.html">
                            Services Carousel 03
                            </a>
                        </li>
                        </ul>
                    </li>
                    <li>
                        <a href="service-d-ai-data-analytics.html">
                        AI-Data Analytics
                        </a>
                    </li>
                    <li>
                        <a href="service-d-ai-development.html">AI-Development</a>
                    </li>
                    <li>
                        <a href="service-d-ai-design-mystery.html">
                        AI-Design Mystery
                        </a>
                    </li>
                    <li>
                        <a href="service-d-ai-integration.html">AI-Integration</a>
                    </li>
                    <li>
                        <a href="service-d-ai-chatbots.html">AI-Chatbots</a>
                    </li>
                    <li>
                        <a href="service-d-ai-driven-automation.html">
                        AI-Driven Automation
                        </a>
                    </li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a href="#">Shop</a>
                    <ul>
                    <li className="dropdown">
                        <a href="#">Products</a>
                        <ul>
                        <li>
                            <a href="products.html">No sidebar</a>
                        </li>
                        <li>
                            <a href="products-left.html">Left sidebar</a>
                        </li>
                        <li>
                            <a href="products-right.html">Right sidebar</a>
                        </li>
                        </ul>
                    </li>
                    <li>
                        <a href="products-carousel.html">Products carousel</a>
                    </li>
                    <li>
                        <a href="product-details.html">Product details</a>
                    </li>
                    <li>
                        <a href="cart.html">Cart</a>
                    </li>
                    <li>
                        <a href="checkout.html">Checkout</a>
                    </li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a href="#">Blog</a>
                    <ul>
                    <li className="dropdown">
                        <a href="#">Blog grid 01</a>
                        <ul>
                        <li>
                            <a href="blog-grid.html">No sidebar</a>
                        </li>
                        <li>
                            <a href="blog-grid-left.html">Left sidebar</a>
                        </li>
                        <li>
                            <a href="blog-grid-right.html">Right sidebar</a>
                        </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#">Blog grid 02</a>
                        <ul>
                        <li>
                            <a href="blog-grid-2.html">No sidebar</a>
                        </li>
                        <li>
                            <a href="blog-grid-2-left.html">Left sidebar</a>
                        </li>
                        <li>
                            <a href="blog-grid-2-right.html">Right sidebar</a>
                        </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#">Blog list</a>
                        <ul>
                        <li>
                            <a href="blog-list.html">No sidebar</a>
                        </li>
                        <li>
                            <a href="blog-list-left.html">Left sidebar</a>
                        </li>
                        <li>
                            <a href="blog-list-right.html">Right sidebar</a>
                        </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#">Blog carousel</a>
                        <ul>
                        <li>
                            <a href="blog-carousel.html">Blog carousel 01</a>
                        </li>
                        <li>
                            <a href="blog-carousel-2.html">Blog carousel 02</a>
                        </li>
                        </ul>
                    </li>
                    <li className="dropdown">
                        <a href="#">Blog details</a>
                        <ul>
                        <li>
                            <a href="blog-details.html">No sidebar</a>
                        </li>
                        <li>
                            <a href="blog-details-left.html">Left sidebar</a>
                        </li>
                        <li>
                            <a href="blog-details-right.html">Right sidebar</a>
                        </li>
                        </ul>
                    </li>
                    </ul>
                </li>
                <li>
                    <a href="contact.html">Contact</a>
                </li>
                </ul>
            </nav>
            <div className="mobile-nav__btn mobile-nav__toggler">
                <span />
                <span />
                <span />
            </div>
            <div className="main-header__btn">
                <a href="contact.html" className="aigence-btn">
                    <span className="aigence-btn__text">Get in Touch</span>
                </a>
            </div>            
            </div>
        </div>
        </div>
    </nav>
    </>
}

export default TopBar;