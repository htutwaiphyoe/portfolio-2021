import { useEffect } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

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
        sr.reveal(`#about-status-item`, {
            origin: "top",
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
                        className={`${classes.about__image}`}
                        id="about-image"
                    />

                    <p id="about-text">
                        I'm currently a 21 years old university student studying at Mandalay
                        Technological University specialized in Computer Engineering & Information
                        Technology. I started coding during second year and apparently I'm pursuing
                        Web Development.
                    </p>
                </div>

                <div className={`${classes.about__status}`}>
                    <div className={`${classes.about__status__item}`} id="about-status-item">
                        <span className={`${classes.about__status__number}`}>
                            <CountUp end={2} redraw={true} duration={1} delay={1.5}>
                                {({ countUpRef, start }) => (
                                    <>
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    </>
                                )}
                            </CountUp>
                            <span className={`${classes.about__status__plus}`}>+</span>
                        </span>
                        <span className={`${classes.about__status__title}`}>Coding years</span>
                    </div>
                    <div className={`${classes.about__status__item}`} id="about-status-item">
                        <span className={`${classes.about__status__number}`}>
                            <CountUp end={10} redraw={true} duration={1} delay={1.5}>
                                {({ countUpRef, start }) => (
                                    <>
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    </>
                                )}
                            </CountUp>
                            <span className={`${classes.about__status__plus}`}>+</span>
                        </span>
                        <span className={`${classes.about__status__title}`}>Projects done</span>
                    </div>
                    <div className={`${classes.about__status__item}`} id="about-status-item">
                        <span className={`${classes.about__status__number}`}>
                            <CountUp end={5} redraw={true} duration={1} delay={1.5}>
                                {({ countUpRef, start }) => (
                                    <>
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    </>
                                )}
                            </CountUp>
                            <span className={`${classes.about__status__plus}`}>+</span>
                        </span>
                        <span className={`${classes.about__status__title}`}>Years experience</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;
