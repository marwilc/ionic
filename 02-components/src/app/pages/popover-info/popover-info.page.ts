import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
    selector: 'app-popover-info',
    templateUrl: './popover-info.page.html',
    styleUrls: ['./popover-info.page.scss'],
})
export class PopoverInfoPage implements OnInit {
    items = Array(40);

    constructor(private _popover: PopoverController) {}

    ngOnInit() {}

    onClick(valor: number) {
        this._popover.dismiss({ valor });
    }
}
