import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Article } from 'src/app/interfaces/interfaces';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(IonSegment) segment: IonSegment;

  categories = [
    'business',
    'entertainment',
    'general',
    'health',
    'sciences',
    'ports',
    'technology',
  ];

  news: Article[] = [];

  private _subscription = new Subscription();

  constructor(private _news: NewsService) {}

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    console.log(this.segment);
    this.segment.value = this.categories[0];
    this.loadNews(this.categories[0]);
  }

  ngOnInit() {
    console.log(this.segment);
  }

  onChangeSegment(event) {
    const { detail } = event;
    this.news = [];
    this.loadNews(detail.value);
  }

  loadData(event) {
    this.loadNews(this.segment.value, event);
  }

  loadNews(category: string, event?) {
    this._subscription.add(
      this._news.getTopHeadlinesCategory(category).subscribe((resp) => {
        if (resp.articles.length === 0) {
          event.target.disabled = true;
          event.target.complete();
          return;
        }

        this.news.push(...resp.articles);

        if (event) {
          event.target.complete();
        }
      })
    );
  }
}
