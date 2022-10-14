import { motion, useIsPresent, useScroll, useSpring } from "framer-motion";
import { Paragraph } from "./Paragraph";
import { Link } from "react-router-dom";
import { Project } from "../data";
import { useMemo } from "react";

export type ProjectPageProps = {
  project: Project;
};

export function ProjectPage({ project }: ProjectPageProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const isPresent = useIsPresent();

  const titleWidth = useMemo(() => {
    if (project.title.length < 8) {
      return 10.6;
    }
    if (project.title.length < 12) {
      return 9.6;
    }
    if (project.title.length < 16) {
      return 9.2;
    }
    if (project.title.length < 20) {
      return 8.8;
    }
    if (project.title.length < 24) {
      return 8.4;
    }
    if (project.title.length < 28) {
      return 8;
    }
    if (project.title.length < 32) {
      return 7.6;
    }
    return 7;
  }, [project]);

  return (
    <article>
      <h1
        style={
          {
            "--base-width": `${titleWidth}vw`,
            x: "-50%",
          } as React.CSSProperties
        }
      >
        {project.title}
      </h1>
      <h3>{project.when}</h3>
      <div style={{ marginTop: "10rem" }}>
        <Paragraph name="Bilde">
          <img
            src={`/images/${project.id}.jpg`}
            style={{ objectFit: "contain" }}
            alt=""
          />
        </Paragraph>
        <Paragraph name="Om">
          <p>{project.description}</p>
        </Paragraph>
        {(project.github || project.demo) && (
          <Paragraph name="Linker">
            {project.demo && (
              <a
                className="button"
                target="_blank"
                rel="noreferrer"
                href={project.demo}
              >
                Demo
              </a>
            )}
            {project.github && (
              <a
                className="button"
                target="_blank"
                rel="noreferrer"
                href={project.github}
              >
                GitHub
              </a>
            )}
          </Paragraph>
        )}
      </div>
      <motion.div className="progress" style={{ scaleX }} />
      <footer className="back">
        <Link to="/">Tilbake til prosjekter</Link>
      </footer>
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
