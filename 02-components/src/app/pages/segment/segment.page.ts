import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-segment',
    templateUrl: './segment.page.html',
    styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
    superHeros: Observable<any>;
    segmentSelected: string = '';

    constructor(private _data: DataService) {}

    ngOnInit() {
        this.superHeros = this._data.getHeros();
    }

    segmentChanged(event) {
        const { detail } = event;

        this.segmentSelected =
            detail.value !== 'todos' ? detail.value : '';
        console.log(this.segmentSelected);
        console.log(event);
    }
}
