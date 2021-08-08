import Link from "next/link";

import classes from "./Button.module.scss";

function Button(props) {
    switch (props.type) {
        case "link":
            return (
                <Link href={props.href}>
                    <a className={`${classes.btn} ${props.hidden && "load-hidden"}`}>
                        {props.text}
                        <i className={`${props.icon} ${classes.btn__icon}`}></i>
                    </a>
                </Link>
            );
        case "download":
            return (
                <a className={`${classes.btn} load-hidden`} {...props.config}>
                    {props.text}
                    <i className={`${props.icon} ${classes.btn__icon}`}></i>
                </a>
            );

        default:
            return (
                <button className={classes.btn} onClick={props.onClickHandler}>
                    {props.text}
                    <i className={`${props.icon} ${classes.btn__icon}`}></i>
                </button>
            );
    }
}

export default Button;