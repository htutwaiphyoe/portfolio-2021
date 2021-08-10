import classes from "./ScrollTracker.module.scss";
import ReactDOM from "react-dom";
import { useEffect, useRef, useState } from "react";
function ScrollTracker(props) {
    const trackerRef = useRef();
    const [scrollTrackerRoot, setScrollTrackerRoot] = useState(null);
    useEffect(() => {
        setScrollTrackerRoot(document.getElementById("scrolltracker"));
        function scrollTracker() {
            if (trackerRef.current) {
                const heightToScroll = this.document.body.scrollHeight - this.innerHeight;
                const width = (this.scrollY / heightToScroll) * 100;
                trackerRef.current.style.width = `${width}%`;
            }
        }
        window.addEventListener("scroll", scrollTracker);

        return () => {
            window.removeEventListener("scroll", scrollTracker);
        };
    }, []);
    return (
        scrollTrackerRoot &&
        ReactDOM.createPortal(
            <div className={classes.scrolltracker} ref={trackerRef}></div>,
            scrollTrackerRoot
        )
    );
}

export default ScrollTracker;
