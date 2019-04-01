const storageKey = 'gdprconsent';
const defaultConfig = {
  is_new: true
};

class Storage {
  /**
   * Get the localStorage key.
   *
   * @return {string}
   */
  static get storageKey() {
    return storageKey;
  }

  /**
   * Get the default config.
   *
   * @return {object}
   */
  static get defaultConfig() {
    return defaultConfig;
  }

  /**
   * Get config object from localStorage.
   *
   * @returns {object}
   */
  static get() {
    let stored = localStorage.getItem(storageKey);
    stored = JSON.parse(stored);
    return stored === null ? defaultConfig : stored;
  }

  /**
   * Overwrites the currently stored config.
   *
   * @param {object|null} newConfig
   * @return {void}
   */
  static set(newConfig) {
    localStorage.setItem(storageKey, JSON.stringify(newConfig));
  }

  /**
   * Updates the current config.
   *
   * @param {object} newConfig
   * @return {void}
   */
  static update(newConfig) {
    this.set({...this.get(), ...newConfig});
  }

  /**
   * Sets the config back to the default.
   *
   * @return {void}
   */
  static clear() {
    this.set(defaultConfig);
  }
}

export default Storage;