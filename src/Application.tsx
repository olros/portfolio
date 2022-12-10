import { ReactNode, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { ReactTerminal, TerminalContextProvider } from 'react-terminal';
import { TypeAnimation } from 'react-type-animation';

import { Project, projects } from './data';

import './Application.css';

type TabItem = {
  id: string;
  label: string;
  render: ReactNode;
  notRemovable?: boolean;
};

export const Application = () => {
  const [tabs, setTabs] = useState<TabItem[]>([]);

  const addTab = (tab: TabItem) => {
    setTabs((prev) => (!prev.some((t) => t.id === tab.id) ? [...prev, tab] : prev));
    setVisibleTab(tab.id);
  };
  const allProjectsTab: TabItem = { id: 'projects', label: 'Prosjekter', render: <AllProjectsTab addTab={addTab} />, notRemovable: true };

  const [visibleTab, setVisibleTab] = useState<TabItem['id']>(allProjectsTab.id);

  const removeTab = useCallback(
    (tabId: TabItem['id']) => {
      const index = tabs.findIndex((tab) => tab.id === tabId);
      setVisibleTab(tabs[index - 1].id);
      setTabs((prev) => prev.filter((tab) => tab.id !== tabId));
    },
    [setVisibleTab, tabs],
  );

  useLayoutEffect(() => {
    setTabs([allProjectsTab]);
  }, []);

  return (
    <div className='App'>
      <TypeAnimation cursor={false} repeat={0} sequence={['Olaf Rosendahl']} speed={10} wrapper='h1' />
      <div className='tab-buttons'>
        {tabs.map((tab) => (
          <button className={['tab-button', tab.id === visibleTab ? 'tab-button__active' : ''].join(' ')} key={tab.id} onClick={() => setVisibleTab(tab.id)}>
            {tab.label}
            {!tab.notRemovable && (
              <span
                className='tab-button__close'
                onClick={(e) => {
                  e.stopPropagation();
                  removeTab(tab.id);
                }}>
                X
              </span>
            )}
          </button>
        ))}
      </div>
      <div className='content'>
        {tabs.map((tab) => (
          <div className={tab.id !== visibleTab ? 'hidden' : ''} key={tab.id}>
            {tab.render}
          </div>
        ))}
      </div>
    </div>
  );
};

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

const AllProjectsTab = ({ addTab }: { addTab: (tab: TabItem) => void }) => {
  const welcomeMessage = (
    <p className='welcome'>
      <a href='https://github.com/olros' rel='noreferrer' target='_blank'>
        <TypeAnimation cursor={false} repeat={0} sequence={[700, `GitHub`]} speed={50} wrapper='span' />
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
    </p>
  );

  return <Terminal info={welcomeMessage} />;
};

const ProjectTab = ({ project }: { project: Project }) => {
  const [showImg, setShowImg] = useState(false);
  useEffect(() => {
    setTimeout(() => setShowImg(true), 1400);
  }, []);
  const information = (
    <p className='welcome'>
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
    </p>
  );

  return <Terminal info={information} />;
};

export const Terminal = ({ info }: { info: ReactNode }) => {
  const defaultCommand = (command: string, commandArguments: string) => {
    const text = `${command} ${commandArguments}`;
    if (text.includes('hjelp')) {
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
      // window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
      return 'Hihi';
    }
    if (text.includes('git')) {
      return 'Min GitHub er https://github.com/olros';
    }
    if (text.includes('hei') || text.includes('hello')) {
      return 'Hei til deg og!';
    }
    if (text.includes('?')) {
      return 'Klikk på et prosjekt for å lese mer om det, se bilder og evt link til kode/demo.';
    }
    if (text.includes('hei') || text.includes('hello')) {
      return 'Hei til deg og!';
    }

    return `Jeg studerer dessverre ikke AI og har heller ikke laget en Chat-bot á la ChatGPT, skriv "hjelp" for å se hva som er mulig.`;
  };
  return (
    <TerminalContextProvider>
      <ReactTerminal defaultHandler={defaultCommand} prompt='$' showControlBar={false} theme='material-dark' welcomeMessage={info} />
    </TerminalContextProvider>
  );
};
