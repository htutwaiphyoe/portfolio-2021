import { useEffect } from "react";

import classes from "./Qualification.module.scss";

function Qualification(props) {
    useEffect(() => {
        const sr = ScrollReveal({
            distance: "60px",
            duration: 2800,
            // reset: true,
        });
        sr.reveal(`#qualification-tab`, {
            origin: "top",
            interval: 100,
        });
        sr.reveal(`#qualification-list`, {
            origin: "bottom",
            interval: 100,
        });
    }, []);
    function onClickHandler(e) {
        const tabs = window.document.querySelectorAll("[data-target]");
        const tabContents = window.document.querySelectorAll("[data-content]");
        const target = window.document.querySelector(e.target.parentNode.dataset.target);
        tabContents.forEach((tabContent) =>
            tabContent.classList.remove(`${classes.qualification__active}`)
        );
        target.classList.add(`${classes.qualification__active}`);
        tabs.forEach((tab) => tab.classList.remove(`${classes.qualification__active}`));
        e.target.parentNode.classList.add(`${classes.qualification__active}`);
    }
    return (
        <section className={`section ${classes.qualification}`}>
            <h2 className={`section__title`}>Qualification</h2>
            <span className={`section__subtitle`}>Personal journey</span>

            <div className={`container ${classes.qualification__container}`}>
                <div className={`${classes.qualification__tabs}`}>
                    <div
                        className={`${classes.qualification__tab} ${classes.qualification__active} ${classes.qualification__tab_edu}`}
                        data-target="#education"
                        id="qualification-tab"
                    >
                        <i className={`uil uil-graduation-cap ${classes.qualification__icon}`}></i>
                        <span
                            className={`${classes.qualification__label}`}
                            onClick={onClickHandler}
                        >
                            Education
                        </span>
                    </div>
                    <div
                        className={`${classes.qualification__tab}`}
                        data-target="#work"
                        id="qualification-tab"
                    >
                        <i className={`uil uil-briefcase-alt ${classes.qualification__icon}`}></i>
                        <span
                            className={`${classes.qualification__label}`}
                            onClick={onClickHandler}
                        >
                            Work
                        </span>
                    </div>
                </div>
                <div className={`${classes.qualification__data}`} id="qualification-list">
                    <div
                        className={`${classes.qualification__list} ${classes.qualification__active}`}
                        data-content
                        id="education"
                    >
                        <div className={`${classes.qualification__item}`}>
                            <div className={`${classes.qualification__content}`}>
                                <h3 className={`${classes.qualification__title}`}>Matriculation</h3>
                                <span className={`${classes.qualification__subtitle}`}>
                                    High School - MDY
                                </span>
                                <div className={`${classes.qualification__calendar}`}>
                                    <i className={`ri-calendar-2-line`}></i>
                                    <span className={`${classes.qualification__year}`}>
                                        2015 - 2016
                                    </span>
                                </div>
                            </div>
                            <div>
                                <span className={`${classes.qualification__rounder}`}></span>
                            </div>
                            <div></div>
                        </div>
                        <div className={`${classes.qualification__item}`}>
                            <div></div>
                            <div>
                                <span className={`${classes.qualification__rounder}`}></span>
                            </div>
                            <div>
                                <h3 className={`${classes.qualification__title}`}>
                                    Computer Engineer
                                </h3>
                                <span className={`${classes.qualification__subtitle}`}>
                                    MTU - COE
                                </span>
                                <div className={`${classes.qualification__calendar}`}>
                                    <i className={`ri-calendar-2-line`}></i>
                                    <span className={`${classes.qualification__year}`}>
                                        2016 - Present
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={`${classes.qualification__item}`}>
                            <div className={`${classes.qualification__content}`}>
                                <h3 className={`${classes.qualification__title}`}>IT Student</h3>
                                <span className={`${classes.qualification__subtitle}`}>
                                    CS50 - Harvard
                                </span>
                                <div className={`${classes.qualification__calendar}`}>
                                    <i className={`ri-calendar-2-line`}></i>
                                    <span className={`${classes.qualification__year}`}>2020</span>
                                </div>
                            </div>
                            <div>
                                <span className={`${classes.qualification__rounder}`}></span>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div className={`${classes.qualification__list}`} data-content id="work">
                        <div className={`${classes.qualification__item}`}>
                            <div className={`${classes.qualification__content}`}>
                                <h3 className={`${classes.qualification__title}`}>Web Developer</h3>
                                <span className={`${classes.qualification__subtitle}`}>
                                    MTU - COE
                                </span>
                                <div className={`${classes.qualification__calendar}`}>
                                    <i className={`ri-calendar-2-line`}></i>
                                    <span className={`${classes.qualification__year}`}>
                                        2019 - Present
                                    </span>
                                </div>
                            </div>
                            <div>
                                <span className={`${classes.qualification__rounder}`}></span>
                            </div>
                            <div></div>
                        </div>
                        <div className={`${classes.qualification__item}`}>
                            <div></div>
                            <div>
                                <span className={`${classes.qualification__rounder}`}></span>
                            </div>
                            <div>
                                <h3 className={`${classes.qualification__title}`}>Freelancer</h3>
                                <span className={`${classes.qualification__subtitle}`}>
                                    Mandalay
                                </span>
                                <div className={`${classes.qualification__calendar}`}>
                                    <i className={`ri-calendar-2-line`}></i>
                                    <span className={`${classes.qualification__year}`}>
                                        2020 - Present
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Qualification;
