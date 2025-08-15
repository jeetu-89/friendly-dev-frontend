import type { Route } from "./+types/index";
import type { Project } from "~/types";
import ProjectCard from "~/components/ProjectCard";
import { useState } from "react";
import Pagination from "~/components/Pagination";
import { AnimatePresence, motion } from "framer-motion";

const API_URL = import.meta.env.VITE_API_URL;

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(`${API_URL}/projects`);
  const data = await res.json();

  return { projects: data };
}

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  // states
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const { projects } = loaderData as { projects: Project[] };
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  //Filter Projects based on categories
  const filterProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Page Related variables
  const projectsPerPage = 5;
  const totalProjects = filterProjects.length;
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  const endIndex = currentPage * projectsPerPage;
  const startIndex = endIndex - projectsPerPage;

  const projectsAtCurrentPage = filterProjects.slice(startIndex, endIndex);

  return (
    <>
      <h2 className="mb-8 text-3xl font-bold">Projects</h2>
      <div className="flex mb-10 gap-2">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-3 py-1 rounded ${category === selectedCategory ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-300 hover:bg-blue-500 hover:text-white transition cursor-pointer"} `}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div layout className="grid sm:grid-cols-2 gap-6">
          {projectsAtCurrentPage.map((project) => (
            <motion.div key={project.id} layout>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default ProjectsPage;
