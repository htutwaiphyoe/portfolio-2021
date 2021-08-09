import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import classes from "./Status.module.scss";

function Status({ s }) {
    let isCountUp = false;
    function checkCountUp(isVisible) {
        if (isVisible) {
            if (!isCountUp) {
                isCountUp = isVisible;
            }
        }
        return isCountUp ? s.number : 0;
    }
    return (
        <div className={`${classes.status__item}`} id="portfolio-status-item">
            <i className={`ri-${s.icon} ${classes.status__icon}`}></i>
            <span className={`${classes.status__number}`}>
                <VisibilitySensor>
                    {({ isVisible }) => {
                        return (
                            <CountUp end={checkCountUp(isVisible)} duration={1} delay={0.5}>
                                {({ countUpRef }) => <span ref={countUpRef} />}
                            </CountUp>
                        );
                    }}
                </VisibilitySensor>
                <span className={`${classes.status__plus}`}>+</span>
            </span>
            <span className={`${classes.status__title}`}>{s.title}</span>
        </div>
    );
}

export default Status;
