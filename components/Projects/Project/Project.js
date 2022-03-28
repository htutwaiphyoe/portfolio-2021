import Image from "next/image";
import classes from "./Project.module.scss";
function Project({ project }) {
  return (
    <div className={classes.project}>
      <Image
        src={project.image}
        alt={project.title}
        className={classes.project__image}
        width={600}
        height={300}
        priority={true}
      />
      <div className={classes.project__info}>
        <div>
          {project.types.map((type, i) => (
            <span className={classes.project__type} key={i}>
              #{type}
            </span>
          ))}
        </div>
        <h3 className={classes.project__title}>{project.title}</h3>
        <p>{project.description}</p>
        <div className={classes.project__action}>
          <a
            href="/"
            rel="noopener noreferrer"
            className={`${classes.project__btn} ${classes.project__btn_code} ${classes.project__btn_outlined}`}
          >
            <i className={`ri-github-fill ${classes.project__btn__icon}`}></i>
            Code
          </a>
          <a
            href="/"
            rel="noopener noreferrer"
            className={classes.project__btn}
          >
            <i className={`ri-window-line ${classes.project__btn__icon}`}></i>
            website
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
