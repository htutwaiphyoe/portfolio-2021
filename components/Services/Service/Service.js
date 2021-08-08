import Button from "../../UI/Button/Button";
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

                <Button onClickHandler={onClickHandler} text="Hire me" icon="ri-briefcase-line" />
            </div>
        </div>
    );
}

export default Service;
