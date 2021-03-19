import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MovieDbResponse } from '../interfaces/interfaces';

const URL = environment.url;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private _http: HttpClient) {}

  private executeQuery<T>(query: string) {
    query = URL + query;
    query += `&api_key=${API_KEY}&language=en`;

    return this._http.get<T>(query);
  }

  getFeature() {
    const today = new Date();
    const lastDay = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    ).getDate();

    const month = today.getMonth() + 1;

    let monthString;

    if (month < 10) {
      monthString = '0' + month;
    } else {
      monthString = month;
    }

    const init = `${today.getUTCFullYear()}-${monthString}-01`;
    const end = `${today.getUTCFullYear()}-${monthString}-${lastDay}`;

    return this.executeQuery<MovieDbResponse>(
      `/discover/movie?primary_release_date.gte=${init}&primary_release_date.lte=${end}`
    );
  }
}
