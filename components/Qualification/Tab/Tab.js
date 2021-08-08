import classes from "./Tab.module.scss";

function Tab({ tab, activeClass }) {
    function onClickHandler(e) {
        const tabs = window.document.querySelectorAll("[data-target]");
        const tabContents = window.document.querySelectorAll("[data-content]");
        const target = window.document.querySelector(e.target.parentNode.dataset.target);
        tabContents.forEach((tabContent) => tabContent.classList.remove(`${activeClass}`));
        target.classList.add(`${activeClass}`);
        tabs.forEach((tab) => tab.classList.remove(`${classes.tab__active}`));
        e.target.parentNode.classList.add(`${classes.tab__active}`);
    }
    return (
        <div
            className={`${classes.tab} ${tab.active ? classes.tab__active : ""} ${
                tab.target === "education" ? classes.tab_edu : ""
            } load-hidden`}
            data-target={`#${tab.target}`}
            id="qualification-tab"
        >
            <i className={`uil uil-${tab.icon} ${classes.tab__icon}`}></i>
            <span className={`${classes.tab__label}`} onClick={onClickHandler}>
                {tab.label}
            </span>
        </div>
    );
}

export default Tab;
