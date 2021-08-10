import classes from "./Blogs.module.scss";
import Blog from "./Blog/Blog";
import BlogTopic from "./BlogTopic/BlogTopic";

import Button from "../UI/Button/Button";
function Blogs(props) {
    return (
        <section className={`${classes.blogs} section container`}>
            {props.blogs.length > 0 ? (
                <div className={` ${classes.blogs__list}`}>
                    {props.blogs.map((blog, i) => (
                        <Blog blog={blog} key={i} />
                    ))}
                </div>
            ) : (
                <div className={classes.blogs__notfound}>
                    <p className={classes.blogs__text}>No blogs with that topic</p>
                    <Button type="link" text="Back to Blogs" href="/blogs" />
                </div>
            )}
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
