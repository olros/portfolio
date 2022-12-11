import { ReactNode, useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

import './Application.css';
import { useRemoveTab, useTabs, useVisibleTab } from './ApplicationContext';

export const Application = () => {
  const tabs = useTabs();
  const [visibleTab, setVisibleTab] = useVisibleTab();
  const removeTab = useRemoveTab();

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
          <MountOnFirstRender key={tab.id} render={tab.id === visibleTab}>
            {tab.render}
          </MountOnFirstRender>
        ))}
      </div>
    </div>
  );
};

const MountOnFirstRender = ({ children, render }: { children: ReactNode; render: boolean }) => {
  const [shouldRender, setShouldRender] = useState(render);

  useEffect(() => {
    if (render) {
      setShouldRender(true);
    }
  }, [render]);

  return <div className={render ? '' : 'hidden'}>{shouldRender ? children : null}</div>;
};
