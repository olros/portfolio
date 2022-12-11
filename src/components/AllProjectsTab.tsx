import { TypeAnimation } from 'react-type-animation';

import { TabItem } from '../Application';
import { Project, projects } from '../data';
import { ProjectTab } from './ProjectTab';
import { Terminal } from './Terminal';

const ProjectListItem = ({ project, index, onClick }: { onClick: () => void; project: Project; index: number }) => {
  return (
    <button onClick={onClick}>
      <TypeAnimation
        cursor={false}
        repeat={0}
        sequence={[1000 + index * 150, `${project.title} (${project.when})`]}
        speed={80}
        style={{ whiteSpace: 'break-spaces' }}
        wrapper='span'
      />
    </button>
  );
};

export const AllProjectsTab = ({ addTab }: { addTab: (tab: TabItem) => void }) => {
  return (
    <Terminal>
      <a href='https://github.com/olros' rel='noreferrer' target='_blank'>
        <TypeAnimation cursor={false} repeat={0} sequence={[700, `GitHub`]} speed={50} wrapper='span' />
      </a>
      <a href='https://www.linkedin.com/in/olaf-rosendahl/' rel='noreferrer' target='_blank'>
        <TypeAnimation cursor={false} repeat={0} sequence={[700, `LinkedIn`]} speed={50} wrapper='span' />
      </a>
      <br />
      <TypeAnimation cursor={false} repeat={0} sequence={[750, 'Klikk på et prosjekt for å lese mer:']} speed={50} wrapper='span' />
      <br />
      {projects.map((project, i) => (
        <ProjectListItem
          index={i}
          key={project.id}
          onClick={() => addTab({ id: project.id, label: project.title, render: <ProjectTab project={project} /> })}
          project={project}
        />
      ))}
    </Terminal>
  );
};
