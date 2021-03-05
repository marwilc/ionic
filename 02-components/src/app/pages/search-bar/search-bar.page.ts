import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.page.html',
    styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage implements OnInit {
    albums: any[] = [];
    searchText: string;

    constructor(private _dataService: DataService) {}

    ngOnInit() {
        this._dataService.getAlbums().subscribe((data) => {
            this.albums = data;
        });
    }

    onSearchChange(event) {
        const { detail } = event;
        this.searchText = detail.value;
        console.log(event);
    }
}
