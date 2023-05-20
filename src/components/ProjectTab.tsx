import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import { Project } from '../projects';
import { FadeIn } from './FadeIn';
import { Terminal } from './Terminal';

export type ProjectTabProps = { project: Project };

export const ProjectTab = ({ project }: ProjectTabProps) => {
  const [displayImage, setDisplayImage] = useState(false);
  return (
    <Terminal>
      <TypeAnimation cursor={false} repeat={0} sequence={[project.title]} speed={60} style={{ fontSize: '2rem' }} />
      <TypeAnimation cursor={false} repeat={0} sequence={[500, `(${project.when})`]} speed={60} style={{ marginTop: '0.5rem' }} />
      <br />
      {project.github && (
        <a href={project.github} rel='noreferrer' target='_blank'>
          <TypeAnimation cursor={false} repeat={0} sequence={[700, `GitHub`]} speed={50} />
        </a>
      )}
      {project.demo && (
        <a href={project.demo} rel='noreferrer' target='_blank'>
          <TypeAnimation cursor={false} repeat={0} sequence={[700, `Demo`]} speed={50} />
        </a>
      )}
      <br />
      <TypeAnimation cursor={false} repeat={0} sequence={[700, project.description, () => setDisplayImage(true)]} speed={99} />
      <br />
      <FadeIn visible={displayImage}>
        <img alt='' className='project__img' src={project.image} />
      </FadeIn>
    </Terminal>
  );
};
