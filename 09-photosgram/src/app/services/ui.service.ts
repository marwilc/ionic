import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})
export class UiService {
    constructor(
        public alertController: AlertController,
        public toastController: ToastController
    ) {}

    async informAlert(message: string) {
        const alert = await this.alertController.create({
            message,
            buttons: ['OK'],
        });

        await alert.present();
    }

    async presentToast(message: string) {
        const toast = await this.toastController.create({
            message,
            position: 'top',
            duration: 1500,
        });
        toast.present();
    }
}
