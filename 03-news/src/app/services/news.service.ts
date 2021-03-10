import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseTopHeadlines } from '../interfaces/interfaces';

const headers = new HttpHeaders({ 'X-Api-key': environment.apiKey });
@Injectable({
  providedIn: 'root',
})
export class NewsService {
  headLinesPage = 0;
  currentCategory = '';
  pageCategory = 0;
  constructor(private http: HttpClient) {}

  private executeQuery<T>(query: string): Observable<T> {
    query = environment.apiUrl + query;
    return this.http.get<T>(query, { headers });
  }

  /**
   * get top headlines
   *
   * @return {*}  {Observable<ResponseTopHeadlines>}
   * @memberof NewsService
   */
  getTopHeadLines(): Observable<ResponseTopHeadlines> {
    this.headLinesPage++;
    return this.executeQuery<ResponseTopHeadlines>(
      `/top-headlines?country=us&page=${this.headLinesPage}`
    );
  }

  /**
   * get top headlines with categorie
   *
   * @param {string} category
   * @return {*}  {Observable<ResponseTopHeadlines>}
   * @memberof NewsService
   */
  getTopHeadlinesCategory(category: string): Observable<ResponseTopHeadlines> {
    if (this.currentCategory === category) {
      this.pageCategory++;
    } else {
      this.pageCategory = 1;
      this.currentCategory = category;
    }

    return this.executeQuery<ResponseTopHeadlines>(
      `/top-headlines?country=us&category=${category}&page=${this.pageCategory}`
    );
  }
}
