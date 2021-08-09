import classes from "./Blogs.module.scss";
import Blog from "./Blog/Blog";
function Blogs(props) {
    return (
        <section className={`${classes.blogs} section container`}>
            <div className={` ${classes.blogs__list}`}>
                {props.blogs.map((blog, i) => (
                    <Blog blog={blog} key={i} />
                ))}
            </div>
            <div className={` ${classes.blogs__find}`}>
                <p className={` ${classes.blogs__title}`}>Find with topic</p>
                <div className={classes.blogs__topics}>
                    {props.topics.map((topic) => (
                        <span className={classes.blogs__topic} key={topic}>
                            {topic}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blogs;
