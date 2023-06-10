import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="min-w-0 p-4 py-5 m-auto mx-auto border-2 rounded-lg font-sfpro border-primary">
        <Link href={`/posts/${props.slug}`}>
            <h2 className="text-3xl font-bold cursor-pointer text-primary">{props.title}</h2>
        </Link>
        <p className="py-2 text-2xl text-secondary">{props.subtitle}</p>
        <p className="text-secondary">{props.date}</p>
    </div>
  );
};

export default PostPreview;