//Types
import type { Route } from "./+types/index";
import type { Post, StrapiPost, StrapiResponse } from "~/types";

import { Link } from "react-router";
import PostList from "~/components/PostList";
import { useEffect, useRef, useState } from "react";
import Pagination from "~/components/Pagination";
import PostFilter from "~/components/PostFilter";

const API_URL = import.meta.env.VITE_API_URL;
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: Post[] }> {
  // const url = new URL("/posts-meta.json", request.url);
  // console.log(url.href)
  const res = await fetch(`${API_URL}/posts?populate=*&sort=date:desc`);
  if (!res.ok) throw new Error("Failed to fetch data");

  const json: StrapiResponse<StrapiPost> = await res.json();
  const posts: Post[] = json.data.map((item)=>({
    id: item.id,
    body: item.body,
    documentId: item.documentId,
    title: item.title,
    slug: item.slug,
    excerpt: item.excerpt,
    date: item.date,
    image: item.image?.url
     ? `${STRAPI_URL}${item.image.url}`
     : 'images/no-image.png'
  }))
  // posts.sort(
  //   (a: Post, b: Post) =>
  //     new Date(b.date).getTime() - new Date(a.date).getTime()
  // );

  return { posts: posts };
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const [posts, setPosts] = useState(loaderData.posts);
  const allPosts = useRef(loaderData.posts);

  useEffect(()=>{
    const filteredPosts: Post[] = allPosts.current.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
    );
    setPosts(filteredPosts);
    
  }, [searchQuery, allPosts])

  const totalPosts = posts.length;
  const postsPerPage = 10;
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const postsOnPerticularPage = posts.slice(indexOfFirst, indexOfLast);
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
      {posts.length === 0 ? (
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
