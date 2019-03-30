import Config from 'config'
import Sidebar from 'sidebar';

class GDPRConsent {
  constructor() {
    const body = document.getElementsByName('body');
    body.append('<div id="'+ Sidebar.divId +'">');

    this.config = new Config();
    this.sidebar = new Sidebar();
  }
}

new GDPRConsent(
  new Config(),
  new Sidebar()
);