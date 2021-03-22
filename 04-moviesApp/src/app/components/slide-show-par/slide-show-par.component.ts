import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slide-show-par',
  templateUrl: './slide-show-par.component.html',
  styleUrls: ['./slide-show-par.component.scss'],
})
export class SlideShowParComponent implements OnInit {
  @Input() movies: Movie[] = [];

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10,
  };

  constructor() {}

  ngOnInit() {}
}
