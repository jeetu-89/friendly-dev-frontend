import ReactMarkdown from "react-markdown";
import { Link } from "react-router";

import type { Route } from "./+types/detail";
import type { Post, StrapiPost, StrapiResponse } from "~/types";
import { image } from "framer-motion/client";

const API_URL = import.meta.env.VITE_API_URL;
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;

export async function loader({
  request,
  params,
}: Route.LoaderArgs): Promise<{ post: Post }> {
  const { slug } = params;
  // const url = new URL(`/posts-meta.json`, request.url);
  // const res = await fetch(url.href);
  const res = await fetch(
    `${API_URL}/posts?populate=*&filters[slug][$eq]=${slug}`
  );
  if (!res.ok) throw new Error("Unable to fetch data!");

  const json: StrapiResponse<StrapiPost> = await res.json();

  if (!json.data.length)
    throw new Response("Post is not present at backend", { status: 404 });

  const item = json.data[0];

  const post: Post = {
    id: item.id,
    slug: item.slug,
    excerpt: item.excerpt,
    title: item.title,
    date: item.date,
    body: item.body,
    image: item.image?.url
      ? `${item.image.url}`
      : "/images/no-image.png",
  };
  // const postsMeta: Post[] = await res.json();
  // const postPost = postsMeta.find((post)=> post.slug === slug);

  // const markDown = await import(`../../posts/${slug}.md?raw`);
  // const data = markDown.default;

  return { post };
}
const BlogPostDetailPage = ({loaderData}: {loaderData: {
    post: Post
}}) => {
  const { post } = loaderData;
//   console.log(postPost, markDown);
  return (
    <div className="bg-gray-900 max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl text-blue-400 font-semibold mb-2">
        {post.title}
      </h1>
      <p className="text-sm text-gray-400 mb-6">
        {new Date(post.date).toDateString()}
      </p>
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover mb-4" />
      <div className="max-w-none mb-12 prose prose-invert">
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </div>

      <Link
        to="/blog"
        className="bg-blue-600 px-6 py-2 rounded-md hover:bg-blue-700 transition"
      >
        {" "}
        Back to Posts
      </Link>
    </div>
  );
};

export default BlogPostDetailPage;
