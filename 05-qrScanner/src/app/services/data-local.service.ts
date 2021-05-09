import { Injectable } from '@angular/core';
import { Barcode } from '../models/barcode.model';

@Injectable({
  providedIn: 'root',
})
export class DataLocalService {
  registers: Barcode[] = [];

  constructor() {}

  saveRegister(format: string, text: string) {
    const newRegister = new Barcode(format, text);
    this.registers.unshift(newRegister);
  }
}
