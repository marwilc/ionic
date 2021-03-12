import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Article } from '../interfaces/interfaces';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root',
})
export class LocalDataService {
  news: Article[] = [];

  constructor() {
    this.loadFavorites();
  }

  async saveNew(notice: Article) {
    const exist = this.news.find((n) => n.title === notice.title);

    if (!exist) {
      this.news.unshift(notice);
      await Storage.set({ key: 'favorites', value: JSON.stringify(this.news) });
    }
  }

  async loadFavorites() {
    const { value } = await Storage.get({ key: 'favorites' });

    if (value) {
      this.news = JSON.parse(value);
    }
  }
}
