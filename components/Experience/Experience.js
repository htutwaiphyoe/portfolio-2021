import { useEffect } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import classes from "./Experience.module.scss";

function Experience(props) {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "60px",
            duration: 2800,
            // reset: true,
        });
        sr.reveal(`#experience-status-item`, {
            origin: "top",
            interval: 100,
        });
    });
    return (
        <section className={`section ${classes.experience}`}>
            <h2 className={`section__title`}>Experience</h2>
            <span className={`section__subtitle`}>Developer life</span>

            <div className={`container ${classes.experience__container}`}>
                <div className={`${classes.experience__status}`}>
                    <div
                        className={`${classes.experience__status__item} load-hidden`}
                        id="experience-status-item"
                    >
                        <i className={`ri-time-line ${classes.experience__status__icon}`}></i>
                        <span className={`${classes.experience__status__number}`}>
                            <CountUp end={1} redraw={true} duration={0.5} delay={0}>
                                {({ countUpRef, start }) => (
                                    <>
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    </>
                                )}
                            </CountUp>
                            <span className={`${classes.experience__status__plus}`}>+</span>
                        </span>
                        <span className={`${classes.experience__status__title}`}>Coding years</span>
                    </div>
                    <div
                        className={`${classes.experience__status__item} load-hidden`}
                        id="experience-status-item"
                    >
                        <i
                            className={`ri-code-s-slash-fill ${classes.experience__status__icon}`}
                        ></i>

                        <span className={`${classes.experience__status__number}`}>
                            <CountUp end={10} redraw={true} duration={0.5} delay={0}>
                                {({ countUpRef, start }) => (
                                    <>
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    </>
                                )}
                            </CountUp>
                            <span className={`${classes.experience__status__plus}`}>+</span>
                        </span>
                        <span className={`${classes.experience__status__title}`}>
                            Projects done
                        </span>
                    </div>
                    <div
                        className={`${classes.experience__status__item} load-hidden`}
                        id="experience-status-item"
                    >
                        <i className={`ri-quill-pen-line ${classes.experience__status__icon}`}></i>
                        <span className={`${classes.experience__status__number}`}>
                            <CountUp end={6} redraw={true} duration={0.5} delay={0}>
                                {({ countUpRef, start }) => (
                                    <>
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    </>
                                )}
                            </CountUp>
                            <span className={`${classes.experience__status__plus}`}>+</span>
                        </span>
                        <span className={`${classes.experience__status__title}`}>
                            Sharing contents
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
