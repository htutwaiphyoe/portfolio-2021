import ReactDOM from "react-dom";
import { useEffect, useRef, useState } from "react";
import classes from "./ScrollUp.module.scss";

function ScrollUp(props) {
    const scrollUpRef = useRef();
    let [scrollUpRoot, setScrollUpRoot] = useState(null);
    useEffect(() => {
        setScrollUpRoot(document.getElementById("scrollup"));
        function scrollUp() {
            if (scrollUpRef.current) {
                if (window.scrollY > 80)
                    scrollUpRef.current.classList.add(classes.scrollup__active);
                else scrollUpRef.current.classList.remove(classes.scrollup__active);
            }
        }
        window.addEventListener("scroll", scrollUp);

        return () => {
            window.removeEventListener("scroll", scrollUp);
        };
    }, []);
    const onClickHandler = () => {
        window.scrollTo(0, 0);
    };
    return (
        scrollUpRoot &&
        ReactDOM.createPortal(
            <div className={classes.scrollup} ref={scrollUpRef} onClick={onClickHandler}>
                <i className={`ri-arrow-up-line ${classes.scrollup__icon}`}></i>
            </div>,
            scrollUpRoot
        )
    );
}

export default ScrollUp;
