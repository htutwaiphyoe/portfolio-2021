import classes from "./Blogs.module.scss";
import FeaturedBlog from "./Blog/Blog";
function Blogs(props) {
    return (
        <section className={`${classes.blogs} section container`}>
            <div className={` ${classes.blogs__list}`}>
                <FeaturedBlog />
                <FeaturedBlog />
                <FeaturedBlog />
                <FeaturedBlog />
                <FeaturedBlog />
            </div>
            <div className={` ${classes.blogs__find}`}>
                <p className={` ${classes.blogs__title}`}>Find with topic</p>
                <div className={classes.blogs__topics}>
                    <span className={classes.blogs__topic}>JAVASCRIPT</span>
                    <span className={classes.blogs__topic}>REACTJS</span>
                    <span className={classes.blogs__topic}>BESTPRACTICES</span>
                    <span className={classes.blogs__topic}>TIPS&TRICKS</span>
                </div>
            </div>
        </section>
    );
}

export default Blogs;
