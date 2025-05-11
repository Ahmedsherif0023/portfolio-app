import type { Route } from "./+types/projects";
import Navbar from "../components/navbar/Navbar";
import Break from "../components/break/Break";
import proj from "../../public/dev2.png";
import coffee from "../../public/coffee.png";
import Card from "../components/card/Card";
import WeatherApp from "../../public/Weather-App.png";
import ToDoApp from "../../public/Todo-List.png";
import FloatingBackground from "../components/FloatingBackground/FloatingBackground";
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Projects" },
    { name: "description", content: "Explore our projects." },
  ];
}

export default function Projects() {
  return (
    <div className="projects-page">
      <FloatingBackground />
        <Navbar />
      <div className="projects-container">
        <div className="projectss">
          <div className="left-sec">
            <h1>My Projects & code!</h1>
            <p>A Nice Project + a cup of coffee = Happiness</p>
          </div>
          <div className="right-sec">
            <img src={proj} alt="project image" />
            <img src={coffee} alt="coffee image" />
          </div>
        </div>
      </div>
      <Break />
      <div className="coding-projects">

        <div className="project-section">
          <h1 className="section-title">My Coding Projects!</h1>
          <div className="projects-grid">
            <Card
              image={WeatherApp}
              title="Weather App"
              description="A simple weather app using React and OpenWeather API."
              liveLink="https://weather-app-d7c99.web.app/"
              githubLink="https://github.com/Ahmedsherif0023/weather-app"
            />
            <Card
              image={ToDoApp}
              title="To-Do List"
              description="A productivity app to manage tasks with Firebase."
              liveLink="https://todo-list-by-shefo.vercel.app/"
              githubLink="https://github.com/Ahmedsherif0023/TodoList-By-Shefo/tree/master"
            />
            {/* Add more ProjectCard components as needed */}
          </div>
        </div>



      </div>
    </div>
  );
}