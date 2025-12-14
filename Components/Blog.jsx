import { FaArrowRight } from "react-icons/fa";
const Blog = () => {
    return <>
  <section className="blog-one section-space-bottom">
    <div className="container">
      <h2 className="sec-title sec-title--center bw-split-in-left">
        Recent Updates &amp; <br /> Insights from our Blog
      </h2>
      <div className="row gutter-y-30">
        <div className="col-lg-4 col-md-6">
          <div
            className="blog-card wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="00ms"
          >
            <div className="blog-card__image">
              <img
                src="/images/logo.png"
                alt="10 Easy Strategies to Harness the Power of AI"
              />
              <a
                href="blog-details-right.html"
                className="blog-card__image__link"
              >
                <span className="sr-only">
                  10 Easy Strategies to Harness the Power of AI
                </span>
              </a>
            </div>
            <div className="blog-card__content">
              <div className="blog-card__meta list-unstyle">
                <div className="blog-card__admin">
                  <img
                    src="/images/logo.png"
                    alt="Michale Smith"
                    className="blog-card__admin__image"
                  />
                  <h4 className="blog-card__admin__name">Michale Smith</h4>
                </div>
                <div className="blog-card__date">
                  <span className="blog-card__date__day">05</span>
                  <span className="blog-card__date__month">Jan</span>
                </div>
              </div>
              <h3 className="blog-card__title">
                <a href="blog-details-right.html">
                  10 Easy Strategies to Harness the Power of AI
                </a>
              </h3>
              <p className="blog-card__text">
                We have built an enviable reputation in the consumer goods
                business
              </p>
              <a href="blog-details-right.html" className="blog-card__btn">
                <span className="blog-card__btn__icon">
                  <FaArrowRight size={30} color="#35a6ed" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div
            className="blog-card wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="00ms"
          >
            <div className="blog-card__image">
              <img
                src="/images/logo.png"
                alt="10 Easy Strategies to Harness the Power of AI"
              />
              <a
                href="blog-details-right.html"
                className="blog-card__image__link"
              >
                <span className="sr-only">
                  10 Easy Strategies to Harness the Power of AI
                </span>
              </a>
            </div>
            <div className="blog-card__content">
              <div className="blog-card__meta list-unstyle">
                <div className="blog-card__admin">
                  <img
                    src="/images/logo.png"
                    alt="Michale Smith"
                    className="blog-card__admin__image"
                  />
                  <h4 className="blog-card__admin__name">Michale Smith</h4>
                </div>
                <div className="blog-card__date">
                  <span className="blog-card__date__day">05</span>
                  <span className="blog-card__date__month">Jan</span>
                </div>
              </div>
              <h3 className="blog-card__title">
                <a href="blog-details-right.html">
                  10 Easy Strategies to Harness the Power of AI
                </a>
              </h3>
              <p className="blog-card__text">
                We have built an enviable reputation in the consumer goods
                business
              </p>
              <a href="blog-details-right.html" className="blog-card__btn">
                <span className="blog-card__btn__icon">
                  <FaArrowRight size={30} color="#35a6ed" />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div
            className="blog-card wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="00ms"
          >
            <div className="blog-card__image">
              <img
                src="/images/logo.png"
                alt="10 Easy Strategies to Harness the Power of AI"
              />
              <a
                href="blog-details-right.html"
                className="blog-card__image__link"
              >
                <span className="sr-only">
                  10 Easy Strategies to Harness the Power of AI
                </span>
              </a>
            </div>
            <div className="blog-card__content">
              <div className="blog-card__meta list-unstyle">
                <div className="blog-card__admin">
                  <img
                    src="/images/logo.png"
                    alt="Michale Smith"
                    className="blog-card__admin__image"
                  />
                  <h4 className="blog-card__admin__name">Michale Smith</h4>
                </div>
                <div className="blog-card__date">
                  <span className="blog-card__date__day">05</span>
                  <span className="blog-card__date__month">Jan</span>
                </div>
              </div>
              <h3 className="blog-card__title">
                <a href="blog-details-right.html">
                  10 Easy Strategies to Harness the Power of AI
                </a>
              </h3>
              <p className="blog-card__text">
                We have built an enviable reputation in the consumer goods
                business
              </p>
              <a href="blog-details-right.html" className="blog-card__btn">
                <span className="blog-card__btn__icon">
                  <FaArrowRight size={30} color="#35a6ed" />
                </span>
              </a>
            </div>
          </div>
        </div>                 
      </div>
    </div>
  </section>
</>

} 
export default Blog;