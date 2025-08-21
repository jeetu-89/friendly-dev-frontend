import type { Project } from "~/types";
import ProjectCard from "./ProjectCard";
import { div } from "framer-motion/client";

type FeaturedProjectsProps = {
  projects: Project[];
  count: number;
};

const FeaturedProjects = ({ projects, count = 4 }: FeaturedProjectsProps) => {
  return (
    <section>
      {projects.length > 0 && (
        <>
          <div className="text-2xl font-bold mb-6">⭐ Featured Projects</div>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default FeaturedProjects;
