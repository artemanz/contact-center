import { Link } from "react-router-dom";
import { PostPreview as PostPrviewType } from "@/data/posts";
import { placeholder } from "@/assets";

type Props = {
  post: PostPrviewType;
};

const PostPreview = ({ post }: Props) => {
  return (
    <article className="overflow-hidden border border-opacity-25 rounded-xl border-neutral-1">
      <Link to={`/blog/${post.id}`}>
        <img
          className="w-full aspect-video"
          src={post.image ? post.image : placeholder}
          alt={post.title}
        />
        <div className="px-2 py-4 md:py-8 md:px-4">
          <h3 className="font-bold md:text-xl">{post.title}</h3>
          <p className="mt-2 md:text-lg">{post.text}</p>
        </div>
      </Link>
    </article>
  );
};

export default PostPreview;
