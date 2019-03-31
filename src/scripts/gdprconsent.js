import Config from './config'
import ReactDOM from "react-dom";
import React from "react";
import Core from "./components/core";

new class GDPRConsent {
  constructor() {
    this.config = new Config();

    if (document.getElementById(Core.divId) === null) {
      let sidebar = document.createElement('div');
      sidebar.id = Core.divId;
      document.body.appendChild(sidebar);
    }

    const isNew = this.config.get().is_new;

    ReactDOM.render(<Core isNew={isNew} />, document.getElementById(Core.divId));

    if (isNew) {
      console.error('New client. Do not load any proceeding scripts!');
      window.stop();
    }
  }
};