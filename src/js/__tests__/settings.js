import Settings from '../..';

describe('Settings class', () => {
  let gameSettings;

  beforeEach(() => {
    gameSettings = new Settings();
  });

  test('should initialize with default settings', () => {
    expect(gameSettings.settings).toEqual(new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]));
  });

  test('should set user preferences', () => {
    gameSettings.setUserSetting('theme', 'light');
    gameSettings.setUserSetting('music', 'rock');

    expect(gameSettings.settings).toEqual(new Map([
      ['theme', 'light'],
      ['music', 'rock'],
      ['difficulty', 'easy'],
    ]));
  });

  test('should not set invalid user preference', () => {
    gameSettings.setUserSetting('invalidSetting', 'invalidValue');

    expect(gameSettings.settings).toEqual(new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]));
  });
});
