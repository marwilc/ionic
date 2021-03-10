import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/interfaces/interfaces';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit, OnDestroy {
  news: Article[] = [];

  private _subscription = new Subscription();

  constructor(private _news: NewsService) {}

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadNews();
  }

  loadData(event) {
    this.loadNews(event);
  }

  loadNews(event?) {
    this._subscription.add(
      this._news.getTopHeadLines().subscribe((response) => {
        if (response.articles.length === 0) {
          event.target.disabled = true;
          event.target.complete();
          return;
        }

        this.news.push(...response.articles);

        if (event) {
          event.target.complete();
        }
      })
    );
  }
}
