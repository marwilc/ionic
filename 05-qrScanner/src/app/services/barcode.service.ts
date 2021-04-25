import { Injectable } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Injectable({
  providedIn: 'root',
})
export class BarcodeService extends BarcodeScanner {
  constructor() {
    super();
  }
}
