import { Component, OnInit } from '@angular/core';
import { Movie } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  movies: Movie[] = [];
  slideOpts = {
    slidesPerView: 1.3,
    freeMode: true,
  };

  constructor(private _movies: MoviesService) {}

  ngOnInit(): void {
    this._movies.getFeature().subscribe((data) => {
      console.log(data);
      this.movies = data.results;
    });
  }
}
