import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BarcodeService, DataLocalService } from 'src/app/services';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  opts = {
    allowSlidePrev: false,
    allowSlideNext: false,
  };

  constructor(
    private _barcode: BarcodeService,
    private _dataLocal: DataLocalService,
    private _platform: Platform
  ) {}

  ionViewDidEnter() {}

  ionViewDidLeave() {}

  async scan() {
    if (this._platform.is('cordova')) {
      const scanResult = await this._barcode.scan();

      if (!scanResult.cancelled) {
        this._dataLocal.saveRegister(scanResult.format, scanResult.text);
      }

      console.log(scanResult);
    } else {
      this._dataLocal.saveRegister(
        'QRCODE',
        'geo:40.73151796986687,-74.06087294062502'
      );
    }
  }
}
