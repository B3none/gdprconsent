import React from 'react';
import ReactDOM from 'react-dom';
import Config from './config'
import GDPRSidebar from './components/sidebar';

new class GDPRConsent {
  constructor() {
    this.config = new Config();

    if (document.getElementById(GDPRSidebar.divId) === null) {
      let sidebar = document.createElement('div');
      sidebar.id = GDPRSidebar.divId;
      document.body.appendChild(sidebar);
    }

    const isNew = this.config.get().is_new;

    ReactDOM.render(<GDPRSidebar isNew={isNew} />, document.getElementById(GDPRSidebar.divId));

    if (isNew) {
      console.error('New client. Do not load any proceeding scripts!');
      window.stop();
    }
  }
};