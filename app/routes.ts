import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // Default route for "/"
  route("projects", "routes/projects.tsx"), // Custom path for "/projects"
  route("services", "routes/services.tsx"), // Custom path for "/services"
] satisfies RouteConfig;