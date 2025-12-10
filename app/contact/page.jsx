import HeaderBreadcrumb from "@/Components/HeaderBreadcrumb";
import Clients from "@/components/Clients";
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
                        <i className="icon-location-2" />
                    </span>
                    </div>
                    <h3 className="contact-info__title">Our Address</h3>
                    <p className="contact-info__text">
                    4517 Washington Ave. Manchester, <br /> Kentucky 39495
                    </p>
                </div>
                {/* /.contact-info__card */}
                </div>
                {/* /.col-xl-3 col-md-6 */}
                <div
                className="col-xl-3 col-md-6 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="100ms"
                >
                <div className="contact-info__card">
                    <div className="contact-info__icon-box">
                    <span className="contact-info__icon">
                        <i className="icon-email-2" />
                    </span>
                    </div>
                    <h3 className="contact-info__title">info@exmple.com</h3>
                    <p className="contact-info__text">
                    Email us anytime for any kind <br /> ofquety.
                    </p>
                </div>
                {/* /.contact-info__card */}
                </div>
                {/* /.col-xl-3 col-md-6 */}
                <div
                className="col-xl-3 col-md-6 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="200ms"
                >
                <div className="contact-info__card">
                    <div className="contact-info__icon-box">
                    <span className="contact-info__icon">
                        <i className="icon-phone-3" />
                    </span>
                    </div>
                    <h3 className="contact-info__title">Hot: +208-666-01112</h3>
                    <p className="contact-info__text">
                    24/7/365 priority Live Chat and <br /> ticketing support.
                    </p>
                </div>
                {/* /.contact-info__card */}
                </div>
                {/* /.col-xl-3 col-md-6 */}
                <div
                className="col-xl-3 col-md-6 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="300ms"
                >
                <div className="contact-info__card">
                    <div className="contact-info__icon-box">
                    <span className="contact-info__icon">
                        <i className="icon-clock" />
                    </span>
                    </div>
                    <h3 className="contact-info__title">Opening Hour</h3>
                    <p className="contact-info__text">
                    <span>Sunday-Fri: 9AM – 6PM</span> <br />
                    <span>Saturday: 9AM – 4M</span>
                    </p>
                </div>
                {/* /.contact-info__card */}
                </div>
                {/* /.col-xl-3 col-md-6 */}
            </div>
            {/* /.row */}
            </div>
            {/* /.container */}
        </section>
        {/* /.contact-info */}
        <section className="contact-one  section-space-bottom">
            <div
            className="contact-one__bg"
            style={{
                backgroundImage: "url(assets/images/shapes/contact-bg-shape-1-1.png)"
            }}
            />
            <div className="container">
            <div
                className="contact-one__content wow fadeInUp"
                data-wow-duration="1500ms"
            >
                <h2 className="sec-title sec-title--center">
                Feel Free to Write us Anytime
                </h2>
                {/* /.sec-title */}
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
                    {/* /.form-one__control */}
                    <div className="form-one__control">
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                    />
                    </div>
                    {/* /.form-one__control */}
                    <div className="form-one__control">
                    <input id="phone" type="tel" name="phone" placeholder="Phone" />
                    </div>
                    {/* /.form-one__control */}
                    <div className="form-one__control">
                    <input
                        id="subject"
                        type="text"
                        name="subject"
                        placeholder="Subject"
                    />
                    </div>
                    {/* /.form-one__control */}
                    <div className="form-one__control form-one__control--full">
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Write a Message"
                        defaultValue={""}
                    />
                    </div>
                    {/* /.form-one__control */}
                    <div className="form-one__control form-one__control--full text-center">
                    <button type="submit" className="aigence-btn aigence-btn--black">
                        <span className="aigence-btn__text">Send a Message</span>
                        <span className="aigence-btn__icon">
                        <i className="icon-right-arrow" />
                        </span>
                    </button>
                    {/* /.aigence-btn */}
                    </div>
                    {/* /.form-one__control */}
                </div>
                {/* /.form-one__group */}
                </form>
                {/* /.contact-one__form */}
            </div>
            {/* /.contact-one__content */}
            </div>
            {/* /.container */}
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