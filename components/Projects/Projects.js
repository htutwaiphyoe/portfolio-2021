import Project from "./Project/Project";
import classes from "./Projects.module.scss";
function Projects(props) {
    const projects = [
        {
            image: "/images/site/projects/omnifood.png",
            title: "Omnifood",
            description: "Food service website built with HTML, CSS, JavaScript, JQuery",
            types: ["landingpage", "responsive"],
        },

        {
            image: "/images/site/projects/venus.png",
            title: "Venus Travel",
            description: "Travel agency website built with HTML, CSS, SASS, JavaScript",
            types: ["landingpage", "responsive"],
        },
        // {
        //     image: "/images/site/projects/tictactoe.png",
        //     title: "TicTacToe",
        //     description: "DOM game built with HTML, CSS, SASS, JavaScript",
        //     types: ["game"],
        // },
        {
            image: "/images/site/projects/portfolio.png",
            title: "Portfolio",
            description: "Personal website built with NextJS, ReactJS, SASS",
            types: ["portfolio", "fullstack"],
        },
        {
            image: "/images/site/projects/valhalla.png",
            title: "Hotel Valhalla",
            description: "Web application for hotel booking built with NextJS, ReactJS, MongoDB",
            types: ["fullstack", "webapp"],
        },
        {
            image: "/images/site/projects/financy.png",
            title: "Financy",
            description:
                "Budget tracking application built with ReactJS, Firebase and Google OAuth",
            types: ["WEBAPP"],
        },
        {
            image: "/images/site/projects/photify.png",
            title: "Photify",
            description: "Dynamic image grid built with ReactJS, Firebase and Google OAuth",
            types: ["WEBAPP"],
        },
    ];
    return (
        <section className={`container ${classes.projects}`}>
            <div className={`${classes.projects__list} grid`}>
                {projects.map((project) => (
                    <Project key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
