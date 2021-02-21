import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-datetime',
    templateUrl: './datetime.page.html',
    styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {
    date = new Date();
    customPickerOptions = {
        buttons: [
            {
                text: 'Save',
                handler: () => console.log('Clicked Save!'),
            },
            {
                text: 'Log',
                handler: () => {
                    console.log('Clicked Log. Do not Dismiss.');
                    return false;
                },
            },
        ],
    };
    constructor() {}

    ngOnInit() {}
}
