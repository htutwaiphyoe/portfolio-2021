import ScrollRevealHOC from "../../hoc/ScrollReveal/ScrollReveal";
import SectionHOC from "../../hoc/Section/Section";
import classes from "./About.module.scss";

function About(props) {
    return (
        <SectionHOC id="about" title="About me" subtitle="Introduction">
            <div className={`container ${classes.about__container}`}>
                <div className={`${classes.about__info}`}>
                    <ScrollRevealHOC target="about-image" origin="left">
                        <img
                            src="images/logo/home3.svg"
                            alt="coder with github"
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
        </SectionHOC>
    );
}
export default About;
