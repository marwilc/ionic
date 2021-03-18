import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieDbResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private _http: HttpClient) {}

  getFeature() {
    return this._http.get<MovieDbResponse>(
      `https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2021-01-01&primary_release_date.lte=2021-12-31&api_key=ec1c7069e212e891e1e07a28a2701ec1&language=en`
    );
  }
}
