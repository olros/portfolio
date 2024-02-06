import React from 'react';
import ReactDOM from 'react-dom/client';

import '../index.css';
import './404.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <h1>404</h1>
    <p>
      Beklager, siden du leter etter finnes ikke, eller nettadressen er feil. <a href='/'>Gå til forsiden</a>.
    </p>
  </React.StrictMode>,
);
