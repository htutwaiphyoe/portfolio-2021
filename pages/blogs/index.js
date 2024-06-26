import { useRouter } from "next/router";

import Blogs from "@/components/Blogs/Blogs";
import Meta from "@/components/Meta/Meta";

import { getAllBlogs, getAllTopics } from "@/utils/blogs";

function BlogsPage(props) {
  const router = useRouter();
  const { topic } = router.query;
  function getBlogs(blogs) {
    return topic ? blogs.filter((b) => b.topics.includes(topic)) : blogs;
  }
  return (
    <>
      <Meta
        title="Blogs - Htut Wai Phyoe"
        description="Htut Wai Phyoe - Talking about developer life, software engineering and web development by writing quality sharing blogss"
      />
      <Blogs blogs={getBlogs(props.blogs)} topics={props.topics} />
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
