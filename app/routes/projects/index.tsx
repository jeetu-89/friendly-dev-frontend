import type { Route } from "./+types/index";
import type { Project } from "~/types";
import ProjectCard from "~/components/ProjectCard";
import { useState } from "react";
import Pagination from "~/components/Pagination";

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch("http://localhost:8000/projects");
  const data = await res.json();

  return { projects: data };
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData as { projects: Project[] };

  // states
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;
  const totalProjects = projects.length;
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  const endIndex = currentPage * projectsPerPage;
  const startIndex = endIndex - projectsPerPage;

  const projectsAtCurrentPage = projects.slice(startIndex, endIndex);

  return (
    <>
      <h2 className="mb-8 text-3xl font-bold text-center">Projects</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {projectsAtCurrentPage.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default ProjectsPage;
