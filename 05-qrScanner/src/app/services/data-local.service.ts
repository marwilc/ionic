import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { File } from '@ionic-native/file/ngx';
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
    private navCtrl: NavController,
    private _file: File
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
    this.sendEmail();

    switch (register.type) {
      case 'http':
        // open browser
        await Browser.open({ url: register.text });
        break;

      case 'geo':
        // open browser
        await this.navCtrl.navigateForward(`/tabs/tab2/map/${register.text}`);
        break;

      default:
        break;
    }
  }

  sendEmail() {
    const arrTemp = [];
    const titles = 'Tipo, Formato, Creado en, Texto\n';

    arrTemp.push(titles);

    this.registers.forEach((register) => {
      const line = `${register.type}, ${register.format}, ${
        register.created
      }, ${register.text.replace(',', ' ')}\n`;

      arrTemp.push(line);
    });

    this.createFile(arrTemp.join(''));
  }

  async createFile(text: string) {
    try {
      const exist = await this._file.checkFile(
        this._file.dataDirectory,
        'registers.csv'
      );

      if (exist) {
        console.log('Existe archivo ?', exist);
        this.writeFile(text);
      }
    } catch (error) {
      console.log('error', error);

      return this._file
        .createFile(this._file.dataDirectory, 'registers.csv', false)
        .then((creado) => this.writeFile(text))
        .catch((err2) => console.log('No se pudo crear el archivo', err2));
    }
  }

  writeFile(text: string) {
    this._file.writeExistingFile(
      this._file.dataDirectory,
      'registers.csv',
      text
    );
  }
}
