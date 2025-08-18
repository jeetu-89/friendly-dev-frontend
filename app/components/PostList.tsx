import type React from "react";
import PostCard from "./PostCard";

import type { PostMeta } from "~/types";

const PostList: React.FC<{posts: PostMeta[] }> = ({posts}) => {

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Blogs</h2>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post}/>
      ))}
    </div>
  );
};

export default PostList;
