import ScrollRevealHOC from "../../hoc/ScrollReveal/ScrollReveal";
import SectionHOC from "../../hoc/Section/Section";
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
                { title: "Computer Engineer", subtitle: "MTU - COE", year: "2016 - Present" },
                { title: "IT Student", subtitle: "CS50 - Harvard", year: "2020" },
            ],
        },
        {
            id: "work",
            active: false,
            items: [
                { title: "Web Developer", subtitle: "MTU - COE", year: "2019 - Present" },
                { title: "Freelancer", subtitle: "Mandalay", year: "2020 - Present" },
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
                <ScrollRevealHOC target="qualification-tab" origin="top">
                    <div className={`${classes.qualification__tabs}`}>
                        {tabs.map((tab, i) => (
                            <Tab tab={tab} key={i} activeClass={classes.qualification__active} />
                        ))}
                    </div>
                </ScrollRevealHOC>

                <ScrollRevealHOC target="qualification-list" origin="bottom">
                    <div className={`${classes.qualification__lists}`} id="qualification-list">
                        {lists.map((list, i) => (
                            <List list={list} key={i} activeClass={classes.qualification__active} />
                        ))}
                    </div>
                </ScrollRevealHOC>
            </div>
        </SectionHOC>
    );
}

export default Qualification;
