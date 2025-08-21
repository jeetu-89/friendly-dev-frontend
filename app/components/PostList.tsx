import type React from "react";
import PostCard from "./PostCard";

import type { Post } from "~/types";

const PostList: React.FC<{posts: Post[] }> = ({posts}) => {

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post}/>
      ))}
    </div>
  );
};

export default PostList;
