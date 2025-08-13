// import type { Route } from "./+types/home";
// import { Welcome } from "../welcome/welcome";
// import Hero from "~/components/Hero";
import type { Route } from "./+types/index";

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
  // console.log('Hello from home')
  return(
    <>
      {/* <Hero name="Jeetu"/> */}
      HomePage
    </>
  )
};

export default Home;
