import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IComponent } from '../interfaces/component';
@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private _http: HttpClient) {}

    getUsers() {
        return this._http.get(
            'https://jsonplaceholder.typicode.com/users'
        );
    }

    getAlbums() {
        return this._http.get<any[]>(
            'https://jsonplaceholder.typicode.com/albums'
        );
    }

    getMenuOpts(): Observable<IComponent[]> {
        return this._http.get<IComponent[]>(
            '/assets/data/menu-opts.json'
        );
    }

    getHeros(): Observable<IComponent[]> {
        return this._http
            .get<IComponent[]>('/assets/data/superheroes.json')
            .pipe(delay(1500));
    }
}
