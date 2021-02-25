import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup } from '@ionic/angular';

@Component({
    selector: 'app-list-reorder',
    templateUrl: './list-reorder.page.html',
    styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
    @ViewChild(IonReorderGroup) reorder: IonReorderGroup;
    personajes: string[] = [
        'Aquaman',
        'Superman',
        'Batman',
        'Mujer maravilla',
        'Flash',
    ];
    constructor() {}

    ngOnInit() {}

    doReorder(event) {
        const itemMover = this.personajes.splice(
            event.detail.from,
            1
        )[0];

        this.personajes.splice(event.detail.to, 0, itemMover);

        this.reorder.complete();
    }
}
