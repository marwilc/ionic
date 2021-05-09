import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { NavController } from '@ionic/angular';
import { Barcode } from '../models/barcode.model';
import { StorageService } from './storage.service';
const { Browser } = Plugins;

@Injectable({
  providedIn: 'root',
})
export class DataLocalService {
  registers: Barcode[] = [];

  constructor(
    private storage: StorageService,
    private navCtrl: NavController
  ) {}

  async saveRegister(format: string, text: string) {
    await this.loadRegisters();
    const newRegister = new Barcode(format, text);
    this.registers.unshift(newRegister);
    await this.storage.set('registers', this.registers);
    this.openRegister(newRegister);
  }

  async loadRegisters() {
    this.registers = (await this.storage.get('registers')) || [];
  }

  async openRegister(register: Barcode) {
    this.navCtrl.navigateForward('/tabs/tab2');

    switch (register.type) {
      case 'http':
        // open browser
        await Browser.open({ url: register.text });
        break;

      default:
        break;
    }
  }
}
