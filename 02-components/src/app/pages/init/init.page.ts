import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { IComponent } from 'src/app/interfaces/component';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-init',
    templateUrl: './init.page.html',
    styleUrls: ['./init.page.scss'],
})
export class InitPage implements OnInit {
    components: Observable<IComponent[]>;

    constructor(
        private _menu: MenuController,
        private dataService: DataService
    ) {}

    ngOnInit() {
        this.components = this.dataService.getMenuOpts();
    }
}
