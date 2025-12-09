const HeroSection = () => {
    return <>
        <section className="hero-two">
            <div className="hero-two__bg">
                <div
                className="hero-two__bg__inner"
                style={{
                    backgroundImage: "url(/images/hero-cover.jpg)"
                }}
                />
            </div>
            <div className="container">
                <div className="hero-two__content">
                <h2 className="hero-two__title wow fadeInUp" data-wow-duration="1500ms">
                    Unleash the Power of AI
                </h2>
                <p className="hero-two__title-2 wow fadeInUp" data-wow-duration="1500ms">
                    Transforming Businesses with Intelligent Solutions
                </p>
                <div className="hero-two__button wow fadeInUp" data-wow-duration="1500ms">
                    <a href="about.html" className="aigence-btn">
                        <span className="aigence-btn__text">Get In Touch</span>                    
                    </a>
                </div>
                </div>
            </div>
            <div className="hero-two__container container">
                <div
                className="hero-two__carousel aigence-swiper__carousel"
                data-swiper-options='{
                    "effect": "coverflow",
                    "grabCursor": true,
                    "spaceBetween": 0,
                    "centeredSlides": true,
                    "spaceBetween": 10,
                    "loop": true,
                    "speed": 1000,
                    "autoplay": {
                        "delay": 3000
                    },
                    "coverflowEffect": {
                        "rotate": 40,
                        "stretch": 0,
                        "depth": 100,
                        "modifier": 1,
                        "slideShadows": false
                    },
                    "breakpoints": {
                        "0": {
                            "slidesPerView": 1
                        },
                        "576": {
                            "slidesPerView": 2
                        },
                        "992": {
                            "slidesPerView": 3
                        },
                        "1200": {
                            "slidesPerView": 4
                        }
                    }
                }'
                >
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                    <div className="hero-two__carousel__image">
                        <img src="/images/hero/hero (1).jpg" alt="hero slide" />
                    </div>
                    </div>
                    <div className="swiper-slide">
                    <div className="hero-two__carousel__image">
                        <img src="/images/hero/hero (2).jpg" alt="hero slide" />
                    </div>
                    </div>
                    <div className="swiper-slide">
                    <div className="hero-two__carousel__image">
                        <img src="/images/hero/hero (3).jpg" alt="hero slide" />
                    </div>
                    </div>
                    <div className="swiper-slide">
                    <div className="hero-two__carousel__image">
                        <img src="/images/hero/hero (4).jpg" alt="hero slide" />
                    </div>
                    </div>
                    <div className="swiper-slide">
                    <div className="hero-two__carousel__image">
                        <img src="/images/hero/hero (5).jpg" alt="hero slide" />
                    </div>
                    </div>   
                    <div className="swiper-slide">
                    <div className="hero-two__carousel__image">
                        <img src="/images/hero/hero (6).jpg" alt="hero slide" />
                    </div>
                    </div>
                    <div className="swiper-slide">
                    <div className="hero-two__carousel__image">
                        <img src="/images/hero/hero (7).jpg" alt="hero slide" />
                    </div>
                    </div>
                    <div className="swiper-slide">
                    <div className="hero-two__carousel__image">
                        <img src="/images/hero/hero (8).jpg" alt="hero slide" />
                    </div>
                    </div>
                    <div className="swiper-slide">
                    <div className="hero-two__carousel__image">
                        <img src="/images/hero/hero (9).jpg" alt="hero slide" />
                    </div>
                    </div>  
                    <div className="swiper-slide">
                    <div className="hero-two__carousel__image">
                        <img src="/images/hero/hero (10).jpg" alt="hero slide" />
                    </div>
                    </div>                 
                </div>
                </div>
            </div>
            <div className="container">
                <div className="client-carousel client-carousel--home2 client-carousel--two">
                <div className="client-carousel__content">
                    <h4 className="client-carousel__title">100+ happy customers</h4>
                </div>
                <div
                    className="client-carousel__carousel aigence-owl__carousel owl-theme owl-carousel"
                    data-owl-options='{
                    "items": 5,
                    "margin": 65,
                    "smartSpeed": 700,
                    "loop": true,
                    "autoplay": 6000,
                    "nav": false,
                    "dots": false,
                    "navText": ["<i class=\"icon-left-arrow\"></i>","<i class=\"icon-right-arrow\"></i>"],
                    "responsive":{
                        "0":{
                            "items": 2,
                            "margin": 40
                        },
                        "500":{
                            "items": 3,
                            "margin": 40
                        },
                        "768":{
                            "items": 3,
                            "margin": 80
                        },
                        "992":{
                            "items": 4,
                            "margin": 60
                        },
                        "1200":{
                            "items": 5,
                            "margin": 109
                        }
                    }
                    }'
                >
                    <div className="client-carousel__item">
                    <img
                        src="/images/clients/client-1.webp"
                        alt="aigence"
                        className="client-carousel__image"
                    />
                    <img
                        src="/images/clients/client-1.webp"
                        alt="aigence"
                        className="client-carousel__hover-image"
                    />
                    </div>
                    <div className="client-carousel__item">
                    <img
                        src="/images/clients/client-2.webp"
                        alt="aigence"
                        className="client-carousel__image"
                    />
                    <img
                        src="/images/clients/client-2.webp"
                        alt="aigence"
                        className="client-carousel__hover-image"
                    />
                    </div>
                    <div className="client-carousel__item">
                    <img
                        src="/images/clients/client-3.webp"
                        alt="aigence"
                        className="client-carousel__image"
                    />
                    <img
                        src="/images/clients/client-3.webp"
                        alt="aigence"
                        className="client-carousel__hover-image"
                    />
                    </div>
                    <div className="client-carousel__item">
                    <img
                        src="/images/clients/client-4.webp"
                        alt="aigence"
                        className="client-carousel__image"
                    />
                    <img
                        src="/images/clients/client-4.webp"
                        alt="aigence"
                        className="client-carousel__hover-image"
                    />
                    </div>
                    <div className="client-carousel__item">
                    <img
                        src="/images/clients/client-5.webp"
                        alt="aigence"
                        className="client-carousel__image"
                    />
                    <img
                        src="/images/clients/client-5.webp"
                        alt="aigence"
                        className="client-carousel__hover-image"
                    />
                    </div>
                </div>
                </div>
            </div>
        </section>
    </>
}
export default HeroSection;