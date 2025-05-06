import type { Route } from "./+types/services";
import Navbar from "../components/navbar/Navbar";
import Break from "~/components/break/Break";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Services" },
    { name: "description", content: "Discover our services." },
  ];
}

export default function Services() {
  return (
    <div>
      <Navbar />
      <main className="main flex-center">
        <Break />
        <h1>Services</h1>
      </main>
    </div>
  );
}