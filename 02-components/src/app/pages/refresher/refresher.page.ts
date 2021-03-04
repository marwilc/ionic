import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRefresher } from '@ionic/angular';

@Component({
    selector: 'app-refresher',
    templateUrl: './refresher.page.html',
    styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {
    @ViewChild(IonRefresher) refresher: IonRefresher;
    items: any[] = Array(20);

    constructor() {}

    ngOnInit() {}

    doRefresh() {
        const timer = setTimeout(() => {
            this.refresher.complete();
            clearTimeout(timer);
        }, 3000);
    }
}
