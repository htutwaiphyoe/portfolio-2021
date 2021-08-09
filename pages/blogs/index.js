import Blogs from "../../components/Blogs/Blogs";
import Meta from "../../components/Meta/Meta";

function BlogsPage() {
    return (
        <>
            <Meta
                title="Blogs - Htut Wai Phyoe"
                description="Quality sharing blogs about web development especially JavaScript and MERN Stack"
            />
            <Blogs />
        </>
    );
}

export default BlogsPage;
