import type { Route } from "./+types/index";
import type { Project } from "~/types";
import ProjectCard from "~/components/ProjectCard";

export async function loader({request}:Route.LoaderArgs): Promise<{projects: Project[]}> {
    const res = await fetch("http://localhost:8000/projects");
    const data = await res.json();

    return {projects: data}
}

const ProjectsPage = ({loaderData}: Route.ComponentProps) => {

    const {projects} = loaderData as {projects: Project[]};
    return ( 
        <>
            <h2 className="mb-8 text-3xl font-bold text-center">
                Projects
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
                {projects.map((project)=> (
                    <ProjectCard project={project} key={project.id} />
                ))}
            </div>
        </>
     );
}
  
export default ProjectsPage;