import Config from './config'
import Sidebar from './sidebar';

class GDPRConsent {
  constructor() {
    let sidebar = document.createElement('div');
    sidebar.id = Sidebar.divId;
    document.body.appendChild(sidebar);

    this.config = new Config();
    this.sidebar = new Sidebar();
  }
}

new GDPRConsent(
  new Config(),
  new Sidebar()
);