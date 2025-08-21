import type { Route } from "./+types/detail";
import type { Project } from "~/types";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;
export function meta({}:Route.MetaArgs){
  return[
    {title: "The Friendly dev | Project"},
    {name: "description", content: "My website project portfolio"}
  ]
}

export async function loader({request, params}:Route.LoaderArgs) {

    const res = await fetch(`${API_URL}/projects/${params.id}`);
    if(!res.ok) throw new Response('Project not found', {status: 404});

    const project:Project = await res.json();
    return project;

} 

// export function HydrateFallback(){
//     return <div>Loading ...</div>
// }
const ProjectDetailPage = ({loaderData}: Route.ComponentProps) => {


    const project = loaderData;
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
