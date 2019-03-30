import Config from 'config'
import Sidebar from 'sidebar';

class GDPRConsent {
  constructor() {
      this.config = new Config();
      this.sidebar = new Sidebar();
  }
}

new GDPRConsent(
  new Config(),
  new Sidebar()
);