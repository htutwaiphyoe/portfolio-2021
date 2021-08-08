import classes from "./List.module.scss";

function List({ list, activeClass }) {
    return (
        <div
            className={`${classes.list} ${list.active ? activeClass : ""}`}
            data-content={true}
            id={list.id}
        >
            {list.items.map((item, i) => {
                return i % 2 === 0 ? (
                    <div className={`${classes.list__item}`} key={i}>
                        <div className={`${classes.list__content}`}>
                            <h3 className={`${classes.list__title}`}>{item.title}</h3>
                            <span className={`${classes.list__subtitle}`}>{item.subtitle}</span>
                            <div className={`${classes.list__calendar}`}>
                                <i className={`ri-calendar-2-line`}></i>
                                <span className={`${classes.list__year}`}>{item.year}</span>
                            </div>
                        </div>
                        <div>
                            <span className={`${classes.list__rounder}`}></span>
                        </div>
                        <div></div>
                    </div>
                ) : (
                    <div className={`${classes.list__item}`} key={i}>
                        <div></div>
                        <div>
                            <span className={`${classes.list__rounder}`}></span>
                        </div>
                        <div>
                            <h3 className={`${classes.list__title}`}>{item.title}</h3>
                            <span className={`${classes.list__subtitle}`}>{item.subtitle}</span>
                            <div className={`${classes.list__calendar}`}>
                                <i className={`ri-calendar-2-line`}></i>
                                <span className={`${classes.list__year}`}>{item.year}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default List;
