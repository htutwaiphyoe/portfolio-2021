import SectionHOC from "@/hoc/Section/Section";
import Tab from "./Tab/Tab";
import List from "./List/List";
import classes from "./Qualification.module.scss";

function Qualification(props) {
    const tabs = [
        { active: true, target: "education", icon: "graduation-cap", label: "Education" },
        { active: false, target: "work", icon: "briefcase-alt", label: "Work" },
    ];

    const lists = [
        {
            id: "education",
            active: true,
            items: [
                { title: "Matriculation", subtitle: "High School - MDY", year: "2015 - 2016" },
                { title: "IT Engineer", subtitle: "MTU - MDY", year: "2016 - Present" },
                { title: "CS Student", subtitle: "CS50 - Harvard", year: "2020" },
            ],
        },
        {
            id: "work",
            active: false,
            items: [
                {
                    title: "Freelance Developer",
                    subtitle: "MTU - MDY",
                    year: "Sept 2019 - Sept 2021",
                },
                {
                    title: "Frontend Developer",
                    subtitle: "Codigo.co - Singapore",
                    year: "Oct 2021 - Present",
                },
            ],
        },
    ];
    return (
        <SectionHOC
            id="qualification"
            title="Qualification"
            subtitle="Personal journey"
            classname={classes.qualification}
        >
            <div className={`container ${classes.qualification__container}`}>
                <div className={`${classes.qualification__tabs}`}>
                    {tabs.map((tab, i) => (
                        <Tab tab={tab} key={i} activeClass={classes.qualification__active} />
                    ))}
                </div>

                <div className={`${classes.qualification__lists}`} id="qualification-list">
                    {lists.map((list, i) => (
                        <List list={list} key={i} activeClass={classes.qualification__active} />
                    ))}
                </div>
            </div>
        </SectionHOC>
    );
}

export default Qualification;
