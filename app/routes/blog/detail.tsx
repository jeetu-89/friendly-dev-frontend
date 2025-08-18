import ReactMarkdown from "react-markdown"
import { Link } from "react-router";

import type { Route } from "./+types/detail";
import type { PostMeta } from "~/types";
import type { BlogPageDetailPageProps } from "~/types";

export async function loader({request, params}:Route.LoaderArgs): Promise<BlogPageDetailPageProps> {
    
    const {slug} = params;
    const url = new URL(`/posts-meta.json`, request.url);
    const res = await fetch(url.href);
    if(!res.ok) throw new Error('Unable to fetch data!');

    const postsMeta: PostMeta[] = await res.json();
    const postMeta = postsMeta.find((post)=> post.slug === slug);
    if(!postMeta) throw new Response('Post is not present at backend', {status: 404});

    const markDown = await import(`../../posts/${slug}.md?raw`);
    const data = markDown.default;

    return {
        postMeta,
        markDown: data
    }
}
const BlogPostDetailPage = ({loaderData}:{loaderData: BlogPageDetailPageProps}) => {
    
    const {postMeta, markDown} = loaderData;
    console.log(postMeta, markDown);
    return ( 
    <div className="bg-gray-900 max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl text-blue-400 font-semibold mb-2">{postMeta.title}</h1>
        <p className="text-sm text-gray-400 mb-6">{new Date(postMeta.date).toDateString()}</p>

        <div className="max-w-none mb-12 prose prose-invert">
        <ReactMarkdown >{markDown}</ReactMarkdown>

        </div>

         <Link to="/blog" className="bg-blue-600 px-6 py-2 rounded-md hover:bg-blue-700 transition"> Back to Posts</Link>
    </div> );
}
 
export default BlogPostDetailPage;