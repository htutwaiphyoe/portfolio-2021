import Image from "next/image";
import Button from "../UI/Button/Button";
import classes from "./Projects.module.scss";
function Projects(props) {
    return (
        <section className={`container ${classes.projects}`}>
            <div className={`${classes.projects__data}`}>
                <div className={`${classes.projects__list} grid`}>
                    <div className={classes.projects__item}>
                        <Image
                            src="/images/site/projects/omnifood.png"
                            alt="Omnifood"
                            className={classes.projects__image}
                            width={600}
                            height={300}
                        />
                        <div className={classes.projects__info}>
                            <div>
                                <span className={classes.projects__type}>#landing-page</span>
                                <span className={classes.projects__type}>#responsive</span>
                            </div>
                            <h3 className={classes.projects__name}>Omnifood</h3>
                            <p className={classes.projects__tech}>
                                Built with HTML, CSS, JavaScript, JQuery
                            </p>
                            {/* <div className={classes.projects__action}>
                                <a
                                    href="/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={classes.projects__btn}
                                >
                                    See in action
                                </a>
                            </div> */}
                        </div>
                    </div>
                    <div className={classes.projects__item}>
                        <Image
                            src="/images/site/projects/natours.png"
                            alt="Natours"
                            className={classes.projects__image}
                            width={600}
                            height={300}
                            // layout="responsive"
                            // loading="lazy"
                        />
                        <div className={classes.projects__info}>
                            <div>
                                <span className={classes.projects__type}>#landing-page</span>
                                <span className={classes.projects__type}>#responsive</span>
                            </div>
                            <h3 className={classes.projects__name}>Natours</h3>
                            <p className={classes.projects__tech}>Built with HTML, CSS, SASS</p>
                            {/* <div className={classes.projects__action}>
                                <a
                                    href="/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={classes.projects__btn}
                                >
                                    See in action
                                </a>
                            </div> */}
                        </div>
                    </div>
                    <div className={classes.projects__item}>
                        <Image
                            src="/images/site/projects/portfolio.png"
                            alt="Natours"
                            className={classes.projects__image}
                            width={600}
                            height={300}
                            // layout="responsive"
                            // loading="lazy"
                        />
                        <div className={classes.projects__info}>
                            <div>
                                <span className={classes.projects__type}>#portfolio</span>
                            </div>
                            <h3 className={classes.projects__name}>Natours</h3>
                            <p className={classes.projects__tech}>
                                Built with NextJS, ReactJS, SASS
                            </p>
                            {/* <div className={classes.projects__action}>
                                <a
                                    href="/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={classes.projects__btn}
                                >
                                    See in action
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
