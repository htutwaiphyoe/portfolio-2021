import SectionHOC from "../../hoc/Section/Section";
import Circle from "./Circle/Circle";
import Bar from "./Bar/Bar";
import classes from "./Skills.module.scss";
function Skills(props) {
    const circles = [
        { amount: 68, title: "MongoDB" },
        { amount: 71, title: "ExpressJS" },
        { amount: 73, title: "ReactJS" },
        { amount: 70, title: "NodeJS" },
    ];

    const bars = [
        {
            open: true,
            icon: "global-line",
            title: "Web Development",
            items: [
                { text: "HTML", number: 85, type: "html" },
                { text: "CSS", number: 80, type: "css" },
                { text: "SASS", number: 73, type: "sass" },
                { text: "JavaScript", number: 75, type: "js" },
                { text: "NextJS", number: 70, type: "next" },
            ],
        },
        {
            open: false,
            icon: "server-line",
            title: "Computer Science",
            items: [
                { text: "Database", number: 67, type: "db" },
                { text: " Data structures & Algorithms", number: 65, type: "ds" },
                { text: "Git & Github", number: 68, type: "git" },
            ],
        },
    ];

    return (
        <SectionHOC
            id="skills"
            title="Skills"
            subtitle="Technical level"
            classname={classes.skills}
        >
            <div className={`container ${classes.skills__container}`}>
                <div className={`${classes.skills__circles}`}>
                    {circles.map((circle, i) => (
                        <Circle circle={circle} key={i} />
                    ))}
                </div>

                <div className={`${classes.skills__bars}`}>
                    {bars.map((bar, i) => (
                        <Bar bar={bar} key={i} />
                    ))}
                </div>
            </div>
        </SectionHOC>
    );
}

export default Skills;
