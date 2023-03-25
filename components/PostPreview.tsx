import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div className="min-w-0 m-auto mx-auto font-inter py-5 border-2 border-primary rounded-lg p-4">
        <Link href={`/posts/${props.slug}`}>
            <h2 className="text-3xl font-bold text-primary cursor-pointer">{props.title}</h2>
        </Link>
        <p className="py-2 text-2xl text-secondary">{props.subtitle}</p>
        <p className="text-secondary">{props.date}</p>
    </div>
  );
};

export default PostPreview;