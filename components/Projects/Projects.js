import Project from "./Project/Project";
import classes from "./Projects.module.scss";
import { projects } from "@/data/projects";

function Projects(props) {
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
