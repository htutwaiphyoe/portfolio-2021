import ScrollRevealHOC from "../../hoc/ScrollReveal/ScrollReveal";
import SectionHOC from "../../hoc/Section/Section";
import Button from "../UI/Button/Button";
import classes from "./About.module.scss";

function About(props) {
    return (
        <SectionHOC id="about" title="About me" subtitle="Introduction" classname={classes.about}>
            <div className={`container ${classes.about__container}`}>
                <div className={`${classes.about__info}`}>
                    <ScrollRevealHOC target="about-image" origin="left">
                        <img
                            src="images/logo/home3.svg"
                            alt="coder with github"
                            className={`${classes.about__image} load-hidden`}
                            id="about-image"
                        />
                    </ScrollRevealHOC>

                    <div className={`${classes.about__data}`}>
                        <ScrollRevealHOC target="about-text" origin="right">
                            <p id="about-text" className={`${classes.about__text} load-hidden`}>
                                I'm currently a fourth year student studying CEIT at Mandalay
                                Technological University. I started coding at second year and
                                apparently I'm pursuing Web Development.
                            </p>
                        </ScrollRevealHOC>

                        <ScrollRevealHOC target="about-download" origin="bottom">
                            <Button
                                type="download"
                                config={{
                                    href: "hwp.pdf",
                                    download: true,
                                    id: "about-download",
                                }}
                                text="Download CV"
                                icon="ri-download-2-line"
                            />
                        </ScrollRevealHOC>
                    </div>
                </div>
            </div>
        </SectionHOC>
    );
}
export default About;
