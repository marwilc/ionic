import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Cast, Movie } from 'src/app/interfaces/interfaces';
import { MoviesService } from 'src/app/services/movies.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
  @Input() id: string;
  movie: Movie;
  actors: Cast[] = [];
  hidden = 150;
  favorites: Movie[] = [];

  slideOptions = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5,
  };

  existsMovie = false;
  private _subscription = new Subscription();

  constructor(
    private _movies: MoviesService,
    private _modal: ModalController,
    private _storage: StorageService,
    private _toast: ToastController
  ) {}

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  async ngOnInit() {
    this._subscription.add(
      this._movies.getMovieDetail(this.id).subscribe((movie) => {
        this.movie = movie;
      })
    );

    this._subscription.add(
      this._movies.getActors(this.id).subscribe((credits) => {
        this.actors = credits.cast;
      })
    );

    await this.loadFavorites();
    this.existsMovie = this.duplicateMovie();
  }

  async loadFavorites() {
    const favorites = await this._storage.get('favorites');

    if (favorites) {
      this.favorites = favorites;
    }
  }

  back() {
    this._modal.dismiss();
  }

  async favorite() {
    let message = '';
    if (this.movie) {
      if (!this.existsMovie) {
        this.favorites.push(this.movie);
        await this._storage.set('favorites', this.favorites);
        message = 'Added to favorites';
        this.existsMovie = true;
      } else {
        this.favorites = this.favorites.filter((m) => m.id !== this.movie.id);
        await this._storage.set('favorites', this.favorites);
        message = 'Removed from favorites';
        this.existsMovie = false;
      }

      const toast = await this._toast.create({
        message,
        duration: 3000,
        position: 'top',
      });
      await toast.present();
    }
  }

  duplicateMovie() {
    const m = this.favorites.find((m) => m.id === Number(this.id));
    return m ? true : false;
  }
}
