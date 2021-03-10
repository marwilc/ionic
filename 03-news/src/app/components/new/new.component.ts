import { Component, Input, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Article } from 'src/app/interfaces/interfaces';

const { Browser } = Plugins;

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit {
  @Input() new: Article;
  @Input() index: number;
  constructor() {}

  ngOnInit() {}

  async showNew() {
    await Browser.open({ url: this.new.url });
  }
}
