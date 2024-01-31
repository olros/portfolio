import constate from 'constate';
import { ReactNode, useCallback, useState } from 'react';

import { AllProjectsTab } from './components/AllProjectsTab';
import { ExperiencesTab } from './components/ExperiencesTab';

export type TabItem = {
  id: string;
  label: string;
  render: ReactNode;
  notRemovable?: boolean;
};

const ALL_PROJECTS_TAB: TabItem = { id: 'projects', label: 'Prosjekter', render: <AllProjectsTab />, notRemovable: true };
const EXPERIENCES_TAB: TabItem = { id: 'experience', label: 'Erfaring', render: <ExperiencesTab />, notRemovable: true };

const useApplication = () => {
  const [tabs, setTabs] = useState<TabItem[]>([ALL_PROJECTS_TAB, EXPERIENCES_TAB]);
  const [visibleTab, setVisibleTab] = useState<TabItem['id']>(ALL_PROJECTS_TAB.id);
  const addTab = useCallback(
    (tab: TabItem) => {
      setTabs((prev) => (!prev.some((t) => t.id === tab.id) ? [...prev, tab] : prev));
      setVisibleTab(tab.id);
    },
    [tabs],
  );
  const removeTab = useCallback(
    (tabId: TabItem['id']) => {
      if (tabId === visibleTab) {
        const index = tabs.findIndex((tab) => tab.id === tabId);
        setVisibleTab(tabs[index - 1].id);
      }
      setTabs((prev) => prev.filter((tab) => tab.id !== tabId));
    },
    [setVisibleTab, tabs, visibleTab],
  );

  return { addTab, removeTab, tabs, visibleTab: [visibleTab, setVisibleTab] as const };
};

const [ApplicationContext, useAddTab, useRemoveTab, useTabs, useVisibleTab] = constate(
  useApplication,
  (value) => value.addTab,
  (value) => value.removeTab,
  (value) => value.tabs,
  (value) => value.visibleTab,
);

export { ApplicationContext, useAddTab, useRemoveTab, useTabs, useVisibleTab };
