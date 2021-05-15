import { Component } from '@angular/core';
import { Barcode } from 'src/app/models/barcode.model';
import { DataLocalService } from 'src/app/services';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor(public dataLocal: DataLocalService) {}

  sendEmail() {}

  async ionViewDidEnter() {
    await this.dataLocal.loadRegisters();
  }

  openRegister(register: Barcode) {
    console.log(register);
    this.dataLocal.openRegister(register);
  }
}
