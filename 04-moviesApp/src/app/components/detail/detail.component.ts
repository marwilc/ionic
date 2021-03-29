import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Cast, Movie } from 'src/app/interfaces/interfaces';
import { MoviesService } from 'src/app/services/movies.service';

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

  slideOptions = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5,
  };

  private _subscription = new Subscription();

  constructor(
    private _movies: MoviesService,
    private _modal: ModalController
  ) {}

  ngOnDestroy(): void {
    this._subscription.add(this._subscription.unsubscribe());
  }

  ngOnInit() {
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
  }

  back() {
    this._modal.dismiss();
  }

  favorite() {}
}
