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
  popular: Movie[] = [];

  constructor(private _movies: MoviesService) {}

  ngOnInit(): void {
    this._movies.getFeature().subscribe((data) => {
      console.log(data);
      this.movies = data.results;
    });

    this.loadPopular();
  }

  loadPopular() {
    this._movies.getPopular().subscribe((data) => {
      console.log(data);
      this.popular = this.popular.concat(data.results);
    });
  }
}
