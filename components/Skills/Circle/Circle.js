import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import classes from "./Circle.module.scss";
function Circle({ circle }) {
    let isCountUp = false;
    function checkCountUp(isVisible) {
        if (isVisible) {
            if (!isCountUp) {
                isCountUp = isVisible;
            }
        }
        return isCountUp ? circle.amount : 0;
    }
    return (
        <div className={`${classes.circle}`} id="skills-circle">
            <div>
                <VisibilitySensor partialVisibility={true} offset={{ top: 0 }}>
                    {({ isVisible }) => {
                        return (
                            <CircularProgressbarWithChildren
                                value={checkCountUp(isVisible)}
                                styles={buildStyles({
                                    rotation: 0.25,
                                    pathTransition:
                                        checkCountUp(isVisible) === 0
                                            ? "none"
                                            : "stroke-dashoffset 2s ease",
                                })}
                            >
                                <CountUp end={checkCountUp(isVisible)} duration={2} delay={0}>
                                    {({ countUpRef }) => (
                                        <div className={`${classes.circle__percentage}`}>
                                            <span ref={countUpRef} />
                                            <span>%</span>
                                        </div>
                                    )}
                                </CountUp>
                            </CircularProgressbarWithChildren>
                        );
                    }}
                </VisibilitySensor>
            </div>
            <p className={`${classes.circle__title}`}>{circle.title}</p>
        </div>
    );
}

export default Circle;
