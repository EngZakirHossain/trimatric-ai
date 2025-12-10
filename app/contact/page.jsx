import HeaderBreadcrumb from "@/Components/HeaderBreadcrumb";
import Clients from "@/components/Clients";
import { FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt,FaClock } from "react-icons/fa";
const Contact = () => {
    return <>
        <HeaderBreadcrumb pageTitle="Contact" />

        <section className="contact-info section-space-top">
            <div className="container">
            <div className="row">
                <div
                className="col-xl-3 col-md-6 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="00ms"
                >
                <div className="contact-info__card">
                    <div className="contact-info__icon-box">
                    <span className="contact-info__icon">
                        <FaMapMarkerAlt  size={24} color="#35a6ed" title="Phone" />
                    </span>
                    </div>
                    <h3 className="contact-info__title">Our Address</h3>
                    <p className="contact-info__text">
                        125 Ramna Century Avenue, Boro Moghbazar, Dhaka-1217 Bangladesh
                    </p>
                </div>
                </div>
                <div
                className="col-xl-3 col-md-6 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="100ms"
                >
                <div className="contact-info__card">
                    <div className="contact-info__icon-box">
                    <span className="contact-info__icon">
                        <FaEnvelope  size={24} color="#35a6ed" title="Phone" />
                    </span>
                    </div>
                    <h3 className="contact-info__title">info@trimatric.ai</h3>
                    <p className="contact-info__text">
                        Email us anytime for any kind <br /> of Query.
                    </p>
                </div>
                </div>
                <div
                className="col-xl-3 col-md-6 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="200ms"
                >
                <div className="contact-info__card">
                    <div className="contact-info__icon-box">
                    <span className="contact-info__icon">
                        <FaPhone  size={24} color="#35a6ed" title="Phone" />
                    </span>
                    </div>
                    <h3 className="contact-info__title">+880 1886-636200</h3>
                    <p className="contact-info__text">
                        24/7/365 priority Call and <br /> support.
                    </p>
                </div>
                </div>
                <div
                className="col-xl-3 col-md-6 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="300ms"
                >
                <div className="contact-info__card">
                    <div className="contact-info__icon-box">
                    <span className="contact-info__icon">
                        <FaClock  size={24} color="#35a6ed" title="Phone" />
                    </span>
                    </div>
                    <h3 className="contact-info__title">Opening Hour</h3>
                    <p className="contact-info__text">
                    <span>Saturday-Friday: 10AM – 6PM</span> <br />
                    <span>Close On Government Holiday</span>
                    </p>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section className="contact-one  section-space-bottom">
            <div className="container">
            <div
                className="contact-one__content wow fadeInUp"
                data-wow-duration="1500ms"
            >
                <h2 className="sec-title sec-title--center">
                Feel Free to Write us Anytime
                </h2>
                <form
                className="contact-one__form contact-form-validated form-one"
                action="inc/sendemail.php"
                >
                <div className="form-one__group">
                    <div className="form-one__control">
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Your Name"
                    />
                    </div>
                    <div className="form-one__control">
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                    />
                    </div>
                    <div className="form-one__control">
                    <input id="phone" type="tel" name="phone" placeholder="Phone" />
                    </div>
                    <div className="form-one__control">
                    <input
                        id="subject"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                    />
                    </div>
                    <div className="form-one__control form-one__control--full">
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Write a Message"
                        defaultValue={""}
                    />
                    </div>
                    <div className="form-one__control form-one__control--full text-center">
                    <button type="submit" className="aigence-btn aigence-btn--black">
                        <span className="aigence-btn__text">Send a Message</span>
                        <span className="aigence-btn__icon">
                        <FaArrowRight size={30} color="#FFFFFF" />
                        </span>
                    </button>
                    </div>
                </div>
                </form>
            </div>
            </div>
        </section>
        <div className="container mt-5 section-space-bottom">
            <div className="client-carousel__content">
                <h4 className="client-carousel__title">3500 happy customers</h4>
            </div>
            <Clients />
        </div>

         
    </>
};
export default Contact;