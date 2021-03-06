import { ConfigManager } from './config-manager';
import { Config } from './config-data';

const storageKey = 'Config';

describe('ConfigManager', () => {
  it('should return a reference to the global config data', () => {
    const firstRef = new ConfigManager().getConfig();
    const secondRef = new ConfigManager().getConfig();
    firstRef.authentication.user = `TestUser${Date.now()}`;
    expect(secondRef).toBe(firstRef);
  });

  it('should alert subscribers when the config is saved', () => {
    const manager = new ConfigManager();
    const subscriber = {
      alert: () => {},
    };
    const alertSpy = spyOn(subscriber, 'alert');
    manager.subscribe(() => {
      subscriber.alert();
    });
    manager.save();
    expect(alertSpy).toHaveBeenCalled();
  });

  it('should save data to local storage', () => {
    const manager = new ConfigManager();
    const current = localStorage.getItem(storageKey);
    try {
      const testData = manager.getConfig();
      testData.authentication.user = `TestUser${Date.now()}`;
      manager.save();
      const loadedJson = localStorage.getItem(storageKey);
      expect(loadedJson).toBeTruthy();
      const loadedData = JSON.parse(loadedJson!) as Config;
      expect(loadedData.authentication.user).toBe(testData.authentication.user);
    } finally {
      if (current) {
        localStorage.setItem(storageKey, current);
      }
    }
  });

  it('should load data from local storage', () => {
    const manager = new ConfigManager();
    const current = localStorage.getItem(storageKey);
    try {
      const testData = new Config();
      testData.authentication.user = `TestUser${Date.now()}`;
      let loadedData: Config;
      localStorage.setItem(storageKey, JSON.stringify(testData));
      manager.load();
      loadedData = manager.getConfig();
      expect(loadedData.authentication.user).toBe(testData.authentication.user);
    } finally {
      if (current) {
        localStorage.setItem(storageKey, current);
      }
    }
  });
});
