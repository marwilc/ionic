import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';

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

  constructor() {}
  ngAfterViewInit(): void {
    console.log(this.segment);
    this.segment.value = this.categories[0];
  }

  ngOnInit() {
    console.log(this.segment);
    //this.segment.value = this.categories[0];
  }
}
