const Project = () => {
    return <>
  <section className="projects-one section-space-2">
    <div className="container">
      <h2 className="sec-title sec-title--center bw-split-in-left">
        Checkout Our Most <br /> Recent Work
      </h2>
      {/* /.sec-title */}
      <div
        className="projects-one__carousel aigence-owl__carousel aigence-owl__carousel--basic-nav owl-carousel owl-theme"
        data-owl-options='{
				"items": 1,
				"margin": 30,
				"autoplay": true,
				"loop": true,
				"smartSpeed": 700,
				"nav": false,
				"dots": true,
          "navText": ["<i class=\"icon-left-arrow\"></i>","<i class=\"icon-right-arrow\"></i>"],
          "responsive": {
              "0": {
                  "items": 1,
                  "nav": true,
                  "dots": false,
                  "margin": 10
              },
              "768": {
                  "items": 2,
                  "margin": 30
              },
              "992": {
                  "items": 3,
                  "margin": 30
              },
              "1400": {
                  "items": 4,
                  "dots": false,
                  "margin": 30
              }
			    }
			}'
      >
        <div className="item">
          <div className="project-card">
            <div className="project-card__image">
              <img
                src="/images/hero/hero (1).jpg"
                alt="Cyber Flame"
              />
            </div>
            {/* /.project-card__image */}
            <div className="project-card__content">
              <div className="project-card__inner">
                <a href="project-details.html" className="project-card__btn">
                  <span className="project-card__btn__icon">
                    <i className="icon-right-arrow" />
                  </span>
                </a>
                {/* /.project-card__btn */}
                <h3 className="project-card__title">
                  <a href="project-details.html">Cyber Flame</a>
                </h3>
                <p className="project-card__tagline">AI Portrait</p>
              </div>
              {/* /.project-card__inner */}
            </div>
            {/* /.project-card__content */}
          </div>
          {/* /.project-card */}
        </div>
        {/* /.item */}
        <div className="item">
          <div className="project-card">
            <div className="project-card__image">
              <img
                src="/images/hero/hero (4).jpg"
                alt="Robotic AI Body"
              />
            </div>
            {/* /.project-card__image */}
            <div className="project-card__content">
              <div className="project-card__inner">
                <a href="project-details.html" className="project-card__btn">
                  <span className="project-card__btn__icon">
                    <i className="icon-right-arrow" />
                  </span>
                </a>
                {/* /.project-card__btn */}
                <h3 className="project-card__title">
                  <a href="project-details.html">Robotic AI Body</a>
                </h3>
                <p className="project-card__tagline">Ai Design</p>
              </div>
              {/* /.project-card__inner */}
            </div>
            {/* /.project-card__content */}
          </div>
          {/* /.project-card */}
        </div>
        {/* /.item */}
        <div className="item">
          <div className="project-card">
            <div className="project-card__image">
              <img
                src="/images/hero/hero (2).jpg"
                alt="Virtual Dream"
              />
            </div>
            {/* /.project-card__image */}
            <div className="project-card__content">
              <div className="project-card__inner">
                <a href="project-details.html" className="project-card__btn">
                  <span className="project-card__btn__icon">
                    <i className="icon-right-arrow" />
                  </span>
                </a>
                {/* /.project-card__btn */}
                <h3 className="project-card__title">
                  <a href="project-details.html">Virtual Dream</a>
                </h3>
                <p className="project-card__tagline">VR Tech</p>
              </div>
              {/* /.project-card__inner */}
            </div>
            {/* /.project-card__content */}
          </div>
          {/* /.project-card */}
        </div>
        {/* /.item */}
        <div className="item">
          <div className="project-card">
            <div className="project-card__image">
              <img
                src="/images/hero/hero (8).jpg"
                alt="Future Vision"
              />
            </div>
            {/* /.project-card__image */}
            <div className="project-card__content">
              <div className="project-card__inner">
                <a href="project-details.html" className="project-card__btn">
                  <span className="project-card__btn__icon">
                    <i className="icon-right-arrow" />
                  </span>
                </a>
                {/* /.project-card__btn */}
                <h3 className="project-card__title">
                  <a href="project-details.html">Future Vision</a>
                </h3>
                <p className="project-card__tagline">Virtual Reality</p>
              </div>
              {/* /.project-card__inner */}
            </div>
            {/* /.project-card__content */}
          </div>
          {/* /.project-card */}
        </div>
        {/* /.item */}
        <div className="item">
          <div className="project-card">
            <div className="project-card__image">
              <img
                src="/images/hero/hero (4).jpg"
                alt="Neural Core"
              />
            </div>
            {/* /.project-card__image */}
            <div className="project-card__content">
              <div className="project-card__inner">
                <a href="project-details.html" className="project-card__btn">
                  <span className="project-card__btn__icon">
                    <i className="icon-right-arrow" />
                  </span>
                </a>
                {/* /.project-card__btn */}
                <h3 className="project-card__title">
                  <a href="project-details.html">Neural Core</a>
                </h3>
                <p className="project-card__tagline">Cyborg Tech</p>
              </div>
              {/* /.project-card__inner */}
            </div>
            {/* /.project-card__content */}
          </div>
          {/* /.project-card */}
        </div>
        {/* /.item */}
        <div className="item">
          <div className="project-card">
            <div className="project-card__image">
              <img
                src="/images/hero/hero (5).jpg"
                alt="Digital Human"
              />
            </div>
            {/* /.project-card__image */}
            <div className="project-card__content">
              <div className="project-card__inner">
                <a href="project-details.html" className="project-card__btn">
                  <span className="project-card__btn__icon">
                    <i className="icon-right-arrow" />
                  </span>
                </a>
                {/* /.project-card__btn */}
                <h3 className="project-card__title">
                  <a href="project-details.html">Digital Human</a>
                </h3>
                <p className="project-card__tagline">AI Research</p>
              </div>
              {/* /.project-card__inner */}
            </div>
            {/* /.project-card__content */}
          </div>
          {/* /.project-card */}
        </div>
        {/* /.item */}
      </div>
      {/* /.projects-one__carousel */}
    </div>
    {/* /.container */}
  </section>
  {/* /.projects-one */}
</>

}

export default Project;