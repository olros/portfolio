import { TypeAnimation } from 'react-type-animation';

import { useAddTab } from '../ApplicationContext';
import { Project, projects } from '../projects';
import { stats } from '../stats';
import { ProjectTab } from './ProjectTab';
import { Terminal } from './Terminal';

type ProjectListItemProps = { project: Project; index: number };

const ProjectListItem = ({ project, index }: ProjectListItemProps) => {
  const addTab = useAddTab();
  const onClick = () => {
    addTab({ id: `projects-${project.id}`, label: project.title, render: <ProjectTab project={project} /> });
    stats.event(`Open project: ${project.title}`);
  };

  return (
    <button onClick={onClick}>
      <TypeAnimation
        cursor={false}
        repeat={0}
        sequence={[1000 + index * 150, `${project.title} (${project.when})`]}
        speed={80}
        style={{ whiteSpace: 'break-spaces' }}
      />
    </button>
  );
};

export const AllProjectsTab = () => {
  return (
    <Terminal>
      <a href='https://github.com/olros' rel='noreferrer' target='_blank'>
        <TypeAnimation cursor={false} repeat={0} sequence={[700, `GitHub`]} speed={50} />
      </a>
      <a href='https://www.linkedin.com/in/olaf-rosendahl/' rel='noreferrer' target='_blank'>
        <TypeAnimation cursor={false} repeat={0} sequence={[700, `LinkedIn`]} speed={50} />
      </a>
      <br />
      <TypeAnimation cursor={false} repeat={0} sequence={[750, 'Klikk på et prosjekt for å lese mer:']} speed={50} />
      <br />
      {projects.map((project, i) => (
        <ProjectListItem index={i} key={project.id} project={project} />
      ))}
    </Terminal>
  );
};
