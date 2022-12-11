import { ReactNode, useCallback, useLayoutEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import './Application.css';
import { AllProjectsTab } from './components/AllProjectsTab';

export type TabItem = {
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
