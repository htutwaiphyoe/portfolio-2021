import classes from "./Information.module.scss";

function Information({ information }) {
    return (
        <div className={`${classes.information}`}>
            <i className={`ri-${information.icon}-line ${classes.information__icon}`}></i>
            <div className={`${classes.information__data}`}>
                <h3 className={`${classes.information__title}`}>{information.title}</h3>
                <span className={`${classes.information__subtitle}`}>{information.subtitle}</span>
            </div>
        </div>
    );
}

export default Information;
