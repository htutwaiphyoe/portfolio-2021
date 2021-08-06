import classes from "./Skills.module.scss";
import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useEffect, useRef } from "react";

function Skills(props) {
    const frontBarRef = useRef();
    const backBarRef = useRef();
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "60px",
            duration: 2800,
            // reset: true,
        });
        sr.reveal(`#skills-circle`, {
            origin: "top",
            interval: 100,
        });
        sr.reveal(`#skills-bar`, {
            origin: "bottom",
            interval: 100,
        });
    });

    function onClickHandler(e) {
        frontBarRef.current.className = `${classes.skills__bar}  ${classes.skills__close}`;
        backBarRef.current.className = `${classes.skills__bar}  ${classes.skills__close}`;

        if (
            e.target.parentNode.parentNode.className ===
            `${classes.skills__bar}  ${classes.skills__close}`
        ) {
            e.target.parentNode.parentNode.className = `${classes.skills__bar}  ${classes.skills__open}`;
        }
    }
    return (
        <section className={`section ${classes.skills}`}>
            <h2 className={`section__title`}>Skills</h2>
            <span className={`section__subtitle`}>Technical level</span>

            <div className={`container ${classes.skills__container}`}>
                <div className={`${classes.skills__circles}`}>
                    <div className={`${classes.skills__circle} load-hidden`} id="skills-circle">
                        <div>
                            <VisibilitySensor partialVisibility={true} offset={{ top: 0 }}>
                                {({ isVisible }) => {
                                    const percentage = isVisible ? 68 : 0;
                                    return (
                                        <CircularProgressbarWithChildren
                                            value={percentage}
                                            styles={buildStyles({
                                                rotation: 0.25,
                                                pathTransition:
                                                    percentage === 0
                                                        ? "none"
                                                        : "stroke-dashoffset 2s ease",
                                                // delay: 2,
                                            })}
                                        >
                                            <CountUp
                                                end={percentage}
                                                redraw={true}
                                                duration={1}
                                                delay={0}
                                            >
                                                {({ countUpRef }) => (
                                                    <div
                                                        className={`${classes.skills__percentage}`}
                                                    >
                                                        <span ref={countUpRef} />
                                                        <span>%</span>
                                                    </div>
                                                )}
                                            </CountUp>
                                        </CircularProgressbarWithChildren>
                                    );
                                }}
                            </VisibilitySensor>
                        </div>
                        <p className={`${classes.skills__title}`}>MongoDB</p>
                    </div>
                    <div className={`${classes.skills__circle} load-hidden`} id="skills-circle">
                        <div>
                            <VisibilitySensor partialVisibility={true} offset={{ top: 0 }}>
                                {({ isVisible }) => {
                                    const percentage = isVisible ? 71 : 0;
                                    return (
                                        <CircularProgressbarWithChildren
                                            value={percentage}
                                            styles={buildStyles({
                                                rotation: 0.25,
                                                pathTransition:
                                                    percentage === 0
                                                        ? "none"
                                                        : "stroke-dashoffset 1s ease",
                                            })}
                                        >
                                            <CountUp
                                                end={percentage}
                                                redraw={true}
                                                duration={1}
                                                delay={0}
                                            >
                                                {({ countUpRef }) => (
                                                    <div
                                                        className={`${classes.skills__percentage}`}
                                                    >
                                                        <span ref={countUpRef} />
                                                        <span>%</span>
                                                    </div>
                                                )}
                                            </CountUp>
                                        </CircularProgressbarWithChildren>
                                    );
                                }}
                            </VisibilitySensor>
                        </div>
                        <p className={`${classes.skills__title}`}>ExpressJS</p>
                    </div>
                    <div className={`${classes.skills__circle} load-hidden`} id="skills-circle">
                        <div>
                            <VisibilitySensor partialVisibility={true} offset={{ top: 0 }}>
                                {({ isVisible }) => {
                                    const percentage = isVisible ? 73 : 0;
                                    return (
                                        <CircularProgressbarWithChildren
                                            value={percentage}
                                            styles={buildStyles({
                                                rotation: 0.25,
                                                pathTransition:
                                                    percentage === 0
                                                        ? "none"
                                                        : "stroke-dashoffset .5s ease",
                                            })}
                                        >
                                            <CountUp
                                                end={percentage}
                                                redraw={true}
                                                duration={0.5}
                                                delay={0}
                                            >
                                                {({ countUpRef }) => (
                                                    <div
                                                        className={`${classes.skills__percentage}`}
                                                    >
                                                        <span ref={countUpRef} />
                                                        <span>%</span>
                                                    </div>
                                                )}
                                            </CountUp>
                                        </CircularProgressbarWithChildren>
                                    );
                                }}
                            </VisibilitySensor>
                        </div>
                        <p className={`${classes.skills__title}`}>ReactJS</p>
                    </div>
                    <div className={`${classes.skills__circle} load-hidden`} id="skills-circle">
                        <div>
                            <VisibilitySensor partialVisibility={true} offset={{ top: 0 }}>
                                {({ isVisible }) => {
                                    const percentage = isVisible ? 70 : 0;
                                    return (
                                        <CircularProgressbarWithChildren
                                            value={percentage}
                                            styles={buildStyles({
                                                rotation: 0.25,
                                                pathTransition:
                                                    percentage === 0
                                                        ? "none"
                                                        : "stroke-dashoffset 2s ease",
                                            })}
                                        >
                                            <CountUp
                                                end={percentage}
                                                redraw={true}
                                                duration={1}
                                                delay={0}
                                            >
                                                {({ countUpRef }) => (
                                                    <div
                                                        className={`${classes.skills__percentage}`}
                                                    >
                                                        <span ref={countUpRef} />
                                                        <span>%</span>
                                                    </div>
                                                )}
                                            </CountUp>
                                        </CircularProgressbarWithChildren>
                                    );
                                }}
                            </VisibilitySensor>
                        </div>
                        <p className={`${classes.skills__title}`}>NodeJS</p>
                    </div>
                </div>

                <div className={`${classes.skills__bars}`}>
                    <div
                        className={`${classes.skills__bar}  ${classes.skills__open}`}
                        ref={frontBarRef}
                        id="skills-bar"
                    >
                        <div className={`${classes.skills__header}`}>
                            <i className={`ri-global-line ${classes.skills__icon}`}></i>

                            <h2 className={`${classes.skills__name}`} onClick={onClickHandler}>
                                Web Development
                            </h2>
                            <i className={`ri-arrow-down-s-line ${classes.skills__arrow}`}></i>
                        </div>
                        <ul className={`${classes.skills__list}`}>
                            <li className={`${classes.skills__item}`}>
                                <div className={`${classes.skills__data}`}>
                                    <h3 className={`${classes.skills__text}`}>HTML</h3>
                                    <span className={`${classes.skills__number}`}>85%</span>
                                </div>
                                <div className={`${classes.skills__amount}`}>
                                    <span
                                        className={`${classes.skills__percent} ${classes.skills__html}`}
                                    ></span>
                                </div>
                            </li>
                            <li className={`${classes.skills__item}`}>
                                <div className={`${classes.skills__data}`}>
                                    <h3 className={`${classes.skills__text}`}>CSS</h3>
                                    <span className={`${classes.skills__number}`}>80%</span>
                                </div>
                                <div className={`${classes.skills__amount}`}>
                                    <span
                                        className={`${classes.skills__percent} ${classes.skills__css}`}
                                    ></span>
                                </div>
                            </li>
                            <li className={`${classes.skills__item}`}>
                                <div className={`${classes.skills__data}`}>
                                    <h3 className={`${classes.skills__text}`}>SASS</h3>
                                    <span className={`${classes.skills__number}`}>73%</span>
                                </div>
                                <div className={`${classes.skills__amount}`}>
                                    <span
                                        className={`${classes.skills__percent} ${classes.skills__sass}`}
                                    ></span>
                                </div>
                            </li>
                            <li className={`${classes.skills__item}`}>
                                <div className={`${classes.skills__data}`}>
                                    <h3 className={`${classes.skills__text}`}>JavaScript</h3>
                                    <span className={`${classes.skills__number}`}>75%</span>
                                </div>
                                <div className={`${classes.skills__amount}`}>
                                    <span
                                        className={`${classes.skills__percent} ${classes.skills__js}`}
                                    ></span>
                                </div>
                            </li>
                            <li className={`${classes.skills__item}`}>
                                <div className={`${classes.skills__data}`}>
                                    <h3 className={`${classes.skills__text}`}>NextJS</h3>
                                    <span className={`${classes.skills__number}`}>70%</span>
                                </div>
                                <div className={`${classes.skills__amount}`}>
                                    <span
                                        className={`${classes.skills__percent} ${classes.skills__next}`}
                                    ></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div
                        className={`${classes.skills__bar} ${classes.skills__close}`}
                        ref={backBarRef}
                        id="skills-bar"
                    >
                        <div className={`${classes.skills__header}`}>
                            <i className={`ri-tools-line ${classes.skills__icon}`}></i>

                            <h2 className={`${classes.skills__name}`} onClick={onClickHandler}>
                                Computer Science
                            </h2>
                            <i className={`ri-arrow-down-s-line ${classes.skills__arrow}`}></i>
                        </div>
                        <ul className={`${classes.skills__list} `}>
                            <li className={`${classes.skills__item}`}>
                                <div className={`${classes.skills__data}`}>
                                    <h3 className={`${classes.skills__text}`}>Database</h3>
                                    <span className={`${classes.skills__number}`}>67%</span>
                                </div>
                                <div className={`${classes.skills__amount}`}>
                                    <span
                                        className={`${classes.skills__percent} ${classes.skills__db}`}
                                    ></span>
                                </div>
                            </li>
                            <li className={`${classes.skills__item}`}>
                                <div className={`${classes.skills__data}`}>
                                    <h3 className={`${classes.skills__text}`}>
                                        Data structures & Algorithms
                                    </h3>
                                    <span className={`${classes.skills__number}`}>65%</span>
                                </div>
                                <div className={`${classes.skills__amount}`}>
                                    <span
                                        className={`${classes.skills__percent} ${classes.skills__ds}`}
                                    ></span>
                                </div>
                            </li>
                            <li className={`${classes.skills__item}`}>
                                <div className={`${classes.skills__data}`}>
                                    <h3 className={`${classes.skills__text}`}>Git & Github</h3>
                                    <span className={`${classes.skills__number}`}>68%</span>
                                </div>
                                <div className={`${classes.skills__amount}`}>
                                    <span
                                        className={`${classes.skills__percent} ${classes.skills__git}`}
                                    ></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
