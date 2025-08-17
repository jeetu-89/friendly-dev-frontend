import { Link } from "react-router";
import PostList from "~/components/PostList";

//Types
import type { Route } from "./+types/index";
import type { PostMeta } from "~/types";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: PostMeta[] }> {
  const url = new URL("/posts-meta.json", request.url);
  // console.log(url.href)
  const res = await fetch(url.href);
  if (!res.ok) throw new Error("Failed to fetch data");

  const data = await res.json();

  return { posts: data };
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
  const posts = loaderData.posts;
  // console.log(posts)
  return (
    <div className="bg-gray-900 max-w-3xl mx-auto p-6 mt-10">
      <PostList posts={posts}/>
    </div>
  );
};

export default BlogPage;
