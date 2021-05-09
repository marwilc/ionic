import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  // JSON "set" example
  async set(key: string, value: any) {
    await Storage.set({
      key,
      value: JSON.stringify(value),
    });
  }

  // JSON "get" example
  async get(key: string) {
    const obj = await Storage.get({ key });
    const value = JSON.parse(obj.value);
    return value;
  }

  async remove(key: string) {
    await Storage.remove({ key });
  }

  async keys() {
    const { keys } = await Storage.keys();
    return keys;
  }

  async clear() {
    await Storage.clear();
  }
}
