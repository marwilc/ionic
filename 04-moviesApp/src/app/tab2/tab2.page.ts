import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  textSearch = '';
  ideas: string[] = ['Spiderman', 'Avengers', 'El señor de los anillos'];
  constructor() {}

  onSearchChange(event) {
    console.log(event);
  }

  pasteToSearch(text: string) {
    this.textSearch = text;
  }
}
