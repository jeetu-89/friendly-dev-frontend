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
  // console.log('Hello from home')
  const now = new Date().toISOString();

  if(typeof window === 'undefined'){
    console.log('Server render at ', now)
  }
  else{
    console.log('Client render at', now);
  }
  return <>Hello</>;
};

export default Home;
