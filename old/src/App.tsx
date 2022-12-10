import "./styles.css";
import { cloneElement } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";
import { Home } from "./pages/home";
import { ProjectPage } from "./template/Project";
import { projects } from "./data";

const App = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    ...projects.map((project) => ({
      path: `/${project.id}`,
      element: <ProjectPage project={project} />,
    })),
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <AnimatePresence mode="wait" initial={false}>
      {cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
};

export default App;
