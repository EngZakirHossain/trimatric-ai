import HeaderBreadcrumb from "@/Components/HeaderBreadcrumb";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Teams = () => {
    return <>
        <HeaderBreadcrumb pageTitle="Our Teams" />
        <section className="team-page section-space">
            <div className="container">
                <div className="row gutter-y-30">
                <div className="col-lg-4 col-md-6">
                    <div
                    className="team-card wow fadeInUp"
                    data-wow-duration="1500ms"
                    data-wow-delay="00ms"
                    >
                    <div className="team-card__shape" />
                    <div className="team-card__image">
                        <img src="/images/team/Mirshad.webp" alt="Annette Black" />
                    </div>
                    <div className="team-card__social">
                        <span className="team-card__social__icon" />
                        <div className="team-card__social__links social-links">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={24} color="#1877F2" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={24} color="#1DA1F2" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={24} color="#E4405F" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={24} color="#0077B5" />
                            </a>
                        </div>
                    </div>
                    <div className="team-card__info">
                        <h3 className="team-card__name">
                        <a href="team-details.html">Syed Mosharraf Ali Mirshad</a>
                        </h3>
                        <p className="team-card__designation">CEO</p>
                    </div>
                    </div>
                </div>
                </div>                
            </div>
        </section>
    </>
};
export default Teams;