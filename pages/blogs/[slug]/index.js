import BlogDetail from "@/components/BlogDetail/BlogDetail";
import Meta from "@/components/Meta/Meta";
import ScrollTracker from "@/components/ScrollTracker/ScrollTracker";

import { getFileData, getAllFiles } from "@/utils/blogs";
function BlogDetailPage({ blog }) {
    return (
        <>
            <Meta title={`${blog.title} - Htut Wai Phyoe`} description={blog.description} />
            <ScrollTracker />
            <BlogDetail blog={blog} />
        </>
    );
}

export async function getStaticProps(context) {
    const { slug } = context.params;
    const blog = getFileData(`${slug}.md`);

    return {
        props: {
            blog,
        },
    };
}

export async function getStaticPaths(context) {
    const allFiles = getAllFiles();
    const paths = allFiles.map((f) => ({
        params: { slug: f.replace(/\.md$/, "") },
    }));

    return {
        paths,
        fallback: false,
    };
}
export default BlogDetailPage;
