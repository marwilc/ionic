import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  Credits,
  GenreResponse,
  Movie,
  MovieDbResponse,
} from '../interfaces/interfaces';

const URL = environment.url;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private _http: HttpClient) {}
  popularPage = 0;

  private executeQuery<T>(query: string) {
    query = URL + query;
    query += `&api_key=${API_KEY}&language=en`;

    return this._http.get<T>(query);
  }

  getPopular() {
    this.popularPage++;
    const query = `/discover/movie?sort_by=popularity.desc&page=${this.popularPage}`;

    return this.executeQuery<MovieDbResponse>(query);
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

  getMovieDetail(id: string) {
    return this.executeQuery<Movie>(`/movie/${id}?a=1`);
  }

  getActors(id: string) {
    return this.executeQuery<Credits>(`/movie/${id}/credits?a=1`);
  }

  searchMovies(search: string) {
    return this.executeQuery<MovieDbResponse>(`/search/movie?query=${search}`);
  }

  loadGenres() {
    return this.executeQuery<GenreResponse>(`/genre/movie/list?a=1`);
  }
}
