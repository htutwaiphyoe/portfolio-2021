import classes from "./Blogs.module.scss";
import Blog from "./Blog/Blog";
import BlogTopic from "./BlogTopic/BlogTopic";
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
                        <BlogTopic topic={topic} key={topic} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Blogs;
