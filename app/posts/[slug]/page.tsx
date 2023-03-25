import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../components/getPostMetadata";
import BackButton from "../../../components/BackButton";

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = folder + slug + ".md";
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <div>
            <article className="prose">
                <BackButton />
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    );
};

export default PostPage;