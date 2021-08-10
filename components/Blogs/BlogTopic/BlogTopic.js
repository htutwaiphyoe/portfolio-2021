import Link from "next/link";

import classes from "./BlogTopic.module.scss";

function BlogTopic(props) {
    return (
        <Link
            href={{
                pathname: "/blogs",
                query: { topic: props.topic },
            }}
        >
            <a className={`${classes.topic}`}>{props.topic}</a>
        </Link>
    );
}

export default BlogTopic;
