import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit, AfterViewInit {
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

  private _subscription = new Subscription();

  constructor(private _news: NewsService) {}

  ngAfterViewInit(): void {
    console.log(this.segment);
    this.segment.value = this.categories[0];

    this._subscription.add(
      this._news
        .getTopHeadlinesCategory(this.categories[0])
        .subscribe((resp) => {
          console.log(resp);
        })
    );
  }

  ngOnInit() {
    console.log(this.segment);
    //this.segment.value = this.categories[0];
  }
}
