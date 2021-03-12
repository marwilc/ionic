import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { ToastController } from '@ionic/angular';
import { Article } from '../interfaces/interfaces';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root',
})
export class LocalDataService {
  news: Article[] = [];

  constructor(public toast: ToastController) {
    this.loadFavorites();
  }

  async presentToast(message: string) {
    const toast = await this.toast.create({
      message,
      duration: 1500,
    });
    toast.present();
  }

  async saveNew(notice: Article) {
    const exist = this.news.find((n) => n.title === notice.title);

    if (!exist) {
      this.news.unshift(notice);
      await Storage.set({ key: 'favorites', value: JSON.stringify(this.news) });
    }
    this.presentToast('Add to favorites');
  }

  async loadFavorites() {
    const { value } = await Storage.get({ key: 'favorites' });

    if (value) {
      this.news = JSON.parse(value);
    }
  }

  async deleteNew(notice: Article) {
    this.news = this.news.filter((n) => n.title !== notice.title);
    await Storage.set({ key: 'favorites', value: JSON.stringify(this.news) });
    this.presentToast('Delete from favorites');
  }
}
