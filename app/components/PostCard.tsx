import type React from "react";
import type { PostMeta } from "~/types";
import { Link } from "react-router";

const PostCard: React.FC<{ post: PostMeta }> = ({ post }) => {
  return (
    <article className="bg-gray-800 mb-4 p-6 rounded-md transform hover:-translate-0.5 transition">
      <h3 className="text-xl font-semibold text-blue-400 ">{post.title}</h3>

      <p className="text-sm text-gray-400 mb-2">
        {new Date(post.date).toLocaleDateString()}
      </p>

      <p className="text-gray-200 mb-2">{post.excerpt}</p>

      <Link
        to={`/blog/${post.slug}`}
        className="text-blue-300 hover:text-blue-400 hover:underline text-sm"
      >
        Read More
      </Link>
    </article>
  );
};

export default PostCard;
