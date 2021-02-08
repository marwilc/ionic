import { Component, OnInit } from '@angular/core';

interface IComponent {
    icon: string;
    name: string;
    redirectTo: string;
}

@Component({
    selector: 'app-init',
    templateUrl: './init.page.html',
    styleUrls: ['./init.page.scss'],
})
export class InitPage implements OnInit {
    components: IComponent[] = [
        {
            icon: 'american-football-outline',
            name: 'Action Sheet',
            redirectTo: '/action-sheet',
        },
        {
            icon: 'logo-apple-appstore',
            name: 'Alert',
            redirectTo: '/alert',
        },
    ];

    constructor() {}

    ngOnInit() {}
}
