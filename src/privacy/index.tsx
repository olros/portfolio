import React from 'react';
import ReactDOM from 'react-dom/client';

import '../index.css';
import './privacy.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <h1>Privacy at olafros.com</h1>
    <h2>Privacy Policy</h2>
    <p>We value your privacy. olafros.com is committed to protecting your personal information. Here&apos;s what you need to know:</p>
    <ul>
      <li>
        <b>Data Storage</b>: olafros.com does not collect or store any of your personal data.
      </li>
      <li>
        <b>Location Services</b>: Location services are optional. If you choose to enable location services, your location data will not be shared or stored by
        olafros.com.
      </li>
      <li>
        <b>Third-Party Services</b>: The Apertium API is used to for translation at vgs.olafros.com/oversett. Please review Apertium&apos;s privacy policy for
        information about how they handle your data.
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
