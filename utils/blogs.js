import fs from "fs";
import path from "path";
import matter from "gray-matter";

const dirPath = path.join(process.cwd(), "data", "blogs");

export function getAllFiles() {
    return fs.readdirSync(dirPath);
}

export function getFileData(filename) {
    // get file data
    const fileData = fs.readFileSync(path.join(dirPath, filename), "utf8");

    // separate file data with gray matter
    const { data, content } = matter(fileData);

    // create slug from filename
    const slug = filename.replace(/\.md$/, "");

    // return blog data
    return {
        slug,
        ...data,
        content,
    };
}

export function sortBlogs(blogs) {
    return blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
}
export function getAllBlogs() {
    const fileNames = getAllFiles();
    const blogs = sortBlogs(fileNames.map((f) => getFileData(f)));
    return blogs;
}

export function getAllTopics(blogs) {
    let topics = [];
    blogs.forEach((b) => {
        b.topics.forEach((t) => {
            if (!topics.includes(t)) {
                topics.push(t);
            }
        });
    });
    return topics;
}