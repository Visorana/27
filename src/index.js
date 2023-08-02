export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);

    this.userSettings = new Map();
  }

  setUserSetting(name, value) {
    if (this.defaultSettings.has(name)) {
      this.userSettings.set(name, value);
    }
  }

  get settings() {
    const combinedSettings = new Map(this.defaultSettings);
    for (const [name, value] of this.userSettings) {
      combinedSettings.set(name, value);
    }
    return combinedSettings;
  }
}
