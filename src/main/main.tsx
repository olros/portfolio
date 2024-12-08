import React from 'react';
import ReactDOM from 'react-dom/client';

import { Application } from './Application';
import { AppProvider } from './ApplicationContext';
import '../index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <Application />
    </AppProvider>
  </React.StrictMode>,
);
