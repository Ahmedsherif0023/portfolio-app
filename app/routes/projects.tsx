import type { Route } from "./+types/projects";
import Navbar from "../components/navbar/Navbar";
import Break from "../components/break/Break";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects" },
    { name: "description", content: "Explore our projects." },
  ];
}

export default function Projects() {
  return (
  <div>
        <Navbar />
      <main className="main flex-center">
        <Break />
        <h1>Projects</h1>
      </main>
  </div>
  );
}