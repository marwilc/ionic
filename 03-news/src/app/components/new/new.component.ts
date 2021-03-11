import { Component, Input, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { ActionSheetController } from '@ionic/angular';
import { Article } from 'src/app/interfaces/interfaces';

const { Browser, Share } = Plugins;

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  @Input() new: Article;
  @Input() index: number;

  constructor(private _actionSheet: ActionSheetController) {}

  ngOnInit() {}

  async showNew() {
    await Browser.open({ url: this.new.url });
  }

  async launchMenu() {
    const actionSheet = await this._actionSheet.create({
      buttons: [
        {
          text: 'Share',
          icon: 'share',
          handler: () => {
            this.share();
          },
        },
        {
          text: 'Favorites',
          icon: 'star',
          handler: () => {
            console.log('Favorites');
          },
        },
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
    let shareRet = await Share.share({
      title: this.new.title,
      text: this.new.source.name,
      url: this.new.url,
      dialogTitle: 'Share with buddies',
    });
  }
}
