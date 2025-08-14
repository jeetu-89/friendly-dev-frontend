import type { Route } from "./+types/index";
import type { Project } from "~/types";
import ProjectCard from "~/components/ProjectCard";
import { useState } from "react";

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

  // Functions
  const renderPagination = () => {
    return (
      <div className="flex gap-2 mt-8 justify-center">
        {Array.from({ length: totalPages }, (_, idx) => (
          <button
            key={idx + 1}
            className={`px-3 py-1 border rounded cursor-pointer hover:bg-blue-500 ${currentPage === idx + 1 ? "bg-blue-500 border-blue-600" : "border-0 text-gray-200 bg-gray-700 b transform active:scale-95"}`}
            onClick={() => setCurrentPage(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    );
  };
  return (
    <>
      <h2 className="mb-8 text-3xl font-bold text-center">Projects</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {projectsAtCurrentPage.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
      <div>{totalPages>1 && renderPagination()}</div>
    </>
  );
};

export default ProjectsPage;
