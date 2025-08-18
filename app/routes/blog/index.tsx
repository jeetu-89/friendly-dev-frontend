//Types
import type { Route } from "./+types/index";
import type { PostMeta } from "~/types";

import { Link } from "react-router";
import PostList from "~/components/PostList";
import { useState } from "react";
import Pagination from "~/components/Pagination";


export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: PostMeta[] }> {
  const url = new URL("/posts-meta.json", request.url);
  // console.log(url.href)
  const res = await fetch(url.href);
  if (!res.ok) throw new Error("Failed to fetch data");

  const data = await res.json(); 
  data.sort((a: PostMeta, b: PostMeta)=> new Date(b.date).getTime() - new Date(a.date).getTime())

  return { posts: data };
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  
  const posts = loaderData.posts;

  const totalPosts = posts.length;
  const postsPerPage = 10;
  const totalPages = Math.ceil(totalPosts/postsPerPage);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  
  const postsOnPerticularPage = posts.slice(indexOfFirst, indexOfLast);
  // console.log(posts)
  return (
    <div className="bg-gray-900 max-w-3xl mx-auto p-6 mt-10">
      
      <PostList posts={postsOnPerticularPage}/>
      <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={setCurrentPage} />
    </div>
  );
};

export default BlogPage;
