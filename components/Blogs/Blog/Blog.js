import Image from "next/image";
import Link from "next/link";
import classes from "./Blog.module.scss";

import BlogTopic from "../BlogTopic/BlogTopic";
import { formatDate } from "@/utils/helpers";
function Blog(props) {
    const { title, slug, description, image, date, topics, readTime } = props.blog;
    const imagePath = `/images/blogs/${slug}/${image}`;
    const formatedDate = formatDate(date);

    return (
        <Link href={`/blogs/${slug}`}>
            <div className={`container ${classes.blog}`}>
                <Image
                    src={imagePath}
                    width={500}
                    height={300}
                    className={`${classes.blog__image}`}
                    priority={true}
                />

                <div className={`${classes.blog__data}`}>
                    <div className={`${classes.blog__topics}`}>
                        {topics.map((topic) => (
                            <BlogTopic topic={topic} key={topic} />
                        ))}
                    </div>

                    <h2 className={`${classes.blog__title}`}>{title}</h2>

                    <p className={`${classes.blog__description}`}>{description}</p>

                    <div className={`${classes.blog__info}`}>
                        <time className={`${classes.blog__date}`}>{formatedDate}</time>
                        <span className={`${classes.blog__duration}`}>{readTime} MIN READ</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Blog;
