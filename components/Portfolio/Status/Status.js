import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import classes from "./Status.module.scss";

function Status({ s }) {
    return (
        <div className={`${classes.status__item}`} id="portfolio-status-item">
            <i className={`ri-${s.icon} ${classes.status__icon}`}></i>
            <span className={`${classes.status__number}`}>
                <CountUp end={s.number} redraw={true} duration={0.5} delay={0}>
                    {({ countUpRef, start }) => (
                        <>
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        </>
                    )}
                </CountUp>
                <span className={`${classes.status__plus}`}>+</span>
            </span>
            <span className={`${classes.status__title}`}>{s.title}</span>
        </div>
    );
}

export default Status;
