import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/interfaces/interfaces';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
  @Input() id: string;
  movie: Movie;

  private _subscription = new Subscription();

  constructor(private _movies: MoviesService) {}

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
      this._movies.getActors(this.id).subscribe((data) => {
        console.log(data);
      })
    );
  }
}
