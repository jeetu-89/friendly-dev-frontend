import type React from "react";
import type { Post } from "~/types";
import { Link } from "react-router";
import { img } from "framer-motion/client";

const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <article className="bg-gray-800 mb-4 p-6 rounded-md transform hover:-translate-0.5 transition">
      <h3 className="text-xl font-semibold text-blue-400 ">{post.title}</h3>

      <p className="text-sm text-gray-400 mb-2">
        {new Date(post.date).toDateString()}
      </p>
      {post.image && (
        <img className="w-full h-48 object-cover rounded mb-4P, StrapP, StrapP, StrapP, Strap" src={post.image} alt={post.title} />
      )}

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
