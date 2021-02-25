import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

    getMenuOpts(): Observable<IComponent[]> {
        return this._http.get<IComponent[]>(
            '/assets/data/menu-opts.json'
        );
    }
}
