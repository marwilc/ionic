import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { IComponent } from './interfaces/component';
import { DataService } from './services/data.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
    components: Observable<IComponent[]>;

    constructor(
        private _menu: MenuController,
        private dataService: DataService
    ) {}

    ngOnInit() {
        this.components = this.dataService.getMenuOpts();
    }
}
