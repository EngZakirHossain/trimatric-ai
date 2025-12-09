const Testimonial = () => {

    return <>
  <section className="testimonials-two section-space-top-2">
    <div className="container">
      <div className="testimonials-two__top">
        <div className="row gutter-y-40 align-items-end">
          <div className="col-lg-9">
            <h2 className="sec-title">
              What They are <br /> Talking About Agency
            </h2>
            {/* /.sec-title */}
          </div>
          {/* /.col-xl-9 */}
          <div className="col-lg-3">
            <div className="testimonials-two__custome-navs" />
            {/* /.testimonials-two__custome-navs */}
          </div>
          {/* /.col-xl-3 */}
        </div>
        {/* /.row gutter-y-40 */}
      </div>
      {/* /.testimonials-two__top */}
    </div>
    {/* /.container */}
    <div className="testimonials-two__container container">
      <div
        className="testimonials-four__carousel aigence-owl__carousel aigence-owl__carousel--with-shadow aigence-owl__carousel--basic-nav owl-carousel owl-theme"
        data-owl-options='{
			"items": 1,
			"margin": 10,
			"loop": true,
			"smartSpeed": 700,
      "navContainer": ".testimonials-two__custome-navs",
			"nav": false,
			"dots": false,
			"navText": ["<i class=\"icon-left-arrow\"></i>","<i class=\"icon-right-arrow\"></i>"],
			"autoplay": true,
			"responsive": {
				"0": {
					"items": 1,
					"margin": 10
				},
				"992": {
					"items": 2,
					"margin": 30
				},
				"1200": {
					"items": 2.15,
					"margin": 30
				},
				"1400": {
					"items": 2.6,
					"margin": 30
				}
			}
		}'
      >
        <div className="item">
          <div className="testimonial-card-two">
            <div className="testimonial-card-two__shape">
              <div className="testimonial-card-two__shape__1" />
              <div className="testimonial-card-two__shape__2" />
            </div>
            <div className="testimonial-card-two__inner">
              <p className="testimonial-card-two__quote">
                We have big contacts we will promote you i know this is the
                final release but can we add more features? the hair is just too
                polarising can the black be darker I like it, but can the snow
                look a little warmer.
              </p>
              <div className="aigence-ratings">
                <span className="aigence-ratings__icon">
                  <i className="fas fa-star" />
                </span>
                <span className="aigence-ratings__icon">
                  <i className="fas fa-star" />
                </span>
                <span className="aigence-ratings__icon">
                  <i className="fas fa-star" />
                </span>
                <span className="aigence-ratings__icon">
                  <i className="fas fa-star" />
                </span>
                <span className="aigence-ratings__icon">
                  <i className="fas fa-star" />
                </span>
              </div>
              <img
                src="/images/team/Mirshad.webp"
                alt="Robert Smith"
                className="testimonial-card-two__image"
              />
              <div className="testimonial-card-two__identity">
                <h4 className="testimonial-card-two__name">Robert Smith</h4>
                <p className="testimonial-card-two__designation">
                  CEO, Aigence
                </p>
              </div>
            </div>
          </div>
        </div>        
      </div>
    </div>    
  </section>
</>

}

export default Testimonial;