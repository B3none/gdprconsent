import Config from './config'
import Sidebar from './components/sidebar';

class GDPRConsent {
  constructor() {
    this.config = new Config();
    this.sidebar = new Sidebar();

    if (this.config.get().is_new) {
      console.error('New client. Do not load any proceeding scripts!');
      window.stop();
    }
  }
}

new GDPRConsent(
  new Config(),
  new Sidebar()
);