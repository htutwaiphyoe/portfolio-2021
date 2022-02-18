import SectionHOC from "@/hoc/Section/Section";
import Button from "../UI/Button/Button";
import classes from "./About.module.scss";

function About(props) {
  return (
    <SectionHOC
      id="about"
      title="About me"
      subtitle="Introduction"
      classname={classes.about}
    >
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
              Currently working at Codigo.co as a remote Frontend Developer
              specialized in ReactJS and NextJS development. Strongly interested
              in Computer Science, Software Engineering and Programming. Eager
              to learn and grow with positive mental attitude.
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
