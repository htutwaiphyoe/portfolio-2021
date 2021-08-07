import ScrollRevealHOC from "../../hoc/ScrollReveal/ScrollReveal";
import classes from "./About.module.scss";

function About(props) {
    return (
        <section className={`${classes.about} section`} id="about">
            <h2 className={`section__title`}>About me</h2>
            <span className={`section__subtitle`}>Introduction</span>

            <div className={`container ${classes.about__container}`}>
                <div className={`${classes.about__info}`}>
                    <ScrollRevealHOC target="about-image" origin="left">
                        <img
                            src="images/logo/home3.svg"
                            alt=""
                            className={`${classes.about__image}`}
                            id="about-image"
                        />
                    </ScrollRevealHOC>

                    <div className={`${classes.about__data}`}>
                        <ScrollRevealHOC target="about-text" origin="right">
                            <p id="about-text" className={`${classes.about__text}`}>
                                I'm currently a fourth year student studying CEIT at Mandalay
                                Technological University. I started coding at second year and
                                apparently I'm pursuing Web Development.
                            </p>
                        </ScrollRevealHOC>
                        <ScrollRevealHOC target="about-download" origin="bottom">
                            <a
                                href="pdf/hwp.pdf"
                                download={true}
                                className={`${classes.about__btn}`}
                                id="about-download"
                            >
                                Download CV
                                <i className={`ri-download-2-line ${classes.about__btn__icon}`}></i>
                            </a>
                        </ScrollRevealHOC>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;
