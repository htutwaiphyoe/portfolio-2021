import Link from "next/Link";
import Typed from "react-typed";
import { useEffect } from "react";

import classes from "./Home.module.scss";
function Home(props) {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "60px",
            duration: 2800,
            reset: true,
        });
        sr.reveal(`#home-social, #home-data`, {
            origin: "left",
            interval: 100,
        });
        sr.reveal(`#home-image`, {
            origin: "right",
            interval: 100,
        });
        sr.reveal(`#home-scroll`, {
            origin: "bottom",
            interval: 100,
        });
    }, []);
    return (
        <section className={`${classes.home} section`}>
            <div className={`container ${classes.home__container}`}>
                <div className={classes.home__content}>
                    <div className={`${classes.home__social} load-hidden`} id="home-social">
                        <a
                            href="www.facebook.com/hwp.dev"
                            className={classes.home__social__link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i
                                className={`ri-facebook-circle-fill ${classes.home__social__icon}`}
                            ></i>
                        </a>
                        <a
                            href="www.facebook.com/hwp.dev"
                            className={classes.home__social__link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className={`ri-instagram-fill ${classes.home__social__icon}`}></i>
                        </a>
                        <a
                            href="www.facebook.com/hwp.dev"
                            className={classes.home__social__link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className={`ri-twitter-fill ${classes.home__social__icon}`}></i>
                        </a>
                        <a
                            href="www.facebook.com/hwp.dev"
                            className={classes.home__social__link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className={`ri-github-fill ${classes.home__social__icon}`}></i>
                        </a>
                    </div>

                    <figure className={`${classes.home__image} load-hidden`} id="home-image">
                        <img src="images/logo/home4.svg" alt="Home" />
                    </figure>
                    <div className={`${classes.home__data} load-hidden`} id="home-data">
                        <h1 className={classes.home__title}>Hi, I'm HWP.</h1>
                        <h2 className={classes.home__subtitle}>
                            <Typed
                                loop
                                typeSpeed={60}
                                backSpeed={40}
                                strings={["Web developer", "FullStack Developer", "Content Writer"]}
                                backDelay={1000}
                                loopCount={0}
                                showCursor
                                cursorChar="|"
                            />
                        </h2>
                        <p className={classes.home__description}>
                            I write aritcles about web development especially for JavaScript and
                            MERN Stack.
                        </p>
                        <Link href="/blogs">
                            <a className={classes.home__btn}>
                                Read blogs
                                <i className={`ri-arrow-right-line ${classes.home__btn__icon}`}></i>
                            </a>
                        </Link>
                    </div>
                </div>

                <div className={`${classes.home__scroll} load-hidden`} id="home-scroll">
                    <Link href="#about">
                        <a className={classes.home__scroll__btn}>
                            <i className={`ri-mouse-line ${classes.home__scroll__mouse}`}></i>
                            <span className={classes.home__scroll__text}>Scroll down</span>

                            <i className={`ri-arrow-down-fill ${classes.home__scroll__arrow}`}></i>
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Home;
