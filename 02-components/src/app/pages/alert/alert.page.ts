import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.page.html',
    styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
    constructor(private alertController: AlertController) {}

    ngOnInit() {}

    async showAlert() {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: 'Alert',
            subHeader: 'Subtitle',
            message: 'This is an alert message.',
            buttons: ['OK'],
        });

        await alert.present();
    }
}
