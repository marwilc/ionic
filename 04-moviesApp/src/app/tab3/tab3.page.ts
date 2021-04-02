import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Genre, Movie, MoviesByGenre } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit, OnDestroy {
  movies: Movie[] = [];
  genres: Genre[] = [];

  moviesByGenre: MoviesByGenre[] = [];

  private _subscription;

  constructor(
    private _storage: StorageService,
    private _movie: MoviesService
  ) {}

  ngOnDestroy(): void {}

  ngOnInit() {}

  ionViewWillEnter() {
    this._subscription = new Subscription();
    this.loadGenres();
  }

  ionViewDidLeave() {
    this._subscription.unsubscribe();
  }

  loadGenres() {
    this._subscription.add(
      this._movie.loadGenres().subscribe(async (resp) => {
        await this.loadFavorites();
        this.genres = resp.genres;

        this.buildMoviesByGenre(this.genres, this.movies);
      })
    );
  }

  async loadFavorites() {
    const favorites = await this._storage.get('favorites');

    if (favorites) {
      this.movies = favorites;
    }
  }

  buildMoviesByGenre(genres: Genre[], movies: Movie[]) {
    this.moviesByGenre = genres
      .map((g) => ({
        genre: g.name,
        movies: movies.filter((m) => m.genres.find((mg) => mg.id === g.id)),
      }))
      .filter((m) => m.movies.length > 0);
  }
}
