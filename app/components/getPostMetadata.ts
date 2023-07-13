import matter from "gray-matter";
import { PostMetadata } from "./PostMetadata";
import fs from "fs";

const getPostMetadata = (): PostMetadata[] => {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((fn) => fn.endsWith(".md"));
    
    const posts = markdownPosts.map((fn) => {
        const fileContents = fs.readFileSync(folder + fn, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            subtitle: matterResult.data.subtitle,
            slug: fn.replace(".md", ""),
        };
    });

    return posts;
};

export default getPostMetadata;