import SectionHOC from "@/hoc/Section/Section";
import Button from "../UI/Button/Button";
import classes from "./About.module.scss";

function About(props) {
    return (
        <SectionHOC id="about" title="About me" subtitle="Introduction" classname={classes.about}>
            <div className={`container ${classes.about__container}`}>
                <div className={`${classes.about__info}`}>
                    <img
                        src="images/logo/home3.svg"
                        alt="coder with github"
                        className={`${classes.about__image}`}
                        id="about-image"
                    />

                    <div className={`${classes.about__data}`}>
                        <p id="about-text" className={`${classes.about__text}`}>
                            I'm currently a frontend developer working at Codigo.co. I started
                            coding at second year and apparently I'm pursuing fullstack web
                            development.
                        </p>

                        <Button
                            type="download"
                            config={{
                                href: "/",
                                download: true,
                                id: "about-download",
                            }}
                            text="Download CV"
                            icon="ri-download-2-line"
                        />
                    </div>
                </div>
            </div>
        </SectionHOC>
    );
}
export default About;
