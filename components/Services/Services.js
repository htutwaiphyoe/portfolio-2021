import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import "./styles.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

import classes from "./Services.module.scss";

function Services(props) {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "60px",
            duration: 2800,
            // reset: true,
        });
        sr.reveal(`#services-container`, {
            origin: "left",
            interval: 100,
        });
    });
    return (
        <section className={`section`}>
            <h2 className={`section__title`}>Services</h2>
            <span className={`section__subtitle`}>What I offer</span>

            <div className={`container ${classes.services__container}`} id="services-container">
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    loop={true}
                    grabCursor={true}
                    spaceBetween={48}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className={`container ${classes.services__item}`}>
                            <img
                                src="images/service2.png"
                                alt="Landing page"
                                className={`${classes.services__image}`}
                            />

                            <div className={`${classes.services__data}`}>
                                <h3 className={`${classes.services__title}`}>Landing page</h3>
                                <p className={`${classes.services__description}`}>
                                    Website for your company brand with beautiful UI design and
                                    animated interactions and adapatable to all devices
                                </p>

                                <a href="#contact" className={`${classes.services__btn}`}>
                                    Hire me
                                    <i
                                        className={`ri-briefcase-line ${classes.services__btn__icon}`}
                                    ></i>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`container ${classes.services__item}`}>
                            <img
                                src="images/service5.webp"
                                alt="Landing page"
                                className={`${classes.services__image}`}
                            />

                            <div className={`${classes.services__data}`}>
                                <h3 className={`${classes.services__title}`}>
                                    Frontend development
                                </h3>
                                <p className={`${classes.services__description}`}>
                                    Building interactive user interfaces using a popular JavaScript
                                    library, ReactJS
                                </p>

                                <a href="#contact" className={`${classes.services__btn}`}>
                                    Hire me
                                    <i
                                        className={`ri-briefcase-line ${classes.services__btn__icon}`}
                                    ></i>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={`container ${classes.services__item}`}>
                            <img
                                src="images/service6.webp"
                                alt="Landing page"
                                className={`${classes.services__image}`}
                            />

                            <div className={`${classes.services__data}`}>
                                <h3 className={`${classes.services__title}`}>
                                    Backend development
                                </h3>
                                <p className={`${classes.services__description}`}>
                                    Dynamic web application with user data using NodeJS, ExpressJS
                                    and MongoDB database
                                </p>

                                <a href="#contact" className={`${classes.services__btn}`}>
                                    Hire me
                                    <i
                                        className={`ri-briefcase-line ${classes.services__btn__icon}`}
                                    ></i>
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}

export default Services;
