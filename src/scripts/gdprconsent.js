import React from 'react';
import ReactDOM from 'react-dom';
import Storage from './storage'
import GDPRSidebar from './components/sidebar';

const storage = new Storage();

new class GDPRConsent {
  constructor() {
    if (document.getElementById(GDPRSidebar.divId) === null) {
      let sidebar = document.createElement('div');
      sidebar.id = GDPRSidebar.divId;
      document.body.appendChild(sidebar);
    }

    const isNew = storage.get().is_new;

    ReactDOM.render(<GDPRSidebar isNew={isNew} />, document.getElementById(GDPRSidebar.divId));

    if (isNew) {
      console.error('New client. Do not load any proceeding scripts!');
      window.stop();
    }
  }
};