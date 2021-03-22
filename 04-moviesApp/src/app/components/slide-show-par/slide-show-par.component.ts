import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slide-show-par',
  templateUrl: './slide-show-par.component.html',
  styleUrls: ['./slide-show-par.component.scss'],
})
export class SlideShowParComponent implements OnInit {
  @Input() movies: Movie[] = [];
  @Output() loadMoreMovies = new EventEmitter();

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10,
  };

  constructor() {}

  ngOnInit() {}

  loadMore() {
    this.loadMoreMovies.emit();
  }
}
