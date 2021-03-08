import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getTopHeadLines(): Observable<ResponseTopHeadlines> {
    return this.http.get<ResponseTopHeadlines>(
      `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${environment.apiKey}`
    );
  }
}
