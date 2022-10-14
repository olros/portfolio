import { motion, useIsPresent } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data";

export function Home() {
  const isPresent = useIsPresent();
  return (
    <article>
      <h1
        style={
          {
            "--base-width": "16vw",
            top: "-12vw",
            letterSpacing: "-1.2vw",
            x: "-50%",
          } as React.CSSProperties
        }
      >
        Olaf Rosendahl
      </h1>
      <ul>
        {/* <li>
          <h3>Prosjekter:</h3>
        </li> */}
        {projects.map((project) => (
          <li key={project.id}>
            <Link style={{ textAlign: 'center' }} to={`/${project.id}`}>
              <span>{project.title}</span><br/>
              <span className="when">{project.when}</span>
            </Link>
          </li>
        ))}
      </ul>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </article>
  );
}
