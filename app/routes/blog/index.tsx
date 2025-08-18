//Types
import type { Route } from "./+types/index";
import type { PostMeta } from "~/types";

import { Link } from "react-router";
import PostList from "~/components/PostList";
import { useState } from "react";
import Pagination from "~/components/Pagination";
import PostFilter from "~/components/PostFilter";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: PostMeta[] }> {
  const url = new URL("/posts-meta.json", request.url);
  // console.log(url.href)
  const res = await fetch(url.href);
  if (!res.ok) throw new Error("Failed to fetch data");

  const data = await res.json();
  data.sort(
    (a: PostMeta, b: PostMeta) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return { posts: data };
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const posts = loaderData.posts;

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  const totalPosts = filteredPosts.length;
  const postsPerPage = 10;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const postsOnPerticularPage = filteredPosts.slice(indexOfFirst, indexOfLast);
  // console.log(posts)
  return (
    <div className="bg-gray-900 max-w-3xl mx-auto p-6 mt-10">
      <h2 className="text-3xl font-bold mb-8">Blogs</h2>
      <PostFilter
        searchQuery={searchQuery}
        onSearchChange={(query) => {
          setSearchQuery(query);
          setCurrentPage(1);
        }}
      />
      {filteredPosts.length === 0 ? (
        <p className="text-gray-400 text-center">No posts found</p>
      ) : (
        <PostList posts={postsOnPerticularPage} />
      )}

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default BlogPage;
