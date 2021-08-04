import classes from "./Home.module.scss";
import Typed from "react-typed";
function Home(props) {
    return (
        <header className={classes.Home}>
            {/* <div>
                <h1 className={classes.type}>
                    Hi, I'm{" "}
                    <Typed
                        loop
                        typeSpeed={60}
                        backSpeed={40}
                        strings={[
                            "Htut Wai Phyoe.",
                            "a web developer.",
                            "a tech lover.",
                            "a content writer.",
                        ]}
                        backDelay={1000}
                        loopCount={0}
                        showCursor
                        cursorChar="|"
                        // className={classes.type}
                    />
                </h1>

                <p>I'm a </p>
            </div> */}
        </header>
    );
}

export default Home;
