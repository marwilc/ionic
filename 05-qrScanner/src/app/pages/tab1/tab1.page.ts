import { Component } from '@angular/core';
import { BarcodeService } from 'src/app/services';

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

  constructor(private _barcode: BarcodeService) {}

  ionViewDidEnter() {}

  ionViewDidLeave() {}

  async scan() {
    const scanResult = await this._barcode.scan();
    console.log(scanResult);
  }
}
