import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import theme from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";

SyntaxHighlighter.registerLanguage("javascript", js);

import Button from "../UI/Button/Button";
import classes from "./BlogDetail.module.scss";
import BlogTopic from "../Blogs/BlogTopic/BlogTopic";

function BlogDetail({ blog }) {
    const router = useRouter();
    function onClickHandler() {
        router.back();
    }
    const components = {
        p(p) {
            const { node } = p;
            if (node.children[0].tagName === "img") {
                const image = node.children[0].properties;
                return (
                    <Image
                        src={`/images/blogs/${blog.slug}/${image.src}`}
                        alt={image.alt}
                        width={500}
                        height={300}
                        layout="responsive"
                        className={classes.blogdetail__image}
                    />
                );
            }
            return <p className={`${classes.blogdetail__p}`}>{p.children}</p>;
        },

        h1(h1) {
            return <h2 className={`${classes.blogdetail__h1}`}>{h1.children}</h2>;
        },

        h2(h2) {
            return <h2 className={`${classes.blogdetail__h2}`}>{h2.children}</h2>;
        },

        a(a) {
            return (
                <Link href={a.href}>
                    <a>{a.children}</a>
                </Link>
            );
        },

        code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");

            return !inline && match ? (
                <SyntaxHighlighter
                    style={theme}
                    language={match[1]}
                    PreTag="div"
                    children={String(children).replace(/\n$/, "")}
                    {...props}
                />
            ) : (
                <code className={className} {...props}>
                    {children}
                </code>
            );
        },
    };
    return (
        <section className={`${classes.blogdetail}`}>
            <h1 className={`${classes.blogdetail__title}`}>{blog.title}</h1>
            <div className={`${classes.blogdetail__info}`}>
                <div>
                    <span className={`${classes.blogdetail__date}`}>{blog.date}</span>
                    <span>{blog.readTime} MIN READ</span>
                </div>

                <div>
                    <BlogTopic topic={blog.topics[0]} />
                </div>
            </div>

            <Image
                src={`/images/blogs/${blog.slug}/${blog.image}`}
                alt={blog.title}
                width={500}
                height={300}
                layout="responsive"
                className={classes.blogdetail__image}
            />
            <article className={`${classes.blogdetail__content}`}>
                <ReactMarkdown components={components}>{blog.content}</ReactMarkdown>
            </article>

            <Button
                text="Back"
                icon="ri-arrow-left-line"
                type="reverse"
                onClickHandler={onClickHandler}
            />
        </section>
    );
}

export default BlogDetail;
