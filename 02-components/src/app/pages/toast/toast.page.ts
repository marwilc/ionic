import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
    selector: 'app-toast',
    templateUrl: './toast.page.html',
    styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {
    constructor(private toastController: ToastController) {}

    ngOnInit() {}

    async presentToast() {
        const toast = await this.toastController.create({
            message: 'Your settings have been saved.',
            duration: 2000,
        });
        toast.present();
    }
}
