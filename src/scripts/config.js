const storageKey = 'gdprconsent';
const defaultConfig = {
  is_new: true
};

class Config {
  constructor() {
    if (localStorage.getItem(Config.getStorageKey()) === null) {
      this.set(Config.getDefaultConfig());
    }
  }

  static get getStorageKey() {
    return storageKey;
  }

  static get getDefaultConfig() {
    return defaultConfig;
  }

  /**
   * Get config object from localStorage.
   *
   * @returns {object}
   */
  get() {
    const stored = localStorage.getItem(Config.getStorageKey());
    return JSON.parse(stored);
  }

  /**
   * Overwrites the currently stored config.
   *
   * @param {object|null} newConfig
   * @return {void}
   */
  set(newConfig) {
    localStorage.setItem(Config.getStorageKey(), JSON.stringify(newConfig));
  }

  /**
   * Updates the current
   *
   * @param {object} newConfig
   * @return {void}
   */
  update(newConfig) {
    this.set({...this.get(), ...newConfig});
  }

  /**
   * Clears the config altogether
   *
   * @return {void}
   */
  clear() {
    this.set(Config.getDefaultConfig());
  }
}

export default Config;