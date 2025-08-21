import type { Route } from "./+types/detail";
import type { Project, StrapiProject, StrapiResponse } from "~/types";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const API_URL = import.meta.env.VITE_API_URL;
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;

export function meta({}:Route.MetaArgs){
  return[
    {title: "The Friendly dev | Project"},
    {name: "description", content: "My website project portfolio"}
  ]
}

export async function loader({request, params}:Route.LoaderArgs) {

    const {id} = params;
    const res = await fetch(`${API_URL}/projects?populate=*&filters[documentId][$eq]=${id}`);
    if(!res.ok) throw new Response('Project not found', {status: 404});

    const json: StrapiResponse<StrapiProject> = await res.json();
    const item = json.data[0];

    const project: Project = {
    id: item.id,
    documentId: item.documentId,
    title: item.title,
    description: item.description,
    url: item.url,
    date: item.date,
    category: item.category,
    featured: item.featured,
    image: item.image?.url
      ? `${STRAPI_URL}${item.image.url}`
      : "/images/no-image.png",
    }
    
    return {project};

} 

// export function HydrateFallback(){
//     return <div>Loading ...</div>
// }
const ProjectDetailPage = ({loaderData}: Route.ComponentProps) => {


    const {project} = loaderData;
    // console.log(loaderData);
    return ( 
        <>
            <Link 
                to="/projects"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-500 transitiion mb-8"    
            >
                <FaArrowLeft/> Back to Projects
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <img className="w-full rounded-lg shadow-md object-cover " src={project.image} alt={project.title} />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-blue-300 mb-4">{project.title}</h1>
                    <p className="text-gray-300 mb-4">
                        {new Date(project.date).toLocaleDateString()} ⚪ {project.category}
                    </p>
                    <p className="text-gray-400 mb-4">
                        {project.description}
                    </p>
                    <a href={project.url} className="bg-blue-400 px-4 py-2 rounded hover:bg-blue-500 transition">View Live Site <span className="text-xl">→</span> </a>
                </div>
            </div>
        </>
     );
}
 
export default ProjectDetailPage;
