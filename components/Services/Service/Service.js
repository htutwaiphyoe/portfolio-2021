import classes from "./Service.module.scss";

function Service({ service }) {
    function onClickHandler() {
        document.getElementById("contact").scrollIntoView();
    }
    return (
        <div className={`${classes.service__item}`}>
            <img src={service.src} alt={service.alt} className={`${classes.service__image}`} />

            <div className={`${classes.service__data}`}>
                <h3 className={`${classes.service__title}`}>{service.title}</h3>
                <p className={`${classes.service__description}`}>{service.description}</p>

                <div className={`${classes.service__btn}`} onClick={onClickHandler}>
                    Hire me
                    <i className={`ri-briefcase-line ${classes.service__btn__icon}`}></i>
                </div>
            </div>
        </div>
    );
}

export default Service;
