import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import { Project } from '../data';
import { Terminal } from './Terminal';

export const ProjectTab = ({ project }: { project: Project }) => {
  const [showImg, setShowImg] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowImg(true), 1400);
  }, []);
  return (
    <Terminal>
      <TypeAnimation cursor={false} repeat={0} sequence={[project.title]} speed={60} style={{ fontSize: '2rem' }} wrapper='span' />
      <TypeAnimation cursor={false} repeat={0} sequence={[500, `(${project.when})`]} speed={60} style={{ marginTop: '0.5rem' }} wrapper='span' />
      <br />
      {project.github && (
        <a href={project.github} rel='noreferrer' target='_blank'>
          <TypeAnimation cursor={false} repeat={0} sequence={[700, `GitHub`]} speed={50} wrapper='span' />
        </a>
      )}
      {project.demo && (
        <a href={project.demo} rel='noreferrer' target='_blank'>
          <TypeAnimation cursor={false} repeat={0} sequence={[700, `Demo`]} speed={50} wrapper='span' />
        </a>
      )}
      <br />
      <TypeAnimation cursor={false} repeat={0} sequence={[700, project.description]} speed={99} wrapper='span' />
      <br />
      <img alt='' src={`/images/${project.id}.jpg`} style={{ transition: 'opacity 0.75s', opacity: showImg ? 1 : 0 }} />
    </Terminal>
  );
};
