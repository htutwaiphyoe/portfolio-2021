import classes from "./Blog.module.scss";
import Image from "next/image";
import Link from "next/link";

import { formatDate } from "@/utils/helpers";
function Blog(props) {
    const { title, slug, description, image, date, topics, readTime } = props.blog;
    const imagePath = `/images/blogs/${slug}/${image}`;
    const formatedDate = formatDate(date);
    return (
        <div className={`container ${classes.blog}`}>
            <Image src={imagePath} width={500} height={300} className={`${classes.blog__image}`} />

            <div className={`${classes.blog__data}`}>
                <div className={`${classes.blog__topics}`}>
                    {topics.map((topic) => (
                        <Link href={`/topics/${topic}`} key={topic}>
                            <a className={`${classes.blog__topic}`}>{topic}</a>
                        </Link>
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
    );
}

export default Blog;
