import React from 'react';
import ReactDOM from 'react-dom/client';

import { Application } from './Application';
import { ApplicationContext } from './ApplicationContext';
import '../index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApplicationContext>
      <Application />
    </ApplicationContext>
  </React.StrictMode>,
);
