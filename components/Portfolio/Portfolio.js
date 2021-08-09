import SectionHOC from "../../hoc/Section/Section";
import Status from "./Status/Status";
import classes from "./Portfolio.module.scss";

function Portfolio(props) {
    const status = [
        { icon: "time-line", number: 1, title: "Coding years" },
        { icon: "code-s-slash-fill", number: 10, title: "Projects done" },
        { icon: "quill-pen-line", number: 6, title: " Sharing contents" },
    ];
    return (
        <SectionHOC
            id="portfolio"
            title="Portfolio"
            subtitle="Developer life"
            classname={classes.portfolio}
        >
            <div className={`container ${classes.portfolio__container}`}>
                <div className={`${classes.portfolio__status}`}>
                    {status.map((s, i) => (
                        <Status key={i} s={s} />
                    ))}
                </div>
            </div>
        </SectionHOC>
    );
}

export default Portfolio;
