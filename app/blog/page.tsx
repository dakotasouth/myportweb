import PostCard from "../components/PostCard";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import {PostPreview} from "../types";
/*
export async function getStaticProps() {
    // get all MDX files
    const postFilePaths = fs.readdirSync("posts").filter((postFilePath) => {
        return path.extname(postFilePath).toLowerCase() === ".md"
    })

    const postPreviews: PostPreview[] = []

    // read the frontmatter for each file
    for (const postFilePath of postFilePaths) {
        const postFile = fs.readFileSync(`../posts/${postFilePath}`, "utf8")

        // serialize the MDX content to a React-compatible format
        // and parse the frontmatter
        const serializedPost = await serialize(postFile, {
        parseFrontmatter: true,
        })

        postPreviews.push({
        ...serializedPost.frontmatter,
        // add the slug to the frontmatter info
        slug: postFilePath.replace(".md", ""),
        } as PostPreview)
    }

    return {
        props: {
        postPreviews: postPreviews,
        },
        // enable ISR
        revalidate: 60,
    }
}
*/
export default function Home() {
  return (
      <div>
        {
          <p>No posts yet...</p>
        }
      </div>
  )
}