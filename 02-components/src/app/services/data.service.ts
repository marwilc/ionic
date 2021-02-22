import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
