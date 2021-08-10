import Blogs from "@/components/Blogs/Blogs";
import Meta from "@/components/Meta/Meta";

import { getAllBlogs, getAllTopics } from "@/utils/blogs";

function BlogsPage(props) {
    return (
        <>
            <Meta
                title="Blogs - Htut Wai Phyoe"
                description="Quality sharing blogs about web development especially JavaScript and MERN Stack"
            />
            <Blogs blogs={props.blogs} topics={props.topics} />
        </>
    );
}

export async function getStaticProps(context) {
    const blogs = getAllBlogs();
    const topics = getAllTopics(blogs);
    return {
        props: {
            blogs,
            topics,
        },
    };
}

export default BlogsPage;
