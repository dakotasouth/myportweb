import getPostMetadata from "../../components/getPostMetadata";
import PostPreview from "../../components/PostPreview";

const Blog = () => {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post}/>
    ));

    return (
        <div>
            <h2 className="text-5xl font-bold text-secondary font-inter pb-5">Blog</h2>
            <div>{postPreviews}</div>
        </div>
    );
  };
  
  export default Blog;