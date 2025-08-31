import React from 'react';
import ReactDOM from 'react-dom/client';

import '../index.css';
import './privacy.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <h1>Nynorsk oversetter</h1>
    <h2>Privacy Policy</h2>
    <p>We value your privacy. Nynorsk oversetter is committed to protecting your personal information. Here&apos;s what you need to know:</p>
    <ul>
      <li>
        <b>Data Storage</b>: Nynorsk oversetter does not collect or store any of your personal data or translation history. However, it&apos;s important to note
        that we use the Apertium API to provide you with accurate and up-to-date information.
      </li>
      <li>
        <b>Third-Party Services</b>: The Apertium API is used to access public transportation data. Please review Apertium&apos;s privacy policy for information
        about how they handle your data.
      </li>
    </ul>

    <h2>Contact</h2>
    <p>
      If you want to contact me, contact details can be found at <a href='https://olafros.com'>olafros.com</a>.
      <br />
      <br />
      Olaf Rosendahl
    </p>
  </React.StrictMode>,
);
