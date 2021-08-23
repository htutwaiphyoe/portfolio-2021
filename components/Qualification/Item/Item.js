import React from "react";
import classes from "./Item.module.scss";

class Item extends React.Component {
    static Content = ({ title, subtitle, year, left }) => (
        <div className={`${left ? classes.item__content : ""}`}>
            <h3 className={`${classes.item__title}`}>{title}</h3>
            <span className={`${classes.item__subtitle}`}>{subtitle}</span>
            <div className={`${classes.item__calendar}`}>
                <i className={`ri-calendar-2-line`}></i>
                <span className={`${classes.item__year}`}>{year}</span>
            </div>
        </div>
    );

    static Rounder = () => (
        <div>
            <span className={`${classes.item__rounder}`}></span>
        </div>
    );

    static Empty = () => <div></div>;

    render() {
        return (
            <div className={`${classes.item}`}>
                {React.Children.map(this.props.children, (child) =>
                    React.cloneElement(child, { ...this.props.item })
                )}
            </div>
        );
    }
}

export default Item;
