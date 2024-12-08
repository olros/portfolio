import { createContext, ReactElement, ReactNode, use, useState } from 'react';

import { AllProjectsTab } from './components/AllProjectsTab';
import { ExperiencesTab } from './components/ExperiencesTab';

export type TabRenderProps = {
  active: boolean;
};

export type TabItem = {
  id: string;
  label: string;
  render: (props: TabRenderProps) => ReactElement<TabRenderProps>;
  notRemovable?: boolean;
};

const ALL_PROJECTS_TAB: TabItem = { id: 'projects', label: 'Prosjekter', render: (props) => <AllProjectsTab {...props} />, notRemovable: true };
const EXPERIENCES_TAB: TabItem = { id: 'experience', label: 'Erfaring', render: (props) => <ExperiencesTab {...props} />, notRemovable: true };

type AppContextType = {
  readonly tabs: TabItem[];
  readonly visibleTab: TabItem['id'];
  readonly setVisibleTab: React.Dispatch<React.SetStateAction<TabItem['id']>>;
  readonly setTabs: React.Dispatch<React.SetStateAction<TabItem[]>>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [tabs, setTabs] = useState<TabItem[]>([ALL_PROJECTS_TAB, EXPERIENCES_TAB]);
  const [visibleTab, setVisibleTab] = useState<TabItem['id']>(ALL_PROJECTS_TAB.id);

  return <AppContext value={{ tabs, visibleTab, setVisibleTab, setTabs }}>{children}</AppContext>;
};

const useAppContext = () => {
  const context = use(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const useTabs = () => {
  const app = useAppContext();
  return app.tabs;
};

export const useVisibleTab = () => {
  const app = useAppContext();
  return { visibleTab: app.visibleTab, setVisibleTab: app.setVisibleTab };
};

export const useAddTab = () => {
  const app = useAppContext();
  return (tab: TabItem) => {
    app.setTabs((prev) => (!prev.some((t) => t.id === tab.id) ? [...prev, tab] : prev));
    app.setVisibleTab(tab.id);
  };
};

export const useRemoveTab = () => {
  const app = useAppContext();
  return (tabId: TabItem['id']) => {
    if (tabId === app.visibleTab) {
      const index = app.tabs.findIndex((tab) => tab.id === tabId);
      app.setVisibleTab(app.tabs[index - 1].id);
    }
    app.setTabs((prev) => prev.filter((tab) => tab.id !== tabId));
  };
};
