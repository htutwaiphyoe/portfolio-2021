import Typed from "react-typed";

import ScrollRevealHOC from "../../hoc/ScrollReveal/ScrollReveal";
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
                    <ScrollRevealHOC target="home-image" origin="right">
                        <figure className={`${classes.home__image} load-hidden`} id="home-image">
                            <img src="images/logo/home4.svg" alt="Home" />
                        </figure>
                    </ScrollRevealHOC>

                    <ScrollRevealHOC target="home-data" origin="left">
                        <div className={`${classes.home__data} load-hidden`} id="home-data">
                            <h1 className={classes.home__title}>Hi, I'm HWP.</h1>
                            <h2 className={classes.home__subtitle}>
                                <Typed
                                    loop
                                    typeSpeed={60}
                                    backSpeed={40}
                                    strings={[
                                        "Web developer",
                                        "FullStack Developer",
                                        "Content Writer",
                                    ]}
                                    backDelay={1000}
                                    loopCount={0}
                                    showCursor
                                    cursorChar="|"
                                />
                            </h2>
                            <p className={classes.home__description}>
                                Producing quality sharing content about web development especially
                                for JavaScrip and MERN stack
                            </p>
                            <Button
                                type="link"
                                href="/blogs"
                                text="Read blogs"
                                icon="ri-arrow-right-line"
                            />
                        </div>
                    </ScrollRevealHOC>
                </div>
                <ScrollRevealHOC target="home-scroll" origin="bottom">
                    <div className={`${classes.home__scroll} load-hidden`} id="home-scroll">
                        <div className={classes.home__scroll__btn} onClick={onClickHandler}>
                            <i className={`ri-mouse-line ${classes.home__scroll__mouse}`}></i>
                            <span className={classes.home__scroll__text}>Scroll down</span>

                            <i className={`ri-arrow-down-fill ${classes.home__scroll__arrow}`}></i>
                        </div>
                    </div>
                </ScrollRevealHOC>
            </div>
        </section>
    );
}

export default Home;
