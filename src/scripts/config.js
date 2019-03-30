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

  /**
   * Get the localStorage key.
   *
   * @return {string}
   */
  static get getStorageKey() {
    return storageKey;
  }

  /**
   * Get the default config.
   *
   * @return {object}
   */
  static get getDefaultConfig() {
    return defaultConfig;
  }

  /**
   * Get config object from localStorage.
   *
   * @returns {object}
   */
  get() {
    const stored = localStorage.getItem(Config.getStorageKey);
    return JSON.parse(stored);
  }

  /**
   * Overwrites the currently stored config.
   *
   * @param {object|null} newConfig
   * @return {void}
   */
  set(newConfig) {
    localStorage.setItem(Config.getStorageKey, JSON.stringify(newConfig));
  }

  /**
   * Updates the current config.
   *
   * @param {object} newConfig
   * @return {void}
   */
  update(newConfig) {
    this.set({...this.get(), ...newConfig});
  }

  /**
   * Sets the config back to the default.
   *
   * @return {void}
   */
  clear() {
    this.set(Config.getDefaultConfig);
  }
}

export default Config;