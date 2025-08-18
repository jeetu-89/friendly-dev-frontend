import type { PostFilterProps } from "~/types";

const PostFilter = ({searchQuery, onSearchChange}: PostFilterProps) => {
    return ( 
        <div className="mb-6 ">
            <input 
              type="text" 
              className="bg-gray-800 w-full rounded-md px-4 py-2 border border-gray-700 focus:outline-0 focus:ring-2 focus:ring-blue-500"
              placeholder="search Posts..."
              value={searchQuery}
              onChange={(e)=>onSearchChange(e.target.value)}
            />
        </div>
     );
}
 
export default PostFilter;