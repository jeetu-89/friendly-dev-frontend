import type { Project } from "~/types";
import ProjectCard from "./ProjectCard";

type FeaturedProjectsProps = {
    projects: Project[];
    count: number
}

const FeaturedProjects = ({projects, count = 4}: FeaturedProjectsProps) => {

    const featuredProjects = projects.filter((project)=>project.featured).slice(0,count);
    return ( 
        <>
            <div className="text-xl font-bold mb-6">⭐ Featured Projects</div>
            <div className="grid gap-6 md:grid-cols-2">
                {featuredProjects.map((project)=>(
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </div>
        </>
     );
}
 
export default FeaturedProjects;