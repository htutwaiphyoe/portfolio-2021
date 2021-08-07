import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import ScrollRevealHOC from "../../hoc/ScrollReveal/ScrollReveal";
import classes from "./Portfolio.module.scss";

function Portfolio(props) {
    return (
        <section className={`section ${classes.portfolio}`}>
            <h2 className={`section__title`}>Portfolio</h2>
            <span className={`section__subtitle`}>Developer life</span>

            <div className={`container ${classes.portfolio__container}`}>
                <ScrollRevealHOC target="portfolio-status-item" origin="top">
                    <div className={`${classes.portfolio__status}`}>
                        <div
                            className={`${classes.portfolio__status__item}`}
                            id="portfolio-status-item"
                        >
                            <i className={`ri-time-line ${classes.portfolio__status__icon}`}></i>
                            <span className={`${classes.portfolio__status__number}`}>
                                <CountUp end={1} redraw={true} duration={0.5} delay={0}>
                                    {({ countUpRef, start }) => (
                                        <>
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        </>
                                    )}
                                </CountUp>
                                <span className={`${classes.portfolio__status__plus}`}>+</span>
                            </span>
                            <span className={`${classes.portfolio__status__title}`}>
                                Coding years
                            </span>
                        </div>

                        <div
                            className={`${classes.portfolio__status__item}`}
                            id="portfolio-status-item"
                        >
                            <i
                                className={`ri-code-s-slash-fill ${classes.portfolio__status__icon}`}
                            ></i>

                            <span className={`${classes.portfolio__status__number}`}>
                                <CountUp end={10} redraw={true} duration={0.5} delay={0}>
                                    {({ countUpRef, start }) => (
                                        <>
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        </>
                                    )}
                                </CountUp>
                                <span className={`${classes.portfolio__status__plus}`}>+</span>
                            </span>
                            <span className={`${classes.portfolio__status__title}`}>
                                Projects done
                            </span>
                        </div>
                        <div
                            className={`${classes.portfolio__status__item}`}
                            id="portfolio-status-item"
                        >
                            <i
                                className={`ri-quill-pen-line ${classes.portfolio__status__icon}`}
                            ></i>
                            <span className={`${classes.portfolio__status__number}`}>
                                <CountUp end={6} redraw={true} duration={0.5} delay={0}>
                                    {({ countUpRef, start }) => (
                                        <>
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        </>
                                    )}
                                </CountUp>
                                <span className={`${classes.portfolio__status__plus}`}>+</span>
                            </span>
                            <span className={`${classes.portfolio__status__title}`}>
                                Sharing contents
                            </span>
                        </div>
                    </div>
                </ScrollRevealHOC>
            </div>
        </section>
    );
}

export default Portfolio;
