// import type { Route } from "./+types/home";
// import { Welcome } from "../welcome/welcome";

import type { Route } from "./+types/home";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "New React Router App" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

// export default function Home() {
//   return <Welcome />;
// }

export function meta({}:Route.MetaArgs){
  return [
    {title: "The Friendly dev"},
    {name: "description", content: "This is react router project"}
  ]
}
const Home = () => {
  console.log('Hello from home')
  return <>Hello</>;
};

export default Home;
