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
            icon: 'alert-circle-outline',
            name: 'Alert',
            redirectTo: '/alert',
        },
        {
            icon: 'beaker-outline',
            name: 'Avatar',
            redirectTo: '/avatar',
        },
        {
            icon: 'radio-button-off-outline',
            name: 'Button',
            redirectTo: '/button',
        },
        {
            icon: 'card-outline',
            name: 'Card',
            redirectTo: '/card',
        },
        {
            icon: 'checkmark-circle-outline',
            name: 'Checks',
            redirectTo: '/check',
        },
        {
            icon: 'calendar-outline',
            name: 'DateTime',
            redirectTo: '/date-time',
        },
        {
            icon: 'car-outline',
            name: 'Fab',
            redirectTo: '/fab',
        },
        {
            icon: 'grid-outline',
            name: 'Grid',
            redirectTo: '/grid',
        },
        {
            icon: 'infinite-outline',
            name: 'Infinity Scroll',
            redirectTo: '/infinity-scroll',
        },
        {
            icon: 'hammer-outline',
            name: 'Input',
            redirectTo: '/input',
        },
        {
            icon: 'list-outline',
            name: 'List',
            redirectTo: '/list',
        },
    ];

    constructor() {}

    ngOnInit() {}
}
