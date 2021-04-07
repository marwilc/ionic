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
  loadingFeatureMovies = true;
  loadingPopularMovies = true;
  loadingFeatureMoviesError = false;
  loadingPopularMoviesError = false;
  private _subscription = new Subscription();

  constructor(private _movies: MoviesService) {}

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.loadFeatureMovies();
    this.loadPopular();
  }

  loadFeatureMovies() {
    this._subscription.add(
      this._movies.getFeature().subscribe(
        (data) => {
          this.movies = data.results;
          this.loadingFeatureMovies = false;
        },
        (error) => {
          this.loadingFeatureMovies = false;
          this.loadingFeatureMoviesError = true;
        }
      )
    );
  }

  loadPopular() {
    this._subscription.add(
      this._movies.getPopular().subscribe(
        (data) => {
          this.popular = this.popular.concat(data.results);
          this.loadingPopularMovies = false;
        },
        (error) => {
          this.loadingPopularMovies = false;
          this.loadingPopularMoviesError = true;
        }
      )
    );
  }
}
