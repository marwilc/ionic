import { Component, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DetailComponent } from '../components/detail/detail.component';
import { Movie } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnDestroy {
  textSearch = '';
  movies: Movie[] = [];
  ideas: string[] = ['Spiderman', 'Avengers', 'El señor de los anillos'];

  searchingMovies = false;
  private _subscription = new Subscription();

  constructor(
    private _movies: MoviesService,
    private _modal: ModalController
  ) {}

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  onSearchChange(event) {
    const { detail } = event;

    if (detail.value !== '') {
      this.searchMovies(detail.value);
    } else {
      this.movies = [];
      this.textSearch = '';
    }
  }

  searchMovies(search: string) {
    this.searchingMovies = true;

    this._subscription.add(
      this._movies.searchMovies(search).subscribe(
        (res) => {
          this.movies = res.results;
          this.searchingMovies = false;
        },
        (error) => {
          this.searchingMovies = false;
        }
      )
    );
  }

  pasteToSearch(text: string) {
    this.textSearch = text;
  }

  async movieDetails(movie: Movie) {
    const movieDetail = await this._modal.create({
      component: DetailComponent,
      componentProps: {
        id: movie.id,
      },
    });

    await movieDetail.present();
  }
}
