import { useRef } from "react";
import classes from "./Bar.module.scss";

function Bar({ bar }) {
    const barRef = useRef();
    function onClickHandler(e) {
        document.getElementsByClassName(
            `${classes.bar} ${classes.bar__open}`
        )[0].classList = `${classes.bar} ${classes.bar__close}`;
        if (barRef.current.className === `${classes.bar} ${classes.bar__close}`) {
            barRef.current.className = `${classes.bar} ${classes.bar__open}`;
        }
    }
    return (
        <div
            className={`${classes.bar} ${classes[`${bar.open ? "bar__open" : "bar__close"}`]}`}
            ref={barRef}
            id="skills-bar"
        >
            <div className={`${classes.bar__header}`}>
                <i className={`ri-${bar.icon} ${classes.bar__icon}`}></i>

                <h2 className={`${classes.bar__name}`} onClick={onClickHandler}>
                    {bar.title}
                </h2>
                <i className={`ri-arrow-down-s-line ${classes.bar__arrow}`}></i>
            </div>
            <ul className={`${classes.bar__list}`}>
                {bar.items.map((item, i) => (
                    <li className={`${classes.bar__item}`} key={i}>
                        <div className={`${classes.bar__data}`}>
                            <h3 className={`${classes.bar__text}`}>{item.text}</h3>
                            <span className={`${classes.bar__number}`}>{item.number}%</span>
                        </div>
                        <div className={`${classes.bar__amount}`}>
                            <span
                                className={`${classes.bar__percent} ${
                                    classes[`bar__${item.type}`]
                                }`}
                            ></span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Bar;
