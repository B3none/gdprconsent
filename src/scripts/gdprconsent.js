import Config from './config'
import Sidebar from './components/sidebar';

const userConfig = window.gdprconsent;

class GDPRConsent {
  constructor() {
    this.config = new Config();
    this.sidebar = new Sidebar();

    console.log(userConfig);

    if (this.config.get().is_new) {
      console.error('New client. Do not load any proceeding scripts!');
      window.stop();
    }
  }
}

new GDPRConsent();