import { TypeAnimation } from 'react-type-animation';

import { Project } from '../projects';
import { DelayedRender } from './DelayedRender';
import { Terminal } from './Terminal';

export type ProjectTabProps = { project: Project };

export const ProjectTab = ({ project }: ProjectTabProps) => (
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
    <DelayedRender delay={1400}>
      <img alt='' className='project__img' src={project.image} />
    </DelayedRender>
  </Terminal>
);
