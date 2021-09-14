import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})
export class UiService {
    constructor(public alertController: AlertController) {}

    async informAlert(message: string) {
        const alert = await this.alertController.create({
            message,
            buttons: ['OK'],
        });

        await alert.present();
    }
}
