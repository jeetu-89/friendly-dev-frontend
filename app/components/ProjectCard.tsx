import type { Project } from "~/types";
import { Link } from "react-router";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="block transform transition hover:scale-105 active:scale-102"
    >  
      <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-sm hover:shadow-xl transition">
        <img
          className="w-full h-40 object-cover"
          src={project.image}
          alt={project.title}
        />
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-blue-300 mb-1">
            {project.title}
          </h2>
          <p className="text-sm text-gray-400">{project.description}</p>

          <div className="flex justify-between text-sm mt-1">
            <span>{project.category}</span>
            <span>{new Date(project.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
