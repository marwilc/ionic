import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit, OnDestroy {
  movies: Movie[] = [];
  popular: Movie[] = [];
  private _subscription = new Subscription();

  constructor(private _movies: MoviesService) {}

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  ngOnInit(): void {
    this._subscription.add(
      this._movies.getFeature().subscribe((data) => {
        this.movies = data.results;
      })
    );

    this.loadPopular();
  }

  loadPopular() {
    this._subscription.add(
      this._movies.getPopular().subscribe((data) => {
        this.popular = this.popular.concat(data.results);
      })
    );
  }
}
