import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-progress',
    templateUrl: './progress.page.html',
    styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
    progress: number = 0.1;
    constructor() {}

    ngOnInit() {}

    rangeChange(event) {
        const { detail } = event;
        this.progress = detail.value / 100;
    }
}
