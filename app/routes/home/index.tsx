// import type { Route } from "./+types/home";
// import { Welcome } from "../welcome/welcome";
// import Hero from "~/components/Hero";
import type { Route } from "./+types/index";
import type { Project } from "~/types";

import ProjectCard from "~/components/ProjectCard";
import FeaturedProjects from "~/components/FeaturedProjects";
import AboutPreview from "~/components/AboutPreview";

const API_URL = import.meta.env.VITE_API_URL;

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(`${API_URL}/projects`);
  const data = await res.json();
  return { projects: data };
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly dev" },
    { name: "description", content: "This is react router project" },
  ];
}
const Home = ({loaderData}:Route.ComponentProps) => {

  const {projects} = loaderData as {projects: Project[]};
  // const featuredProjects = projects.filter((project)=> project.featured === true)

  return (
    <>
      <FeaturedProjects projects={projects} count={2}/>
      <AboutPreview />
    </>
  );
};

export default Home;
