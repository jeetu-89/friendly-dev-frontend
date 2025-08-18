// import type { Route } from "./+types/home";
// import { Welcome } from "../welcome/welcome";
// import Hero from "~/components/Hero";
import type { Route } from "./+types/index";
import type { Project } from "~/types";    
import type { PostMeta } from "~/types";

import LatestPosts from "~/components/LatestPosts";
import FeaturedProjects from "~/components/FeaturedProjects";
import AboutPreview from "~/components/AboutPreview";

const API_URL = import.meta.env.VITE_API_URL;

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[], posts: PostMeta[] }> {

  const url = new URL("/posts-meta.json", request.url);

  const [projectsRes, postsRes] = await Promise.all([
    fetch(`${API_URL}/projects`),
    fetch(url.href)
  ])

  if(!projectsRes || !postsRes) throw new Error("Failed to fetch data!");

  const [projects, posts] = await Promise.all([
    projectsRes.json(),
    postsRes.json()
  ])
  return { projects, posts };
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly dev" },
    { name: "description", content: "This is react router project" },
  ];
}
const Home = ({loaderData}:Route.ComponentProps) => {

  const {projects, posts} = loaderData;
  // const featuredProjects = projects.filter((project)=> project.featured === true)

  return (
    <>
      <FeaturedProjects projects={projects} count={2}/>
      <LatestPosts posts={posts} limit={5} />
      <AboutPreview />
    </>
  );
};

export default Home;
