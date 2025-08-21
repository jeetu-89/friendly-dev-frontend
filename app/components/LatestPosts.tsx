import type { Post } from "~/types";

import { Link } from "react-router";

const LatestPosts = ({
  posts,
  limit = 3,
}: {
  posts: Post[];
  limit: number;
}) => {
  const sortedPosts = posts.sort(
    (a: Post, b: Post) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  const latestPosts = posts.slice(0, limit);
  return (
    <section className="mt-10">
      <h1 className="text-2xl font-bold mb-6">Latest Posts</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {latestPosts.map((post) => (
          <Link
            to={`/blog/${post.slug}`}
            className="bg-gray-800 p-4 rounded-md transform transition hover:scale-105 active:scale-102 "
            key={post.slug}
          >
            <h3 className="text-blue-300 font-semibold mb-2">{post.title}</h3>
            <p className="text-sm text-gray-300">{post.excerpt}</p>
            <p className="text-xs my-2 text-gray-400">
              {new Date(post.date).toDateString()}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;
