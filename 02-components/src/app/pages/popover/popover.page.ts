import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoPage } from '../popover-info/popover-info.page';

@Component({
    selector: 'app-popover',
    templateUrl: './popover.page.html',
    styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {
    constructor(private popoverController: PopoverController) {}

    ngOnInit() {}

    async presentPopover(ev: any) {
        const popover = await this.popoverController.create({
            component: PopoverInfoPage,
            cssClass: 'my-custom-class',
            event: ev,
            translucent: true,
        });
        await popover.present();
        const { data } = await popover.onWillDismiss();

        console.log(data);
    }
}
