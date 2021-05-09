import { Injectable } from '@angular/core';
import { Barcode } from '../models/barcode.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class DataLocalService {
  registers: Barcode[] = [];

  constructor(private storage: StorageService) {}

  async saveRegister(format: string, text: string) {
    await this.loadRegisters();
    const newRegister = new Barcode(format, text);
    this.registers.unshift(newRegister);
    await this.storage.set('registers', this.registers);
  }

  async loadRegisters() {
    this.registers = (await this.storage.get('registers')) || [];
  }
}
