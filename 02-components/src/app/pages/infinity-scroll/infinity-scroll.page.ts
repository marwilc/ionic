import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
    selector: 'app-infinity-scroll',
    templateUrl: './infinity-scroll.page.html',
    styleUrls: ['./infinity-scroll.page.scss'],
})
export class InfinityScrollPage implements OnInit {
    @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

    data: any[] = Array(20);
    constructor() {}

    ngOnInit() {}

    loadData() {
        setTimeout(() => {
            console.log('Done');
            this.infiniteScroll.complete();

            this.data = [...this.data, ...this.data];

            // App logic to determine if all data is loaded
            // and disable the infinite scroll
            if (this.data.length == 1000) {
                this.infiniteScroll.disabled = true;
            }
        }, 500);
    }
}
