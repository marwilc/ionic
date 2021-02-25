import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
    selector: 'app-loading',
    templateUrl: './loading.page.html',
    styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
    loading: HTMLIonLoadingElement;
    constructor(private loadingCtrl: LoadingController) {}

    ngOnInit() {}

    mostrarLoading() {
        this.presentLoading();
        setTimeout(() => {
            this.loading.dismiss();
        }, 2000);
    }

    async presentLoading() {
        this.loading = await this.loadingCtrl.create({
            message: 'Cargando',
        });

        await this.loading.present();
    }
}
