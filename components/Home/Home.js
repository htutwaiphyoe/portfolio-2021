import Typed from "react-typed";

import Button from "../UI/Button/Button";
import classes from "./Home.module.scss";
function Home(props) {
  function onClickHandler() {
    document.getElementById("about").scrollIntoView();
  }
  return (
    <section className={`${classes.home} section`}>
      <div className={`container ${classes.home__container}`}>
        <div className={classes.home__content}>
          <figure className={`${classes.home__image}`} id="home-image">
            <img src="images/logo/home4.svg" alt="Home" />
          </figure>

          <div className={`${classes.home__data}`} id="home-data">
            <h1 className={classes.home__title}>Hi, I'm HWP.</h1>
            <h2 className={classes.home__subtitle}>
              <Typed
                loop
                typeSpeed={60}
                backSpeed={40}
                strings={[
                  "Software Engineer",
                  "Fullstack Developer",
                  "Content Writer",
                  "PMA Player",
                ]}
                backDelay={1000}
                loopCount={0}
                showCursor
                cursorChar="|"
              />
            </h2>
            <p className={classes.home__description}>
              Excited in crafting full-fledged web-based software and producing
              quality sharing contents about web development
            </p>
            <Button
              type="link"
              href="/blogs"
              text="Read blogs"
              icon="ri-arrow-right-line"
            />
          </div>
        </div>

        <div className={`${classes.home__scroll}`} id="home-scroll">
          <div className={classes.home__scroll__btn} onClick={onClickHandler}>
            <i className={`ri-mouse-line ${classes.home__scroll__mouse}`}></i>
            <span className={classes.home__scroll__text}>Scroll down</span>
            <i
              className={`ri-arrow-down-fill ${classes.home__scroll__arrow}`}
            ></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
