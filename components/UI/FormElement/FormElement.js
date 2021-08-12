import classes from "./FormElement.module.scss";

function FormElement(props) {
    let input = null;
    switch (props.inputType) {
        case "textarea":
            input = (
                <textarea
                    {...props.config}
                    value={props.value}
                    onChange={(e) => props.onChangeHandler(e.target.value)}
                    className={`${classes.formelement__input}`}
                    id={props.id}
                />
            );
            break;
        default:
            input = (
                <input
                    {...props.config}
                    value={props.value}
                    onChange={(e) => props.onChangeHandler(e.target.value)}
                    className={`${classes.formelement__input}`}
                    id={props.id}
                />
            );
    }

    return (
        <div className={`${classes.formelement}`}>
            <label htmlFor={props.id} className={`${classes.formelement__label}`}>
                {props.label}
            </label>
            {input}
        </div>
    );
}

export default FormElement;
