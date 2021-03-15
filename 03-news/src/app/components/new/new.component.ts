import { Component, Input, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { ActionSheetController, Platform } from '@ionic/angular';
import { Article } from 'src/app/interfaces/interfaces';
import { LocalDataService } from 'src/app/services/local-data.service';

const { Browser, Share } = Plugins;

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  @Input() new: Article;
  @Input() index: number;
  @Input() inFavorites;

  constructor(
    private _localData: LocalDataService,
    private _actionSheet: ActionSheetController,
    private _platform: Platform
  ) {}

  ngOnInit() {}

  async showNew() {
    await Browser.open({ url: this.new.url });
  }

  async launchMenu() {
    let saveDeleteBtn;

    if (this.inFavorites) {
      saveDeleteBtn = {
        text: 'Delete Favorite',
        icon: 'trash',
        handler: () => {
          this._localData.deleteNew(this.new);
        },
      };
    } else {
      saveDeleteBtn = {
        text: 'Favorites',
        icon: 'star',
        handler: () => {
          this._localData.saveNew(this.new);
        },
      };
    }

    const actionSheet = await this._actionSheet.create({
      buttons: [
        {
          text: 'Share',
          icon: 'share',
          handler: () => {
            this.share();
          },
        },
        saveDeleteBtn,
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();
  }

  async share() {
    if (this._platform.is('capacitor')) {
      const shareRet = await Share.share({
        title: this.new.title,
        text: this.new.source.name,
        url: this.new.url,
        dialogTitle: 'Share with buddies',
      });
    } else {
      if (navigator.share) {
        navigator
          .share({
            title: this.new.title,
            text: this.new.source.name,
            url: this.new.url,
          })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
      }
    }
  }
}
