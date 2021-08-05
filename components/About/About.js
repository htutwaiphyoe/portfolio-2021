import { useEffect } from "react";

import classes from "./About.module.scss";

function About(props) {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "60px",
            duration: 2800,
            reset: true,
        });
        sr.reveal(`#about-image`, {
            origin: "left",
            interval: 100,
        });
        sr.reveal(`#about-text`, {
            origin: "right",
            interval: 100,
        });
        sr.reveal(`#about-download`, {
            origin: "bottom",
            interval: 100,
        });
    });
    return (
        <section className={`${classes.about} section`} id="about">
            <h1 className={`section__title`}>About me</h1>
            <span className={`section__subtitle`}>Introduction</span>

            <div className={`container`}>
                <div className={`${classes.about__info}`}>
                    <img
                        src="images/logo/home3.svg"
                        alt=""
                        className={`${classes.about__image} load-hidden`}
                        id="about-image"
                    />
                    <div>
                        <p id="about-text" className={`${classes.about__text} load-hidden`}>
                            I'm currently a 21 years old university student studying at Mandalay
                            Technological University specialized in Computer Engineering &
                            Information Technology. I started coding during second year and
                            apparently I'm pursuing Web Development.
                        </p>

                        <a
                            href="pdf/hwp.pdf"
                            download={true}
                            className={`${classes.about__btn} load-hidden`}
                            id="about-download"
                        >
                            Download CV
                            <i className={`ri-download-2-line ${classes.about__btn__icon}`}></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;
