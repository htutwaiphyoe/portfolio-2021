import classes from "./Blogs.module.scss";
import FeaturedBlog from "./Blog/Blog";
function Blogs(props) {
    return (
        <section className={`${classes.blogs} section container`}>
            {/* <div className={`${classes.blogs__heading}`}>
                <h2 className="section__title">All Blogs</h2>
                <span className="section__subtitle">What I share</span>
            </div> */}

            <div className={`container ${classes.blogs__list}`}>
                <FeaturedBlog />
                <FeaturedBlog />
                <FeaturedBlog />
                <FeaturedBlog />
                <FeaturedBlog />
            </div>
        </section>
    );
}

export default Blogs;
