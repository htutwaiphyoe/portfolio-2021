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
                {/* <div className={classes.project__action}>
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.project__btn}
                    >
                        See in action
                    </a>
                </div> */}
            </div>
        </div>
    );
}

export default Project;
